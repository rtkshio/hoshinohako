/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  Sidebar: [
    {
      type: 'category',
      label: '下载区',
      link: {
        type: 'generated-index',
        title: '下载区',
        description: '「下载区」为大家收集了市面上各种各样与Launchpad相关的资源，供大家下载致力于帮助那些无法访问外网（谷歌全家桶，MEGA）、外网下载速度缓慢（Mediafire）的小伙伴进行国内稳定的下载（努力优化速度ing-(:з」∠)-）',
        slug: '/download',
      },
      collapsed: true,
      items: [
        'download/software',
        'download/amxd',
        'download/vesource',
        'download/palettes',
        'download/phonesoftware',
        'download/driver'
    ],
    },
    {
      type: 'category',
      label: '知识区',
      link: {
        type: 'generated-index',
        title: '知识区',
        description: '你可以在这里浏览一些小知识',
        slug: '/tips',
      },
      collapsed: true,
      items: [
        'tips/insuni',
        'tips/portchange'
    ],
    },
  ],
};

module.exports = sidebars;
