<!--$-->

<!--/$-->

December 18, 2021

# Effortless Typography, Even in Dark Mode

![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadamwathan.f69b0b90.jpg\&w=96\&q=75)

Adam Wathan

[@](https://twitter.com/adamwathan)

<!-- -->

[adamwathan](https://twitter.com/adamwathan)

Today we're announcing the next version of the [Tailwind CSS Typography plugin](https://v3.tailwindcss.com/docs/typography-plugin), which brings easy dark mode support, a brand new customization API, and the `not-prose` class I wasn't sure we'd ever figure out how to support.

For a full tour of everything that's new, check out [the official release video](https://www.youtube.com/watch?v=GEYkwfYytAM) on our YouTube channel.

Tailwind CSS Typography v0.5 is designed for Tailwind CSS v3.0, so make sure you're on the latest version of Tailwind, then install the new plugin release from npm:

```
npm install -D @tailwindcss/typography@latest
```

To learn more about everything the plugin provides, check out our update [typography plugin](https://v3.tailwindcss.com/docs/typography-plugin) documentation.

***

## [Easy dark mode support](#easy-dark-mode-support)

We've added a `prose-invert` class you can use to easily swap out your typography colors in dark mode:

```
<body class="bg-white dark:bg-gray-900">  <article class="prose dark:prose-invert">{{ markdown }}</article></body>
```

The dark themes are hand-crafted by our expert design team, and automatically adapt to whatever gray scale you're using.

***

## [Pick your gray scale](#pick-your-gray-scale)

Tailwind CSS v3.0 ships with five different sets of grays by default, and the updated typography plugin includes classes for each one, making it easy to match your typography to the rest of your site:

```
<article class="prose prose-slate">{{ markdown }}</article>
```

We've simplified how we define color themes internally too, which makes it easier to add your own if you need to.

Check out the [documentation](https://v3.tailwindcss.com/docs/typography-plugin#choosing-a-gray-scale) to learn more.

***

## [HTML-based customization API](#html-based-customization-api)

We've added tons of modifiers you can use to tweak specific elements in your prose styles, directly in your HTML:

<!-- -->

```
<article class="prose prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">  {{ markdown }}</article>
```

This makes it easy to do things like style links to match your brand, add a border radius to images, and tons more.

Check out the [element modifiers](https://v3.tailwindcss.com/docs/typography-plugin#element-modifiers) documentation to learn more.

***

## [Undo prose styles](#undo-prose-styles)

Ever needed to stick some non-content HTML in the middle of your content? Now you can wrap that with `not-prose` to make sure the prose styles don't interfere with it:

```
<article class="prose">  <h1>My Heading</h1>  <p>...</p>  <div class="not-prose">    <!-- Some HTML that needs to be prose-free -->  </div>  <p>...</p>  <!-- ... --></article>
```

***

Ready to try it out? Check out the [typography plugin documentation](https://v3.tailwindcss.com/docs/typography-plugin) to learn more and get started.

Get all of our updates directly to your inbox.\
Sign up for our newsletter.
---------------------------

Subscribe

<!--$-->

<!--/$-->
