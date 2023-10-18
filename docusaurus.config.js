// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: '/',  
  plugins: [
      [
        "posthog-docusaurus",
        {
          apiKey: "phc_pAVDMSA1JEovrZWF6leBbo8321TAkeeikPav6T7GHF8",
          appUrl: "https://eu.posthog.com", // optional
          enableInDevelopment: false, // optional
          // other options are passed to posthog-js init as is
        },
      ],
    ],
  title: 'Difree – a distraction-free writing app',
  tagline: 'Escape distractions while writing: Difree offers a serene, focused space to unleash creativity.',
  favicon: 'img/logo32.png',

  // Set the production url of your site here
  url: 'https://getdifree.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Blog about Difree',
          blogDescription: 'Get a deep dive into what\'s happening in Difree',
          postsPerPage: 10,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Difree',
        logo: {
          alt: 'Difree logo',
          src: 'img/logo32.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: 'download', label: 'Download', position: 'left'},
          {to: 'blog', label: 'Blog', position: 'left'},
          {to: 'contact', label: 'Contact', position: 'left'}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs',
              },
              {
                label: 'Changelog',
                to: '/changelog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Mastodon',
                href: 'https://mastodon.world/@getdifree',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact',
                to: '/contact',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Privacy policy',
                to: '/privacy-policy',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021 - ${new Date().getFullYear()} Difree. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
