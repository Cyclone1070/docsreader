#!/usr/bin/env node
/**
 * Script to build the Next.js site to static HTML with custom output directory
 * This will run the existing pnpm build process for the tailwindcss.com site
 */

import { spawn } from "child_process";
import fs from "fs/promises";
import path from "path";

const TAILWIND_DIR = path.resolve(process.cwd(), "docs/tailwindcss.com");
const OUTPUT_DIR = path.join(TAILWIND_DIR, "cleanHtml");

async function patchNextConfig(): Promise<void> {
  const nextConfigPath = path.join(TAILWIND_DIR, 'next.config.ts');
  const content = await fs.readFile(nextConfigPath, 'utf-8');
  
  // Add output: 'export' to the config if not present
  if (content.includes("output:")) {
    console.log('✓ Next.js config already has output setting');
    return;
  }
  
  // Save backup
  await fs.writeFile(nextConfigPath + '.backup', content);
  
  // Add output: 'export', distDir, and disable eslint/typescript checking
  const modifiedContent = content.replace(
    'const nextConfig = {',
    `const nextConfig = {
  output: 'export',
  distDir: 'cleanHtml',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable static page generation errors
  staticPageGenerationTimeout: 1000,`
  );
  
  await fs.writeFile(nextConfigPath, modifiedContent);
  console.log('✓ Temporarily modified next.config.ts for static export');
}

async function restoreNextConfig(): Promise<void> {
	const nextConfigPath = path.join(TAILWIND_DIR, "next.config.ts");
	const backupPath = nextConfigPath + ".backup";

	try {
		await fs.access(backupPath);
		const backup = await fs.readFile(backupPath, "utf-8");
		await fs.writeFile(nextConfigPath, backup);
		await fs.unlink(backupPath);
		console.log("✓ Restored original next.config.ts");
	} catch {
		// No backup to restore
	}
}

async function cleanOutputDir(): Promise<void> {
	console.log(`\n🧹 Cleaning output directory: ${OUTPUT_DIR}`);
	try {
		await fs.rm(OUTPUT_DIR, { recursive: true, force: true });
		console.log("✓ Output directory cleaned");
	} catch (error) {
		// Ignore if directory doesn't exist
		console.log("✓ Output directory ready");
	}
}

function runBuild(): Promise<void> {
	return new Promise((resolve, reject) => {
		console.log("\n🏗️  Starting Next.js build...");
		console.log(`Working directory: ${TAILWIND_DIR}\n`);

		const buildProcess = spawn("pnpm", ["build"], {
			cwd: TAILWIND_DIR,
			stdio: "pipe",
			shell: true,
		});

		let stdout = "";
		let stderr = "";

		buildProcess.stdout?.on("data", (data) => {
			const output = data.toString();
			stdout += output;
			process.stdout.write(output);
		});

		buildProcess.stderr?.on("data", (data) => {
			const output = data.toString();
			stderr += output;
			process.stderr.write(output);
		});

		buildProcess.on("close", (code) => {
			if (code === 0) {
				resolve();
			} else {
				console.error("\n\n========== FULL ERROR OUTPUT ==========");
				console.error("STDOUT:", stdout);
				console.error("STDERR:", stderr);
				console.error("=======================================\n");
				reject(new Error(`Build process exited with code ${code}`));
			}
		});

		buildProcess.on("error", (error) => {
			reject(error);
		});
	});
}

async function moveOutputToCleanHtml(): Promise<void> {
	console.log("\n📦 Checking build output...");

	// Since we set distDir to 'cleanHtml', it should already be in the right place
	try {
		await fs.access(OUTPUT_DIR);
		const files = await fs.readdir(OUTPUT_DIR);
		console.log(`✓ Found ${files.length} items in cleanHtml directory`);
	} catch (error) {
		console.log(
			'⚠️  cleanHtml directory not found, checking for "out" directory...'
		);

		const outDir = path.join(TAILWIND_DIR, "out");
		try {
			await fs.access(outDir);
			await fs.rename(outDir, OUTPUT_DIR);
			console.log(`✓ Moved ${outDir} to ${OUTPUT_DIR}`);
		} catch {
			throw new Error(
				"Build did not produce output in expected location"
			);
		}
	}
}

async function main() {
	console.log("🚀 Starting Next.js build process...\n");

	try {
		await patchNextConfig();
		await cleanOutputDir();
		await runBuild();
		await moveOutputToCleanHtml();
		await restoreNextConfig();

		console.log("\n✅ Build completed successfully!");
		console.log(`\nStatic HTML files are available in: ${OUTPUT_DIR}`);
	} catch (error) {
		console.error("\n❌ Build failed:", error);

		// Attempt to restore config
		await restoreNextConfig();

		console.error(
			"\nNote: If this is an ESLint error, you may need to temporarily disable ESLint"
		);
		console.error("or fix the errors in the source files.");
		process.exit(1);
	}
}

main();
