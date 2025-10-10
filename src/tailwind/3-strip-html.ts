#!/usr/bin/env node
/**
 * Script to strip all unnecessary attributes from HTML files
 * Removes: <script> tags, style attributes, class attributes, id attributes, data-* attributes
 * Keeps only the semantic HTML structure
 */

import fs from "fs/promises";
import { glob } from "glob";
import { JSDOM } from "jsdom";
import path from "path";

const TAILWIND_DIR = path.resolve(process.cwd(), "docs/tailwindcss.com");
const CLEAN_HTML_DIR = path.join(TAILWIND_DIR, "cleanHtml");

interface StripStats {
	filesProcessed: number;
	scriptsRemoved: number;
	attributesRemoved: number;
}

const stats: StripStats = {
	filesProcessed: 0,
	scriptsRemoved: 0,
	attributesRemoved: 0,
};

function stripElement(element: Element): void {
	// Remove all attributes except href, src, alt, title (keep semantic ones)
	const attributesToKeep = ["href", "src", "alt", "title"];
	const attributesToRemove: string[] = [];

	for (let i = 0; i < element.attributes.length; i++) {
		const attr = element.attributes[i];
		if (attr && !attributesToKeep.includes(attr.name)) {
			attributesToRemove.push(attr.name);
			stats.attributesRemoved++;
		}
	}

	attributesToRemove.forEach((attr) => element.removeAttribute(attr));

	// Recursively process children
	Array.from(element.children).forEach((child) => stripElement(child));
}

async function stripHtmlFile(filePath: string): Promise<void> {
	try {
		const html = await fs.readFile(filePath, "utf-8");
		const dom = new JSDOM(html);
		const document = dom.window.document;

		// Remove all <script> tags
		const scripts = document.querySelectorAll("script");
		scripts.forEach((script) => {
			script.remove();
			stats.scriptsRemoved++;
		});

		// Remove all <style> tags
		const styles = document.querySelectorAll("style");
		styles.forEach((style) => {
			style.remove();
		});

		// Remove <noscript> tags
		const noscripts = document.querySelectorAll("noscript");
		noscripts.forEach((noscript) => {
			noscript.remove();
		});

		// Strip attributes from all elements
		if (document.body) {
			stripElement(document.body);
		}
		if (document.head) {
			stripElement(document.head);
		}

		// Write the cleaned HTML back
		const cleanedHtml = dom.serialize();
		await fs.writeFile(filePath, cleanedHtml);

		stats.filesProcessed++;
		console.log(`✓ Stripped: ${path.relative(CLEAN_HTML_DIR, filePath)}`);
	} catch (error) {
		console.error(`✗ Error processing ${filePath}:`, error);
	}
}

async function main() {
	console.log("🚀 Starting HTML cleanup...\n");
	console.log(`Working directory: ${CLEAN_HTML_DIR}\n`);

	try {
		// Check if cleanHtml directory exists
		try {
			await fs.access(CLEAN_HTML_DIR);
		} catch {
			console.error(`❌ Directory not found: ${CLEAN_HTML_DIR}`);
			console.error(
				"Please run the build script first (2-build-clean-html.ts)"
			);
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

		// Process each HTML file
		console.log("🧹 Cleaning HTML files...\n");
		for (const file of htmlFiles) {
			await stripHtmlFile(file);
		}

		console.log("\n✅ HTML cleanup completed successfully!");
		console.log(`\nStatistics:`);
		console.log(`  Files processed: ${stats.filesProcessed}`);
		console.log(`  Scripts removed: ${stats.scriptsRemoved}`);
		console.log(`  Attributes removed: ${stats.attributesRemoved}`);
	} catch (error) {
		console.error("\n❌ Error during HTML cleanup:", error);
		process.exit(1);
	}
}

main();
