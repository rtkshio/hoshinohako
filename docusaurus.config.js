// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '星の箱',
  tagline: '专为中国Launchpad玩家打造的工具箱',
  url: 'https://hoshibox.deltaasterism.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ayakaseki', // Usually your GitHub org/user name.
  projectName: 'hoshinohako', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ayakaseki/hoshinohako',
          routeBasePath: '/',
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
      announcementBar: {
        content: '你对现阶段的网站还满意吗？欢迎填写  <a href="https://wj.qq.com/s2/9668540/3841/" target="_blank">问卷调查</a>  给予我们反馈。如果站点有问题请及时通过 <a href="https://hoshibox.deltaasterism.com/about#联系方式" target="_self">联系我们</a> 反馈',
        backgroundColor: '#ff9900',
        isCloseable: false,
      },
      navbar: {
        title: '星の箱 | 点此返回主页',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          /* {
            to: '/download',
            position: 'left',
            label: '下载区',
          },
          {
            to: '/tips',
            label: '知识区',
          },*/
          {
            to: '/lfu',
            position: 'left',
            label: 'Launchpad固件助手',
          },
          {
            href: 'https://play.203.io',
            position: 'left',
            label: '浏览器游玩Unipad工程'
          },
          {
            to: '/support',
            position: 'right',
            label: '赞助支持'
          },
          {
            to: '/update-log',
            position: 'right',
            label: '更新日志',
          },
          {
            href: 'https://space.bilibili.com/1760337367',
            label: '哔哩哔哩',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '网站详情',
            items: [
              {
                label: '关于本站',
                to: '/about',
              },
              {
                label: '使用条例与免责声明',
                href: '/tos',
              },
              {
                label: '赞助支持',
                to: '/support',
              },
              {
                label: '加入友链列表',
                to: '/about#友链',
              },
              {
                href: 'https://github.com/ayakaseki/hoshinohako',
                label: 'GitHub',
              },
            ],
          },
          {
            title: '我们的社群',
            items: [
              {
                label: '哔哩哔哩',
                href: 'https://space.bilibili.com/1760337367',
              },
              {
                label: '爱发电',
                href: 'https://afdian.net/@deltaaster',
              }
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: '汐的B站主页',
                href: 'https://space.bilibili.com/16215189',
              },
            ],
          },
        ],
        logo: {
          alt: 'DeltaAster Logo',
          src: '/img/text-logo.png',
          href: 'https://',
      },
        copyright: `Copyright © ${new Date().getFullYear()} Project DeltaAster by 「-Raski-」 <a href="https://icp.gov.moe/?keyword=20220090" target="_blank">萌ICP备20220090号</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
