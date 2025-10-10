Installation

# Install Tailwind CSS with Laravel

Setting up Tailwind CSS in a Laravel project.

- ## [Using Vite](/docs/installation/framework-guides/laravel/vite)
- ## [Using Laravel Mix](/docs/installation/framework-guides/laravel/mix)

#### Install Tailwind CSS

Install `@tailwindcss/postcss` and its peer dependencies via npm.

Terminal

```
npm install tailwindcss @tailwindcss/postcss postcss
```

#### Add Tailwind to your Laravel Mix configuration

In your `webpack.mix.js` file, add `tailwindcss` as a PostCSS plugin.

webpack.mix.js

```
mix  .js("resources/js/app.js", "public/js")  .postCss("resources/css/app.css", "public/css", [    require("@tailwindcss/postcss"),  ]);
```

#### Import Tailwind CSS

Add an `@import` to `./resources/css/app.css` that imports Tailwind CSS. Additionally, tell Tailwind CSS to scan some directories for utilities.

app.css

```
@import 'tailwindcss';@source '../../vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php';@source '../../storage/framework/views/*.php';@source '../**/*.blade.php';@source '../**/*.js';
```

#### Start your build process

Run your build process with `npm run watch`.

Terminal

```
npm run watch
```

#### Start using Tailwind in your project

Make sure your compiled CSS is included in the `<head>` then start using Tailwind’s utility classes to style your content.

app.blade.php

```
<!doctype html><html>  <head>    <meta charset="utf-8" />    <meta name="viewport" content="width=device-width, initial-scale=1.0" />    <link href="{{ asset('css/app.css') }}" rel="stylesheet" />  </head>  <body>    <h1 class="text-3xl font-bold underline">      Hello world!    </h1>  </body></html>
```
