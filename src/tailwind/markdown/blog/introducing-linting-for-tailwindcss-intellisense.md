June 24, 2020

# Introducing linting for Tailwind CSS IntelliSense

![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbradlc.153c9e2b.jpg\&w=96\&q=75)

Brad Cornes

[@bradlc](https://twitter.com/bradlc)

Today we’re releasing a new version of the [Tailwind CSS IntelliSense extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) that adds Tailwind-specific linting to both your CSS and your markup.

## [Detecting errors in your CSS](#detecting-errors-in-your-css)

Tailwind already detects CSS errors, for example when you mistype a screen name in the `@screen` directive. The linting feature for Tailwind CSS IntelliSense surfaces these errors and displays them in context, directly inside your editor. The linter will validate your `@tailwind`, `@screen`, `@variants` and `@apply` directives, as well as any `theme` function calls:

![Screen capture showing CSS linting in action](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcss%402x.7948cb9f.png\&w=3840\&q=75)

## [Catching conflicts in your HTML](#catching-conflicts-in-your-html)

There is one more lint rule which analyses class lists in your template files and highlights any instances where utilities seem to be in conflict. For example you probably didn’t intend to have `mt-4` and `mt-6` in the same class list!

![Screen capture showing markup linting in action](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhtml%402x.aaedd5de.png\&w=3840\&q=75)

## [Quick fixes included](#quick-fixes-included)

To make it as easy as possible to fix any issues, all of the lint rules have their own "quick fixes" which can be triggered directly within Visual Studio Code. If you accidentally typed `@screen small` instead of `@screen sm`, the editor can automatically replace `small` with `sm` for you!

As well as simple text replacements there’s also some more interesting quick fixes for the more complex lint rules. Take a look at how the extension can automatically refactor an invalid `@apply` directive:

[](https://assets.tailwindcss.com/blog/introducing-linting-for-tailwindcss-intellisense/apply-quick-fix.mp4)

## [Configuration](#configuration)

We think you’ll love the new lint feature, but if you don’t, or you just want to tweak some behavior, we’ve got you covered. You can decide how each rule violation is treated: is it an `error`, or just a `warning`, or do you want to `ignore` the rule altogether? If you really want to you can disable linting entirely using the new `tailwindCSS.validate` setting.

Check out the [extension readme](https://github.com/tailwindcss/intellisense#tailwindcssvalidate) for more details about configuring the lint rules to suit your workflow.

## [Conclusion](#conclusion)

Linting is available now in `v0.4.0` of Tailwind CSS IntelliSense! If you already have the extension you may need to reload Visual Studio Code to get the update, and if you don’t you can install it via the [extension marketplace](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).

This is the very first iteration of this feature, and we’d love to hear your feedback! Do you have an idea for a new lint rule? Let us know!

Want to talk about this post? [Discuss this on GitHub →](https://github.com/tailwindcss/tailwindcss/discussions/1956)

Get all of our updates directly to your inbox.\
Sign up for our newsletter.
---------------------------

Subscribe
