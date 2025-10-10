# Tailwind CSS Documentation to Markdown Converter# Tailwind CSS Documentation to Markdown Converter# Tailwind CSS Documentation to Markdown Converter# Tailwind CSS Documentation to Markdown Converter



This set of scripts converts the Tailwind CSS documentation website into clean, AI-consumable markdown files.



## What It DoesThis set of scripts converts the Tailwind CSS documentation website into clean, AI-consumable markdown files.



The pipeline performs the following steps:



1. **Patches React Components** - Strips out UI chrome (headers, footers, pagination, table of contents, breadcrumbs, promos) by replacing them with minimal implementations## What It DoesThis set of scripts converts the Tailwind CSS documentation website into clean, AI-consumable markdown files.This set of scripts converts the Tailwind CSS documen### Intermediate Output

2. **Configures Next.js** - Temporarily modifies `next.config.ts` to enable static export

3. **Builds Static HTML** - Runs `pnpm build` to generate static HTML files in `cleanHtml` directory

4. **Strips HTML Attributes** - Removes all `<script>` tags, `style` attributes, `class`, `id`, and other non-semantic attributes

5. **Converts to Markdown** - Uses unified/rehype/remark to convert the cleaned HTML to markdown filesThe pipeline performs the following steps:



**Note:** All file modifications are temporary. Use `git checkout` to restore original files after the pipeline completes.



## Requirements1. **Patches React Components** - Strips out UI chrome (headers, footers, pagination, table of contents) by replacing them with minimal implementations## What It Does- `docs/tailwindcss.com/cleanHtml/` - Contains the built static HTML files



- Node.js (the scripts run with plain `node` command)2. **Configures Next.js** - Temporarily modifies `next.config.ts` to enable static export

- pnpm (used by the Tailwind CSS project)

- All dependencies are already installed in the root workspace3. **Builds Static HTML** - Runs `pnpm build` to generate static HTML files in `cleanHtml` directory



**Important:** Before running the pipeline, make sure dependencies are installed in the Tailwind CSS directory:4. **Strips HTML Attributes** - Removes all `<script>` tags, `style` attributes, `class`, `id`, and other non-semantic attributes



```bash5. **Converts to Markdown** - Uses unified/rehype/remark to convert the cleaned HTML to markdown filesThe pipeline performs the following steps:### Final Output

cd docs/tailwindcss.com && pnpm install

```



## Performance Note**Note:** All file modifications are temporary. Use `git checkout` to restore original files after the pipeline completes.



The Next.js build process can take **~30-60 seconds** to compile the entire Tailwind CSS documentation site. This is normal. The script will show progress output during the build.



## Usage## Requirements1. **Patches React Components** - Strips out UI chrome (headers, footers, pagination, table of contents) by replacing them with minimal implementations- `src/tailwind/**/*.md` - Markdown files mirroring the HTML structure



### Run from Anywhere



The scripts automatically detect their location and work from any directory:- Node.js (the scripts run with plain `node` command)2. **Configures Next.js** - Temporarily modifies `next.config.ts` to enable static export



```bash- pnpm (used by the Tailwind CSS project)

# From anywhere on your system

node /path/to/docsreader/src/tailwind/run-all.ts- All dependencies are already installed in the root workspace3. **Builds Static HTML** - Runs `pnpm build` to generate static HTML files in `cleanHtml` directory## Error Handling



# Or from the project root

cd /path/to/docsreader

node src/tailwind/run-all.ts**Important:** Before running the pipeline, make sure dependencies are installed in the Tailwind CSS directory:4. **Strips HTML Attributes** - Removes all `<script>` tags, `style` attributes, `class`, `id`, and other non-semantic attributes



# Or from a different directory

cd ~/Downloads

node ~/Desktop/repos/docsreader/src/tailwind/run-all.ts```bash5. **Converts to Markdown** - Uses unified/rehype/remark to convert the cleaned HTML to markdown files- ESLint and TypeScript errors are automatically ignored during build

```

cd docs/tailwindcss.com && pnpm install

After completion, restore original files with:

```- If the build fails, use `git checkout` to restore original files

```bash

cd /path/to/docsreader/docs/tailwindcss.com && git checkout src/

```

