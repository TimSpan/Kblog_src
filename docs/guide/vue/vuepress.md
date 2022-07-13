# vuepress



官网地址有好几个 .我一一罗列.目前本站使用的是2.0版本

[https://vuepress.docschina.org/](https://vuepress.docschina.org/)

[https://v2.vuepress.vuejs.org/zh/](https://v2.vuepress.vuejs.org/zh/ )  这是2.0版本

[https://v1.vuepress.vuejs.org/zh/](https://v1.vuepress.vuejs.org/zh/)  这是1.0版本

## vuepress是如何工作的？

一个 VuePress 站点本质上是一个由 [Vue在新窗口打开](https://vuejs.org/) 和 [Vue Router在新窗口打开](https://router.vuejs.org/) 驱动的单页面应用 (SPA)。

路由会根据你的 Markdown 文件的相对路径来自动生成。每个 Markdown 文件都通过 [markdown-it在新窗口打开](https://github.com/markdown-it/markdown-it) 编译为 HTML ，然后将其作为 Vue 组件的模板。因此，你可以在 Markdown 文件中直接使用 Vue 语法，便于你嵌入一些动态内容。

在构建过程中，我们会为 VuePress 站点创建一个服务端渲染 (SSR) 的版本，然后通过虚拟访问每一条路径来渲染对应的 HTML 。

## 默认主题的markdown

更多请查看官网 [https://v2.vuepress.vuejs.org/zh/reference/default-theme/markdown.html]( https://v2.vuepress.vuejs.org/zh/reference/default-theme/markdown.html)

输出



```md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::
```

输出

> ::: tip
> 这是一个提示
> :::

> ::: warning
> 这是一个警告
> :::

> ::: danger
> 这是一个危险警告
> :::

> ::: details
> 这是一个 details 标签
> :::



### 自定义标题

~~~md
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::
~~~

> ::: danger STOP
> 危险区域，禁止通行
> :::

> ::: tip 注意
> 注意
> :::

> ::: details 点击查看代码
> ```js
> console.log('你好，VuePress！')
> ```
> :::

### 别名



## 代码块行号配置

原地址  [https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-code](https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-code)

markdown.code.lineNumbers

- 类型： `boolean | number`

- 默认值： `true`

- 详情：

  配置代码块行号。

  - 布尔值 `boolean` 代表是否启用代码块行号。
  - 数字 `number` 代表显示行号所需的最少行数。例如，如果你将它设置为 `4` ，那么只有在你的代码块包含至少 4 行代码时才会启用行号。

- 参考：

  - [指南 > Markdown > 语法扩展 > 代码块 > 行号](https://v2.vuepress.vuejs.org/zh/guide/markdown.html#行号)

```js
module.exports = {
    markdown: {
        code: {
            lineNumbers: false
        }
    }
} 
```

