---
slug: introduction
title: Introduction
---

## What is Swatch ?

**Swatch is a CSS library that aims at solving theming using CSS4 variables and the setter/getter pattern.**

In other words, Swatch is a CSS library that aims at providing color schemes to HTML pages and components and does it in a code-efficient way. 

You can use this library to take care of **all** the coloring needs of your HTML, from global dynamic themes to component-level coloring, on elements like buttons, text, form inputs, etc...

And the best part is ... Swatch comes as a **lightweight CSS bundle (only 3kb)**, and by being a CSS-only library, it is **framework-agnostic** (it does not make assumptions about which framework you're using, whether it's a React/Vue/[Name here] application or just a simple `.html` file). Also Swatch is **entirely customizable**.


The source code of this library is SCSS and can also be imported as such in your projects, to maximize customization (for instance, to provide your own set of colors). 

## What's the Setter/Getter pattern and how does it apply to Swatch ?

The Setter and Getter pattern is a programming _pattern_ that comes from the world of object-oriented programming, in which object variables are set and read using two different class functions. 


You are probably thinking : _Since CSS is not an object-oriented language, how can this library use this pattern ?_

Swatch relies on an interpretation of the Setter/Getter pattern applied to the DOM:
+ The objects are the DOM nodes
+ The setters are helper CSS classes that set CSS4 variables to the scope of a DOM node
+ The getters are CSS classes that take scope CSS4 variables to apply them as a CSS property to a DOM node in the scope. 

The aim of these docs is to explain in detail how this pattern can be use extremely efficiently to solve your coloring needs, so don't worry if you this explanation is not enough at the moment. We will cover it in detail in the [Guides](./guides-setters-getters) section of the docs.

## Who is this library for ?

The Swatch CSS library is designed for **developers who have medium to advanced experience in CSS and HTML**. This library is meant for you if :
+ You have dreamt of a simple, code-efficient way to apply coloring to your components and pages, whether they are web-components, React components, or simple html pages.
+ You have failed to find extensible, satisfactory solutions in the mainstream existing libraries.
+ You have a bit of experience in object-oriented programming so the _Swatch way of doing things_ will feel more natural to you.
+ You are interested in cutting-edge web design and you have already been looking at CSS4 variables as way to make your stylesheets more efficient.
+ You target code savings in CSS as a way to improve maintainability of stylesheets.

:::note
If you wish to customize Swatch, you need to know SCSS as well. You can find further information on how to do this in the section [Advanced > Custom Palette](./advanced-custom-palette).
:::

:::caution If you are a beginner developper
This library might seem a complex way to solve a simple problem (coloring). There are easier, altough much less code-efficient, solutions to this problem we recommend you to consider.
:::

## Next ...

You can either read the [Design Principles](./design-principles) of the library or directly [install the library in one minute](./getting-started-quick-install).
<!---
## What problems does swatch prevent ?

Here is a list of problems Swatch will prevent you from having. If you recognize some of this examples, you might find this library interesting to your use-case. 

### 

### Having to take time and effort to write the classes for all color/component combinations -> One class is enough thanks to the setter/getter pattern




--- 

-->




