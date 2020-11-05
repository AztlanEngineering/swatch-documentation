---
slug: getting-started-webpack
title: Webpack Compilation
sidebar_label: Webpack Compilation
---

**This section applies to you if:**
+ **You are using webpack to bundle your application** (for instance, you are building a React app)
+ **You want to compile yourself the source SCSS** of Swatch
+ ... and while doing so, **you wish to customize its variables**

## 1. Install sass-loader 

As the source code of Swatch is SCSS, first we need to install the `sass-loader` package from npm.

```bash
npm i --save-dev sass-loader
```

## 2. Add webpack config

In your webpack config file, make sure the highlighted lines are present.

```jsx {15-22} title="/webpack.config.js"
module.exports={
  // ...
  module:{
    rules:[
    // ...
      {
        test:/\.(scss|css)$/,
        use :[
          {
            loader:MiniCssExtractPlugin.loader
          }, {
            loader :'css-loader',
          }, {
            loader:'postcss-loader'
          }, {
            loader :'sass-loader',
            options:{
              sassOptions:{
                includePaths:['./node_modules']
              }
            }
          }
        ]
      }
    // ...
    ]
  }
  // ...
}

```

:::caution 
`sass-loader` must be the last loader included for scss files. This is because the loaders are executed in reverse order.
:::
:::info
The `includePaths` option will give your SCSS `@import` and `@use` directives module resolution from the `node_modules` directory (this substitutes to writing unreliable relative paths).
:::


## 3. Import into your scss file

Copy the content of `node_modules/@fwrlines/swatch/custom.scss` into your `styles.scss` (or the name of your custom scss styles) file and replace

```scss title="src/css/styles.scss"
@use 'mixins';
@use 'vars';
```

with

```scss title="src/css/styles.scss"
@use '@fwrlines/swatch/mixins';
@use '@fwrlines/swatch/vars';
```

 Then, customize Swatch following [this guide](./advanced-custom-palette).
