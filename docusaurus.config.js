module.exports = {
  title: 'Swatch',
  tagline: 'A powerful, lightweight scss library based on css4 vars and the mutator pattern.',
  url: 'https://vercel.com/fwrlines/swatch-docs',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'fwrlines', // Usually your GitHub org/user name.
  projectName: 'Swatch', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    navbar: {
      title: 'Swatch',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/fwrlines/swatch',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/introduction',
            },
            {
              label: 'Installation',
              to: 'docs/installation',
            },
	     {
	       label: 'API References',
	       to: 'docs/apireference',
	    }
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/fwrlines/swatch',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('@fwrlines/swatch/main.css')
        },
      },
    ],
  ],
  plugins: [
    //'docusaurus-plugin-sass'
   ]
};
