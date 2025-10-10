#!/usr/bin/env node
/**
 * Main orchestration script that runs all steps in sequence
 * 1. Patch components
 * 2. Build to clean HTML
 * 3. Strip HTML attributes
 * 4. Convert to Markdown
 * 5. Restore original components
 */

import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory where this script is located
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SCRIPTS_DIR = __dirname;
const PROJECT_ROOT = path.resolve(__dirname, "../..");

function runScript(scriptName: string): Promise<void> {
	return new Promise((resolve, reject) => {
		console.log(`\n${"=".repeat(60)}`);
		console.log(`Running: ${scriptName}`);
		console.log("=".repeat(60));

		const scriptPath = path.join(SCRIPTS_DIR, scriptName);
		const childProcess = spawn("node", [scriptPath], {
			stdio: "inherit",
			shell: true,
			cwd: PROJECT_ROOT, // Run scripts from project root
		});

		childProcess.on("close", (code) => {
			if (code === 0) {
				resolve();
			} else {
				reject(
					new Error(`Script ${scriptName} exited with code ${code}`)
				);
			}
		});

		childProcess.on("error", (error) => {
			reject(error);
		});
	});
}

async function main() {
	console.log("🚀 Starting full pipeline...\n");
	console.log("This will:");
	console.log("  1. Patch React components");
	console.log("  2. Build site to static HTML");
	console.log("  3. Strip HTML attributes");
	console.log("  4. Convert HTML to Markdown\n");
	console.log(
		"After completion, restore with: cd docs/tailwindcss.com && git checkout src/\n"
	);

	const startTime = Date.now();

	try {
		await runScript("1-patch-components.ts");
		await runScript("2-build-clean-html.ts");
		await runScript("3-strip-html.ts");
		await runScript("4-html-to-markdown.ts");

		const duration = ((Date.now() - startTime) / 1000).toFixed(2);
		console.log("\n" + "=".repeat(60));
		console.log("✅ Full pipeline completed successfully!");
		console.log(`   Total time: ${duration}s`);
		console.log("=".repeat(60));
		console.log(
			"\nMarkdown files are available in: src/tailwind/markdown/"
		);
		console.log("\nTo restore original files:");
		console.log("  cd docs/tailwindcss.com && git checkout src/");
	} catch (error) {
		console.error("\n❌ Pipeline failed:", error);
		console.error("\nTo restore original files:");
		console.error("  cd docs/tailwindcss.com && git checkout src/");
		process.exit(1);
	}
}

main();
