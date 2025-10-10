April 15, 2021

# Headless UI v1.0

![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadamwathan.f69b0b90.jpg\&w=96\&q=75)

Adam Wathan

[@adamwathan](https://twitter.com/adamwathan)

[![Headless UI](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard.ff79f664.jpg\&w=3840\&q=75)](https://headlessui.dev)

Last fall we announced [Headless UI](https://blog.tailwindcss.com/headless-ui-unstyled-accessible-ui-components), a library of completely unstyled, fully accessible UI components, designed to pair perfectly with Tailwind CSS.

Today we’re super excited to release [Headless UI v1.0](https://headlessui.dev), which more than doubles the amount of included components for both React and Vue.

## [What’s new](#whats-new)

We’ve added four new components to the React library, and five new components for Vue.

### [Dialog (modal)](#dialog-modal)

Headless UI now includes a robust dialog implementation you can use to build traditional modal dialogs, mobile slide-out menus, or any other take-over-style UI that needs to capture the focus of the entire page.

```
import { useState } from "react";import { Dialog } from "@headlessui/react";function MyDialog() {  let [isOpen, setIsOpen] = useState(true);  return (    <Dialog open={isOpen} onClose={setIsOpen}>      <Dialog.Overlay />      <Dialog.Title>Deactivate account</Dialog.Title>      <Dialog.Description>This will permanently deactivate your account</Dialog.Description>      <p>        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action        cannot be undone.      </p>      <button onClick={() => setIsOpen(false)}>Deactivate</button>      <button onClick={() => setIsOpen(false)}>Cancel</button>    </Dialog>  );}
```

### [Disclosure](#disclosure)

We’ve added a new `Disclosure` component that makes it easy to show/hide inline content accessibly. This is useful for things like collapsible FAQ questions, "show more" interfaces, or even hamburger menus that open up and push the rest of the page content away.

```
<template>  <Disclosure>    <DisclosureButton> Is team pricing available? </DisclosureButton>    <DisclosurePanel> Yes! You can purchase a license that you can share with your entire team. </DisclosurePanel>  </Disclosure></template><script>  import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";  export default {    components: { Disclosure, DisclosureButton, DisclosurePanel },  };</script>
```

### [Radio Group](#radio-group)

There’s now a `RadioGroup` component that you can use to build totally custom radio button UIs, like when you want to use fancy cards or something instead of a simple little radio circle.

```
import { useState } from "react";import { RadioGroup } from "@headlessui/react";function MyRadioGroup() {  let [plan, setPlan] = useState("startup");  return (    <RadioGroup value={plan} onChange={setPlan}>      <RadioGroup.Label>Plan</RadioGroup.Label>      <RadioGroup.Option value="startup">        {({ checked }) => <span className={checked ? "bg-blue-200" : ""}>Startup</span>}      </RadioGroup.Option>      <RadioGroup.Option value="business">        {({ checked }) => <span className={checked ? "bg-blue-200" : ""}>Business</span>}      </RadioGroup.Option>      <RadioGroup.Option value="enterprise">        {({ checked }) => <span className={checked ? "bg-blue-200" : ""}>Enterprise</span>}      </RadioGroup.Option>    </RadioGroup>  );}
```

### [Popover](#popover)

The new `Popover` component lets you build custom dropdown UIs that don’t have any content restrictions like a regular `Menu` component would. Great for fly-out menus on marketing sites, dropdowns that have form fields in them, and tons more.

```
<template>  <Popover class="relative">    <PopoverButton>Solutions</PopoverButton>    <PopoverPanel class="absolute z-10">      <div>        <a href="/analytics">Analytics</a>        <a href="/engagement">Engagement</a>        <a href="/security">Security</a>        <a href="/integrations">Integrations</a>      </div>      <img src="/solutions.jpg" alt="" />    </PopoverPanel>  </Popover></template><script>  import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";  export default {    components: { Popover, PopoverButton, PopoverPanel },  };</script>
```

### [TransitionRoot and TransitionChild (for Vue)](#transitionroot-and-transitionchild-for-vue)

Headless UI already had a `Transition` component for React, but we’ve always recommended the native `<transition>` that already ships with Vue for Vue users. There are some limitations to the native transition though, and things can get complicated when trying to co-ordinate nested transitions that are supposed to run in parallel.

Headless UI v1.0 brings our React `Transition` component to Vue as well, which makes it a lot easier to transition things like modal dialogs.

```
<template>  <!-- This `show` prop controls all nested `Transition.Child` components. -->  <TransitionRoot :show="isOpen">    <!-- Background overlay -->    <TransitionChild      enter="transition-opacity"      ease-linear      duration-300"      enter-from="opacity-0"      enter-to="opacity-100"      leave="transition-opacity"      ease-linear      duration-300"      leave-from="opacity-100"      leave-to="opacity-0"    >      <!-- … -->    </TransitionChild>    <!-- Sliding sidebar -->    <TransitionChild      enter="transition"      ease-in-out      duration-300      transform"      enter-from="-translate-x-full"      enter-to="translate-x-0"      leave="transition"      ease-in-out      duration-300      transform"      leave-from="translate-x-0"      leave-to="-translate-x-full"    >      <!-- … -->    </TransitionChild>  </TransitionRoot></template><script>import { ref } from "vue";import { Transition, TransitionChild } from "@headlessui/vue";export default {  components: { TransitionRoot: Transition, TransitionChild },  setup() {    const isShowing = ref(true);    return {      isShowing,    };  },};</script>
```

## [Try it out](#try-it-out)

Head over to our [brand new documentation website](https://headlessui.dev) to pull Headless UI into your projects and play with it! It’s MIT licensed and open-source, so if you’d like to poke around the code or you need to report an issue, [visit the GitHub repository](https://github.com/tailwindlabs/headlessui).

Want to try it out? [Visit the Headless UI website →](https://headlessui.dev)

Get all of our updates directly to your inbox.\
Sign up for our newsletter.
---------------------------

Subscribe
