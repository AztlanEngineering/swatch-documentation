module.exports = {
  settings:{
    'import/resolver':{
      webpack:{
        config:'webpack.config.js'
      }
    }
  },
  env:{
    browser :true,
    node    :true,
    commonjs:true,
    es6     :true
  },
  extends:[
    'eslint:recommended',
    //'eslint-config-synacor'
  ],
  plugins:[
    'react',
    'react-hooks',
    //'formatjs'
  ],
  //'parser': 'babel-eslint',
  parserOptions:{
    ecmaVersion :6,
    sourceType  :"module",
    ecmaFeatures:{
      jsx:true
    }
  },
  rules:{
    'indent':[
      'error',
      2,
    ],
    'semi':[
      'error',
      'never'
    ],
    'key-spacing':[
      "error", {
        multiLine:{
          beforeColon:false,
          afterColon :false
        },
        align:{
          beforeColon:false,
          afterColon :false,
          on         :"colon"
        }
      }
    ],
    'react/jsx-closing-bracket-location':[
      'error', 
      'tag-aligned'
    ],
    'react/jsx-first-prop-new-line':[
      'error',
      'multiline-multiprop'
    ],
    'react/jsx-max-props-per-line':[
      'error', 
      { maximum: 1}
    ],
    'react/jsx-one-expression-per-line':[
      'error', {
        allow:'single-child'
      }
    ],
    'react/jsx-equals-spacing':[
      1,
      'never'
    ],
    'react/jsx-indent-props':[
      "error",
      2

    ],
    'react-hooks/rules-of-hooks' :'error',
    'react-hooks/exhaustive-deps':'warn',
    'no-unused-vars'             :[
      "error", 
      { varsIgnorePattern: "h|Fragment|React"}
    ],
    'quote-props':["error", "consistent-as-needed"]
  },
}
