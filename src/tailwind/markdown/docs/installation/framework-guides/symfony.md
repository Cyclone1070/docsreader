Installation

# Install Tailwind CSS with Symfony

Setting up Tailwind CSS in a Symfony project.

#### Create your project

Start by creating a new Symfony project if you don’t have one set up already. The most common approach is to use [the Symfony Installer](https://symfony.com/download).

Terminal

```
symfony new --webapp my-projectcd my-project
```

#### Install Webpack Encore

Install Webpack Encore, which handles building your assets. See [the documentation](https://symfony.com/doc/current/frontend.html) for more information.

Terminal

```
composer remove symfony/ux-turbo symfony/asset-mapper symfony/stimulus-bundlecomposer require symfony/webpack-encore-bundle symfony/ux-turbo symfony/stimulus-bundle
```

#### Install Tailwind CSS

Using npm, install `@tailwindcss/postcss` and its peer dependencies, as well as `postcss-loader`.

Terminal

```
npm install tailwindcss @tailwindcss/postcss postcss postcss-loader
```

#### Enable PostCSS support

In your `webpack.config.js` file, enable the PostCSS Loader. See [the documentation](https://symfony.com/doc/current/frontend/encore/postcss.html) for more information.

webpack.config.js

```
Encore  .enablePostCssLoader();
```

#### Configure PostCSS Plugins

Create a `postcss.config.mjs` file in the root of your project and add the `@tailwindcss/postcss` plugin to your PostCSS configuration.

postcss.config.mjs

```
export default {  plugins: {    "@tailwindcss/postcss": {},  },};
```

#### Import Tailwind CSS

Add an `@import` to `./assets/styles/app.css` that imports Tailwind CSS and an `@source` that ignores the public dir to prevent recompile loops in watch mode.

app.css

```
@import "tailwindcss";@source not "../../public";
```

#### Start your build process

Run your build process with `npm run watch`.

Terminal

```
npm run watch
```

#### Start using Tailwind in your project

Make sure your compiled CSS is included in the `<head>` then start using Tailwind’s utility classes to style your content.

base.html.twig

```
<!doctype html><html>  <head>    <meta charset="utf-8" />    <meta      name="viewport"      content="width=device-width, initial-scale=1.0"    />    {% block stylesheets %}      {{ encore_entry_link_tags('app') }}    {% endblock %}  </head>  <body>    <h1 class="text-3xl font-bold underline">      Hello world!    </h1>  </body></html>
```
