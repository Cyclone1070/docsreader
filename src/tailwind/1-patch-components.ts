#!/usr/bin/env node
/**
 * Script to patch React components to strip out UI chrome
 * - layout.tsx files will only return {children}
 * - pagination.tsx will return null
 * - table-of-contents.tsx will return null
 * - header.tsx will return null
 * - footer.tsx will return null
 * 
 * Note: Use git to restore files after build is complete
 */

import fs from "fs/promises";
import { glob } from "glob";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory where this script is located
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "../..");
const TAILWIND_DIR = path.resolve(PROJECT_ROOT, "docs/tailwindcss.com");

async function patchLayoutFiles(): Promise<void> {
	console.log("\n📝 Patching layout.tsx files...");
	const layoutFiles = await glob("**/layout.tsx", {
		cwd: path.join(TAILWIND_DIR, "src"),
		absolute: true,
	});

	for (const file of layoutFiles) {
		// Create a minimal layout that just returns children
		const minimalLayout = `export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;
		await fs.writeFile(file, minimalLayout);
		console.log(`✓ Patched: ${path.relative(TAILWIND_DIR, file)}`);
	}
}

async function patchDynamicRoutes(): Promise<void> {
	console.log("\n📝 Patching dynamic route pages and API routes...");
	
	// Find all page.tsx and route.tsx files
	const allRouteFiles = await glob("**/{page,route}.tsx", {
		cwd: path.join(TAILWIND_DIR, "src/app"),
		absolute: true,
	});
	
	// Filter for dynamic routes (contain brackets in path)
	let dynamicRoutePages = allRouteFiles.filter(file => file.includes('['));

	// Remove the @breadcrumb/[...catchAll] - it conflicts with default.tsx
	const breadcrumbCatchAll = dynamicRoutePages.find(file => 
		file.includes('@breadcrumb') && file.includes('[...catchAll]')
	);
	if (breadcrumbCatchAll) {
		console.log(`  ℹ Deleting ${path.relative(TAILWIND_DIR, breadcrumbCatchAll)} (conflicts with default.tsx)`);
		await fs.unlink(breadcrumbCatchAll);
		dynamicRoutePages = dynamicRoutePages.filter(f => f !== breadcrumbCatchAll);
	}

	console.log(`Found ${dynamicRoutePages.length} dynamic route files`);

	for (const file of dynamicRoutePages) {
		// Skip @breadcrumb routes - parallel slots inherit params from parent
		if (file.includes('@breadcrumb')) {
			console.log(`  ℹ ${path.relative(TAILWIND_DIR, file)} is a parallel slot, skipping`);
			continue;
		}
		
		const original = await fs.readFile(file, 'utf-8');
		const hasGenerateStaticParams = original.includes('generateStaticParams');

		if (hasGenerateStaticParams) {
			console.log(`  ℹ ${path.relative(TAILWIND_DIR, file)} already has generateStaticParams, skipping`);
			continue;
		}

		// Add generateStaticParams that returns empty array
		// For route.tsx, we need to export a GET handler as well
		const isRoute = file.endsWith('route.tsx');
		const minimalContent = isRoute ? `export async function GET() {
  return new Response(null, { status: 404 });
}

export function generateStaticParams() {
  return [];
}
` : `export default function Page() {
  return null;
}

export function generateStaticParams() {
  return [];
}
`;
		await fs.writeFile(file, minimalContent);
		console.log(`✓ Patched: ${path.relative(TAILWIND_DIR, file)}`);
	}
	
	// Also patch API routes that need force-static
	console.log("\n📝 Patching API routes...");
	const apiRoutes = await glob("**/api/**/route.tsx", {
		cwd: path.join(TAILWIND_DIR, "src/app"),
		absolute: true,
	});
	
	console.log(`Found ${apiRoutes.length} API route files`);
	
	for (const file of apiRoutes) {
		const original = await fs.readFile(file, 'utf-8');
		
		// Check if it already has the export
		if (original.includes('export const dynamic')) {
			console.log(`  ℹ ${path.relative(TAILWIND_DIR, file)} already has dynamic export, skipping`);
			continue;
		}
		
		// Add force-static export and a minimal GET handler
		const minimalContent = `export const dynamic = "force-static";

export async function GET() {
  return new Response(null, { status: 404 });
}
`;
		await fs.writeFile(file, minimalContent);
		console.log(`✓ Patched: ${path.relative(TAILWIND_DIR, file)}`);
	}
}

async function patchComponent(
	componentName: string,
	returnValue: string = "null"
): Promise<void> {
	console.log(`\n📝 Patching ${componentName}...`);
	const files = await glob(`**/${componentName}`, {
		cwd: path.join(TAILWIND_DIR, "src"),
		absolute: true,
	});

	if (files.length === 0) {
		console.log(`⚠ No ${componentName} files found`);
		return;
	}

	for (const file of files) {
		// Read original to extract all exports
		const original = await fs.readFile(file, 'utf-8');
		// Match both 'export function Name' and 'export const Name'
		const exportMatches = original.matchAll(/export\s+(?:async\s+)?(?:function|const)\s+(\w+)/g);
		const exportedNames = new Set(Array.from(exportMatches).map(m => m[1]));

		// Create minimal exports for all found exports
		let minimalComponent = `export default function Component() {
  return ${returnValue};
}
`;

		// Add null exports for any other named exports
		for (const name of exportedNames) {
			if (name !== 'default' && name !== 'Component') {
				minimalComponent += `
export function ${name}() {
  return null;
}
`;
			}
		}

		await fs.writeFile(file, minimalComponent);
		console.log(`✓ Patched: ${path.relative(TAILWIND_DIR, file)}`);
	}
}

async function main() {
	console.log("🚀 Starting component patching...\n");
	console.log(`Working directory: ${TAILWIND_DIR}\n`);

	try {
		// Patch all components
		await patchLayoutFiles();
		await patchDynamicRoutes();
		await patchComponent("pagination.tsx");
		await patchComponent("table-of-contents.tsx");
		await patchComponent("header.tsx");
		await patchComponent("footer.tsx");

		console.log("\n✅ Component patching completed successfully!");
		console.log("\nTo restore: cd docs/tailwindcss.com && git checkout src/");
	} catch (error) {
		console.error("\n❌ Error during patching:", error);
		process.exit(1);
	}
}

main();