## Performance Note**Note:** All file modifications are temporary. Use `git checkout` to restore original files after the pipeline completes.- The pipeline can be safely re-run multiple times

### Run Individual Scripts



You can also run scripts individually from any directory:

The Next.js build process can take **~30-60 seconds** to compile the entire Tailwind CSS documentation site. This is normal. The script will show progress output during the build.- Next.js config is automatically restored even on build failureclean, AI-consumable markdown files.

```bash

# 1. Patch components

node /path/to/docsreader/src/tailwind/1-patch-components.ts

## Usage## Requirements

# 2. Build to static HTML

node /path/to/docsreader/src/tailwind/2-build-clean-html.ts



# 3. Strip HTML attributes### Run from Anywhere## What It Does

node /path/to/docsreader/src/tailwind/3-strip-html.ts



# 4. Convert HTML to Markdown

node /path/to/docsreader/src/tailwind/4-html-to-markdown.tsThe scripts automatically detect their location and work from any directory:- Node.js (the scripts run with plain `node` command)



# 5. Restore files

cd /path/to/docsreader/docs/tailwindcss.com && git checkout src/

``````bash- pnpm (used by the Tailwind CSS project)The pipeline performs the following steps:



**Important:** Always restore files after running to get back to a clean state!# From anywhere on your system



## Outputnode /path/to/docsreader/src/tailwind/run-all.ts- All dependencies are already installed in the root workspace



### Intermediate Output



- `docs/tailwindcss.com/cleanHtml/` - Contains the built static HTML files (temporary)# Or from the project root1. **Patches React Components** - Strips out UI chrome (headers, footers, pagination, table of contents) by replacing them with minimal implementations



### Final Outputcd /path/to/docsreader



- `src/tailwind/markdown/` - All converted markdown filesnode src/tailwind/run-all.ts**Important:** Before running the pipeline, make sure dependencies are installed in the Tailwind CSS directory:2. **Configures Next.js** - Temporarily modifies `next.config.ts` to enable static export

  - `docs/` - Documentation pages (~190 files)

  - `blog/` - Blog posts (~70 files)

  - `installation/` - Installation guides

  - Root pages (index.md, 404.md, brand.md, etc.)# Or from a different directory3. **Builds Static HTML** - Runs `pnpm build` to generate static HTML files in `cleanHtml` directory



## How It Workscd ~/Downloads



### Path Resolutionnode ~/Desktop/repos/docsreader/src/tailwind/run-all.ts```bash4. **Strips HTML Attributes** - Removes all `<script>` tags, `style` attributes, `class`, `id`, and other non-semantic attributes



All scripts use `import.meta.url` to determine their own location and calculate the project root dynamically. This means:```



- ✅ Works from any directorycd docs/tailwindcss.com && pnpm install && cd ../..5. **Converts to Markdown** - Uses unified/rehype/remark to convert the cleaned HTML to markdown files

- ✅ No need to be in project root

- ✅ Scripts find the Tailwind CSS repo automaticallyAfter completion, restore original files with:

- ✅ Output goes to the correct location

```

### Component Patching

```bash

The script modifies these files temporarily:

cd /path/to/docsreader/docs/tailwindcss.com && git checkout src/**Note:** All file modifications are temporary. Use `git checkout` to restore original files after the pipeline completes.

- All `layout.tsx` files → Return only `{children}`

- Dynamic routes with `[params]` → Adds `generateStaticParams()` returning `[]````

- API routes → Adds `dynamic = 'force-static'`

- `pagination.tsx` → Returns `null`## Performance Note

- `table-of-contents.tsx` → Returns `null`

- `header.tsx` → Returns `null`### Run Individual Scripts

- `footer.tsx` → Returns `null`

- `breadcrumb.tsx` → Returns `null`## Requirements

- `promos.tsx` → Returns `null` (BookPromo, CoursePromo, RandomPromo)

- Deletes `@breadcrumb/[...catchAll]/page.tsx` (conflicts with default.tsx)You can also run scripts individually from any directory:

- Skips all `@breadcrumb` routes (parallel slots inherit params)

The Next.js build process can take **~30-60 seconds** to compile the entire Tailwind CSS documentation site. This is normal. The script will show progress output during the build.

### Next.js Configuration

```bash

Temporarily adds to `next.config.ts`:

# 1. Patch components-   Node.js (the scripts run with plain `node` command)

```typescript

