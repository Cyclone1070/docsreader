Installation

# Install Tailwind CSS with SvelteKit

Setting up Tailwind CSS in a SvelteKit project.

01

#### Create your project

Start by creating a new SvelteKit project if you don't have one set up already. The most common approach is outlined in the [SvelteKit](https://svelte.dev/docs/kit/creating-a-project) documentation.

Terminal

```
npx sv create my-projectcd my-project
```

02

#### Install Tailwind CSS

Install `@tailwindcss/vite` and its peer dependencies via npm.

Terminal

```
npm install tailwindcss @tailwindcss/vite
```

03

#### Configure Vite Plugin

Add the `@tailwindcss/vite` plugin to your Vite configuration.

vite.config.ts

```
import { sveltekit } from '@sveltejs/kit/vite';import { defineConfig } from 'vite';import tailwindcss from '@tailwindcss/vite';export default defineConfig({  plugins: [    tailwindcss(),    sveltekit(),  ],});
```

04

#### Import Tailwind CSS

Create a `./src/app.css` file and add an `@import` that imports Tailwind CSS.

app.css

```
@import "tailwindcss";
```

05

#### Import the CSS file

Create a `./src/routes/+layout.svelte` file and import the newly-created `app.css` file.

+layout.svelte

```
<script>  let { children } = $props();  import "../app.css";</script>{@render children()}
```

06

#### Start your build process

Run your build process with `npm run dev`.

Terminal

```
npm run dev
```

07

#### Start using Tailwind in your project

Start using Tailwind’s utility classes to style your content, making sure to import your Tailwind CSS theme for any `<style>` blocks that need to be processed by Tailwind.

+page.svelte

```
<h1 class="text-3xl font-bold underline">  Hello world!</h1><style lang="postcss">  @reference "tailwindcss";  :global(html) {    background-color: theme(--color-gray-100);  }</style>
```
