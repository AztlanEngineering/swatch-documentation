---
slug: advanced-manual-compilation
title: Manual Compilation
sidebar_label: Manual Compilation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this section you will find the instructions to install the precompiled and minified version of Swatch. This version includes the complete set setters, getters, the default 10 colors and 2 themes (light and dark).

## Option 1 : One-minute install

This is the simplest way to have the library running. 

Just put this line between the `<head>` and `</head>` tags of your html template.
```html title='index.html'
<link rel="stylesheet" href="https://unpkg.com/@fwrlines/swatch@latest/main.min.css">
```

## Option 2 : Install minified css from npm

If you wish to import this library as a module, you can install it from NPM using :
```bash
npm i @fwrlines/swatch
```

And then simply, in your javascript


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

