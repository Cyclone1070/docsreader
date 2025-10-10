Interactivity

# scroll-snap-stop

Utilities for controlling whether you can skip past possible snap positions.

| Class         | Styles                      |
| ------------- | --------------------------- |
| `snap-normal` | `scroll-snap-stop: normal;` |
| `snap-always` | `scroll-snap-stop: always;` |

## [Examples](#examples)

### [Forcing snap position stops](#forcing-snap-position-stops)

Use the `snap-always` utility together with the [snap-mandatory](/docs/scroll-snap-type#mandatory-scroll-snapping) utility to force a snap container to always stop on an element before the user can continue scrolling to the next item:

Scroll in the grid of images to see the expected behavior

snap point

![](https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

![](https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

![](https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

![](https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

![](https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

![](https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

```
<div class="snap-x snap-mandatory ...">  <div class="snap-center snap-always ...">    <img src="/img/vacation-01.jpg" />  </div>  <div class="snap-center snap-always ...">    <img src="/img/vacation-02.jpg" />  </div>  <div class="snap-center snap-always ...">    <img src="/img/vacation-03.jpg" />  </div>  <div class="snap-center snap-always ...">    <img src="/img/vacation-04.jpg" />  </div>  <div class="snap-center snap-always ...">    <img src="/img/vacation-05.jpg" />  </div>  <div class="snap-center snap-always ...">    <img src="/img/vacation-06.jpg" />  </div></div>
```

### [Skipping snap position stops](#skipping-snap-position-stops)

Use the `snap-normal` utility to allow a snap container to skip past possible scroll snap positions:

Scroll in the grid of images to see the expected behavior

snap point

![](https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

![](https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

![](https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

![](https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

![](https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

![](https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1\&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&auto=format\&fit=crop\&w=320\&h=160\&q=80)

```
<div class="snap-x ...">  <div class="snap-center snap-normal ...">    <img src="/img/vacation-01.jpg" />  </div>  <div class="snap-center snap-normal ...">    <img src="/img/vacation-02.jpg" />  </div>  <div class="snap-center snap-normal ...">    <img src="/img/vacation-03.jpg" />  </div>  <div class="snap-center snap-normal ...">    <img src="/img/vacation-04.jpg" />  </div>  <div class="snap-center snap-normal ...">    <img src="/img/vacation-05.jpg" />  </div>  <div class="snap-center snap-normal ...">    <img src="/img/vacation-06.jpg" />  </div></div>
```

### [Responsive design](#responsive-design)

Prefix a `scroll-snap-stop` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```
<div class="snap-always md:snap-normal ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).
