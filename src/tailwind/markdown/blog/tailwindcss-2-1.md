<!--$-->

<!--/$-->

April 6, 2021

# Tailwind CSS v2.1

![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadamwathan.f69b0b90.jpg\&w=96\&q=75)

Adam Wathan

[@](https://twitter.com/adamwathan)

<!-- -->

[adamwathan](https://twitter.com/adamwathan)

The first new feature update since Tailwind CSS v2.0 is here and loaded with lots of cool stuff! We've merged the new JIT engine to core, added first-class support for composable CSS filters, added blending mode utilities, and a bunch more.

Here are some of the highlights:

- [JIT engine in core](#jit-engine-in-core)
- [Composable CSS filters API](#new-filter-and-backdrop-filter-utilities)
- [New blending mode utilities](#new-blending-mode-utilities)
- [New isolation utilities](#new-isolation-utilities)

For the full details, [check out the release notes](https://github.com/tailwindlabs/tailwindcss/releases/tag/v2.1.0) on GitHub.

***

[]()

## [JIT engine in core](#jit-engine-in-core)

The [brand-new JIT engine we announced in March](https://blog.tailwindcss.com/just-in-time-the-next-generation-of-tailwind-css) has now been merged into core, and is available as an opt-in feature using a new `mode` option in your `tailwind.config.js` file:

```
module.exports = {  mode: "jit",  purge: [    // ...  ],  // ...};
```

**This feature is still in preview** which means some details may change as we iron out the kinks, and it's not subject to semantic versioning.

If you were using `@tailwindcss/jit` before, you can now migrate to Tailwind CSS v2.1 instead, as that's where all new development on the engine will happen.

Read the [Just-in-Time Mode documentation](https://v2.tailwindcss.com/docs/just-in-time-mode) to learn more.

[]()

## [Composable CSS filters API](#composable-css-filters-api)

This is a huge one — we've finally added first-class support for CSS filters!

They work a lot like our `transform` utilities, where you use `filter` to enable filters, and combine it with utilities like `grayscale`, `blur-lg`, or `saturate-200` to compose filters on the fly.

```
<div class="blur-md grayscale invert filter ...">  <!-- ... --></div>
```

...and here's what `backdrop-filter` looks like:

```
<div class="backdrop-blur backdrop-brightness-50 backdrop-filter ...">  <!-- ... --></div>
```

Check out the [filter](https://v2.tailwindcss.com/docs/filter) and [backdrop-filter](https://v2.tailwindcss.com/docs/backdrop-filter) to learn more. We'll add a bunch of helpful visual examples there soon!

[]()

## [New blending mode utilities](#new-blending-mode-utilities)

We've added brand new utilities for `mix-blend-mode` and `background-blend-mode`:

```
<div class="mix-blend-multiply ...">  <!-- ... --></div>
```

Check out [the documentation](https://v2.tailwindcss.com/docs/mix-blend-mode) to learn more.

[]()

## [New isolation utilities](#new-isolation-utilities)

We've added new `isolate` and `isolation-auto` utilities for working with the `isolation` property:

```
<div class="isolate ...">  <!-- ... --></div>
```

This can be really helpful for scoping blending mode features or z-index adjustments and is super powerful.

Check out [the documentation](https://v2.tailwindcss.com/docs/isolation) to learn more.

I also highly recommend [this great article by Josh Comeau](https://www.joshwcomeau.com/css/stacking-contexts/#airtight-abstractions-with-isolation) to see it in action.

***

## [Upgrading](#upgrading)

Tailwind CSS v2.1 is an incremental upgrade with no breaking changes, so to upgrade you just need to run:

```
npm install tailwindcss@latest
```

If you were previously using `@tailwindcss/jit`, you can now switch back to `tailwindcss` and update your PostCSS configuration accordingly.

Ready to upgrade? [Get it from npm →](https://npmjs.com/tailwindcss)

This migration ensures the content adheres to the new v4 format, utilizing the components and codes specified for examples, excerpts, and code blocks.

Get all of our updates directly to your inbox.\
Sign up for our newsletter.
---------------------------

Subscribe

<!--$-->

<!--/$-->
