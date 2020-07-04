---
id: colors.advanced.variables
title: Advanced:Theming / Custom colors
---

To have the customized Swatch go to the library and copy `custom.scss` template and add it to your SCSS library and change the variables you need, then export the library.

Use the following directives if your working directory is the one that contains this file. (ie, if you use this template in its original folder)

`@use "vars";`       
`@use "mixins";`

If you want to set up your custom vars somewhere else (for instance, in a react app, or in a different project), you will want to copy this template to your own scss file, and then do:
    
`@use '@fwrlines/swatch/mixins';`    
`@use '@fwrlines/swatch/vars';`

Make sure, if you use the previous directives, to add `node_modules` to your sass path. See the [Installation doc](installation.md) for info. If you don't do this you will encounter a "module not found error".    
This is an example of how to use the library with your custom variables.

In this version, all the variables are the default ones ...
  except "$monochrome-colors", which is set to a custom palette.

`$monochrome-colors:(`    
 `"black":(`   
   `"base":green,`   
   `"light":vars.$off-black,`   
   `"dark":vars.$black, //sensible default`   
   `"on":green,`   
 `),`   
 `"white":(`    
   `"base":green,`    
   `"light":vars.$white, //sensible default`    
   `"dark":vars.$off-white,`    
   `"on":yellow,`    
  `),`
 `"grey":(`    
   `"base":red,`    
   `"light":vars.$light-grey,`    
   `"dark":vars.$dark-grey,`    
   `"on":red,`    
  `)`
`);`    

`@mixin main {`    
 `:root {`    
   `@include mixins.define-variables($monochrome-colors);`    
   `@include mixins.define-variables(vars.$modals-colors);`    
   `@include mixins.define-variables(vars.$theme-colors);`    
   `@include mixins.define-variables(vars.$wheel-colors);`    
   `@include mixins.define-variables(vars.$ui-colors);`    
   `@include mixins.define-variables(vars.$sm-colors);`    
  `}`

 `@include mixins.setterFromMap($monochrome-colors);`    
 `@include mixins.setterFromMap(vars.$theme-colors);`    
 `@include mixins.setterFromMap(vars.$modals-colors);`    
 `@include mixins.setterFromMap(vars.$wheel-colors);`    
 `@include mixins.setterFromMap(vars.$ui-colors);`    
 `@include mixins.setterFromMap(vars.$sm-colors);`    
 `@include mixins.define-theme(vars.$colorscheme-dark, "ui-dark");`    
 `@include mixins.define-theme(vars.$colorscheme-iceberg, "ui-iceberg");`    
 `@include mixins.getters;`    
`}`    

`@include main();`

You can set each of the variables above to custom values that you desire before compiling your library. If you wanted to change other palettes you need to replace the `$monochrome-color` variable with ant of the below palettes you want to change or you can add them if you prefer to change more than one palette. Remember each palette you desice to change you should change it's `@include` directive from the second part of the code and remove it's `vars.` part each add the `vars.` part to the ones you already want to be default if they don't have it already. 

### Monochrome-color:

`$monochrome-colors:(`    
 `"black":(`   
   `"base":green,`   
   `"light":vars.$off-black,`   
   `"dark":vars.$black, //sensible default`   
   `"on":green,`   
 `),`   
 `"white":(`    
   `"base":green,`    
   `"light":vars.$white, //sensible default`    
   `"dark":vars.$off-white,`    
   `"on":yellow,`    
  `),`    
 `"grey":(`    
   `"base":red,`    
   `"light":vars.$light-grey,`    
   `"dark":vars.$dark-grey,`    
   `"on":red,`    
  `)`
`);`    


### modals-color:

`$modals-colors:(`   
 `"error":(`   
   `"base":$error,`   
   `"light":$light-error,`   
   `"dark":$dark-error,`   
   `"on":$on-error,`   
 `),`   
 `"warning":(`   
   `"base":$warning,`   
   `"light":$light-warning,`   
   `"dark":$dark-warning,`   
   `"on":$on-warning,`   
 `),`   
 `"success":(`   
   `"base":$success,`   
   `"light":$light-success,`   
   `"dark":$dark-success,`   
   `"on":$on-success,`   
 `), )`       

### wheel-color:

