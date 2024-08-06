import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "奇迹行者的博客",
  description: "奇迹行者还在刷野~",
  srcDir: './src',
  head: [['link', { rel: 'icon', href: '/blog/favicon.jpg' }]],
  base: "/blog/",
  srcExclude: ['**/README.md'],
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/build-blog.md' }
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: '使用VitePress搭建博客', link: '/build-blog.md' },
          { text: 'HTML中的input使用经验', link: '/HTML5-input.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BlueberryLi/blog' }
    ]
  }
})
