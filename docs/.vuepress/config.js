module.exports = {
  title: 'manyi-utils 中文网',
    description: 'manyi-utils',
    port: 9090,
    themeConfig: {
			nav: [
				{ text: '指南', link: '/guide/introduce' },
				{ text: '配置参考', link: '/config/api' },
				{ text: 'Gitee', link: 'https://gitee.com/manyi863412757/manyi-utils' },
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