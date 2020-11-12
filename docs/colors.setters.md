---
id: colors.setters
title: Setters
---

### What is a setter?

If you are interested to have a deeper knowledge about setters/getters or in other words mutation pattern we recommend this [article](https://en.wikipedia.org/wiki/Mutator_method). Setters are variables that can be set to a value which you can then use anywhere in your code that you need that value. 
 
---

### How setters are used in Swatch?

In Swatch we set values for variables using CSS so they can be used in every element that we see fit for that color but how is that different from writing our own CSS then?

You can write the Setters/Variables in your parent class and after that all you need to do is to call them via [getters](./colors.getters) in every child element you need them.

We have three different Setters defined in Swatch and each of them has five Getter. Don't worry it's not that complicated. We will go over them in [Getters](colors.getters) page.

lets see an example:

```jsx live
<div>
	<div class='x-red'></div>
	<div class='y-green'></div>
	<div class='z-blue'></div>
</div>
``` 

Now in the above example there is three color classes but each with different prefixes why is that? 

The reason is if we needed more that one color in our code block we can be able to call the Setters for it. 

But why do we need three, isn't two enough? It's always better to have extra classes and not need them than not have them and need them. 

---

### how Setters work

We will give the parent element the Setters we need as a class name and inheritance quality of CSS variables will pass them to the children of that element. So we have the Setters of colors 'red' and 'green' and 'blue' in our element. Now using Getters we can call them on every child element that needs them.
