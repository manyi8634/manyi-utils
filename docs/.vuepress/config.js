module.exports = {
  base:'/doc/manyi-utils/',
  dest:'docs/.vuepress/manyi-utils',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  title: 'manyi-utils 中文网',
  description: '日常工作收集的工具函数',
  port: 9090,
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/introduce' },
      { text: 'API参考', link: '/config/api' },
      { text: 'Github', link: 'https://github.com/manyi8634/manyi-utils' },
    ],
    sidebar: {
      '/guide/': [
        'introduce',
        'warn'
      ],
      '/config/': [
        'api'
      ]
    }
  }
    
}