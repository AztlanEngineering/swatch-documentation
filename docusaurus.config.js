module.exports = {
  title           :'Swatch',
  tagline         :'A powerful, lightweight scss library based on css4 vars and the mutator pattern.',
  url             :'https://vercel.com/fwrlines/swatch-docs',
  baseUrl         :'/',
  favicon         :'img/favicon.ico',
  organizationName:'fwrlines', // Usually your GitHub org/user name.
  projectName     :'Swatch', // Usually your repo name.
  themes          :['@docusaurus/theme-live-codeblock'],
  themeConfig     :{
    navbar:{
      title:'Swatch',
      logo :{
        alt:'My Site Logo',
        src:'img/logo.png',
      },
      items:[
        {
          to            :'docs/introduction',
          activeBasePath:'docs',
          label         :'Docs',
          position      :'left',
        },
        {
          href    :'https://github.com/fwrlines/swatch',
          label   :'GitHub',
          position:'right',
        },
      ],
    },
    footer:{
      style:'dark',
      links:[
        {
          title:'Docs',
          items:[
            {
              label:'Introduction',
              to   :'docs/introduction',
            },
            {
              label:'Quick Install',
              to   :'docs/getting-started-quick-install',
            },
	          {
	             label:'API Reference',
	             to   :'docs/api-reference',
	          }
          ],
        },
        {
          title:'Links',
          items:[
            {
              label:'GitHub',
              href :'https://github.com/fwrlines/swatch',
            },
          ],
        },
        {
          title:'Contribution & feedback',
          items:[
	          {
              label:'Contribution guide',
	             to   :'docs/contribution-feedback',
            },
            {
              label:'Issues',
              href :'https://github.com/fwrlines/swatch/issues',
            },
          ],
        },
      ],
      copyright:`Copyright © ${new Date().getFullYear()} By fwrlines Coding Group.`,
    },
  },
  presets:[
    [
      '@docusaurus/preset-classic',
      {
        docs:{
          sidebarPath:require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl    :'https://github.com/fwrlines/swatch-docs/edit/master/',
        },
        blog:{
          showReadingTime:true,
          // Please change this to your repo.
          editUrl        :'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme:{
          customCss:[
            require.resolve('@fwrlines/swatch/main.min.css'),
            require.resolve('./src/css/custom.css')
          ] 
        },
      },
    ],
  ],
  plugins:[
    //'docusaurus-plugin-sass'
  ]
}
