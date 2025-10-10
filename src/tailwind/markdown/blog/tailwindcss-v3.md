December 10, 2021

# Tailwind CSS v3.0

![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadamwathan.f69b0b90.jpg\&w=96\&q=75)

Adam Wathan

[@adamwathan](https://twitter.com/adamwathan)

Tailwind CSS v3.0 is here — bringing incredible performance gains, huge workflow improvements, and a seriously ridiculous number of new features.

For a tour of some of the coolest new features, check out the ["What's new in Tailwind CSS v3.0"](https://www.youtube.com/watch?v=mSC6GwizOag) video on our YouTube channel.

Tailwind CSS v3.0 has got to be our most exciting release ever, including improvements like:

- [Just-in-Time, all the time](#just-in-time-all-the-time) — lightning fast build times, stackable variants, arbitrary value support, better browser performance, and more.
- [Every color out of the box](#every-color-out-of-the-box) — including all of the extended palette colors like cyan, rose, fuchsia, and lime, and fifty shades of \~\~grey\~\~ gray.
- [Colored box shadows](#colored-box-shadows) — for fun glow and reflection effects, and more natural shadows on colored backgrounds.
- [Scroll snap API](#scroll-snap-api) — a comprehensive and composable set of utilities for CSS-only scroll snapping.
- [Multi-column layout](#multi-column-layout) — so you can finally build that online newspaper you've been dreaming about.
- [Native form control styling](#native-form-control-styling) — make checkboxes, radio buttons, and file inputs match your brand without reinventing the wheel.
- [Print modifier](#print-modifier) — control how your site looks when someone prints it, right from your HTML.
- [Modern aspect ratio API](#modern-aspect-ratio-api) — no more padding hacks, well unless you need to support Safari 14, which you probably do, but still.
- [Fancy underline styles](#fancy-underline-styles) — the missing piece to making that side-project of yours finally take off.
- [RTL and LTR modifiers](#rtl-and-ltr-modifiers) — for complete control when building multi-directional websites.
- [Portrait and landscape modifiers](#portrait-and-landscape-modifiers) — honestly just because they were really easy to add.
- [Arbitrary properties](#arbitrary-properties) — now Tailwind supports CSS properties we've never even heard of.
- [Play CDN](#play-cdn) — the new Just-in-Time engine squeezed into a CDN script that runs right in the browser.
- **Tons of other utilities** — including support for touch-action, will-change, flex-basis, text-indent, scroll-behavior, and more.

Plus a beautiful, brand-spanking new [documentation website](https://tailwindcss.com), loaded with improved content and examples on every page.

To start playing with Tailwind CSS v3.0 today, grab the latest release from npm:

```
npm install -D tailwindcss@latest postcss autoprefixer
```

...or head over to [Tailwind Play](https://play.tailwindcss.com) to try out the latest features right in the browser.

Tailwind CSS v3.0 is a new major version of the framework and there are some minor breaking changes, but we've worked really hard to make the upgrade process as smooth as possible, and for most projects you should be able to install v3.0 without making any changes.

For example, [Tailwind UI](https://tailwindui.com) is probably the biggest Tailwind project on earth and every template is totally compatible with both v2 and v3 with no changes required.

For more details and step-by-step instructions on migrating to v3.0, check out the [upgrade guide](https://v3.tailwindcss.com/docs/upgrade-guide).

***

## [Just-in-Time, all the time](#just-in-time-all-the-time)

Back in March we introduced the brand new [Just-in-Time engine](/blog/just-in-time-the-next-generation-of-tailwind-css) which brought huge performance gains, unlocked exciting new features like [arbitrary values](https://v3.tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values), and made complex variant configurations a thing of the past.

In Tailwind CSS v3.0, the new engine has gone stable and replaced the classic engine, so every Tailwind project can benefit from these improvements out of the box.

***

## [Every color out of the box](#every-color-out-of-the-box)

Before the new engine, we always had to be careful with CSS file size in development, and one of the biggest trade-offs we had to make was carefully limiting the color palette.

In v3.0, every single color in the extended color palette is enabled by default, including lime, cyan, sky, fuchsia, rose, and fifty shades of gray.

Check out the [color palette reference](https://v3.tailwindcss.com/docs/customizing-colors) to learn more.

***

## [Colored box shadows](#colored-box-shadows)

People have been asking us for colored shadows for years, but supporting it in a composable way that actually made sense was way harder than I expected it to be.

After about five false starts, we finally figured out an approach we liked, and now Tailwind CSS v3.0 includes colored shadows:

shadow-cyan-500/50

Subscribe

shadow-blue-500/50

Subscribe

shadow-indigo-500/50

Subscribe

```
<button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button><button class="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button><button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button>
```

Learn more in the [Box Shadow Color](https://v3.tailwindcss.com/docs/box-shadow-color) documentation.

***

## [Scroll snap API](#scroll-snap-api)

We've added a comprehensive set of utilities for the CSS Scroll Snap module, giving you the power to build very rich scroll snapping experiences directly in your HTML:

Scroll in the grid of images to see the expected behavior

snap point

![](https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

![](https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

![](https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

![](https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

![](https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

![](https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

```
<div class="snap-x ...">  <div class="snap-center ...">    <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?auto=format&fit=crop&w=320&h=160&q=80" />  </div>  <div class="snap-center ...">    <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&w=320&h=160&q=80" />  </div>  <div class="snap-center ...">    <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?auto=format&fit=crop&w=320&h=160&q=80" />  </div>  <div class="snap-center ...">    <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=320&h=160&q=80" />  </div>  <div class="snap-center ...">    <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?auto=format&fit=crop&w=320&h=160&q=80" />  </div>  <div class="snap-center ...">    <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?auto=format&fit=crop&w=320&h=160&q=80" />  </div></div>
```

Start with the new [Scroll Margin](https://v3.tailwindcss.com/docs/scroll-margin) utilities and work your way through the whole API to learn more.

***

## [Multi-column layout](#multi-column-layout)

We've added support for [columns](https://developer.mozilla.org/en-US/docs/Web/CSS/columns) — the newspaper layout kind. These are actually super useful, and are great for things like footer navigation layouts too.

Expedita quo ea quod laborum ullam ipsum enim. Deleniti commodi et. Nam id laborum placeat natus eum. Aliquid aut aut soluta nesciunt culpa magni. Velit possimus autem et aut repudiandae culpa rerum. Qui blanditiis ut qui quia expedita necessitatibus sed. Autem sed ut saepe doloremque aut placeat voluptas ipsum.

Eligendi error nisi recusandae velit numquam nihil aperiam enim. Eum et molestias. Id qui cum veritatis id ea quidem ea rerum saepe. Iste itaque fugiat sequi. Voluptatem quae minus. Maxime ullam ea praesentium recusandae vero est quas. Quia minima fugiat aut laborum impedit facere autem sit qui. Et eos et ullam necessitatibus. Ut voluptatem saepe natus itaque maiores sit repellat aut natus assumenda.

Blanditiis ipsa officia dolores exercitationem nemo beatae voluptatem eos rerum velit asperiores. Non quisquam accusantium officia nisi eius necessitatibus.

Quaerat quia ad voluptatem laudantium natus. Aut ipsa et numquam delectus aliquam. Recusandae libero consequatur dolorum. Animi culpa rerum molestiae ut non et molestias aliquid aut nemo. Sint dolorem dolorem. Iure dolorum amet ea sit perferendis.

Et illum ut officia nisi commodi. Quia et mollitia possimus modi. Delectus aliquid quam eos consectetur.

Accusantium et et qui non sed modi. Corrupti deserunt culpa eos vitae neque aperiam. Repellat tenetur fugit.

Deleniti distinctio ad corrupti nisi. Mollitia qui est natus cumque. Officia dolor qui perferendis necessitatibus saepe excepturi asperiores quos voluptas. Est suscipit facere nihil expedita suscipit quibusdam. Quod cupiditate vero distinctio. Sed est soluta nostrum magnam et saepe blanditiis aut. Vero dolores repellendus et libero minima explicabo provident. Culpa aut dolorem est.

```
<div class="columns-1 sm:columns-3 ...">  <p>...</p>  <!-- ... --></div>
```

Learn more in the [columns](https://v3.tailwindcss.com/docs/columns) documentation — and check out the new [break-after/inside/before](https://v3.tailwindcss.com/docs/break-after) utilities as well.

***

## [Native form control styling](#native-form-control-styling)

We've added support for the new accent-color property, as well as a modifier for styling file input buttons to make it easier than ever to put your own touch on native form controls:

![Current profile photo](https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=1361\&q=80)

Choose profile photo

Yes, send me all your stupid updates

```
<form>  <div class="flex items-center space-x-6">    <div class="shrink-0">      <img        class="h-16 w-16 rounded-full object-cover"        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"        alt="Current profile photo"      />    </div>    <label class="block">      <span class="sr-only">Choose profile photo</span>      <input        type="file"        class="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"      />    </label>  </div>  <label class="mt-6 flex items-center justify-center space-x-2 text-sm font-medium text-slate-600">    <input type="checkbox" class="accent-violet-500" checked />    <span>Yes, send me all your stupid updates</span>  </label></form>
```

Learn more in the [accent color](https://v3.tailwindcss.com/docs/accent-color) and [file input buttons](https://v3.tailwindcss.com/docs/hover-focus-and-other-states#file-input-buttons) documentation.

***

## [Print modifier](#print-modifier)

The new `print` modifier lets you style how your site should look when \~\~animals\~\~ people print it:

```
<div>  <article class="print:hidden">    <h1>My Secret Pizza Recipe</h1>    <p>This recipe is a secret, and must not be shared with anyone</p>    <!-- ... -->  </article>  <div class="hidden print:block">Are you seriously trying to print this? It's secret!</div></div>
```

I'd say "learn more in the [print styles documentation](https://v3.tailwindcss.com/docs/hover-focus-and-other-states#print-styles)" but it wouldn't be true.

***

## [Modern aspect ratio API](#modern-aspect-ratio-api)

We've added support for the new native `aspect-ratio` property, which is starting to see solid browser support:

```
<iframe class="aspect-video w-full ..." src="https://www.youtube.com/..."></iframe>
```

Learn more in the [aspect ratio](https://v3.tailwindcss.com/docs/aspect-ratio) documentation.

***

## [Fancy underline styles](#fancy-underline-styles)

Now you can change underline colors, thickness, and more:

I’m Derek, an astro-engineer based in Tatooine. I like to build X-Wings at [My Company, Inc](#). Outside of work, I like to [watch pod-racing](#) and have [light-saber](#) fights.

```
<p>  I’m Derek, an astro-engineer based in Tatooine. I like to build X-Wings at  <a href="#" class="underline decoration-sky-500 decoration-2"> My Company, Inc </a>. Outside of work, I like to{" "}  <a href="#" class="underline decoration-pink-500 decoration-dotted decoration-2"> watch pod-racing </a> and have  <a href="#" class="underline decoration-indigo-500 decoration-wavy decoration-2"> light-saber </a>{" "} fights.</p>
```

Learn more in the [text decoration color](https://v3.tailwindcss.com/docs/text-decoration-color), [text decoration style](https://v3.tailwindcss.com/docs/text-decoration-style), [text decoration thickness](https://v3.tailwindcss.com/docs/text-decoration-thickness), and [text underline offset](https://v3.tailwindcss.com/docs/text-underline-offset) documentation.

***

## [RTL and LTR modifiers](#rtl-and-ltr-modifiers)

We've added experimental support for multi-directional layouts with new `rtl` and `ltr` modifiers:

Left-to-right

![](https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1\&ixid=eyJhcHBfaWQiOjEyMDd9\&auto=format\&fit=facearea\&facepad=2\&w=256\&h=256\&q=80)

Tom Cook

Director of Operations

Right-to-left

![](https://images.unsplash.com/photo-1563833717765-00462801314e?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=facearea\&facepad=2\&w=256\&h=256\&q=80)

تامر كرم

الرئيس التنفيذي

```
<div class="group flex items-center">  <img class="h-12 w-12 shrink-0 rounded-full" src="..." alt="" />  >  <div class="ltr:ml-3 rtl:mr-3">    <p class="text-sm font-medium text-slate-700 group-hover:text-slate-900">...</p>    <p class="text-sm font-medium text-slate-500 group-hover:text-slate-700">...</p>  </div></div>
```

Learn more in the [RTL support](https://v3.tailwindcss.com/docs/hover-focus-and-other-states#rtl-support) documentation.

***

## [Portrait and landscape modifiers](#portrait-and-landscape-modifiers)

Use the new `portrait` and `landscape` modifiers to conditionally add styles when the viewport is in a specific orientation:

```
<div>  <div class="portrait:hidden">    <!-- ... -->  </div>  <div class="landscape:hidden">    <p>This experience is designed to be viewed in landscape. Please rotate your device to view the site.</p>  </div></div>
```

The [documentation for this feature](https://v3.tailwindcss.com/docs/hover-focus-and-other-states#viewport-orientation) has even less content than this section of this post does.

***

## [Arbitrary properties](#arbitrary-properties)

This might be illegal but we've made it possible to add totally arbitrary CSS that you can combine with modifiers like `hover`, `lg`, and whatever else:

```
<div class="[mask-type:luminance] hover:[mask-type:alpha]">  <!-- ... --></div>
```

This is what inline styles want to be when they grow up. Learn more in the [arbitrary properties](https://v3.tailwindcss.com/docs/adding-custom-styles#arbitrary-properties) documentation.

***

## [Play CDN](#play-cdn)

There's no way to make a sensible CSS-based CDN build for Tailwind CSS v3.0 so we had to do something different — we built a JavaScript library.

```
<!DOCTYPE html><html lang="en">  <head>    <meta charset="utf-8" />    <meta name="viewport" content="width=device-width, initial-scale=1.0" />    <title>Example</title>    <script src="https://cdn.tailwindcss.com/"></script>  </head>  <body>    <!-- -->  </body></html>
```

Add that script tag to any HTML document and you can use every Tailwind feature, right in the browser. It's meant for development purposes only, but it sure is a fun way to build little demos or hack on a new idea.

Learn more in the [Play CDN](https://v3.tailwindcss.com/docs/installation/play-cdn) documentation.

***

So there it is — Tailwind CSS v3.0! Head over to the new [documentation site](/) to get started with it today.

For a comprehensive list of every single change, check out the [changelog](https://github.com/tailwindlabs/tailwindcss/blob/master/CHANGELOG.md) on GitHub.

Get all of our updates directly to your inbox.\
Sign up for our newsletter.
---------------------------

Subscribe
