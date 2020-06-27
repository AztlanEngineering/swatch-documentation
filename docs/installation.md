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

It's the simplest way to use the Swatch library. All you have to do is to add a `<link>` tag to your code and in it's `href` attribute give the URL of the latest version of the library:

`<link href='https://demo.swatch.fwrlines.com/main.css' rel='stylesheet' type='text/css' />`

--- 

### Add Swatch to your own SCSS library

There are two way to add the Swatch library to your SCSS libray:

#### a) Add the library to your SCSS library


##### Via Dart SASS

If you wish to add the Swatch library to your **SCSS** library do as follow:

1- `npm install @fwrlines/swatch` in your library. 

2- Add the Swatch library to your final **SCSS** file via `@use "@fwrlines/swatch/";`

3- Now To compile your **SCSS** file to a **CSS** file use the `-I` flag in your command line followed by the `./node_modules` and then your **SCSS** & **CSS** file names like below:

`sass -I ./node_modules your-library.scss final-stylesheet.css`

##### Via Webpack


#### b) Customize the Swatch library and add it to your library

If you want to customize the library to your needs before adding it ro your own library, we gave you the option:

After installing the Swatch with _npm_ and adding it to your **SCSS** library. Copy the template at `./custome.scss` and use it in your own **SCSS** file. Then modify the variables you want.
Now your library is ready to be compiled to **CSS** file:

`sass -I ./nodemodules your-library.scss final-stylesheet.css`
