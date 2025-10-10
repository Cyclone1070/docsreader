<!--$-->

<!--/$-->

Filters

# filter: contrast()

Utilities for applying contrast filters to an element.

| Class                          | Styles                                      |
| ------------------------------ | ------------------------------------------- |
| `contrast-<number>`            | `filter: contrast(<number>%);`              |
| `contrast-(<custom-property>)` | `filter: contrast(var(<custom-property>));` |
| `contrast-[<value>]`           | `filter: contrast(<value>);`                |

## [Examples](#examples)

### [Basic example](#basic-example)

Use utilities like `contrast-50` and `contrast-100` to control an element's contrast:

contrast-50

![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&ixlib=rb-1.2.1\&auto=format\&fit=crop\&w=1000\&h=1000\&q=90)

contrast-100

![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&ixlib=rb-1.2.1\&auto=format\&fit=crop\&w=1000\&h=1000\&q=90)

contrast-125

![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&ixlib=rb-1.2.1\&auto=format\&fit=crop\&w=1000\&h=1000\&q=90)

contrast-200

![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&ixlib=rb-1.2.1\&auto=format\&fit=crop\&w=1000\&h=1000\&q=90)

```
<img class="contrast-50 ..." src="/img/mountains.jpg" /><img class="contrast-100 ..." src="/img/mountains.jpg" /><img class="contrast-125 ..." src="/img/mountains.jpg" /><img class="contrast-200 ..." src="/img/mountains.jpg" />
```

### [Using a custom value](#using-a-custom-value)

Use the<!-- --> `contrast-[<value>]` <!-- -->syntax<!-- --> <!-- -->to set the <!-- -->contrast<!-- --> based on a completely custom value:

```
<img class="contrast-[.25] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the<!-- --> `contrast-(<custom-property>)` <!-- -->syntax:

```
<img class="contrast-(--my-contrast) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for<!-- --> `contrast-[var(<custom-property>)]` <!-- -->that adds the `var()` function for you automatically.

### [Responsive design](#responsive-design)

Prefix <!-- -->a<!-- --> `filter: contrast()` utility<!-- --> <!-- -->with a breakpoint variant like `md:` to only apply the utility at <!-- -->medium<!-- --> <!-- -->screen sizes and above:

```
<img class="contrast-125 md:contrast-150 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).

<!--$-->

<!--/$-->
