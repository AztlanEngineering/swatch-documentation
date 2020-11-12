---
slug: guides-themes-introduction
title: Introduction to theming with Swatch
---

Now, you know how to use setters and getters to apply colors to your html blocks or components. But how can we leverage the power of Swatch to apply themes at the application level ?

## How are themes represented in Swatch ?

**<ins>In Swatch, a theme is an ensemble of CSS variables. </ins>**

There are two themes provided by default : `light` and `dark`.

You have maybe already seen [here](./api-reference) the complete list of colors available in vanilla Swatch. Some of these colors are a bit _special_ in the sense that they can be _themed_.

Here is a table of all the _themable_ colors, as well as their `light` (L) and `dark` (D) default.

| Main variable (L/D)| Light variant (L/D)| Dark variant (L/D)| Contrast color (L/D) 
| :-------- | :---------- | :----------- | :----------- | 
| --background <span className='y-background b-y'>&#8193;</span><span className='ui-dark y-background b-y'>&#8193;</span> | --light-background <span className='y-background b-light-y'>&#8193;</span><span className='ui-dark y-background b-light-y'>&#8193;</span> | --dark-background <span className='y-background b-dark-y'>&#8193;</span><span className='ui-dark y-background b-dark-y'>&#8193;</span> | --on-background <span className='y-background b-on-y'>&#8193;</span><span className='ui-dark y-background b-on-y'>&#8193;</span> | 
| --heading <span className='y-heading b-y'>&#8193;</span><span className='ui-dark y-heading b-y'>&#8193;</span> | --light-heading <span className='y-heading b-light-y'>&#8193;</span><span className='ui-dark y-heading b-light-y'>&#8193;</span> | --dark-heading <span className='y-heading b-dark-y'>&#8193;</span><span className='ui-dark y-heading b-dark-y'>&#8193;</span> | --on-heading <span className='y-heading b-on-y'>&#8193;</span><span className='ui-dark y-heading b-on-y'>&#8193;</span> | 
| --subtitle <span className='y-subtitle b-y'>&#8193;</span><span className='ui-dark y-subtitle b-y'>&#8193;</span> | --light-subtitle <span className='y-subtitle b-light-y'>&#8193;</span><span className='ui-dark y-subtitle b-light-y'>&#8193;</span> | --dark-subtitle <span className='y-subtitle b-dark-y'>&#8193;</span><span className='ui-dark y-subtitle b-dark-y'>&#8193;</span> | --on-subtitle <span className='y-subtitle b-on-y'>&#8193;</span><span className='ui-dark y-subtitle b-on-y'>&#8193;</span> | 
| --metadata <span className='y-metadata b-y'>&#8193;</span><span className='ui-dark y-metadata b-y'>&#8193;</span> | --light-metadata <span className='y-metadata b-light-y'>&#8193;</span><span className='ui-dark y-metadata b-light-y'>&#8193;</span> | --dark-metadata <span className='y-metadata b-dark-y'>&#8193;</span><span className='ui-dark y-metadata b-dark-y'>&#8193;</span> | --on-metadata <span className='y-metadata b-on-y'>&#8193;</span><span className='ui-dark y-metadata b-on-y'>&#8193;</span> | 
| --link <span className='y-link b-y'>&#8193;</span><span className='ui-dark y-link b-y'>&#8193;</span> | --light-link <span className='y-link b-light-y'>&#8193;</span><span className='ui-dark y-link b-light-y'>&#8193;</span> | --dark-link <span className='y-link b-dark-y'>&#8193;</span><span className='ui-dark y-link b-dark-y'>&#8193;</span> | --on-link <span className='y-link b-on-y'>&#8193;</span><span className='ui-dark y-link b-on-y'>&#8193;</span> | 


## Example of applying a site-wide theme

Themes can be manually triggered using the class api `ui-{themeName}`, that is to say `ui-light` and `ui-dark`. Said in another way : `.ui-{themeName}` sets ALL of the _themable_ variables. 

The following example should give you a better idea of the theme api.

```jsx live
function AppWithDarkThemeToggle() {
  
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(false)

  const toggleDarkTheme = () => setDarkThemeEnabled(!darkThemeEnabled)

  return (
    <div className={`${darkThemeEnabled ? 'ui-dark' : 'ui-light'} y-background b-y`} style={{ padding:'1em' }}>

    <button onClick={ toggleDarkTheme }>Click me to enable { darkThemeEnabled ? 'dark ':'light ' }theme !</button>
      <h1 className='x-heading c-x'>Some news article</h1>
      <p className='x-subtitle c-x' style={{ fontSize:'2em' }}>A detailed reason for you to read the article </p>
      <p className='x-metadata c-x'>Published on August 10</p>
      <p className='x-paragraph c-x'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla ligula vel mollis ultrices. Proin sodales faucibus sodales. Ut libero nisi, venenatis in neque interdum, ullamcorper scelerisque erat. Phasellus non lectus nisl. Quisque vel laoreet libero. Cras mi ante, efficitur a tincidunt ac, cursus at metus. Morbi porttitor magna non ipsum porttitor, vitae scelerisque arcu ullamcorper. Aenean non sapien vel leo aliquam dictum in in metus. In et elit mauris. Pellentesque ac pharetra erat. </p>
      <div className='y-red b-y'>This div has a red background. This doesnt change with the theme.</div>
    </div>
  ) 
}
```

Of course, you can also apply other colors than theme variables to your content. In this case, if you apply a theme, these elements will keep their color, like the red block.

:::note
As you can see, triggering the dark theme is completely effortless, provided you have _set_ the right variables to your content. 
:::

:::tip
Light theme provided as a default in :root. This means, the light theme is applied by default when you _get_ any of the _themable_ variables. 
:::
