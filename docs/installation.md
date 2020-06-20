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

If you wish to add the Swatch library to your SCSS library do as follow:
`npm install @fwrlines/swatch` in your library and add the Swatch library to your final **SCSS** file which is going to be exported to create a **CSS** file by this line of code:

 `@import node_modules/@fwrlines/swatch/main`

#### b) Customize the Swatch library and add it to your library
