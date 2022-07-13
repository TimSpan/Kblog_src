const { defaultTheme } = require('vuepress')
module.exports = {
    title: 'KBlog', // 设置网站标题
    description: 'KBlog',
    // base: '/kblog/', //默认路径
    base: '/',
    logo: './public/images/logo.png',
    markdown: {
        code: {
            lineNumbers: false
        }
    },

    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: 'React', link: '/guide/react/React.md',
            },
            {
                text: 'Node',
                children: [
                    { text: 'node', link: '/guide/node/node.md' },
                    { text: 'Ajax', link: '/guide/node/Ajax.md' },
                    { text: 'axios', link: '/guide/node/axios.md' },
                    { text: 'ES6模块化和Promise', link: '/guide/node/ES6模块化和Promise.md' },
                ]
            },
            {
                text: 'Vue生态',
                children: [
                    { text: 'Vue', link: '/guide/vue/vue_js.md' },
                    { text: 'Vue3', link: '/guide/vue/vue3.md' },

                    { text: 'VueCLI', link: '/guide/vue/VueCLI.md' },
                    { text: 'npm使用手册', link: '/guide/vue/npm使用手册.md' },
                    { text: 'npm命令发生了什么', link: '/guide/vue/npm命令发生的事.md' },
                    { text: 'Vite', link: '/guide/vue/Vite.md' },
                    { text: 'VuePress使用手册-V2.0', link: '/guide/vue/vuepress.md' },

                ]
            },
            {
                text: '深入JavaScript',
                children: [
                    { text: '构造函数与原型以及class类', link: '/guide/js/构造函数.md' },
                    { text: 'class类', link: '/guide/js/class类.md' },

                    { text: '深入理解函数', link: '/guide/js/Function函数.md' },
                    { text: '闭包', link: '/guide/js/闭包.md' },
                    { text: 'ES6', link: '/guide/js/ES6.md' },


                    { text: '事件对象', link: '/guide/js/事件对象.md' },
                    { text: '深入理解事件流', link: '/guide/js/事件流.md' },
                    // { text: '元素滚动事件', link: '/guide/js/元素滚动事件.md' },
                    { text: '展开语法', link: '/guide/js/展开语法.md' },
                    { text: 'Array数组', link: '/guide/js/数组.md' },

                    { text: '二维数组', link: '/guide/js/二维数组.md' },
                    { text: 'BOM', link: '/guide/js/JS_Base.md' },
                    { text: 'JS执行机制_并发模型与事件循环', link: '/guide/js/JS执行机制.md' },
                    { text: '重绘与回流', link: '/guide/js/重绘与回流.md' },

                    { text: 'DOM节点', link: '/guide/js/DOM节点.md' },
                    { text: '对象Object', link: '/guide/js/JaveScript_object.md' },
                    { text: '控制结构', link: '/guide/js/JavaScript控制结构.md' },
                    // { text: '循环', link: '/guide/js/循环.md' },
                    { text: '隐式转换', link: '/guide/js/JavaScript隐式转换.md' },
                    { text: '显式转换', link: '/guide/js/JavaScript显式转换.md' },
                    // { text: '有趣的写法', link: '/guide/js/案例.md' },
                    { text: 'jQuery', link: '/guide/js/jQuery.md' },
                    { text: '解构赋值', link: '/guide/js/解构赋值.md' },
                    { text: 'data-自定义属性', link: '/guide/js/data-自定义属性.md' },
                    { text: 'SPA', link: '/guide/js/SPA.md' },
                    { text: 'Git分布式版本控制', link: '/guide/git/Git.md' },
                    { text: '面试题', link: '/guide/js/前端面试题.md' },
                ]
            },
        ],
    }),
}
