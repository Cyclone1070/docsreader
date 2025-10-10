#!/usr/bin/env node
/**
 * Script to convert cleaned HTML files to Markdown using unified
 * Uses rehype-parse to parse HTML and remark-stringify to output Markdown
 */

import fs from "fs/promises";
import { glob } from "glob";
import path from "path";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import { fileURLToPath } from "url";

// Get the directory where this script is located
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "../..");
const TAILWIND_DIR = path.resolve(PROJECT_ROOT, "docs/tailwindcss.com");
const CLEAN_HTML_DIR = path.join(TAILWIND_DIR, "cleanHtml");
const OUTPUT_DIR = path.resolve(PROJECT_ROOT, "src/tailwind/markdown");

// Root-level directories to skip completely (not subdirectories!)
const SKIP_ROOT_DIRS = ["installation", "course", "build-uis-that-dont-suck"];

// Root-level files to skip (except index.html)
const SKIP_ROOT_FILES = [
	"404.html",
	"blog.html",
	"brand.html",
	"showcase.html",
	"sponsor.html",
	"course.html",
	"build-uis-that-dont-suck.html",
];

interface ConversionStats {
	filesProcessed: number;
	errors: number;
}

const stats: ConversionStats = {
	filesProcessed: 0,
	errors: 0,
};

async function convertHtmlToMarkdown(htmlPath: string): Promise<void> {
	try {
		// Get relative path for filtering
		const relativePath = path.relative(CLEAN_HTML_DIR, htmlPath);

		// Skip root-level directories only (not subdirectories like docs/installation)
		const pathParts = relativePath.split(path.sep);
		const firstDir = pathParts[0]; // Get the first directory in the path

		// Only skip if the FIRST directory is in our skip list (e.g., "installation/..." but not "docs/installation/...")
		if (
			firstDir &&
			pathParts.length > 1 &&
			SKIP_ROOT_DIRS.includes(firstDir)
		) {
			console.log(
				`⊘ Skipped (in excluded root directory): ${relativePath}`
			);
			return;
		}

		// Skip unwanted root-level files
		if (
			!relativePath.includes(path.sep) &&
			SKIP_ROOT_FILES.includes(path.basename(htmlPath))
		) {
			console.log(`⊘ Skipped (root-level file): ${relativePath}`);
			return;
		}

		const html = await fs.readFile(htmlPath, "utf-8");

		// Use unified to convert HTML to Markdown
		const file = await unified()
			.use(rehypeParse, { fragment: false })
			.use(rehypeRemark)
			.use(remarkGfm) // Add GFM support for tables, strikethrough, etc.
			.use(remarkStringify, {
				bullet: "-",
				fence: "`",
				fences: true,
				incrementListMarker: false,
			})
			.process(html);

		const markdown = String(file);

		// Determine output path (relativePath already defined above)
		const mdPath = path.join(
			OUTPUT_DIR,
			relativePath.replace(/\.html$/, ".md")
		);

		// Create directory if it doesn't exist
		await fs.mkdir(path.dirname(mdPath), { recursive: true });

		// Write markdown file
		await fs.writeFile(mdPath, markdown);

		stats.filesProcessed++;
		console.log(
			`✓ Converted: ${relativePath} → ${path.relative(
				OUTPUT_DIR,
				mdPath
			)}`
		);
	} catch (error) {
		stats.errors++;
		console.error(`✗ Error converting ${htmlPath}:`, error);
	}
}

async function main() {
	console.log("🚀 Starting HTML to Markdown conversion...\n");
	console.log(`Input directory: ${CLEAN_HTML_DIR}`);
	console.log(`Output directory: ${OUTPUT_DIR}\n`);

	try {
		// Check if cleanHtml directory exists
		try {
			await fs.access(CLEAN_HTML_DIR);
		} catch {
			console.error(`❌ Directory not found: ${CLEAN_HTML_DIR}`);
			console.error("Please run the build and strip scripts first");
			process.exit(1);
		}

		// Find all HTML files
		console.log("📁 Finding HTML files...\n");
		const htmlFiles = await glob("**/*.html", {
			cwd: CLEAN_HTML_DIR,
			absolute: true,
		});

		if (htmlFiles.length === 0) {
			console.warn("⚠️  No HTML files found in cleanHtml directory");
			process.exit(0);
		}

		console.log(`Found ${htmlFiles.length} HTML files\n`);

		// Convert each HTML file to Markdown
		console.log("📝 Converting HTML to Markdown...\n");
		for (const file of htmlFiles) {
			await convertHtmlToMarkdown(file);
		}

		console.log("\n✅ Conversion completed successfully!");
		console.log(`\nStatistics:`);
		console.log(`  Files processed: ${stats.filesProcessed}`);
		console.log(`  Errors: ${stats.errors}`);
		console.log(`\nMarkdown files are available in: ${OUTPUT_DIR}`);
	} catch (error) {
		console.error("\n❌ Error during conversion:", error);
		process.exit(1);
	}
}

main();
