January 25, 2021

# Multi-line truncation with @tailwindcss/line-clamp

![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadamwathan.f69b0b90.jpg\&w=96\&q=75)

Adam Wathan

[@adamwathan](https://twitter.com/adamwathan)

A few weeks back we released [`@tailwindcss/line-clamp`](https://github.com/tailwindlabs/tailwindcss-line-clamp), an official Tailwind CSS plugin for truncating text to a specific number of lines.

Imagine you're implementing a beautiful design you or someone on your team carefully crafted in Figma. You've nailed all the different layouts at each breakpoint, perfected the whitespace and typography, and the photography you're using is really bringing the design to life.

It looks totally amazing — until you connect it your actual production content and realize that your beautiful grid of blog cards falls apart because, of course, *real* article excerpts aren't all magically exactly three lines long, and now each card is a different height.

Sound familiar? If so, the line-clamp plugin is here to save your bacon.

First, install the plugin and add it to your `tailwind.config.js` file:

```
npm install @tailwindcss/line-clamp
```

```
module.exports = {  // ...  plugins: [    // ...    require("@tailwindcss/line-clamp"),  ],};
```

Then all you need to do is add a `line-clamp-{n}` utility to any block of text to automatically truncate to *n* lines with a trailing ellipsis:

```
<p class="line-clamp-3">  Here's a block of text from a blog post that isn't conveniently three lines long like you designed for originally.  It's probably like 6 lines on mobile or even on desktop depending on how you have things laid out. Truly a big pain in  the derriere, and not the sort of thing you expected to be wasting your time trying to deal with at 4:45pm on a Friday  am I right? You've got tickets to SmackDown and you heard there's gonna be a dark match with that local guy from two  towns over that your cousin went to high school with before the show starts, and you're gonna miss it if you're not  there early.</p>
```

For more details, [check out the documentation](https://github.com/tailwindlabs/tailwindcss-line-clamp/) over on the GitHub repository.

Get all of our updates directly to your inbox.\
Sign up for our newsletter.
---------------------------

Subscribe
