---
id: colors.getters
title: Getters
---

### What is a Getter?

If you are interested to have a deeper knowledge about setters/getters or in other words mutation pattern we recommend this [article](https://en.wikipedia.org/wiki/Mutator_method). Getters are the variables which recieve the value of Setters so we can use them any where in our code that we need the value of the Setters.

---

### How Getters are used in Swatch?

In [Setters](colors.setters) we explained how we can add Setters to our code, now it's time to learn how we should call Setters in our code using Getters. Every where in our code that we need the value of a specific Setter we can have it by calling it's Getter. We mentioned in the [Setter](colors.setters) that every Setter has five Getters lets see them by examples:

---

### As background color

If we want to use the Setter as a background color we should name the class of the target element `b-x` (**b** for `background-color` property and **x** to tell the CSS that, this Getter is looking for the value of the **x** Setter that we gave the parent element earlier).

lets see an example:
```jsx live
<div class='x-red y-olive z-blue'><h3>Swatch library</h3>
	<div class='b-x'>Here we are calling the x-setter for bg-color</div>
	<div class='b-y'>Here we are calling the y-setter for bg-color</div>
	<div class='b-z'>Here we are calling the z-setter for bg-color</div>
</div>
```

---

### As foreground color

If we want to use the Setter as a foreground color we should name the class of the target element `c-x` (**c** for the `color` property and **x** to tell the CSS that, this Getter is looking for the value of the **x** Setter that we gave the parent element earlier).

```jsx live
<div class='x-red y-blue z-green'><h3>Swatch library</h3>
	<div class='c-x'>Here we are calling the x-setter for color</div>
	<div class='c-y'>Here we are calling the y-setter for color</div>
	<div class='c-z'>Here we are calling the z-setter for color</div>
</div>
```
---

### As a on color

What does on color mean?

We defined a variable that helps choose what foreground color have the best contrast and works better on your background so you don't have to try and test it out for each color you choose. It's called the on-color variable. 

You just need to set your background color and then add this Getter/Variable as a class name to your element beside the background color Getter.

Example:
```jsx live
<div class='x-red y-white z-black'><h3>Swatch library</h3>
	<div class='b-x c-on-x'>on-color Getter example for different bg-color</div>
	<div class='b-y c-on-y'>on-color Getter example for different bg-color</div>
	<div class='b-z c-on-z'>on-color Getter example for different bg-color</div>
</div>
```

---

### Light/dark color

With this Getter we can have different shades of the same color we have for our lighter or darker parts of the design we need like the top menu or footer or even on hover or any other place that we need a shade of the same color we are using in our design.

Examples:
```jsx live
<div class='x-blue y-yellow z-green'><h3>Swatch library</h3>
	<div class='b-light-x'>This is the light shade of color</div>
	<div class='b-x'>This is the main color</div>
	<div class='b-dark-x c-on-x'>This is the dark shade of color</div>
	<br />
	<div class='b-light-y'>This is the light shade of color</div>
	<div class='b-y'>This is the main color</div>
	<div class='b-dark-y'>This is the dark shade of color</div>
	<br />
	<div class='b-light-z'>This is the light shade of color</div>
	<div class='b-z'>This is the main color</div>
	<div class='b-dark-z c-on-z'>This is the dark shade of color</div>
</div>
```

As you can see here we needed the on color property to change the contrast of our text on blue and green bg-color. 
