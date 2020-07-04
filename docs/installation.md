---
id: installation 
title: Installation
sidebar_label: Installation
---

## There are different ways to install Swatch
### 1- Use the latest version of the library
### 2- Add the Swatch color library into your own SCSS library
#### a)Use the latest version of the library in your SCSS library
#### b)Customize the library first then add it to your SCSS library

---

### Use the latest version of Swatch in your project

The easiest way to use Swatch library is to copy the `<link>` tag below to your HTML file.

`<link href='https://demo.swatch.fwrlines.com/main.css' rel='stylesheet' type='text/css' />`

--- 

### Add Swatch to your own SCSS library

There are two ways to add the Swatch library to your SCSS libray:

#### a) Add Swatch to your SCSS library


##### Via Dart SASS

To add Swatch to your library:

1- `npm install @fwrlines/swatch` in your library. 

2- Add the Swatch library to your final **SCSS** file via `@use "@fwrlines/swatch/";`

3- Compile your **SCSS** library to **CSS** stylesheet via `sass` command and use the `-I` flag in your command line followed by the `./node_modules` then write your **SCSS** & **CSS** file names:

`sass -I ./node_modules your-library.scss final-stylesheet.css`

##### Via Webpack


#### b) Customize the Swatch library and add it to your library

1- To customize the variables before adding Swatch to your library you need to go to `node_modules/@fwrlines/swatch/custom.scss` and copy the template to your final Scss file.

2- Change the variables you need.

3- Export your Scss file with the following command:

`sass -I ./nodemodules your-library.scss final-stylesheet.css`
