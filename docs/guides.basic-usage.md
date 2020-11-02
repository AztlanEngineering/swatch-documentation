---
slug: guides-basic-usage
title: Basic Usage
---

Enough of explanations. Time to dive in the library and start using the Setters and Getters that were explained extensively in the previous section. 

### background color

In this section, we will start using the Setters and Getters as classes on our code/components. First step is to define the Setter in the parent element of the code block we want to use it's Getter.   
But first let's see how the setters and getters were defined?

We have two Setters that were named `x` and `y`. These Setters have no use unless you combine them with the name of the color you want to have in your code block, for instance `green` or `red`, etc and we join them with a `-`, here is some examples:`x-green`, `y-red`.



```jsx live
<div class='x-yellow y-azure'>
	<span> 
		<figure class='b-x'>
			<img src='../static/img/customizable-logo.svg' alt='#' width='200px'/>
			<figcaption><h4>Swatch is highly customizable</h4></figcaption>
		</figure>
	</span>
	<span>
		<figure class='b-y'>
			<img src='../static/img/customizable-logo.svg' alt='#' width='200px'/>
			<figcaption><h4>Swatch is highly customizable</h4></figcaption>
		</figure>
	</span>
</div>
```

---

### Foreground color

On foreground color, each color comes with a light and dark shade. let see how to use them:


```jsx live
<div class='x-green y-violet z-orange'>
	<span>
		<h1 class='c-x'>This is the main color</h1>
		<h3 class='c-light-x'>This is the light shade of the color</h3>
		<h3 class='c-dark-x'>This is the dark shade of the color</h3>
	</span>
<hr />
	<span>
		<h1 class='c-y'>This is the main color</h1>
		<h3 class='c-light-y'>This is the light shade of the color</h3>
		<h3 class='c-dark-y'>This is the dark shade of the color</h3>
	</span>
</div>
```

---

### On color

On color is a useful class to use which selects the text color for use on the backgrounds we select which helps us have a faster and easier design.It's a helpful option in UX design too. 


```jsx live
<div class='x-blue y-white z-black'>
	<div class='b-x'>
		<h1 class='c-on-x'>Colors</h1>
		<h4 class='c-on-x'>Color is one if the best features of the UI design.</h4>
	</div>
<hr />
	<div class='b-y'>
		<h1 class='c-on-y'>Colors</h1>
		<h4 class='c-on-y'>Color is one if the best features of the UI design.</h4>
	</div>
</div>
```
---
