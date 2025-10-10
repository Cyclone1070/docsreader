Installation

# Install Tailwind CSS with Angular

Setting up Tailwind CSS in an Angular project.

#### Create your project

Start by creating a new Angular project if you don’t have one set up already. The most common approach is to use [Angular CLI](https://angular.dev/tools/cli/setup-local).

Terminal

```
ng new my-project --style csscd my-project
```

#### Install Tailwind CSS

Install `@tailwindcss/postcss` and its peer dependencies via npm.

Terminal

```
npm install tailwindcss @tailwindcss/postcss postcss --force
```

#### Configure PostCSS Plugins

Create a `.postcssrc.json` file in the root of your project and add the `@tailwindcss/postcss` plugin to your PostCSS configuration.

.postcssrc.json

```
{  "plugins": {    "@tailwindcss/postcss": {}  }}
```

#### Import Tailwind CSS

Add an `@import` to `./src/styles.css` that imports Tailwind CSS.

styles.css

```
@import "tailwindcss";
```

#### Start your build process

Run your build process with `ng serve`.

Terminal

```
ng serve
```

#### Start using Tailwind in your project

Start using Tailwind’s utility classes to style your content.

app.component.html

```
<h1 class="text-3xl font-bold underline">  Hello world!</h1>
```
