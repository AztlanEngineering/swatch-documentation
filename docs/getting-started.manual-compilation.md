---
slug: getting-started-manual-compilation
title: Manual Compilation
sidebar_label: Manual Compilation
---

**This section applies to you if:**
+ **You are want to get your hands dirty with the source code**
+ **You want to work your custom version of the library**, by modifying the variables **outside of a build system** (if you want to compile a customized version while bundling from the npm module, check the [Webpack](./getting-started-webpack) section).
+ **You want to modify the postcss config**...
+ ... or do other kinds of witchcraft on the source code

## Clone and compile the base version

```bash
# Clone the library
git clone git@github.com:fwrlines/swatch.git

# Install the dev dependencies
cd swatch
npm i

# Compile the library. This will create two files
# - main.css (the Dart SASS compiled library)
# - main.min.css (The minified main.css file with cssnano and postcss)
npm run build:main
```

## Compile a custom version

First, modify the `custom.scss` following [this guide](./advanced-custom-palette).

Then, compile it and minify it. 

```bash
# Compiles the library. This will create two files
# - custom.css (the Dart SASS compiled library custom library)
# - custom.min.css (The minified custom.css file with cssnano and postcss)
npm run build:custom

```

:::info
Swatch uses the SASS `@use` directive. Please mind that this feature is only available in [Dart Sass > 1.23.0](https://sass-lang.com/documentation/at-rules/use), while it remains unavailable in other implementations of SASS. This is why the compilation can only work with the npm module `sass` (Dart SASS) and will fail in `node-sass` (Javascript SASS).
:::

