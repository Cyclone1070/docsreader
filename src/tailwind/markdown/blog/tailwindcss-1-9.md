<!--$-->

<!--/$-->

October 14, 2020

# Tailwind CSS v1.9.0

![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadamwathan.f69b0b90.jpg\&w=96\&q=75)

Adam Wathan

[@](https://twitter.com/adamwathan)

<!-- -->

[adamwathan](https://twitter.com/adamwathan)

We just released Tailwind CSS v1.9 which adds support for configuration presets, useful new CSS grid utilities, extended border radius, rotate, and skew scales, helpful accessibility improvements, and more!

Let's dig in to the highlights...

- [Configuration presets](#configuration-presets)
- [Utilities for `grid-auto-columns` and `grid-auto-rows`](#utilities-for-grid-auto-columns-and-grid-auto-rows)
- [Focus indicator improvements and configurable outlines](#focus-indicator-improvements-and-configurable-outlines)
- [Extended border radius, rotate, and skew scales](#extended-border-radius-rotate-and-skew-scales)
- [Upgrading to v1.9](#upgrading)

For the complete summary of changes [check out the release notes on GitHub](https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.9.0).

***

## [Configuration presets](#configuration-presets)

Tailwind CSS v1.9 adds a new `presets` key to the `tailwind.config.js` file that makes it possible to configure a custom "base configuration" for your projects.

```
module.exports = {  presets: [require("@my-company/tailwind-base")],  theme: {    extend: {      // Project specific overrides...    },  },};
```

Whatever you provide under `presets` *replaces* the default Tailwind base configuration, so you can define your own totally custom starting point. This is really helpful if you're part of a team that works on multiple different Tailwind projects that all need to share the same brand colors, font customizations, or spacing scale.

You can even list multiple presets, which are merged together from top to bottom:

```
module.exports = {  presets: [require("@my-company/tailwind-base"), require("@my-company/tailwind-marketing")],  theme: {    extend: {      // Project specific overrides...    },  },};
```

The logic to merge your project-specific configuration with your custom base configuration is exactly the same as how things work with the default configuration, so all of the features you're used to like `extend` still work exactly the way you'd expect.

***

## [Utilities for grid-auto-columns and grid-auto-rows](#utilities-for-grid-auto-columns-and-grid-auto-rows)

We've added new `gridAutoColumns` and `gridAutoRows` core plugins that add new utilities for the `grid-auto-columns` and `grid-auto-rows` CSS properties respectively.

These utilities let you control the size of implicitly-created grid columns and rows. Use them to set a default column/row size whenever you don't specify a number of columns/rows for your grid.

```
<div class="grid auto-cols-max grid-flow-col">  <div>1</div>  <div>2</div>  <div>3</div></div>
```

Here's a list of the new utilities that are included out of the box:

| Class            | CSS                                  |
| ---------------- | ------------------------------------ |
| `auto-cols-auto` | `grid-auto-columns: auto;`           |
| `auto-cols-min`  | `grid-auto-columns: min-content;`    |
| `auto-cols-max`  | `grid-auto-columns: max-content;`    |
| `auto-cols-fr`   | `grid-auto-columns: minmax(0, 1fr);` |
| `auto-rows-auto` | `grid-auto-rows: auto;`              |
| `auto-rows-min`  | `grid-auto-rows: min-content;`       |
| `auto-rows-max`  | `grid-auto-rows: max-content;`       |
| `auto-rows-fr`   | `grid-auto-rows: minmax(0, 1fr);`    |

We include `responsive` variants for these utilities by default, and they can be configured just like you'd expect under the `gridAutoColumns` and `gridAutoRows` sections of your `tailwind.config.js` file.

***

## [Focus indicator improvements and configurable outlines](#focus-indicator-improvements-and-configurable-outlines)

We've updated the `outline-none` class to render a *transparent* outline by default instead of rendering *no* outline. This is really helpful for people who use [Windows high contrast mode](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/), where custom box-shadow-based focus styles are completely invisible.

Now you can create custom focus styles using box shadows *safely*, without making your sites difficult to use for people with low vision.

```
<button class="focus:shadow-outline focus:outline-none ...">  <!-- ... --></button>
```

We've also added two new outline styles: `outline-white` and `outline-black`.

These utilities render a 2px dotted outline in their respective color, with a 2px offset. They work great as general purpose unobtrusive focus indicators that make it easy for keyboard users to see which element on the screen is selected, without clashing too much with your design.

We've included both `white` and `black` variations so you can always be sure to have an option available that has sufficient contrast against whatever background color you're using.

```
<!-- Use `outline-white` on dark backgrounds --><div class="bg-gray-900">  <button class="focus:outline-white ...">    <!-- ... -->  </button></div><!-- Use `outline-black` on light backgrounds --><div class="bg-white">  <button class="focus:outline-black ...">    <!-- ... -->  </button></div>
```

Of course, you're also free to create whatever custom focus styles you like using background colors, box shadows, borders, whatever. These are great if you don't want to get too fancy though.

We've made the `outline` property configurable as well, so you can now define custom outlines in your `tailwind.config.js` file:

```
module.exports = {  theme: {    extend: {      outline: {        blue: "2px solid #0000ff",      },    },  },};
```

You can also provide an `outline-offset` value for any custom outline utilities using a tuple of the form `[outline, outlineOffset]`:

```
module.exports = {  theme: {    extend: {      outline: {        blue: ["2px solid #0000ff", "1px"],      },    },  },};
```

***

## [Extended border radius, rotate, and skew scales](#extended-border-radius-rotate-and-skew-scales)

We've added three new border radius utilities by default:

| Class         | Value             |
| ------------- | ----------------- |
| `rounded-xl`  | `0.75rem`*(12px)* |
| `rounded-2xl` | `1rem`*(16px)*    |
| `rounded-3xl` | `1.5rem`*(24px)*  |

...and an extended set of smaller values for both the `rotate` and `skew` utilities:

| Class       | Value   |
| ----------- | ------- |
| `rotate-1`  | `1deg`  |
| `rotate-2`  | `2deg`  |
| `rotate-3`  | `3deg`  |
| `rotate-6`  | `6deg`  |
| `rotate-12` | `12deg` |
| `skew-1`    | `1deg`  |
| `skew-2`    | `2deg`  |

Negative versions are included for all of these as well. Super handy for more subtle rotate and skew effects!

***

## [Upgrading](#upgrading)

Tailwind CSS v1.9 is a non-breaking minor release, so to upgrade all you need to do is run:

```
# npmnpm install tailwindcss@^1.9# yarnyarn add tailwindcss@^1.9
```

We have promoted two previously experimental features (`defaultLineHeights` and `standardFontWeights`) to `future`, so we also recommend [opting-in to those changes now](https://v1.tailwindcss.com/docs/upcoming-changes#default-line-heights-for-font-size-utilities) to simplify the upgrade to Tailwind CSS v2.0 later this fall.

Want to talk about this post? [Discuss this on GitHub →](https://github.com/tailwindcss/tailwindcss/discussions/2552)

Get all of our updates directly to your inbox.\
Sign up for our newsletter.
---------------------------

Subscribe

<!--$-->

<!--/$-->
