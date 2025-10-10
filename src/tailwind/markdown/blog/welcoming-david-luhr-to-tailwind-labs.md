February 2, 2021

# Welcoming David Luhr to Tailwind Labs

![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadamwathan.f69b0b90.jpg\&w=96\&q=75)

Adam Wathan

[@adamwathan](https://twitter.com/adamwathan)

We started working with [David Luhr](https://twitter.com/david_luhr) last summer on a project-by-project basis to help us develop a Figma version of [Tailwind UI](https://tailwindui.com) *(almost ready!)*, as well as to leverage his accessibility expertise when building Tailwind UI templates, ensuring we were following best practices and delivering markup that would work for everyone, no matter what tools they use to browse the web.

Today we're excited to share that David has joined the team full-time!

David is an accessibility expert, a world-class front-end developer, a gifted educator, and a compassionate leader. He's performed black magic with Tailwind UI in Figma that Steve and I didn't even know was possible, and he's been doing an incredible job turning Steve's Tailwind UI designs into pixel-perfect HTML and CSS that works for everyone.

Say what you will about HTML being easy to learn, it's a bear to master. David knows things about the spec that I've never encountered in 20 years of building things for the web, and has so much built up knowledge from his own real-world device testing that it would take years of dedicated focus to even come close to writing markup as bullet-proof as what David produces by default.

As a company that specializes in helping developers build better interfaces faster, it's our responsibility to make sure that the tools we build follow accessibility best practices by default, and we couldn't be more grateful to have David on the team to help us live up to that responsibility.

One of my favorite problems David has helped me solve is developing the new [ring utilities](https://v2.tailwindcss.com/docs/ring-offset-width) in Tailwind CSS v2.0. When David first started auditing our work in Tailwind UI for accessibility improvements, he mentioned that some of our focus styles were not obvious enough. It turns out that just changing a button's *color* for example isn't good enough — it's important that something *new* is drawn to the screen (like a focus ring) that is really easy for anyone to see.

Trying to come up with a way to solve this was hard. It needed to look good, needed to be straightforward to do with utility classes, and needed to be possible to actually implement in Tailwind internally. David suggested we study the interfaces of things like video games consoles or the Apple TV for inspiration since you can't interact with them with a mouse, and that's where we landed on trying to build some sort of customizable offset focus ring.

Coming up with an implementation for this was hard because it needed to be implemented with a box shadow, and we had to somehow make it composable with the existing box shadow API. There were many moments where I got frustrated and I might have even given up on it if I was working on it alone, but ultimately we figured it out and now it's one of my favorite features in the framework.

David will be leading component and design asset development on Tailwind UI, and providing accessibility guidance on our other projects like Tailwind CSS and Headless UI. It's been an amazing experience working with him over the last 6 months and we are so excited to have him on the team full-time.

Want to keep up with David's work? [Follow David on Twitter →](https://twitter.com/david_luhr)

Get all of our updates directly to your inbox.\
Sign up for our newsletter.
---------------------------

Subscribe
