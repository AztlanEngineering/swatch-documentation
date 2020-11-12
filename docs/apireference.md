---
slug: api-reference 
title: API Reference
---

:::note
Before starting, please note that (as per [the W3C spec](https://www.w3.org/TR/css-variables-1/)), the scope of a CSS variable is as follows :
+ A CSS variable defined on a DOM node applies to this DOM node...
+ ... as well as all of its children tree
+ ... as well as all the [Shadow DOM](ihttps://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) trees in the children tree
:::

## Default colors

| Main variable | Light variant | Dark variant | Contrast color | 
| :-------- | :---------- | :----------- | :----------- | 
| --black <span className='y-black b-y'>&#8193;</span> | --light-black <span className='y-black b-light-y'>&#8193;</span> | --dark-black <span className='y-black b-dark-y'>&#8193;</span> | --on-black <span className='y-black b-on-y'>&#8193;</span> | 
| --gray <span className='y-gray b-y'>&#8193;</span> | --light-gray <span className='y-gray b-light-y'>&#8193;</span> | --dark-gray <span className='y-gray b-dark-y'>&#8193;</span> | --on-gray <span className='y-gray b-on-y'>&#8193;</span> | 
| --white <span className='y-white b-y'>&#8193;</span> | --light-white <span className='y-white b-light-y'>&#8193;</span> | --dark-white <span className='y-white b-dark-y'>&#8193;</span> | --on-white <span className='y-white b-on-y'>&#8193;</span> | 

### Wheel colors

These are the colors of the color wheel.

| Main variable | Light variant | Dark variant | Contrast color | 
| :-------- | :---------- | :----------- | :----------- | 
| --red <span className='y-red b-y'>&#8193;</span> | --light-red <span className='y-red b-light-y'>&#8193;</span> | --dark-red <span className='y-red b-dark-y'>&#8193;</span> | --on-red <span className='y-red b-on-y'>&#8193;</span> | 
| --orange <span className='y-orange b-y'>&#8193;</span> | --light-orange <span className='y-orange b-light-y'>&#8193;</span> | --dark-orange <span className='y-orange b-dark-y'>&#8193;</span> | --on-orange <span className='y-orange b-on-y'>&#8193;</span> | 
| --yellow <span className='y-yellow b-y'>&#8193;</span> | --light-yellow <span className='y-yellow b-light-y'>&#8193;</span> | --dark-yellow <span className='y-yellow b-dark-y'>&#8193;</span> | --on-yellow <span className='y-yellow b-on-y'>&#8193;</span> | 
| --olive <span className='y-olive b-y'>&#8193;</span> | --light-olive <span className='y-olive b-light-y'>&#8193;</span> | --dark-olive <span className='y-olive b-dark-y'>&#8193;</span> | --on-olive <span className='y-olive b-on-y'>&#8193;</span> | 
| --green <span className='y-green b-y'>&#8193;</span> | --light-green <span className='y-green b-light-y'>&#8193;</span> | --dark-green <span className='y-green b-dark-y'>&#8193;</span> | --on-green <span className='y-green b-on-y'>&#8193;</span> | 
| --indigo <span className='y-indigo b-y'>&#8193;</span> | --light-indigo <span className='y-indigo b-light-y'>&#8193;</span> | --dark-indigo <span className='y-indigo b-dark-y'>&#8193;</span> | --on-indigo <span className='y-indigo b-on-y'>&#8193;</span> | 
| --azure <span className='y-azure b-y'>&#8193;</span> | --light-azure <span className='y-azure b-light-y'>&#8193;</span> | --dark-azure <span className='y-azure b-dark-y'>&#8193;</span> | --on-azure <span className='y-azure b-on-y'>&#8193;</span> | 
| --blue <span className='y-blue b-y'>&#8193;</span> | --light-blue <span className='y-blue b-light-y'>&#8193;</span> | --dark-blue <span className='y-blue b-dark-y'>&#8193;</span> | --on-blue <span className='y-blue b-on-y'>&#8193;</span> | 
| --violet <span className='y-violet b-y'>&#8193;</span> | --light-violet <span className='y-violet b-light-y'>&#8193;</span> | --dark-violet <span className='y-violet b-dark-y'>&#8193;</span> | --on-violet <span className='y-violet b-on-y'>&#8193;</span> | 
| --pink <span className='y-pink b-y'>&#8193;</span> | --light-pink <span className='y-pink b-light-y'>&#8193;</span> | --dark-pink <span className='y-pink b-dark-y'>&#8193;</span> | --on-pink <span className='y-pink b-on-y'>&#8193;</span> | 

### Modal colors

Modal colors are a colors that represent state.

| Main variable | Light variant | Dark variant | Contrast color | 
| :-------- | :---------- | :----------- | :----------- | 
| --error <span className='y-error b-y'>&#8193;</span> | --light-error <span className='y-error b-light-y'>&#8193;</span> | --dark-error <span className='y-error b-dark-y'>&#8193;</span> | --on-error <span className='y-error b-on-y'>&#8193;</span> | 
| --warning <span className='y-warning b-y'>&#8193;</span> | --light-warning <span className='y-warning b-light-y'>&#8193;</span> | --dark-warning <span className='y-warning b-dark-y'>&#8193;</span> | --on-warning <span className='y-warning b-on-y'>&#8193;</span> | 
| --success <span className='y-success b-y'>&#8193;</span> | --light-success <span className='y-success b-light-y'>&#8193;</span> | --dark-success <span className='y-success b-dark-y'>&#8193;</span> | --on-success <span className='y-success b-on-y'>&#8193;</span> | 

### Social Media Colors

| Main variable | Light variant | Dark variant | Contrast color | 
| :-------- | :---------- | :----------- | :----------- | 
| --twitter <span className='y-twitter b-y'>&#8193;</span> | --light-twitter <span className='y-twitter b-light-y'>&#8193;</span> | --dark-twitter <span className='y-twitter b-dark-y'>&#8193;</span> | --on-twitter <span className='y-twitter b-on-y'>&#8193;</span> | 
| --facebook <span className='y-facebook b-y'>&#8193;</span> | --light-facebook <span className='y-facebook b-light-y'>&#8193;</span> | --dark-facebook <span className='y-facebook b-dark-y'>&#8193;</span> | --on-facebook <span className='y-facebook b-on-y'>&#8193;</span> | 
| --instagram <span className='y-instagram b-y'>&#8193;</span> | --light-instagram <span className='y-instagram b-light-y'>&#8193;</span> | --dark-instagram <span className='y-instagram b-dark-y'>&#8193;</span> | --on-instagram <span className='y-instagram b-on-y'>&#8193;</span> | 
| --google <span className='y-google b-y'>&#8193;</span> | --light-google <span className='y-google b-light-y'>&#8193;</span> | --dark-google <span className='y-google b-dark-y'>&#8193;</span> | --on-google <span className='y-google b-on-y'>&#8193;</span> | 


### Theme-colors

| Main variable | Light variant | Dark variant | Contrast color | 
| :-------- | :---------- | :----------- | :----------- | 
| --primary <span className='y-primary b-y'>&#8193;</span> | --light-primary <span className='y-primary b-light-y'>&#8193;</span> | --dark-primary <span className='y-primary b-dark-y'>&#8193;</span> | --on-primary <span className='y-primary b-on-y'>&#8193;</span> | 
| --secondary <span className='y-secondary b-y'>&#8193;</span> | --light-secondary <span className='y-secondary b-light-y'>&#8193;</span> | --dark-secondary <span className='y-secondary b-dark-y'>&#8193;</span> | --on-secondary <span className='y-secondary b-on-y'>&#8193;</span> | 
| --accent1 <span className='y-accent1 b-y'>&#8193;</span> | --light-accent1 <span className='y-accent1 b-light-y'>&#8193;</span> | --dark-accent1 <span className='y-accent1 b-dark-y'>&#8193;</span> | --on-accent1 <span className='y-accent1 b-on-y'>&#8193;</span> | 
| --accent2 <span className='y-accent2 b-y'>&#8193;</span> | --light-accent2 <span className='y-accent2 b-light-y'>&#8193;</span> | --dark-accent2 <span className='y-accent2 b-dark-y'>&#8193;</span> | --on-accent2 <span className='y-accent2 b-on-y'>&#8193;</span> | 
| --accent3 <span className='y-accent3 b-y'>&#8193;</span> | --light-accent3 <span className='y-accent3 b-light-y'>&#8193;</span> | --dark-accent3 <span className='y-accent3 b-dark-y'>&#8193;</span> | --on-accent3 <span className='y-accent3 b-on-y'>&#8193;</span> | 

<!--
:::note
Accent colors can be used all together or in pair or even none at all depending your design needs.
:::
-->

### Ui colors

UI colors are meant to be used by the User Interface or your page or application. These colors are provided in two variants, `light` (default, L) or `dark`(D). Read more about themes [here](./guides-themes-introduction).

| Main variable (L/D)| Light variant (L/D)| Dark variant (L/D)| Contrast color (L/D) | 
| :-------- | :---------- | :----------- | :----------- | 
| --background <span className='y-background b-y'>&#8193;</span><span className='ui-dark y-background b-y'>&#8193;</span> | --light-background <span className='y-background b-light-y'>&#8193;</span><span className='ui-dark y-background b-light-y'>&#8193;</span> | --dark-background <span className='y-background b-dark-y'>&#8193;</span><span className='ui-dark y-background b-dark-y'>&#8193;</span> | --on-background <span className='y-background b-on-y'>&#8193;</span><span className='ui-dark y-background b-on-y'>&#8193;</span> | 
| --heading <span className='y-heading b-y'>&#8193;</span><span className='ui-dark y-heading b-y'>&#8193;</span> | --light-heading <span className='y-heading b-light-y'>&#8193;</span><span className='ui-dark y-heading b-light-y'>&#8193;</span> | --dark-heading <span className='y-heading b-dark-y'>&#8193;</span><span className='ui-dark y-heading b-dark-y'>&#8193;</span> | --on-heading <span className='y-heading b-on-y'>&#8193;</span><span className='ui-dark y-heading b-on-y'>&#8193;</span> | 
| --subtitle <span className='y-subtitle b-y'>&#8193;</span><span className='ui-dark y-subtitle b-y'>&#8193;</span> | --light-subtitle <span className='y-subtitle b-light-y'>&#8193;</span><span className='ui-dark y-subtitle b-light-y'>&#8193;</span> | --dark-subtitle <span className='y-subtitle b-dark-y'>&#8193;</span><span className='ui-dark y-subtitle b-dark-y'>&#8193;</span> | --on-subtitle <span className='y-subtitle b-on-y'>&#8193;</span><span className='ui-dark y-subtitle b-on-y'>&#8193;</span> | 
| --metadata <span className='y-metadata b-y'>&#8193;</span><span className='ui-dark y-metadata b-y'>&#8193;</span> | --light-metadata <span className='y-metadata b-light-y'>&#8193;</span><span className='ui-dark y-metadata b-light-y'>&#8193;</span> | --dark-metadata <span className='y-metadata b-dark-y'>&#8193;</span><span className='ui-dark y-metadata b-dark-y'>&#8193;</span> | --on-metadata <span className='y-metadata b-on-y'>&#8193;</span><span className='ui-dark y-metadata b-on-y'>&#8193;</span> | 
| --link <span className='y-link b-y'>&#8193;</span><span className='ui-dark y-link b-y'>&#8193;</span> | --light-link <span className='y-link b-light-y'>&#8193;</span><span className='ui-dark y-link b-light-y'>&#8193;</span> | --dark-link <span className='y-link b-dark-y'>&#8193;</span><span className='ui-dark y-link b-dark-y'>&#8193;</span> | --on-link <span className='y-link b-on-y'>&#8193;</span><span className='ui-dark y-link b-on-y'>&#8193;</span> | 
| --navlink <span className='y-navlink b-y'>&#8193;</span><span className='ui-dark y-navlink b-y'>&#8193;</span> | --light-navlink <span className='y-navlink b-light-y'>&#8193;</span><span className='ui-dark y-navlink b-light-y'>&#8193;</span> | --dark-navlink <span className='y-navlink b-dark-y'>&#8193;</span><span className='ui-dark y-navlink b-dark-y'>&#8193;</span> | --on-navlink <span className='y-navlink b-on-y'>&#8193;</span><span className='ui-dark y-navlink b-on-y'>&#8193;</span> | 
| --paragraph <span className='y-paragraph b-y'>&#8193;</span><span className='ui-dark y-paragraph b-y'>&#8193;</span> | --light-paragraph <span className='y-paragraph b-light-y'>&#8193;</span><span className='ui-dark y-paragraph b-light-y'>&#8193;</span> | --dark-paragraph <span className='y-paragraph b-dark-y'>&#8193;</span><span className='ui-dark y-paragraph b-dark-y'>&#8193;</span> | --on-paragraph <span className='y-paragraph b-on-y'>&#8193;</span><span className='ui-dark y-paragraph b-on-y'>&#8193;</span> | 

## Getters

Getters are CSS classes that take a locally-set CSS variable and apply it as a particular property (or set of properties) to a DOM node.

### Getters 

| Main variable | Light variant | Dark variant | Contrast color | Description | 
| :-------- | :---------- | :----------- | :----------- | :-------- | 
| `.b-x` | `.b-light-x` | `.b-dark-x` | `.b-on-x` | Getter CSS class that apply the scoped ‘x’ color or one of its variants as background of the target element | 
| `.b-y` | `.b-light-y` | `.b-dark-y` | `.b-on-y` | Getter CSS class that apply the scoped ‘y’ color or one of its variants as background of the target element |
| `.c-x` | `.c-light-x` | `.c-dark-x` | `.c-on-x` | Getter CSS class that apply the scoped ‘x’ color or one of its variants as color of the target element |
| `.c-y` | `.c-light-y` | `.c-dark-y` | `.c-on-y` | Getter CSS class that apply the scoped ‘y’ color or one of its variants as color of the target element |

:::note 
At the moment we have choosen to only provide stock getters for the CSS properties `color` and `background`. 
Our rationale is that the users of this library would most often than not create their own getter classes.

Nevertheless, we _might_ provide addional getter classes in future releases. If you believe additional vanilla getter classes would benefit a common use case, please [raise an issue](./contribution-feedback).
:::

## Setters (WORK IN PROGRESS)

### Theme changer

| Setter | Description |
| :----  | :-------    |
| `ui-dark` | Setter for the parent element (i.e body) |
| `ui-iceberg` | Setter for the parent element (i.e body) |

:::note 
These are two special setters that apply ALL of the ui colors to the local DOM node scope. This means if you apply this class to `<body>`, all of your app will inherit the theme !
:::

## Mixins (WORK IN PROGRESS)

### Mixins of each part of the library

If you rather to input one group of Swatch library variables to your own library simply just add the related input code from table below into your own SCSS library.

:::info
It's recommended to use `@use` rule instead of `@import` rule for it's multiple advantages.
:::

| irective      |     Description      |
| :------------ |     :----------      |
| `@mixins.define-variables(vars.monochrome-colors);` | Adds the monochrome colors to the library |
| `@mixins.define-variables(vars.modals-colors);` | Adds the modals colors to the library |
| `@mixins.define-variables(vars.wheel-colors);` | Adds the wheel colors to the library |
| `@mixins.define-variables(vars.theme.colors);` | Adds the Theme colors to the library |
| `@mixins.define-variables(vars.sm-colors);` | Adds the SM colors to the library |
| `@mixins.define-variables(vars.ui-colors);` | Adds the UI colors to the library |
