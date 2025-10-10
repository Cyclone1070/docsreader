# Tailwind CSS Documentation to Markdown Converter# Tailwind CSS Documentation to Markdown Converter



This set of scripts converts the Tailwind CSS documentation website into clean, AI-consumable markdown files.This set of scripts converts the Tailwind CSS documen### Intermediate Output



## What It Does- `docs/tailwindcss.com/cleanHtml/` - Contains the built static HTML files



The pipeline performs the following steps:### Final Output



1. **Patches React Components** - Strips out UI chrome (headers, footers, pagination, table of contents) by replacing them with minimal implementations- `src/tailwind/**/*.md` - Markdown files mirroring the HTML structure

2. **Configures Next.js** - Temporarily modifies `next.config.ts` to enable static export

3. **Builds Static HTML** - Runs `pnpm build` to generate static HTML files in `cleanHtml` directory## Error Handling

4. **Strips HTML Attributes** - Removes all `<script>` tags, `style` attributes, `class`, `id`, and other non-semantic attributes

5. **Converts to Markdown** - Uses unified/rehype/remark to convert the cleaned HTML to markdown files- ESLint and TypeScript errors are automatically ignored during build

- If the build fails, use `git checkout` to restore original files

**Note:** All file modifications are temporary. Use `git checkout` to restore original files after the pipeline completes.- The pipeline can be safely re-run multiple times

- Next.js config is automatically restored even on build failureclean, AI-consumable markdown files.

## Requirements

## What It Does

- Node.js (the scripts run with plain `node` command)

- pnpm (used by the Tailwind CSS project)The pipeline performs the following steps:

- All dependencies are already installed in the root workspace

1. **Patches React Components** - Strips out UI chrome (headers, footers, pagination, table of contents) by replacing them with minimal implementations

**Important:** Before running the pipeline, make sure dependencies are installed in the Tailwind CSS directory:2. **Configures Next.js** - Temporarily modifies `next.config.ts` to enable static export

3. **Builds Static HTML** - Runs `pnpm build` to generate static HTML files in `cleanHtml` directory

```bash4. **Strips HTML Attributes** - Removes all `<script>` tags, `style` attributes, `class`, `id`, and other non-semantic attributes

cd docs/tailwindcss.com && pnpm install && cd ../..5. **Converts to Markdown** - Uses unified/rehype/remark to convert the cleaned HTML to markdown files

```

**Note:** All file modifications are temporary. Use `git checkout` to restore original files after the pipeline completes.

## Performance Note

## Requirements

The Next.js build process can take **~30-60 seconds** to compile the entire Tailwind CSS documentation site. This is normal. The script will show progress output during the build.

-   Node.js (the scripts run with plain `node` command)

## Usage-   pnpm (used by the Tailwind CSS project)

-   All dependencies are already installed in the root workspace

### Run the Complete Pipeline

**Important:** Before running the pipeline, make sure dependencies are installed in the Tailwind CSS directory:

To run all steps in sequence:

```bash

```bashcd docs/tailwindcss.com && pnpm install && cd ../..

node src/tailwind/run-all.ts```

```

## Performance Note

This will execute all steps automatically. After completion, restore original files with:

The Next.js build process can take **several minutes** (5-15 minutes depending on your machine) as it compiles the entire Tailwind CSS documentation site. This is normal. The script will show progress output during the build.

```bash

cd docs/tailwindcss.com && git checkout src/## Usage

```

### Run the Complete Pipeline

### Run Individual Scripts

To run all steps in sequence:

```bash

# 1. Patch components```bash

node src/tailwind/1-patch-components.tsnode src/tailwind/run-all.ts

```

# 2. Build to static HTML

node src/tailwind/2-build-clean-html.tsThis will execute all steps automatically. After completion, restore original files with:



# 3. Strip HTML attributes```bash

node src/tailwind/3-strip-html.tscd docs/tailwindcss.com && git checkout src/ && cd ../..

```

# 4. Convert HTML to Markdown

node src/tailwind/4-html-to-markdown.ts### Run Individual Scripts



# 5. Restore files```bash

cd docs/tailwindcss.com && git checkout src/# 1. Patch components

```node src/tailwind/1-patch-components.ts



**Important:** Always restore files after running to get back to a clean state!# 2. Build to static HTML

node src/tailwind/2-build-clean-html.ts

## Output

# 3. Strip HTML attributes

### Intermediate Outputnode src/tailwind/3-strip-html.ts



- `docs/tailwindcss.com/cleanHtml/` - Contains the built static HTML files (temporary)# 4. Convert HTML to Markdown

node src/tailwind/4-html-to-markdown.ts

### Final Output

# 5. Restore files

- `src/tailwind/markdown/` - All converted markdown filescd docs/tailwindcss.com && git checkout src/

  - `docs/` - Documentation pages (~190 files)```

  - `blog/` - Blog posts (~70 files)

  - `installation/` - Installation guides**Important:** Always restore files after running to get back to a clean state!

  - Root pages (index.md, 404.md, brand.md, etc.)```



## How It WorksThis will:



### Component Patching-   Patch all components

-   Build the site

The script modifies these files temporarily:-   Clean the HTML

-   Convert to Markdown

- All `layout.tsx` files → Return only `{children}`-   Restore all original files

- Dynamic routes with `[params]` → Adds `generateStaticParams()` returning `[]`

- API routes → Adds `dynamic = 'force-static'`The final markdown files will be available in `src/tailwind/` directory.

- `pagination.tsx` → Returns `null`

- `table-of-contents.tsx` → Returns `null`### Run Individual Scripts

- `header.tsx` → Returns `null`

- `footer.tsx` → Returns `null`You can also run scripts individually if needed:

- Deletes `@breadcrumb/[...catchAll]/page.tsx` (conflicts with default.tsx)

- Skips all `@breadcrumb` routes (parallel slots inherit params)```bash

