Installation

# Install Tailwind CSS with React Router

Setting up Tailwind CSS in a React Router project.

#### Create your project

Start by creating a new React Router project if you don’t have one set up already. The most common approach is to use [Create React Router](https://reactrouter.com/start/framework/installation).

Terminal

```
npx create-react-router@latest my-projectcd my-project
```

#### Install Tailwind CSS

Install `@tailwindcss/vite` and its peer dependencies via npm.

Terminal

```
npm install tailwindcss @tailwindcss/vite
```

#### Configure Vite Plugin

Add the `@tailwindcss/vite` plugin to your Vite configuration.

vite.config.ts

```
import { reactRouter } from "@react-router/dev/vite";import { defineConfig } from "vite";import tsconfigPaths from "vite-tsconfig-paths";import tailwindcss from "@tailwindcss/vite";export default defineConfig({  plugins: [    tailwindcss(),    reactRouter(),    tsconfigPaths(),  ],});
```

#### Import Tailwind CSS

Add an `@import` to `./app/app.css` that imports Tailwind CSS.

tailwind.css

```
@import "tailwindcss";
```

#### Start your build process

Run your build process with `npm run dev`.

Terminal

```
npm run dev
```

#### Start using Tailwind in your project

Start using Tailwind’s utility classes to style your content.

home.tsx

```
export default function Home() {  return (    <h1 className="text-3xl font-bold underline">      Hello world!    </h1>  )}
```
