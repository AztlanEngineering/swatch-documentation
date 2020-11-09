---
slug: guides-basic-usage
title: Basic Usage
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Class Naming

### Setters Class Name Syntax

The colors _setters_ are CSS classes which have the syntax `x-{color}`, `y-{color}`, `xh-{color}`, `yh-{color}` where `color` must be replaced by a color name from one of the palettes, _for instance_ :
+ `red`, `green` (and others ...) for the wheel palette
+ `success`, `warning`, `error` for the modal palette
+ `twitter`, `facebook`(and others...) for the social media palette
+ `background`,`paragraph`, `metadata` (and others...)for the ui palette

**[The complete list of default colors can be found here.](./api-reference)**

For instance `x-background`, `y-red`, `xh-yellow`, `yh-twitter` are all valid color setters.

:::note
You can add, remove, rename colors by compiling your own version of Swatch from SCSS. [Instructions here](./advanced-custom-palette)
:::

### Variables locally set

All of the setters set 4 variables (normal, light, dark and contrast 'on color'), corresponding to the full color swatch of the selected nuance.

| Setter CSS class |<div style={{ width:'17em' }}>Variables Set</div> | Note |
| :------| :---------- | :------|
| ` .x-{color}` | `--x:var(--{color})`<br/>`--light-x:var(--{color})`<br/>`--dark-x:var(--dark-{color})`<br/>`--on-x:var(--on-{color})`| |
| ` .y-{color}` | `--y:var(--{color})`<br/>`--light-y:var(--{color})`<br/>`--dark-y:var(--dark-{color})`<br/>`--on-y:var(--on-{color})`| |
| ` .xh-{color}` | `--x:var(--{color})`<br/>`--light-x:var(--{color})`<br/>`--dark-x:var(--dark-{color})`<br/>`--on-x:var(--on-{color})`| Same as `.x-{color}` but only applies variables on hover and focus |
| ` .yh-{color}` | `--y:var(--{color})`<br/>`--light-y:var(--{color})`<br/>`--dark-y:var(--dark-{color})`<br/>`--on-y:var(--on-{color})`| Same as `.y-{color}` but only applies variables on hover and focus |


## Getters

### Getters Class Name Syntax

Color _getters_ are CSS classes that take the local variables set by a _setter_ and apply it to a html element in a particular way.

There are only two setters by default :
+ `b-{variable}` takes the variable color and applies it as `background:var(--{color})` or `background:var(--{color-variant})` to the HTML element.
+ `c-{variable}` takes the variable color and applies it as `color:var(--{color})` or `colors:var(--{color-variant})` to the HTML element.

For instance, `b-y`, `c-x`, `b-light-y`, `c-dark-x`, `c-on-x` are valid getters.

Shall this remain a bit obscure to you, the following examples will dispell any doubt you might have.

:::note
CSS4 variables are unherited through the DOM (And the Shadow DOM). This means, you can _set_ a variable on a parent element and _get_ it on a children element.
:::

## Examples

### Background color

```jsx live
<div class='x-yellow'>
  <div class='b-x'>
     Yellow background
  </div>
  <div class='y-azure b-dark-y'>
    Dark azure background
  </div>
</div>
```

### Foreground color


```jsx live
<div class='x-success y-violet'>
  <div>
	  <h1 class='c-x'>This is the main color</h1>
	  <h3 class='c-light-x'>This is the light shade of the color</h3>
	  <h3 class='c-dark-x'>This is the dark shade of the color</h3>
  </div>
  <div>
	  <h1 class='c-y'>This is the main color</h1>
	  <h3 class='c-light-y'>This is the light shade of the color</h3>
	  <h3 class='c-dark-y'>This is the dark shade of the color</h3>
  </div>
</div>
```

### Mixed example 

Here, we'll try to be smarter, and apply a background to an element with text color contrasting naturally to it (for instance, we'll write black text on a white background and white text on a blue background).

Swatch allows you  to do this out of the box.


```jsx live
<div style={{'font-size':'2em'}}>
  <button class='x-white b-x c-on-x'>White button</button>
  <button class='x-blue b-x c-on-x'>Blue button</button>
</div>
```



## Extending the base functionality with custom getters

Once you've understood the principles of _setters_ and _getters_, it will become extremely easy for you to extend the functionality of this library by writing your own getters.

### A simple example

Lets say we want to create a getter that can (for a given color),
+ Apply a 1px border to an element
+ Apply the same color to the text of the element
+ Have a transparent background

If we want to call this getter `d`, simply have to write the following code

<Tabs
  className="unique-tabs"
  defaultValue="CSS"
  values={[
    {label: 'CSS', value: 'CSS'},
    {label: 'HTML', value: 'HTML'},
  ]}>
  <TabItem value="CSS">

```css
.d-x {
  border:1px solid var(--x);
  color:var(--x);
  background:transparent;
}

.d-y {
  border:1px solid var(--x);
  color:var(--x);
  background:transparent;
}

/* And, depending on how complete you wish your api to be ... 

.d-light-x {
  border:1px solid var(--light-x);
  color:var(--light-x);
}

.d-dark-x ...

.d-on-x ...

.d-light-y ...

ETC
*/
```

  </TabItem>
  <TabItem value="HTML">

```html
<div class='d-x x-success'>A transparent div with a 'success' colored text and border</div>
<button class='d-y y-yellow'>A transparent button with a yellow text and border</button>
<span class='d-x x-primary'>And this works on any HTML element</span>
```
  </TabItem>
</Tabs>

### A more complex example

Let's now code something more interactive. Lets make a button that 
+ has background var(--x),
+ has contrasting color var(--on-x) as text color,
+ gets a darker shade on mouse over 
+ gets a lighter shade on click.

<Tabs
  className="unique-tabs"
  defaultValue="CSS"
  values={[
    {label: 'CSS', value: 'CSS'},
    {label: 'HTML', value: 'HTML'},
  ]}>
  <TabItem value="CSS">

```css
.colored_button {
  background:var(--x);
}
.colored_button:hover,
.colored_button:focus {
  background:var(--dark-x)
}
.colored_button:active {
  background:var(--light-x)
}
```
  </TabItem>
  <TabItem value="HTML">

```html
<button class='colored-button x-green'>Green</button>
<button class='colored-button x-warning'>Warning</button>
<button class='colored-button x-twitter'>Twitter</button>
```
  </TabItem>
</Tabs>


In the next section, we will make a React component that follows the same pattern. An interactive example will also be provided.
