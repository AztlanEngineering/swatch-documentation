---
slug: getting-started-quick-install
title: Quick Install (precompiled)
sidebar_label: Quick Install
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**This section applies to you if:**
+ You want to have the library running quickly
+ You are ok with using the library with the default variables and colors
+ You want to test the library and see whether it suits you

Next you will find the instructions to install the precompiled and minified version of Swatch. This version includes the complete set of setters, getters, the default 10 colors and 2 themes (light and dark).

## Option 1 : One-minute install

**We will simply add the library css as a link to your html.**

This is the simplest way to have the library running. 

Just put this line below inside the `<head>` tag of your html template.
```html title='index.html'
<link rel="stylesheet" href="https://unpkg.com/@fwrlines/swatch@latest/main.min.css">
```

## Option 2 : Add to create-react-app

**Simply**

```bash
npm i @fwrlines/swatch
```

And in your main App file (or wherever you like).

```js
import '@fwrlines/swatch/main.min.css'
```

**As simple as that. Now you're good to go !**

## Option 3 : Bundle minified css from npm

If you are using a build system (webpack, rollup) and wish to import this library as a module, you can install it from NPM using :

```bash
npm i @fwrlines/swatch
```

And then simply, in your javascript (provided `css` files are understood by your build system).


<Tabs
  className="unique-tabs"
  defaultValue="ESM"
  values={[
    {label: 'ESM', value: 'ESM'},
    {label: 'CommonJS', value: 'CommonJS'},
  ]}>
  <TabItem value="ESM">

```js
import '@fwrlines/swatch/main.min.css'
```
  </TabItem>
  <TabItem value="CommonJS">

```js
require('@fwrlines/swatch/main.min.css')
```

  </TabItem>
</Tabs>

## Now test it works !

Now you've installed the library, you can test it is successfully installed by writing in your html

```html live
<div class='y-green b-y'>I am text in a green box.</div>

```

This was your first glance at the actual workings of the library. 

In the next step, you will learn the rationale in using the Swatch coloring library. You will get familiar with the _Swatch way of doing things_, an efficient new paradigm to manage theming and colors on your front-end projects ! 


**Go the the Guides section, and [start learning](./guides-setters-getters) !**
