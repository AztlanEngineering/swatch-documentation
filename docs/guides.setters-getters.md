---
slug: guides-setters-getters
title: Setters, Getters & Scope
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Below, you will learn the rationale of combining CSS variables with the Setter and Getter pattern. We will try to mirror our thinking process, the reflexion we had along with the design of this solution. 

The next sections of the Guides will be decidated to a more practical approach, where you will learn about the common usage of this library, whether its block coloring, component-based coloring or global theming. In contrast, this section has a more abstract and theoretical focus.

We greatly invite you to read this section so you have a better abstract understanding of the workings of Swatch. This will help you make the most out of it, and will maybe even inspire you to come with additional solutions and patterns !

## The problem : Coloring components imply exponential CSS classes

The starting point of this reflexion is a need for coloring HTML blocks (or, more complex, nested blocks which we'll be referring to as _components_).

Using vanilla HTML and CSS, we can style a block in the following way.

### A naive example in plan CSS/HTML

If you wish to make a block with a blue background, your code might look like this

<Tabs
  className="unique-tabs"
  defaultValue="CSS"
  values={[
    {label: 'HTML', value: 'HTML'},
    {label: 'CSS', value: 'CSS'},
  ]}>
  <TabItem value="CSS">

```css
.some_block {
  background:#05668D; /* Sapphire Blue */
}
```
  </TabItem>
  <TabItem value="HTML">

```html
<div class='some_block'>This block has blue background</div>
```
  </TabItem>
</Tabs>

The `div` element will appear styled with the CSS property and value couple `background:#05668D`. Pretty basic.

And if you wish to use the same color for another element, let's say a paragraph of text, you would have to do :

<Tabs
  className="unique-tabs"
  defaultValue="CSS"
  values={[
    {label: 'HTML', value: 'HTML'},
    {label: 'CSS', value: 'CSS'},
  ]}>
  <TabItem value="CSS">

```css
.some_block {
  background:#05668D; /* Sapphire Blue */
}
.some_text {
  color:#05668D;
}
```

  </TabItem>
  <TabItem value="HTML">

```html
<div class='some_block'>This box has blue background</div>
<p class='some_text'>This is a paragraph of blue text</p>
```
  </TabItem>
</Tabs>

Now, if we wish to introduce a second color, say red, we would have something more verbose still

<Tabs
  className="unique-tabs"
  defaultValue="CSS"
  values={[
    {label: 'HTML', value: 'HTML'},
    {label: 'CSS', value: 'CSS'},
  ]}>
  <TabItem value="CSS">

```css
.some_blue_block {
  background:#05668D; /* Sapphire Blue */
}
.some_blue_text {
  color:#05668D;
}
.some_red_block {
  background:#DF1F00; /* Red */
}
.some_red_text {
  color:#DF1F00;
}
```
  </TabItem>
  <TabItem value="HTML">

```html
<div class='some_blue_block'>This box has blue background</div>
<p class='some_blue_text'>This is a paragraph of blue text</p>

<div class='some_red_block'>This box has red background</div>
<p class='some_red_text'>This is a paragraph of red text</p>
```
  </TabItem>
</Tabs>

Here, we have 4 classes in total (2 blocks x 2 colors). If we had 12 colors, we would need 2 x 12 = 24 classes to express this logic. If we had also 10 blocks to style, we would need 10 x 12 = 120 css classes to write.

**As you can infer, this approach is hardly scalable/maintainable because of the following caveats :**
+ We need to write classes for each Color x Component association, this rapidly becomes a burden to write and maintain.
+ Changing a color requires to change ALL the occurences of the hex code in the source CSS:

### Easier maintainance using preprocessor variables

To make the previous a bit easier to maintain, we can use CSS preprocessors (SCSS or LESS) to introduce variables and make changes in styling easier.

We can substitute the CSS by SCSS and introduce variables like this :

<Tabs
  className="unique-tabs"
  defaultValue="SCSS"
  values={[
    {label: 'HTML', value: 'HTML'},
    {label: 'SCSS', value: 'SCSS'},
  ]}>
  <TabItem value="SCSS">

```scss
$blue:#05668D!default; /* Sapphire Blue */
$red:#DF1F00!default; /* Red */

.some_blue_block {
  background:$blue; 
}
.some_blue_text {
  color:$blue;
}
.some_red_block {
  background:$red; 
}
.some_red_text {
  color:$red;
}
```
  </TabItem>
  <TabItem value="HTML">

```html
<div class='some_blue_block'>This box has blue background</div>
<p class='some_blue_text'>This is a paragraph of blue text</p>

<div class='some_red_block'>This box has red background</div>
<p class='some_red_text'>This is a paragraph of red text</p>
```
  </TabItem>
</Tabs>

**This approach has the following caveats :**
+ This approach doesn't solve the need to write classes for each Color x Component association, so we would end up with the same amount of Components x Colors classes.
+ The compiled CSS resolve the variables to their values, meaning if you don't have access to the source code or are not willing to dive into it to recompile it, changing them will be time consuming, and you would have to do it again every time the source changes. 

### Introducing CSS Variables. Easier to debug/maintain but doesn't solve the problem.

CSS4 introduced CSS variables, which are at the time of writing (November 2020), are [supported by 95%](https://caniuse.com/css-variables) of browsers. (If you are coding for ~~IE6~~ IE11, you are probably not looking to use cutting-edge features anyway.)

With CSS4 variables, we would write the following code to achieve the same functionality.

<Tabs
  className="unique-tabs"
  defaultValue="CSS"
  values={[
    {label: 'HTML', value: 'HTML'},
    {label: 'CSS', value: 'CSS'},
  ]}>
  <TabItem value="CSS">

```css
:root {
  --blue:#05668D; /* Sapphire Blue */
  --red:#DF1F00; /* Red */
}

.some_blue_block {
  background:var(--blue); /* We can also provide a default by giving var a second argument `var(--blue, green)`, default will be the vanilla green */  
}
.some_blue_text {
  color:var(--blue);
}
.some_red_block {
  background:var(--red); 
}
.some_red_text {
  color:var(--red);
}
```
  </TabItem>
  <TabItem value="HTML">

```html
<div class='some_blue_block'>This box has blue background</div>
<p class='some_blue_text'>This is a paragraph of blue text</p>

<div class='some_red_block'>This box has red background</div>
<p class='some_red_text'>This is a paragraph of red text</p>
```
  </TabItem>
</Tabs>

This approach is very similar to the preprocessor approach, and only improves on it by making the variable available to the broswer (and not having to compile). Concretely, it allows you to play with varaibles at the browser level (enjoy inheritance, scope, and debug utilities).

**Subsequently, it still doesn't solve the problem of having a huge number of Colors x Components.**

:::note
In the CSS inspector of your browser, you can see the variables available in the page and modify/debug them.

![Your browser inspector](https://i.imgur.com/aFWp3hN.png)
:::

To wrap it up, we've seen through the previous examples that the two main issues of doing coloring and theming in CSS are:
+ Managing colors, which can be improved through the use of variables (preprocessor, or more modern native CSS4)
+ Managing the problem of having 'exponential classes', that is to say one class x Color x Component.This problem translates into _lot_ of code to write, to maintain, and make our end-users request...

**Now you probably see where this is going : we will solve the problem of having exponential classes ...**

## Introducing the Setter and Getter Pattern

Take a look at the following code :

<Tabs
  className="unique-tabs"
  defaultValue="CSS"
  values={[
    {label: 'HTML', value: 'HTML'},
    {label: 'CSS', value: 'CSS'},
  ]}>
  <TabItem value="CSS">

```css
:root {
  --blue:#05668D; /* Sapphire Blue */
  --red:#DF1F00; /* Red */
}

.current-color-blue {
  --current-color:var(--blue);
}

.current-color-red {
  --current-color:var(--red);
}

.colored-text {
  color:var(--current-color);
}

.colored-background {
  background:var(--current-color);
}

```
  </TabItem>
  <TabItem value="HTML">

```html
<div class='current-color-blue colored-background'>This box has blue background</div>
<p class='current-color-blue colored-text'>This is a paragraph of blue text</p>

<div class='current-color-red colored-background'>This box has red background</div>
<p class='current-color-red colored-text'>This is a paragraph of red text</p>
```
  </TabItem>
</Tabs>

Here, we are also using the CSS4 variables, altough in a more efficient way. 


**Concretely, we are doing the following**
1. **Defining CSS4 variables at the [root level](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)**
2. **Defining CSS helper classes that set a special variable called `current-color` to the previously defined CSS4 variables**
3. **Defining CSS classes that 'consume' the `current-color` variable and apply it to the element.**

<ins>
<strong>You have now read your first 'Setter/Getter' pattern in CSS.</strong>
</ins>



<p></p>

:::note
Let's make a short break to realize the code savings.

Here, the total number of classes is 4 as well (2 'setter' classes, and 2 consumers, or 'getters'). If we add more Components or Colors, the quantity of code increases in a linear way.

+ If we had 12 colors, we would have 12 setters + 2 getters = 12 classes (instead of 24, reduction of 50%)
+ If we had 12 colors and 10 components, we would have 12 setters + 10 getters = 22 classes (instead of 120, reduction of 82%)
+ If we had 12 colors and a bigger component library, say including 100 components, we would have 12 setters + 100 getters = 112 classes (instead of 100 * 12 = 1200, reduction of 92%).
:::

**As you can see, this approach**
+ ✅ Implies a very minimal overhead for simple code
+ ✅ Allows for savings of code early
+ ✅ Has proportionally greater code savings the more your code grows (linear approach instead of exponential)
+ ✅ Is modern, does not rely on preprocessors, and can debugged easily in any browser.

:::tip
In the next sections of the Guides, 
+ We will call **setters** the helpers classes that 'set' a local variable to a global one,
+ We will call **getters** the classes that 'consume' a local variable.
:::

## Introducing Swatch

Swatch is a CSS library that leverages this pattern for you to color and theme your UI in a code-efficient way.

There are two differences with the previous (illustrative) example :
+ Local variable is called `x`instead of `current-color`.
+ The local variable setters set **4** local variables (for instance the full _color swatch_ of red) instead of just one (for instance just the main red color).

**Don't worry. If this is still not clear, the following infographic will sum it up for you !**

![Infographic Explanation](https://i.imgur.com/3xC8k5P.png)

**And yes, Swatch provides ALL the required CSS for you to leverage the Setter/Getter pattern. The only thing you have to do is write HTML !**

Also, Swatch is extensible :
+ You can create your own _getters_ in a few lines of CSS (This is explained in the next section)
+ You can change the default palette and modify the default setter syntax by compiling your own version in SCSS.

**Now you are familiar with the rationale defining Swatch, the next thing to do is to look at [usage examples and start building your own html and components](./guides-basic-usage) !**


## (Advanced) A few words about scope

Setters and Getters work by associating variables to a Scope. 

If we want to pursue the comparison with the Setter and Getter pattern in OOP :
+ The object is a DOM node
+ The setters set variables to the scope of the DOM node (so, the DOM node can consume it, as well as its children)
+ The getters read the variables in the scope and apply it as styles to the same or a children node.

:::tip
CSS4 variables have the 'power' of being inherited by the [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM). This means you can easily use CSS4 variables (and the Swatch library), to theme subdocuments included through the [&lt;use&gt; tag](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use). This feature allows you to style, for instance, svg sprites. [Read more about this here](https://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/) (the part about CSS4 variables is located at the end of the article).
:::

