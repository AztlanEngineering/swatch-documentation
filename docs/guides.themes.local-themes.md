---
slug: guides-themes-introduction
title: A Primer on Swatch Themes
---

You will find in this section an explanation of how themes relate to the Swatch coloring and theming library.

### How are themes represented in Swatch ?

In Swatch, a theme is an ensemble of CSS4 variables. 

There are two themes provided by default : `light` and `dark`.

Both themes include the following CSS4 variables and their variants

| Main variable | Light variant | Dark variant | Contrast color |
| :-------- | :---------- | :----------- | :----------- | 
| --background  | --light-background | --dark-background | --on-background |
| --heading    | --light-heading | --dark-heading | --on-heading | 
| --subtitle | --light-subtitle | --dark-subtitle | --on-subtitle |
| --metadata | --light-metadata | --dark-metadata | --on-metadata |
| --description | --light-description | --dark-description | --on-description |

Themes can be manually triggered using the class api `ui-{themeName}`, that is to say `ui-light` and `ui-dark`. Said in another way : `.ui-{themeName}` sets ALL of the previous variables. 

The following example should give you a better idea of this

```jsx live
function AppWithDarkThemeToggle() {
  
  const availableThemes = [
    'ui-light',
    'ui-dark'
  ]

  const [currentTheme, setCurrentTheme] = useState(availableThemes[0])

  const toggleCurrentTheme = () => {
    const currentThemeIndex = availableThemes.findIndex(e => e === currentTheme)
    const nextThemeIndex = (currentThemeIndex + 1) % availableThemes.length
    setCurrentTheme(availableThemes[nextThemeIndex])
  }

  return (
    <div className={`${currentTheme} y-background b-y`} style={{ padding:'1em' }}>

    <button onClick={ toggleCurrentTheme }>Click me to change theme !</button>
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
As you can see, triggering the dark theme is completely effortless, provided you have set the right variables to your content. 
:::

:::tip
Light theme provided as a default in :root. 
:::
