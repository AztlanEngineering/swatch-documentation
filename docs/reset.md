---
id: reset
title: Reset codes
---

Alphabet-SCSS has the best trick that is becoming a need nowadays and that is to mix the CSS-Reset code and the Normalize-CSS together and get a single file that answers to our every need in UI design. 
 
Here is an article that explains explicitly about CSS-Reset and Normalize-CSS and compare them. we recommend that you read this if you don't have any prior knowledge to the subject. [CSS-reset vs Normalize-CSS](https://medium.com/@elad/normalize-css-or-css-reset-9d75175c5d1e).

---

### What CSS-Reset codes we used

We took some part of CSS-Reset that was really helpful and left the unuseful codes out of it. lets see by example:

In CSS reset all the properties of most of the elements are being reseted and you have to rewrite them again which is unnecessary but we don't want to do that kind of coding which is completely against the [DRY](https://code.tutsplus.com/tutorials/3-key-software-principles-you-must-understand--net-25161) principle.

The example for the above is the H1-6 tags that when CSS-Reset is used they all look the same and we have to rewrite properties for them to make them bold and in different font-weight.

But we used the codes that are useful like the `box-sizing: border-box;` which include the padding and border in the width and height of the elements.

---

### What Normalize-CSS code we used

Normalize-CSS has more codes that are useful for us here. For example in Normalize-CSS `<article>`, `<aside>`, `<header>`, `<footer>`, `<nav>` and `<section>` elements have a `display: block;` property.

`<audio>` and `<video>` elements have a `display: inline-block;` property.

`<img>` element have a default `border-style: none`.

Or `<h1>` element has a `margin: 0.67em 0;` and `font-size: 2em;`.

A lot more of that kind of properties that are helping us having a good base line in our CSS library without having to write them or reset them and rewrite them. 