# 1. Patch components (backs up originals)

### Next.js Configurationnode src/tailwind/1-patch-components.ts



Temporarily adds to `next.config.ts`:# 2. Build to static HTML

node src/tailwind/2-build-clean-html.ts

```typescript

{# 3. Strip HTML attributes

  output: 'export',node src/tailwind/3-strip-html.ts

  distDir: 'cleanHtml',

  eslint: { ignoreDuringBuilds: true },# 4. Convert HTML to Markdown

  typescript: { ignoreBuildErrors: true }node src/tailwind/4-html-to-markdown.ts

}

```# 5. Restore original files

node src/tailwind/0-restore-components.ts

### HTML Cleaning```



Removes:**Important:** If you run scripts individually and something fails, make sure to run `0-restore-components.ts` to restore your original files!



- All `<script>` tags## Output

- All `<style>` tags

- All `<noscript>` tags### Intermediate Output

- All attributes except: `href`, `src`, `alt`, `title`

-   `docs/tailwindcss.com/cleanHtml/` - Contains the built static HTML files

### Markdown Conversion-   `src/tailwind/.backups/` - Contains backup manifest (automatically cleaned up after restore)



Uses the unified ecosystem:### Final Output



- `rehype-parse` - Parse HTML-   `src/tailwind/**/*.md` - Markdown files mirroring the HTML structure

- `rehype-remark` - Convert HTML to Markdown AST

- `remark-gfm` - Add support for tables and GitHub Flavored Markdown## Error Handling

- `remark-stringify` - Stringify Markdown

The scripts are designed to handle errors gracefully:

## Error Handling

-   ESLint and TypeScript errors are automatically ignored during build

- ESLint and TypeScript errors are automatically ignored during build-   If the build fails, original files are automatically restored

- If the build fails, use `git checkout` to restore original files-   Detailed error messages help diagnose issues

- The pipeline can be safely re-run multiple times-   The pipeline can be safely re-run multiple times

- Next.js config is automatically restored even on build failure

## How It Works

## Troubleshooting

### Component Patching

### Build Fails

The script backs up and replaces these files:

If the build fails, check:

-   All `layout.tsx` files → Return only `{children}`

1. Are you in the correct directory? (Should be the repo root)-   `pagination.tsx` → Returns `null`

2. Has `pnpm install` been run in `docs/tailwindcss.com`?-   `table-of-contents.tsx` → Returns `null`

3. Check the error output for specific issues-   `header.tsx` → Returns `null`

-   `footer.tsx` → Returns `null`

### Files Not Restored

### Next.js Configuration

If something goes wrong and you need to restore files:

Temporarily adds to `next.config.ts`:

```bash

cd docs/tailwindcss.com && git checkout src/```typescript

```{

  output: 'export',

### No Markdown Files Generated  distDir: 'cleanHtml',

  eslint: { ignoreDuringBuilds: true },

If no markdown files appear in `src/tailwind/markdown/`:  typescript: { ignoreBuildErrors: true }

}

1. Check if HTML files were generated in `docs/tailwindcss.com/cleanHtml/````

2. Run the conversion script individually: `node src/tailwind/4-html-to-markdown.ts`

### HTML Cleaning

## Notes

Removes:

- Everything is version controlled, so no permanent damage can occur

- The scripts use the repo's existing build process, not custom build logic-   All `<script>` tags

- All scripts are written in TypeScript but run directly with `node` (no transpilation needed)-   All `<style>` tags

- The pipeline is idempotent - you can run it multiple times safely-   All `<noscript>` tags

- Total pipeline execution time: ~80-100 seconds-   All attributes except: `href`, `src`, `alt`, `title`


### Markdown Conversion

Uses the unified ecosystem:

-   `rehype-parse` - Parse HTML
-   `rehype-remark` - Convert HTML to Markdown AST
-   `remark-stringify` - Stringify Markdown

## Troubleshooting

### Build Fails

If the build fails, check:

1. Are you in the correct directory? (Should be the repo root)
2. Has `pnpm install` been run in `docs/tailwindcss.com`?
3. Check the error output for specific issues

### Files Not Restored

If something goes wrong and you need to restore files:
```bash
cd docs/tailwindcss.com && git checkout src/
```

### No HTML Files Generated

The script expects Next.js to generate files in `cleanHtml` directory. If not found, it looks for an `out` directory and renames it.

## Notes

-   Everything is version controlled, so no permanent damage can occur
-   The scripts use the repo's existing build process, not custom build logic
-   All scripts are written in TypeScript but run directly with `node` (no transpilation needed)
-   The pipeline is idempotent - you can run it multiple times safely