`$wheel-colors:(`    
 `"red":(`    
 `  "base":$red,`    
 `  "light":$light-red,`    
 `  "dark":$dark-red,`    
 `  "on":$on-red,`    
 `),`    
 `"orange":(`    
 `  "base":$orange,`    
 `  "light":$light-orange,`    
 `  "dark":$dark-orange,`    
 `  "on":$on-orange,`    
 `),`   
 `"yellow":(`    
 `  "base":$yellow,`    
 `  "light":$light-yellow,`    
 `  "dark":$dark-yellow,`    
 `  "on":$on-yellow,`    
 `),`    
 `"olive":(`    
 `  "base":$olive,`    
 `  "light":$light-olive,`    
 `  "dark":$dark-olive,`    
 `  "on":$on-olive,`    
 `),`    
 `"green":(`    
 `  "base":$green,`    
 `  "light":$light-green,`    
 `  "dark":$dark-green,`    
 `  "on":$on-green,`    
 `),`    
 `"indigo":(`    
 `  "base":$indigo,`    
 `  "light":$light-indigo,`    
 `  "dark":$dark-indigo,`    
 `  "on":$on-indigo,`    
 `),`    
 `"azure":(`    
 `  "base":$azure,`    
 `  "light":$light-azure,`    
 `  "dark":$dark-azure,`    
 `  "on":$on-azure,`    
 `),`    
 `"blue":(`    
 `  "base":$blue,`   
 `  "light":$light-blue,`    
 `  "dark":$dark-blue,`    
 `  "on":$on-blue,`    
 `),`    
 `"violet":(`    
 `  "base":$violet,`    
 `  "light":$light-violet,`    
 `  "dark":$dark-violet,`    
 `  "on":$on-violet,`    
 `),`    
 `"pink":(`    
 `  "base":$pink,`    
 `  "light":$light-pink,`    
 `  "dark":$dark-pink,`    
 `  "on":$on-pink,`    
 `),`    
 `"transparent":(`    
 `  "base":$transparent,`    
 `  "light":$light-transparent,`    
 `  "dark":$dark-transparent,`    
 `  "on":$on-transparent,`    
 `),  )`


### Theme-color:

`$theme-colors:(`    
` "primary":(`   
`   "base":$primary,`    
`   "light":$light-primary,`    
`   "dark":$dark-primary,`    
`   "on":$on-primary,`    
` ),`     
` "secondary":(`    
`   "base":$secondary,`    
`   "light":$light-secondary,`    
`   "dark":$dark-secondary,`    
`   "on":$on-secondary,`    
` ),`    
` "accent1":(`    
`   "base":$accent1,`    
`   "light":$light-accent1,`    
`   "dark":$dark-accent1,`     
`   "on":$on-accent1,`     
` ),`    
` "accent2":(`      
`   "base":$accent2,`    
`   "light":$light-accent2,`    
`   "dark":$dark-accent2,`    
`   "on":$on-accent2,`     
` ),`     
` "accent3":(`     
`   "base":$accent3,`     
`   "light":$light-accent3,`     
`   "dark":$dark-accent3,`     
`   "on":$on-accent3,`     
` ), )`

### SM-color:

`$sm-colors:(`    
 `"twitter":(`    
 `  "base":$twitter,`    
 `  "light":$light-twitter,`    
 `  "dark":$dark-twitter,`    
 `  "on":$on-twitter,`    
 `),`    
 `"facebook":(`    
 `  "base":$facebook,`    
 `  "light":$light-facebook,`    
 `  "dark":$dark-facebook,`    
 `  "on":$on-facebook,`    
 `),`    
 `"instagram":(`    
 `  "base":$instagram,`    
 `  "light":$light-instagram,`    
 `  "dark":$dark-instagram,`    
 `  "on":$on-instagram,`    
 `),`    
 `"google":(`    
 `  "base":$google,`    
 `  "light":$light-google,`    
 `  "dark":$dark-google,`    
 `  "on":$on-google,`    
 `),  )`

### ui-color:

`$ui-colors:(`    
` "background":(`    
`   "base":$off-white,`    
`   "light":$white,`    
`   "dark":$lighter-grey,`    
` ),`    
` "paragraph":(`    
`   "base":$off-black,`    
`   "light":$black,`    
`   "dark":$darker-grey,`    
`   "on":$on-black,`    
` ),`    
` "navlink":(`    
`   "base":$off-black,`    
`   "light":$darker-grey,`    
`   "dark":$black,`    
`   "on":$on-black,`    
` ),`    
` "link":(`    
`   "base":$blue,`    
`   "light":$light-blue,`    
`   "dark":$dark-blue,`    
`   "on":$on-blue,`    
` ),`    
` "heading":(`    
`   "base":$black,`    
`   "light":$off-black,`    
`   "dark":$black,`    
`   "on":$on-black,`    
` ),`    
` "subtitle":(`    
`   "base":$dark-grey,`    
`   "light":$grey,`    
`   "dark":$off-black,`    
`   "on":$on-black,`    
` ),`    
` "metadata":(`    
`   "base":$light-grey,`    
`   "light":$lighter-grey,`    
`   "dark":$grey,`    
`   "on":$black,`    
` ),  )`    
