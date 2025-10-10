<!--$-->

<!--/$-->

Installation

# Install Tailwind CSS with Rspack

Setting up Tailwind CSS in a Rspack project.

- ## [Using React](/docs/installation/framework-guides/rspack/react)
- ## [Using Vue](/docs/installation/framework-guides/rspack/vue)

01

#### Create your project

Start by creating a new Rspack project if you don’t have one set up already. The most common approach is to use<!-- --> [Rspack CLI](https://rspack.dev/guide/start/quick-start#using-the-rspack-cli).

Terminal

```
npm create rspack@latest
```

02

#### Install Tailwind CSS

Install `@tailwindcss/postcss` and its peer dependencies.

Terminal

```
npm install tailwindcss @tailwindcss/postcss postcss postcss-loader
```

03

#### Enable PostCSS support

In your `rspack.config.js` file, enable the PostCSS loader. See<!-- --> [the documentation](https://rspack.dev/guide/tech/css#tailwind-css) for more information.

rspack.config.ts

```
export default defineConfig({  // ...  module: {    rules: [      {        test: /\.css$/,        use: ["postcss-loader"],        type: "css",      },      // ...    ],  },}
```

04

#### Configure PostCSS Plugins

Create a `postcss.config.mjs` file in the root of your project and add the<!-- --> `@tailwindcss/postcss` plugin to your PostCSS configuration.

postcss.config.mjs

```
export default {  plugins: {    "@tailwindcss/postcss": {},  },};
```

05

#### Import Tailwind CSS

Add an `@import` to `./src/index.css` that imports Tailwind CSS.

index.css

```
@import "tailwindcss";
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

Start using Tailwind’s utility classes to style your content.

App.jsx

```
export default function App() {  return (    <h1 className="text-3xl font-bold underline">      Hello world!    </h1>  )}
```

<!--$-->

<!--/$-->
