<!--$-->

<!--/$-->

June 1, 2024

# Automatically clean up whitespace and duplicate class names

![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadamwathan.f69b0b90.jpg\&w=96\&q=75)

Adam Wathan

[@](https://twitter.com/adamwathan)

<!-- -->

[adamwathan](https://twitter.com/adamwathan)

![Catalyst application layout preview](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard.2d498a85.jpg\&w=3840\&q=75)

We just released a new version of `prettier-plugin-tailwindcss` which adds support for removing unnecessary whitespace and duplicate classes when sorting.

***

## [Cleaning up unnecessary whitespace](#cleaning-up-unnecessary-whitespace)

When you're copying around class names or deleting a class name from the middle of a list, it's easy to end up with some extra whitespace that needs to be cleaned up.

Now our Prettier plugin will handle this for you automatically, so you don't need to clean it up yourself.

[](https://assets.tailwindcss.com/blog/2024-05-30-prettier-plugin-collapse-whitespace/collapse-whitespace.mp4)

***

## [Removing duplicate classes](#removing-duplicate-classes)

Our [VS Code extension](/docs/editor-setup#intellisense-for-vs-code) has warned you about duplicate class names for a long time, but now our Prettier plugin can remove those duplicate classes for you automatically.

[](https://assets.tailwindcss.com/blog/2024-05-30-prettier-plugin-collapse-whitespace/remove-duplicates.mp4)

***

To start playing with these improvements in your own projects, just install the latest version:

```
npm i prettier-plugin-tailwindcss@latest
```

If you run into any issues, let us know on [GitHub](https://github.com/tailwindlabs/prettier-plugin-tailwindcss/)!

Get all of our updates directly to your inbox.\
Sign up for our newsletter.
---------------------------

Subscribe

<!--$-->

<!--/$-->
