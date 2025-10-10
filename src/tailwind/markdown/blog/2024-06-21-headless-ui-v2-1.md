June 22, 2024

# Headless UI v2.1: Simplified transition API and improved multi-dialog support

![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadamwathan.f69b0b90.jpg\&w=96\&q=75)

Adam Wathan

[@adamwathan](https://twitter.com/adamwathan)

![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freinink.dd880af3.jpg\&w=96\&q=75)

Jonathan Reinink

[@reinink](https://twitter.com/reinink)

![Headless UI v2.1](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard.647cc6f3.jpg\&w=3840\&q=75)

We just released Headless UI v2.1 for React, which dramatically simplifies our transition APIs and adds support for rendering multiple dialogs as siblings.

***

## [Simplified transition API](#simplified-transition-api)

We've made transitions way easier in v2.1 by adding a new `transition` prop to all of the built-in components you might want to transition, and adding data attributes for each transition stage so you can add transition styles by just throwing some classes on the target element:

```
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";function Example() {  return (    <Menu>      <MenuButton>My account</MenuButton>      <MenuItems        transition        className={`          transition ease-out          data-[closed]:scale-95 data-[closed]:opacity-0          data-[enter]:duration-200 data-[leave]:duration-300        `}      >        {/* Menu items… */}      </MenuItems>    </Menu>  );}
```

There are four data attributes you can use to target the different stages of your transitions:

- `data-closed`: The styles the element should transition from when entering and to when leaving.
- `data-enter`: Styles to apply while the element is entering, like a duration or easing curve.
- `data-leave`: Styles to apply while the element is leaving, like a duration or easing curve.
- `data-transition`: Styles to apply while the element is entering or leaving, useful for sharing values between both stages.

You can even stack these attributes to use different `closed` styles for entering and leaving. For example this dialog slides in from the left, but slides out to the right:

```
import { Dialog } from "@headlessui/react";import { useState } from "react";function Example() {  let [isOpen, setIsOpen] = useState(false);  return (    <>      <button onClick={() => setIsOpen(true)}>Open dialog</button>      <Dialog        open={isOpen}        onClose={() => setIsOpen(false)}        transition        className={`          transition duration-300 ease-out          data-[closed]:opacity-0          data-[closed]:data-[enter]:-translate-x-8          data-[closed]:data-[leave]:translate-x-8        `}      >        {/* Dialog content… */}      </Dialog>    </>  );}
```

And for transitioning regular HTML elements or other components, you can still use the `<Transition>` component but with the new data attribute APIs:

```
import { Transition } from "@headlessui/react";import { useState } from "react";function Example() {  const [isShowing, setIsShowing] = useState(false);  return (    <>      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>Toggle</button>      <Transition show={isShowing}>        <div className="transition duration-300 data-[closed]:opacity-0">I will fade in and out</div>      </Transition>    </>  );}
```

We've already updated all of Tailwind UI to use this new transition API and the code is a lot simpler and lighter. Take a look at the [Modal Dialog](https://tailwindui.com/components/application-ui/overlays/modal-dialogs), [Dropdown](https://tailwindui.com/components/application-ui/elements/dropdowns), [Slide-over](https://tailwindui.com/components/application-ui/overlays/slide-overs), [Flyout Menu](https://tailwindui.com/components/marketing/elements/flyout-menus), or [Select Menu](https://tailwindui.com/components/application-ui/forms/select-menus) components for more examples.

All of the existing APIs continue to work for backwards compatibility, but this new approach is what we're going to recommend going forward.

Check out the updated [`Transition` component documentation](https://headlessui.com/react/transition) to learn more.

***

## [Rendering multiple dialogs as siblings](#rendering-multiple-dialogs-as-siblings)

In Headless UI v2.1 you can finally render multiple dialogs at the same time without nesting one inside the other.

This can be really helpful when two unrelated parts of your application need to show a dialog at the same time — for example maybe you already have some sort of confirmation dialog open but another part of your app detects that you've lost network connectivity or your session has timed-out and needs to throw up a new dialog on top.

Here's what something like that might look like with [Catalyst](https://tailwindui.com/templates/catalyst), the application UI kit we've been working on recently:

[](https://assets.tailwindcss.com/blog%2F2024-06-21-headless-ui-v2-1%2Fheadlessui-sibling-dialogs.mp4)

We keep track of the order in which each dialog is opened, and whichever one was opened last is the one that will close when you press escape or click outside the dialog.

***

To start using this stuff today, just install the latest version of Headless UI:

```
npm i @headlessui/react@latest
```

If you run into any issues, let us know on [GitHub](https://github.com/tailwindlabs/headlessui)!

Get all of our updates directly to your inbox.\
Sign up for our newsletter.
---------------------------

Subscribe
