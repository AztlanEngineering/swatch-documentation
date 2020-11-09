---
slug: examples
title: Examples 
---

Here are two introductory examples of the functionality of Swatch. These examples are meant to give you give an idea of what the library can do. Don't worry these examples are not clear, at the moment, we will explain them later in detail. 

You will learn in-depth how the library is desgined and how you can leverage its powerful and code-efficient patterns in the [Guides > Setters, Getters and Scope](./guides-setters-getters).

## A basic example

This first example uses Swatch in the most simple way : html which consumes the Swatch syntax through the provided CSS classes.

```jsx live
    <div class="y-background b-y" style={{ padding:'1em' }}>

      <h1 class='x-heading c-x'>Some news article</h1>
      <h2 class='x-subtitle c-x'>A detailed reason for you to read the article </h2>
      <p class='x-metadata c-x'>Published on August 10</p>
      <p class='x-paragraph c-x'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla ligula vel mollis ultrices. Proin sodales faucibus sodales. Ut libero nisi, venenatis in neque interdum, ullamcorper scelerisque erat. Phasellus non lectus nisl. Quisque vel laoreet libero. Cras mi ante, efficitur a tincidunt ac, cursus at metus. Morbi porttitor magna non ipsum porttitor, vitae scelerisque arcu ullamcorper. Aenean non sapien vel leo aliquam dictum in in metus. In et elit mauris. Pellentesque ac pharetra erat. </p>
      <div class='y-red b-y c-on-y'>This div has a red background and the text color is automatically contrasted.</div>
      <div class='y-blue b-y c-on-y'>This div has a blue background and the text color is automatically contrasted.</div>
    </div>
```

## Dynamic theming

This second example illustrates how Swatch can be used together with javascript (here, React) to apply dynamic theming. Don't worry if how this works is not clear yet. It is covered in-depth in the [Guides > Themes > Local Themes](./guides-themes-introduction) section of the guides.

```jsx live
function AppWithDarkThemeToggle() {
  
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(false)

  const toggleDarkTheme = () => setDarkThemeEnabled(!darkThemeEnabled)

  return (
    <div className={`${darkThemeEnabled ? 'ui-dark' : 'ui-light'} y-background b-y`} style={{ padding:'1em' }}>

    <button onClick={ toggleDarkTheme }>Click me to enable { darkThemeEnabled ? 'light ':'dark ' }theme !</button>
      <h1 className='x-heading c-x'>Some news article</h1>
      <p className='x-subtitle c-x' style={{ fontSize:'2em' }}>A detailed reason for you to read the article </p>
      <p className='x-metadata c-x'>Published on August 10</p>
      <p className='x-paragraph c-x'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla ligula vel mollis ultrices. Proin sodales faucibus sodales. Ut libero nisi, venenatis in neque interdum, ullamcorper scelerisque erat. Phasellus non lectus nisl. Quisque vel laoreet libero. Cras mi ante, efficitur a tincidunt ac, cursus at metus. Morbi porttitor magna non ipsum porttitor, vitae scelerisque arcu ullamcorper. Aenean non sapien vel leo aliquam dictum in in metus. In et elit mauris. Pellentesque ac pharetra erat. </p>
      <div className='y-red b-y'>This div has a red background. This doesnt change with the theme.</div>
    </div>
  ) 
}
```
