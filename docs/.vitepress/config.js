export default {
    lang: 'zh-CN',
    title: 'Flutter',
    description: 'Share Develop/Life',
    base: '/',
    cleanUrls: true,
    lastUpdated: true,

    head: [['meta', { name: 'theme-color', content: '#6495ED' }]],

    themeConfig: {
        sidebar: [
            {
                text: '快速入门', link: '/', activeMatch: '',
                items:[
                    {text:'Android原生工程嵌入Flutter(一)'},
                    {text:'Android原生工程嵌入Flutter(二)'}
                ]
            }, {
                text: 'Galley', link: '/gallery/', activeMatch: '/gallery', items: [

                ]
            } ,{
                text: 'Dart', link: '/dart/', activeMatch: '/dart', items: [

                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/italks/Flutter' }
        ],
        footer: {
            message: 'Released under the Creative Commons license.',
            copyright: 'Copyright © 2023-present italks'
        },
    }
}