{node /path/to/docsreader/src/tailwind/1-patch-components.ts

  output: 'export',

  distDir: 'cleanHtml',## Usage-   pnpm (used by the Tailwind CSS project)

  eslint: { ignoreDuringBuilds: true },

  typescript: { ignoreBuildErrors: true }# 2. Build to static HTML

}

```node /path/to/docsreader/src/tailwind/2-build-clean-html.ts-   All dependencies are already installed in the root workspace



### HTML Cleaning



Removes:# 3. Strip HTML attributes### Run the Complete Pipeline



- All `<script>` tagsnode /path/to/docsreader/src/tailwind/3-strip-html.ts

- All `<style>` tags

- All `<noscript>` tags**Important:** Before running the pipeline, make sure dependencies are installed in the Tailwind CSS directory:

- All attributes except: `href`, `src`, `alt`, `title`

# 4. Convert HTML to Markdown

### Markdown Conversion

node /path/to/docsreader/src/tailwind/4-html-to-markdown.tsTo run all steps in sequence:

Uses the unified ecosystem:



- `rehype-parse` - Parse HTML

- `rehype-remark` - Convert HTML to Markdown AST# 5. Restore files```bash

- `remark-gfm` - Add support for tables and GitHub Flavored Markdown

- `remark-stringify` - Stringify Markdowncd /path/to/docsreader/docs/tailwindcss.com && git checkout src/



## Error Handling``````bashcd docs/tailwindcss.com && pnpm install && cd ../..



- ESLint and TypeScript errors are automatically ignored during build

- If the build fails, use `git checkout` to restore original files

- The pipeline can be safely re-run multiple times**Important:** Always restore files after running to get back to a clean state!node src/tailwind/run-all.ts```

- Next.js config is automatically restored even on build failure



## Troubleshooting

## Output```

### Build Fails



If the build fails, check:

### Intermediate Output## Performance Note

1. Has `pnpm install` been run in `docs/tailwindcss.com`?

2. Check the error output for specific issues

3. Try running from the project root directory

- `docs/tailwindcss.com/cleanHtml/` - Contains the built static HTML files (temporary)This will execute all steps automatically. After completion, restore original files with:

### Files Not Restored



If something goes wrong and you need to restore files:

### Final OutputThe Next.js build process can take **several minutes** (5-15 minutes depending on your machine) as it compiles the entire Tailwind CSS documentation site. This is normal. The script will show progress output during the build.

```bash

cd /path/to/docsreader/docs/tailwindcss.com && git checkout src/

```

- `src/tailwind/markdown/` - All converted markdown files```bash

### No Markdown Files Generated

  - `docs/` - Documentation pages (~190 files)

If no markdown files appear in `src/tailwind/markdown/`:

  - `blog/` - Blog posts (~70 files)cd docs/tailwindcss.com && git checkout src/## Usage

1. Check if HTML files were generated in `docs/tailwindcss.com/cleanHtml/`

2. Run the conversion script individually: `node /path/to/4-html-to-markdown.ts`  - `installation/` - Installation guides



## Notes  - Root pages (index.md, 404.md, brand.md, etc.)```



- Everything is version controlled, so no permanent damage can occur

- The scripts use the repo's existing build process, not custom build logic

- All scripts are written in TypeScript but run directly with `node` (no transpilation needed)## How It Works### Run the Complete Pipeline

- The pipeline is idempotent - you can run it multiple times safely

- Total pipeline execution time: ~80-100 seconds

- **Can be run from anywhere** - scripts automatically find the project root

### Path Resolution### Run Individual Scripts



All scripts use `import.meta.url` to determine their own location and calculate the project root dynamically. This means:To run all steps in sequence:



- ✅ Works from any directory```bash

- ✅ No need to be in project root

- ✅ Scripts find the Tailwind CSS repo automatically# 1. Patch components```bash

- ✅ Output goes to the correct location

node src/tailwind/1-patch-components.tsnode src/tailwind/run-all.ts

### Component Patching

