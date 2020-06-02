---
id: colors.getters
title: Getters
---

### What is a Getter?

If you are interested to have a deeper knowledge about setters/getters or in other words mutation pattern we recommend this [article](https://en.wikipedia.org/wiki/Mutator_method). Getters are the variables which recieve the value of Setters so we can use them any where in our code that we need the value of the Setters.

---

### How Getters are used in Alphabet-SCSS?

in Alphabet-SCSS library we have Setters and they get some values. But how do we use them? 

This is what Getters are for. Every where in our code that we need the value of a specific Setter we can have it by writing the Getter related to that Setter. We mentioned in the [Setter](colors.setters) that every Setter has five Getters. Here we are going to explaine them.

---

### As background color

If we want to use the Setter as a background color we should name the class of the target element `b-x` (**b** for `background-color` property and **x** to tell the CSS that, this Getter is looking for the value of the **x** Setter that we gave the parent element earlier in the last article).

lets see an example:
```jsx live
<div class='x-red'>
	<div class='b-x'></div>
</div>
```

---

### As foreground color

If we want to use the Setter as a foreground color we should name the class of the target element `c-x` (**c** for the `color` property and **x** to tell the CSS that, this Getter is looking for the value of the **x** Setter that we gave the parent element earlier in the last article).

```jsx live
<div class='x-red'>
	<div class='c-x'></div>
</div>
```
---

### As a on color

What does on color mean?

we have a variable that helps you choose what foreground color have the best contrast and works better on your background without even thinking about it. It's called the on-color variable. 

You just need to set your background color and then add this variable as a class name to your element beside the background color Getter. lets see it:

```jsx live
<div class='y-green'>
	<div class='b-y c-on-y'></div>
</div>
```

---

### Light/dark color

This Getter will set the color you have on the Setter variable as the parent class name for the child element but as a lighter or darker shade which is really helpful specially when you are trying to have a light/dark shade of the same color in corners or footer and header, etc.

```jsx live
<div class='y-green'>
	<div class='b-light-y'></div>
	<div class='b-dark-y'></div>
</div>
``` 
