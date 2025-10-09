import { readdirSync, readFileSync, existsSync, statSync } from "fs";
import { join, sep, dirname, relative } from "path";

const ROOT_DIR = process.cwd();
const COMPONENTS_DIR = join(ROOT_DIR, "docs/tailwindcss.com/src/components");
const SRC_DIR = join(ROOT_DIR, "docs/tailwindcss.com/src");

// Define known path aliases based on common Next.js/TS configurations
const ALIASES = {
	"@/": SRC_DIR + sep, // Assuming '@/...' maps to 'docs/tailwindcss.com/src/...'
};

// Extensions to consider for import resolution
const EXTENSIONS = [".tsx", ".ts", ".jsx", ".js", ".mdx"];

/**
 * Recursively find all files with a given extension in a directory.
 * @param {string} dir - The directory to search.
 * @param {string[]} extensions - The file extensions.
 * @returns {string[]} - An array of absolute file paths.
 */
function findFiles(dir, extensions) {
	let files = [];
	try {
		const entries = readdirSync(dir, { withFileTypes: true });
		for (const entry of entries) {
			const fullPath = join(dir, entry.name);
			if (entry.isDirectory()) {
				if (entry.name === "node_modules" || entry.name.startsWith("."))
					continue;
				files = files.concat(findFiles(fullPath, extensions));
			} else if (
				entry.isFile() &&
				extensions.some((ext) => entry.name.endsWith(ext))
			) {
				files.push(fullPath);
			}
		}
	} catch (error) {
		// Ignore errors
	}
	return files;
}

/**
 * Extracts imported module paths from a file using regex.
 * @param {string} filePath - The path to the file.
 * @returns {string[]} - An array of imported module paths (e.g., './foo', 'react').
 */
function extractImports(filePath) {
	const content = readFileSync(filePath, "utf8");
	const imports = [];

	// Regex to capture module paths in import statements:
	// import ... from 'module-path'
	// import('module-path')
	const importRegex =
		/import\s+(?:.*?)\s+from\s+['"]([^'"]+)['"]|import\s*\(['"]([^'"]+)['"]\)/g;
	let match;

	while ((match = importRegex.exec(content)) !== null) {
		// Group 1 is for static imports, Group 2 is for dynamic imports
		const modulePath = match[1] || match[2];
		if (modulePath) {
			imports.push(modulePath);
		}
	}
	return imports;
}

/**
 * Resolves an imported module path to an absolute file path.
 * Handles relative paths and known aliases.
 * @param {string} importerPath - The path of the file containing the import.
 * @param {string} importedModule - The module path from the import statement.
 * @returns {string | null} - The absolute path to the file, or null if not found.
 */
function resolveImportPath(importerPath, importedModule) {
	let resolvedPath = null;

	// 1. Handle Aliases (e.g., '@/components/foo')
	for (const alias in ALIASES) {
		if (importedModule.startsWith(alias)) {
			const aliasTarget = ALIASES[alias];
			const relativeModulePath = importedModule.substring(alias.length);
			resolvedPath = join(aliasTarget, relativeModulePath);
			break;
		}
	}

	// 2. Handle Relative Paths (e.g., './foo' or '../bar')
	if (!resolvedPath && importedModule.startsWith(".")) {
		const dir = dirname(importerPath);
		resolvedPath = join(dir, importedModule);
	}

	if (!resolvedPath) {
		// Ignore non-relative/non-alias imports (e.g., 'react', 'next/link')
		return null;
	}

	// 3. Check for file existence with and without extensions
	// Check if the path is a file with an extension
	if (existsSync(resolvedPath) && statSync(resolvedPath).isFile()) {
		return resolvedPath;
	}

	// Check if the path is a file without an extension
	for (const ext of EXTENSIONS) {
		const fileWithExt = resolvedPath + ext;
		if (existsSync(fileWithExt) && statSync(fileWithExt).isFile()) {
			return fileWithExt;
		}
	}

	// Check if the path is a directory (index file)
	for (const ext of EXTENSIONS) {
		const indexFile = join(resolvedPath, `index${ext}`);
		if (existsSync(indexFile) && statSync(indexFile).isFile()) {
			return indexFile;
		}
	}

	return null;
}

/**
 * Recursively traverses the dependency graph starting from entry points.
 * @param {string[]} entryPoints - Initial files to start the traversal (e.g., all MDX files).
 * @returns {Set<string>} - Set of all used component file paths.
 */
function buildUsageGraph(entryPoints) {
	const usedFiles = new Set();
	const queue = [...entryPoints];

	while (queue.length > 0) {
		const currentFile = queue.shift();

		if (usedFiles.has(currentFile)) {
			continue;
		}

		// Mark as used even if it's not a component file (e.g., MDX or layout) to prevent re-processing
		usedFiles.add(currentFile);

		try {
			const imports = extractImports(currentFile);
			for (const importedModule of imports) {
				const resolvedPath = resolveImportPath(
					currentFile,
					importedModule,
				);

				if (resolvedPath && !usedFiles.has(resolvedPath)) {
					// Only follow imports within the project's source directory
					if (resolvedPath.startsWith(SRC_DIR)) {
						queue.push(resolvedPath);
					}
				}
			}
		} catch (e) {
			// Ignore errors from reading files that might not exist or are inaccessible
		}
	}

	return usedFiles;
}

/**
 * Main function to find unused components.
 */
function findUnusedComponents() {
	// 1. Find all component files
	const allComponentFiles = new Set(findFiles(COMPONENTS_DIR, [".tsx"]));

	if (allComponentFiles.size === 0) {
		console.log("No component files found.");
		return;
	}

	// 2. Define all entry points: all MDX files + the central mdx-components.tsx file
	const mdxEntryPoints = findFiles(SRC_DIR, [".mdx"]);
	const mdxComponentsPath = join(SRC_DIR, "mdx-components.tsx");

	if (existsSync(mdxComponentsPath)) {
		mdxEntryPoints.push(mdxComponentsPath);
	}

	if (mdxEntryPoints.length === 0) {
		console.log("No MDX entry points found.");
		return;
	}

	console.log(`Found ${allComponentFiles.size} component files.`);
	console.log(
		`Found ${mdxEntryPoints.length} entry points (MDX + mdx-components.tsx).`,
	);

	// 3. Build the usage graph
	const usedFiles = buildUsageGraph(mdxEntryPoints, allComponentFiles);

	// 4. Determine unused components
	const unusedComponentFiles = Array.from(allComponentFiles).filter(
		(file) => !usedFiles.has(file),
	);

	console.log("\n--- Results ---");
	console.log(`Total component files: ${allComponentFiles.size}`);
	console.log(
		`Used component files: ${allComponentFiles.size - unusedComponentFiles.length}`,
	);
	console.log(`Unused component files: ${unusedComponentFiles.length}`);

	if (unusedComponentFiles.length > 0) {
		console.log("\nUnused Component Files:");
		for (const filePath of unusedComponentFiles) {
			const relativePath = relative(ROOT_DIR, filePath);
			console.log(`- ${relativePath}`);
		}
	} else {
		console.log("\nGreat! All detected component files appear to be used.");
	}
}

findUnusedComponents();
