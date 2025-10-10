<!--$-->

<!--/$-->

March 16, 2021

# Just-In-Time: The Next Generation of Tailwind CSS

![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadamwathan.f69b0b90.jpg\&w=96\&q=75)

Adam Wathan

[@](https://twitter.com/adamwathan)

<!-- -->

[adamwathan](https://twitter.com/adamwathan)

***Update**: As of Tailwind CSS v2.1, the new Just-in-Time engine is included right in Tailwind CSS itself, so you don't need the `@tailwindcss/jit` package anymore. [Learn more in the documentation](https://v2.tailwindcss.com/docs/just-in-time-mode).*

One of the hardest constraints we've had to deal with as we've improved Tailwind CSS over the years is the generated file size in development. With enough customizations to your config file, the generated CSS can reach 10mb or more, and there's only so much CSS that build tools and even the browser itself will comfortably tolerate.

For that reason, you've always had to be careful about expensive changes to your config file like adding too many extra breakpoints or enabling extra variants like `disabled` or `focus-visible`.

Today I'm super excited to share a new project we've been working on that makes these considerations a thing of the past: [**a just-in-time compiler for Tailwind CSS**](https://github.com/tailwindlabs/tailwindcss-jit).

[@tailwindcss/jit](https://github.com/tailwindlabs/tailwindcss-jit) is a new experimental library that compiles all of your CSS *on-demand* as you author your template files, instead of generating your entire stylesheet up front.

This comes with a lot of advantages:

- **Lightning fast build times**. Tailwind can take 3–8s to initially compile using our CLI, and upwards of 30–45s in webpack projects because webpack struggles with large CSS files. This library can compile even the biggest projects in about 800ms *(with incremental rebuilds as fast as 3ms)*, no matter what build tool you're using.
- **Every variant is enabled out of the box**. Variants like `focus-visible`, `active`, `disabled`, and others are not normally enabled by default due to file-size considerations. Since this library generates styles on demand, you can use any variant you want, whenever you want. You can even stack them like `sm:hover:active:disabled:opacity-75`. Never configure your variants again.
- **Generate arbitrary styles without writing custom CSS.** Ever needed some ultra-specific value that wasn't part of your design system, like `top: -113px` for a quirky background image? Since styles are generated on demand, you can just generate a utility for this as needed using square bracket notation like `top-[-113px]`. Works with variants too, like `md:top-[-113px]`.
- **Your CSS is identical in development and production**. Since styles are generated as they are needed, you don't need to purge unused styles for production, which means you see the exact same CSS in all environments. Never worry about accidentally purging an important style in production again.
- **Better browser performance in development**. Since development builds are as small as production builds, the browser doesn't have to parse and manage multiple megabytes of pre-generated CSS. In projects with heavily extended configurations this makes dev tools a lot more responsive.

Try it today by installing `@tailwindcss/jit` and swapping it into your PostCSS configuration:

```
npm install -D @tailwindcss/jit tailwindcss postcss autoprefixer
```

```
// postcss.config.jsmodule.exports = {  plugins: {    "@tailwindcss/jit": {},    autoprefixer: {},  },};
```

We're shipping it as a separate library for now, but once we've worked out all the kinks we're going to roll it right back into `tailwindcss` behind a configuration option, and we're aiming to make it the default in Tailwind CSS v3.0 later this year.

[Learn more about the project on GitHub](https://github.com/tailwindlabs/tailwindcss-jit), then install it, play with it, bend it, break it, and let us know what you think!

Ready to try it out? [Get started →](https://github.com/tailwindlabs/tailwindcss-jit)

Get all of our updates directly to your inbox.\
Sign up for our newsletter.
---------------------------

Subscribe

<!--$-->

<!--/$-->