```

The script modifies these files temporarily:

# 2. Build to static HTML

- All `layout.tsx` files → Return only `{children}`

- Dynamic routes with `[params]` → Adds `generateStaticParams()` returning `[]`node src/tailwind/2-build-clean-html.tsThis will execute all steps automatically. After completion, restore original files with:

- API routes → Adds `dynamic = 'force-static'`

- `pagination.tsx` → Returns `null`

- `table-of-contents.tsx` → Returns `null`

- `header.tsx` → Returns `null`# 3. Strip HTML attributes```bash

- `footer.tsx` → Returns `null`

- Deletes `@breadcrumb/[...catchAll]/page.tsx` (conflicts with default.tsx)node src/tailwind/3-strip-html.tscd docs/tailwindcss.com && git checkout src/ && cd ../..

- Skips all `@breadcrumb` routes (parallel slots inherit params)

```

### Next.js Configuration

# 4. Convert HTML to Markdown

Temporarily adds to `next.config.ts`:

node src/tailwind/4-html-to-markdown.ts### Run Individual Scripts

```typescript

{

  output: 'export',

  distDir: 'cleanHtml',# 5. Restore files```bash

  eslint: { ignoreDuringBuilds: true },

  typescript: { ignoreBuildErrors: true }cd docs/tailwindcss.com && git checkout src/# 1. Patch components

}

``````node src/tailwind/1-patch-components.ts



### HTML Cleaning



Removes:**Important:** Always restore files after running to get back to a clean state!# 2. Build to static HTML



- All `<script>` tagsnode src/tailwind/2-build-clean-html.ts

- All `<style>` tags

- All `<noscript>` tags## Output

- All attributes except: `href`, `src`, `alt`, `title`

# 3. Strip HTML attributes

### Markdown Conversion

### Intermediate Outputnode src/tailwind/3-strip-html.ts

Uses the unified ecosystem:



- `rehype-parse` - Parse HTML

- `rehype-remark` - Convert HTML to Markdown AST- `docs/tailwindcss.com/cleanHtml/` - Contains the built static HTML files (temporary)# 4. Convert HTML to Markdown

- `remark-gfm` - Add support for tables and GitHub Flavored Markdown

- `remark-stringify` - Stringify Markdownnode src/tailwind/4-html-to-markdown.ts



## Error Handling### Final Output



- ESLint and TypeScript errors are automatically ignored during build# 5. Restore files

- If the build fails, use `git checkout` to restore original files

- The pipeline can be safely re-run multiple times- `src/tailwind/markdown/` - All converted markdown filescd docs/tailwindcss.com && git checkout src/

- Next.js config is automatically restored even on build failure

  - `docs/` - Documentation pages (~190 files)```

## Troubleshooting

  - `blog/` - Blog posts (~70 files)

### Build Fails

  - `installation/` - Installation guides**Important:** Always restore files after running to get back to a clean state!

If the build fails, check:

  - Root pages (index.md, 404.md, brand.md, etc.)```

1. Has `pnpm install` been run in `docs/tailwindcss.com`?

2. Check the error output for specific issues

3. Try running from the project root directory

## How It WorksThis will:

### Files Not Restored



If something goes wrong and you need to restore files:

### Component Patching-   Patch all components

```bash

cd /path/to/docsreader/docs/tailwindcss.com && git checkout src/-   Build the site

```

The script modifies these files temporarily:-   Clean the HTML

### No Markdown Files Generated

-   Convert to Markdown

If no markdown files appear in `src/tailwind/markdown/`:

- All `layout.tsx` files → Return only `{children}`-   Restore all original files

1. Check if HTML files were generated in `docs/tailwindcss.com/cleanHtml/`

2. Run the conversion script individually: `node /path/to/4-html-to-markdown.ts`- Dynamic routes with `[params]` → Adds `generateStaticParams()` returning `[]`



## Notes- API routes → Adds `dynamic = 'force-static'`The final markdown files will be available in `src/tailwind/` directory.



- Everything is version controlled, so no permanent damage can occur- `pagination.tsx` → Returns `null`

- The scripts use the repo's existing build process, not custom build logic

- All scripts are written in TypeScript but run directly with `node` (no transpilation needed)- `table-of-contents.tsx` → Returns `null`### Run Individual Scripts

- The pipeline is idempotent - you can run it multiple times safely

- Total pipeline execution time: ~80-100 seconds- `header.tsx` → Returns `null`

- **Can be run from anywhere** - scripts automatically find the project root

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
