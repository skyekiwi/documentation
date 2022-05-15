const {
  Agile,
  generateId,
  createState,
  createCollection,
  createComputed,
} = require('@agile-ts/core');
const {
  AgileHOC,
  useAgile,
  useWatcher,
  useProxy,
  useSelector,
  useValue,
} = require('@agile-ts/react');
const { Event, useEvent } = require('@agile-ts/event');
const { toast } = require('react-toastify');

const githubOrgUrl = 'https://github.com/skyekiwi';
const domain = 'https://skye.kiwi';
const npmOrgUrl = 'https://www.npmjs.com/package/@agile-ts';

const customFields = {
  copyright: `Made with  💜 by <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/skyekiwi_team">SkyeKiwi</a>`,
  meta: {
    title: 'An atom based state manager for JavaScript apps.',
    image: '/img/meta.png',
    description:
      'An atom based global State and Logic Library implemented in Typescript, ' +
      'offering a reimagined API that focuses on developer experience. ' +
      'AgileTs is a more straightforward alternative to Redux ' +
      'and allows you to easily manage your application States in React, Vue and plain Javascript.',
    color: '#6c69a0',
    keywords: [
      'state management',
      'react',
      'state',
      'react state management',
      'react native state management',
      'react state',
      'typescript',
      'react state management without redux',
      'vue',
      'webdev',
      'redux',
      'recoil',
      'mobx',
      'javascript',
      'software',
      'coding',
      'development',
      'engineering',
    ],
  },
  domain,
  githubOrgUrl,
  githubUrl: `${githubOrgUrl}/skyekiwi-network`,
  githubDocsUrl: `${githubOrgUrl}/documentation`,
  npmCoreUrl: `${npmOrgUrl}/core`,
  discordUrl: `https://discord.gg/274zjNkC`,
  twitterUrl: 'https://twitter.com/skyekiwi_team',
  version: '0.0.1',
  announcementBar: {
    id: 'announcement',
    content: [
      `❓ If you have any questions, don't hesitate to join our <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/T9GzreAwPH">Community Discord</a> ️`,
      `🎉 If you like AgileTs, give us a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/agile-ts/agile">GitHub</a>`,
      `⏰ If you want to stay update to date, follow use on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/AgileTypescript">Twitter</a>`,
    ],
    random: false,
    interval: 100000,
  },
};

const config = {
  title: 'SkyeKiwi',
  tagline: 'SkyeKiwi is a privacy layer for blockchains. ',
  url: customFields.domain,
  baseUrlIssueBanner: false,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'SkyeKiwi',
  projectName: 'https://github.com/skyekiwi',
  themes: ['@docusaurus/theme-live-codeblock'],
  scripts: [{ src: 'https://snack.expo.io/embed.js', async: true }], // https://github.com/expo/snack/blob/main/docs/embedding-snacks.md
  plugins: [
    'docusaurus-plugin-sass',
    // @docusaurus/plugin-google-analytics (Not necessary because it automatically gets added)
  ],
  customFields: { ...customFields },
  themeConfig: {
    hideableSidebar: false,
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    algolia: {
      appId: '64P3EOD5L9',
      apiKey: '461e97fe74b935316bf63af4a6a93345',
      indexName: 'agile-ts',
    },
    // image: '/img/meta.png', // Gets used in Head as Meta Image (og:image)
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      defaultLanguage: 'javascript',
    },
    navbar: {
      title: ' ',
      hideOnScroll: true,
      logo: {
        alt: 'My Site Logo',
        srcDark: 'img/logo.svg',
        src: 'img/logo_white.svg',
      },
      items: [
        // left
        {
          label: 'Get Started',
          position: 'left',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction/',
            },
            {
              label: 'Quick Start',
              to: '/docs/quick-start/index/',
            },
            {
              label: 'Contributing',
              to: '/docs/contributing/',
            },
            {
              label: 'Examples',
              to: '/docs/examples/',
            },
          ],
        },
        {
          label: 'Community',
          position: 'left',
          items: [
            {
              label: 'GitHub',
              href: customFields.githubUrl,
            },
            {
              label: 'Discord',
              href: customFields.discordUrl,
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl,
            },
 
          ],
        },
        {
          label: 'Documentation',
          position: 'left',
          to: 'docs/introduction',
        },
      ],
    },
    footer: {
      copyright: customFields.copyright,
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/introduction',
            },
            {
              label: 'Examples',
              to: 'docs/examples',
            },
            {
              label: 'React',
              to: 'docs/quick-start/react',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: customFields.githubUrl,
            },
            {
              label: 'Discord',
              href: customFields.discordUrl,
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl,
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Privacy Policy',
              to: '/legal/privacy-notice',
            },
            {
              label: 'Cookie Policy',
              to: '/legal/cookie-notice',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          admonitions: {
            icons: 'emoji',
          },
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `${customFields.githubDocsUrl}/tree/develop`,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        blog: {
          showReadingTime: true,
          editUrl: `${customFields.githubDocsUrl}/tree/develop`,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        googleAnalytics: {
          trackingID: 'UA-189394644-1',
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
};

module.exports = { ...config };
