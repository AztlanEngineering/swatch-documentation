---
slug: introduction
title: Introduction
---

## What is Swatch ?

**Swatch is a CSS library that aims at solving theming using CSS variables and the setter/getter pattern.**

In other words, Swatch aims at providing color schemes to HTML pages and components and does it in a code-efficient way. 

You can use this library to take care of **all** the coloring needs of your HTML, from global dynamic themes to component-level coloring, on elements like buttons, text, form inputs, etc...

And the best part is ... Swatch comes as a **lightweight CSS bundle (only 3kb)**, and by being a CSS-only library, it is **framework-agnostic** (it does not make assumptions about which framework you're using, whether it's a React/Vue/[Name here] application or just a simple .html file). Also Swatch is **entirely customizable**.


The source code of this library is SCSS and can also be imported as such in your projects, to maximize customization (for instance, to provide your own set of colors). 

## How does this library compare with other frameworks ?

**Here is a comparison of Swatch to other theming libraries(*)**

| Feature | Swatch | Styled Components | Bootstrap | Sematic UI | Material UI |
| :----- | :----- | :---- | :----- | :----- | :----- |
| Colors Variables in compiled output | <span class='x-green c-x'><strong>CSS Variables</strong></span> | <span class='x-warning c-x'>CSS-in JS only</span> | <span class='x-red c-x'>Hard Coded</span> | <span class='x-red c-x'>Hard Coded</span> | <span class='x-warning c-x'>CSS-in-JS only</span> |
| CSS Code efficiency to theme components | <span class='x-green c-x'><strong>Linear (CSS Only)</strong></span> | <span class='x-warning c-x'>Linear (using JS variables)</span> | <span class='x-red c-x'>Exponential</span> | <span class='x-red c-x'>Exponential</span> | <span class='x-warning c-x'>Linear (using JS variables)</span> |
| Can be used without Javascript ? | <span class='x-green c-x'><strong>Yes</strong></span> | <span class='x-red c-x'>No</span> | <span class='x-green c-x'><strong>Yes</strong></span> |<span class='x-green c-x'><strong>Yes</strong></span> |<span class='x-red c-x'>No</span> |
| Painless dark theme | <span class='x-green c-x'><strong>Yes</strong></span> | <span class='x-red c-x'>❌</span> | <span class='x-red c-x'>❌</span> | <span class='x-red c-x'>❌</span> | <span class='x-red c-x'>❌</span> | <span class='x-red c-x'>❌</span> |

:::caution (*)Warning
Swatch focus is only to provide coloring and theming, while Bootstrap, Semantic-ui, Material-UI provide an opinionated set of components on top of it. <ins>This means if you are looking for a library that provide already-made components, Swatch is not the right library for you.</ins> 

The goal of Swatch is only to provide theming and coloring and to do it well, so it makes it extremely simple to color/theme your ui and components on top of it.
:::

## Who is this library for ?

The Swatch CSS library is designed for **developers who have medium to advanced experience in CSS and HTML**. 

**This library is meant for you if** :
+ ✅ You have felt the need for a simple, code-efficient way to apply coloring to your components and pages, whether they are web-components, React components, or simple html pages.
+ ✅ You have failed to find extensible, satisfactory solutions in the mainstream existing libraries.
+ ✅ You have a bit of experience in object-oriented programming so the _Swatch way of doing things_ will feel more natural to you.
+ ✅ You are interested in cutting-edge web design and you have already been looking at CSS variables as way to make your stylesheets more efficient.
+ ✅ You target code savings in CSS as a way to improve maintainability of stylesheets.

**Do not use this library if :**
+ ❌ If you are a beginner front-end developper, this library might seem a complex way to solve a simple problem (coloring). There are easier, altough much less code-efficient, solutions to this problem we recommend you to consider.
+ ❌ If you are using Bootstrap or Semantic-UI, these libraries already provide a hard-coded set of colors which is unfortunately incompatible with Swatch unless you wish to compile your own version of those libraries.
+ ❌ If you are using CSS-in-JS (namely styled-components), you proabably have little use for CSS variables ([and have little respect for DOM specs anyway :) ](https://gomakethings.com/whats-wrong-with-css-in-js/)). Bear in mind the 'C' in 'CSS' means 'Cascading' and CSS-in-JS patterns are oblivious to this feature of the language.


:::note
If you wish to customize Swatch, you need to know SCSS as well. You can find further information on how to do this in the section [Advanced > Custom Palette](./advanced-custom-palette).
:::

## What's the Setter/Getter pattern and how does it apply to Swatch ?

The Setter and Getter pattern is a programming _pattern_ that comes from the world of object-oriented programming, in which object variables are set and read using two different class functions. 


You are probably thinking : _Since CSS is not an object-oriented language, how can this library use this pattern ?_

Swatch relies on an interpretation of the Setter/Getter pattern applied to the DOM:
+ The objects are the DOM nodes
+ The setters are helper CSS classes that set CSS variables to the scope of a DOM node
+ The getters are CSS classes that take scope CSS variables to apply them as a CSS property to a DOM node in the scope. 

The aim of these docs is to explain in detail how this pattern can be used extremely efficiently to solve your coloring needs, so don't worry if you think this explanation is not enough at the moment. We will cover it in detail in the [Guides](./guides-setters-getters) section of the docs.

## Next ...

You can either read the [Design Principles](./design-principles) of the library or directly [install the library in one minute](./getting-started-quick-install).
<!---
## What problems does swatch prevent ?

Here is a list of problems Swatch will prevent you from having. If you recognize some of this examples, you might find this library interesting to your use-case. 

### 

### Having to take time and effort to write the classes for all color/component combinations -> One class is enough thanks to the setter/getter pattern




--- 

-->




