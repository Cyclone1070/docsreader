Installation

# Install Tailwind CSS with Laravel

Setting up Tailwind CSS in a Laravel project.

- ## [Using Vite](/docs/installation/framework-guides/laravel/vite)
- ## [Using Laravel Mix](/docs/installation/framework-guides/laravel/mix)

#### Create your project

Start by creating a new Laravel project if you don’t have one set up already. The most common approach is to use [the Laravel installer](https://laravel.com/docs#creating-an-application).

Terminal

```
laravel new my-projectcd my-project
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
import { defineConfig } from 'vite'import tailwindcss from '@tailwindcss/vite'export default defineConfig({  plugins: [    tailwindcss(),    // …  ],})
```

#### Import Tailwind CSS

Add an `@import` to `./resources/css/app.css` that imports Tailwind CSS. Additionally, tell Tailwind CSS to scan some directories for utilities.

app.css

```
@import 'tailwindcss';@source '../../vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php';@source '../../storage/framework/views/*.php';@source '../**/*.blade.php';@source '../**/*.js';
```

#### Start your build process

Run your build process with `npm run dev`.

Terminal

```
npm run dev
```

#### Start using Tailwind in your project

Make sure your compiled CSS is included in the `<head>` then start using Tailwind’s utility classes to style your content.

app.blade.php

```
<!doctype html><html>  <head>    <meta charset="utf-8" />    <meta name="viewport" content="width=device-width, initial-scale=1.0" />    @vite('resources/css/app.css')  </head>  <body>    <h1 class="text-3xl font-bold underline">      Hello world!    </h1>  </body></html>
```
