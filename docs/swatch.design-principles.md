---
slug: design-principles
title: Design Principles
---

The following ideas are the design principles of the Swatch color library.

## DRY (Don't repeat yourself)

Swatch is deeply inspired by the [Don't Repeat Yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principle. As the creators of the library, we were upset by inefficiency of repetitions in the way of managing colors and theming for html blocks and components. 

For instance, Bootstrap and Semantic-UI, two of the most popular biggest component libraries on the web, create _individual_ color classes for _each_ component. This means, if there are 10 colors in the set, and 12 components in the library, 120 (10 x 12) classes are written in CSS (think `.btn-red, .btn-green, .popup-red`, with 120 classes in total...). This is not only extremely unefficient, but incredibly hard to maintain and to evolve. 

We believe developers must save time and effort and must not be locked-in in an antiquated, verbose way of doing things.

## Stability over features

You just got used to a feature in a library, and, all of a sudden, the feature gets deprecated or the api changes. As you, we are developpers working in the age of `node_modules`, and we are as annoyed as you when this occurs.

We commit not to introduce breaking changes in the releases.

:::info
To ensure API stability, we have been using internally this library for over a year in production-grade environments before releasing it to you.
:::

Also, we wish to commit our work on Swatch to stabilizing the core set of features (being a color library) so that the library is good at what is does. Nothing less and nothing more.

:::note
Swatch is currently in beta. There might be exceptionally _minor_ changes to the API before the 1.0 release. 
:::


## Framework-agnostic

Swatch does not depend on any library or framework. 

Therefore, you can use it freely in any front-end projects. This means, it is compatible with bare-bones html, as it is with any front-end framework or templating engine. 


## Minimal bundle size

The gzip, minified version of this library is only 3.2kb. Not a byte more.
 

## LTS (Long-time support)

We want Swatch to be a stable library, supported in the long run. It is currently used, by high traffic websites we maintain, and will remain used in the foreseeable future.

Even if this library is a not-for-profit project, we will continue commiting new code to it, resolving issues and merging pull requests.

## Open-source, all the way

Swatch is released under the MIT license. This means you can do anything you want with it. You can use it in your own library, change it according to your design and take the credit for it.

We believe the exchange of ideas allowed by open-source programming is an enabler of high-quality software, and we have good hopes that [your suggestions](./contribution-feedback) will help improve this library.

## Customization

Customization is a feature we offer our advanced users. We want you to have infinite possibilities of customization and theming.

Visit the [Advanced Guides > Custom Palette](./advanced-custom-palette) to learn more.

<!----

--- 

-->



