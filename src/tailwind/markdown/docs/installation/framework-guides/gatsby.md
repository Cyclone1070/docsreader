Installation

# Install Tailwind CSS with Gatsby

Setting up Tailwind CSS in a Gatsby project.

#### Create your project

Start by creating a new Gatsby project if you don’t have one set up already. The most common approach is to use [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-use-gatsby-cli).

Terminal

```
gatsby new my-projectcd my-project
```

#### Install Tailwind CSS

Using npm, install `@tailwindcss/postcss`, its peer dependencies, and `gatsby-plugin-postcss`.

Terminal

```
npm install @tailwindcss/postcss tailwindcss postcss gatsby-plugin-postcss
```

#### Enable the Gatsby PostCSS plugin

In your `gatsby-config.js` file, enable `gatsby-plugin-postcss`. See [the plugin's documentation](https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/) for more information.

gatsby-config.js

```
module.exports = {  plugins: [    'gatsby-plugin-postcss',    // ...  ],}
```

#### Configure PostCSS Plugins

Create a `postcss.config.js` file in the root of your project and add the `@tailwindcss/postcss` plugin to your PostCSS configuration.

postcss.config.js

```
module.exports = {  plugins: {    "@tailwindcss/postcss": {},  },};
```

#### Import Tailwind CSS

Create a `./src/styles/global.css` file and add an `@import` for Tailwind CSS.

global.css

```
@import "tailwindcss";
```

#### Import the CSS file

Create a `gatsby-browser.js` file at the root of your project if it doesn’t already exist, and import your newly-created `./src/styles/global.css` file.

gatsby-browser.js

```
import './src/styles/global.css';
```

#### Start your build process

Run your build process with `gatsby develop`.

Terminal

```
gatsby develop
```

#### Start using Tailwind in your project

Start using Tailwind’s utility classes to style your content.

index.js

```
export default function IndexPage() {  return (    <Layout>      <h1 className="text-3xl font-bold underline">        Hello world!      </h1>    </Layout>  )}
```
