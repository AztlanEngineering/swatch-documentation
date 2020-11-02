---
slug: guides-themes-dark-theme
title: Dark Theme / Global Themes
---

Everybody likes dark theme.

**Before applying themes to your app, you need to apply theme variables to your content.** We explain how to do it, and which are the available themes variables here :  [Guides > Themes > A Primer on Swatch Themes](./guides-themes-introduction).


Enabling dark theme in Swatch is as easy as applying the class `ui-dark` to any root element or wrapper, for instance :


```jsx live
<body> className={`${currentTheme} y-background b-y`} style={{ padding:'1em' }}>

  <button onClick={ toggleCurrentTheme }>Click me to change theme !</button>
  <h1 className='x-heading c-x'>Some news article</h1>
  <p className='x-subtitle c-x' style={{ fontSize:'2em' }}>A detailed reason for you to read the article </p>
  <p className='x-metadata c-x'>Published on August 10</p>
  <p className='x-paragraph c-x'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla ligula vel mollis ultrices. Proin sodales faucibus sodales. Ut libero nisi, venenatis in neque interdum, ullamcorper scelerisque erat. Phasellus non lectus nisl. Quisque vel laoreet libero. Cras mi ante, efficitur a tincidunt ac, cursus at metus. Morbi porttitor magna non ipsum porttitor, vitae scelerisque arcu ullamcorper. Aenean non sapien vel leo aliquam dictum in in metus. In et elit mauris. Pellentesque ac pharetra erat. </p>
  <div className='y-red b-y'>This div has a red background. This doesnt change with the theme.</div>
</body>
```

