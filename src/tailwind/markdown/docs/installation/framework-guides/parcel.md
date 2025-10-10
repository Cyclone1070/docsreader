Installation

# Install Tailwind CSS with Parcel

Setting up Tailwind CSS in a Parcel project.

#### Create your project

Start by creating a new Parcel project if you don’t have one set up already. The most common approach is to add Parcel as a dev-dependency to your project as outlined in their [getting started guide](https://parceljs.org/getting-started/webapp/).

Terminal

```
mkdir my-projectcd my-projectnpm init -ynpm install parcelmkdir srctouch src/index.html
```

#### Install Tailwind CSS

Install `@tailwindcss/postcss` and its peer dependencies via npm.

Terminal

```
npm install tailwindcss @tailwindcss/postcss
```

#### Configure PostCSS

Create a `.postcssrc` file in your project root, and enable the `@tailwindcss/postcss` plugin.

.postcssrc

```
{  "plugins": {    "@tailwindcss/postcss": {}  }}
```

#### Import Tailwind CSS

Create a `./src/index.css` file and add an `@import` for Tailwind CSS.

index.css

```
@import "tailwindcss";
```

#### Start your build process

Run your build process with `npx parcel src/index.html`.

Terminal

```
npx parcel src/index.html
```

#### Start using Tailwind in your project

Add your CSS file to the `<head>` and start using Tailwind’s utility classes to style your content.

index.html

```
<!doctype html><html>  <head>    <meta charset="UTF-8" />    <meta name="viewport" content="width=device-width, initial-scale=1.0" />    <link href="./index.css" type="text/css" rel="stylesheet" />  </head>  <body>    <h1 class="text-3xl font-bold underline">      Hello world!    </h1>  </body></html>
```
