---
slug: guides-react-components
title: React components
---

There are different ways you can use Swatch to theme your React components. If you are using an other front-end framework than React, it is likely you can still find in this guide a pattern useful for you.

Feel free to adapt the below pattern depending on whether :
  + You use CSS modules or a separate CSS file for each component, CSS in JS, basically you write CSS separately from HTML
  + You prefer style properties (you write your CSS Inline)

<!--
## Pattern 1 : Keeping CSS and HTML/JSX separate

This way of doing coloring is for you if you write your CSS separately from your React component.
-->


## An example : making a colored button


First, write the component (S)CSS. We recommend you do it in a separate file.
```css title="/ColoredButton.styles.css"
.colored_button{
  /* We read the background from the `x` setter */
  background:var(--x);

  /* We read the text color from the `x` setter. `on-x` has the value of a text color that contrasts legibly with `x` */
  color:var(--on-x);
  padding:1em;
}

.colored_button:hover,
.colored_button:focus {
  /* On hover, we color the button a darker shade */
  background:var(--dark-x);
}

.colored_button:active {
  /* On active (on click), we color the button a lighter shade */
  background:var(--light-x);
}
```

Now, write the React Component, in its own file as well.
```jsx title="/ColoredButton.js"
import * as React from 'react'

import './ColoredButton.styles.css'
// Or import './ColoredButton.styles.module.css'
// Or import './ColoredButton.styles.scss' // if you use a preprocessor
// Or <style>Copy the styles in a style block.</style> // (That's a bit ugly tough)

// Must match the class defined in the (S)CSS file
const baseClassName = 'colored_button'

const ColoredButton({
  className, // Prop provided by the 'user'
  ...props
}) => (
<button
className={[
  baseClassName, 
  className //The user-provided class, which we'll read the getter from
].join(' ')}
{...props}
>
  This is a colored button
</button>)

```

Then, to apply a color, simply provide a setter in the `className` prop. Voila.
```jsx
<ColoredButton className='x-red'/>
<ColoredButton className='x-white'/>
<ColoredButton className='x-primary'/>
<ColoredButton className='x-success'/>
```

### Now, try it yourself

**You can find below a playground illustrating this pattern.**
:::note
Please note that the styles are included in the Playground only for you to practice. We repeat, in real world, we would include the styles in a separate file (as in the previous example), and we recommend you do the same.
:::

```jsx live
function Playground() {

  const baseClassName = 'colored_button'
  
  const ColoredButton = ({
    id,
    className,
  }) => (
    <button
      id={ id }
      className={[
        baseClassName,
        className
      ].filter(e => e).join(' ')}
    >
      This button accepts color setters. 
    </button>
  )

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
         .colored_button{
            background:var(--x);
            color:var(--on-x);
            padding:1em;
          }
          .colored_button:hover,
          .colored_button:focus {
            background:var(--dark-x);
          }
          .colored_button:active {
            background:var(--light-x);
          }
        ` }}/>

        <div>
          The following button takes its background-color from the setter <code>x</code>.
        <br/>The color on the inside text is <em>automatically</em> inferred from the background.
        <br/> On hover, this button takes a darker shade of the color <code>x</code>
        <br/> On active, this button takes a lighter shade of the color <code>x</code></div>

      <ColoredButton className='x-warning'/>
      <ColoredButton className='x-blue'/>
      <ColoredButton className='x-white'/>

    </>
)}

```
:::info
This is a very simple example of the power of Swatch. As you can see, in only 10 lines of CSS, we manage complex coloring, compatible with all colors. 

Once you get more familiar with the Setter/Getter pattern, you will only be limited by your imagination.
:::
:::tip Try this !
In the above playground, make the button background transparent, and get both the color and a 1px border-color from the `x` setter.
:::o
<!---

## Example 2 : Inline Theming

**Coming soon**

```SCSS title='title.css'

```
----->
