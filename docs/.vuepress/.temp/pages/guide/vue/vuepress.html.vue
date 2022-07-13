<template><div><h1 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> vuepress</h1>
<p>官网地址有好几个 .我一一罗列.目前本站使用的是2.0版本</p>
<p><a href="https://vuepress.docschina.org/" target="_blank" rel="noopener noreferrer">https://vuepress.docschina.org/<ExternalLinkIcon/></a></p>
<p><a href="https://v2.vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">https://v2.vuepress.vuejs.org/zh/<ExternalLinkIcon/></a>  这是2.0版本</p>
<p><a href="https://v1.vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">https://v1.vuepress.vuejs.org/zh/<ExternalLinkIcon/></a>  这是1.0版本</p>
<h2 id="vuepress是如何工作的" tabindex="-1"><a class="header-anchor" href="#vuepress是如何工作的" aria-hidden="true">#</a> vuepress是如何工作的？</h2>
<p>一个 VuePress 站点本质上是一个由 <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue在新窗口打开<ExternalLinkIcon/></a> 和 <a href="https://router.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue Router在新窗口打开<ExternalLinkIcon/></a> 驱动的单页面应用 (SPA)。</p>
<p>路由会根据你的 Markdown 文件的相对路径来自动生成。每个 Markdown 文件都通过 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it在新窗口打开<ExternalLinkIcon/></a> 编译为 HTML ，然后将其作为 Vue 组件的模板。因此，你可以在 Markdown 文件中直接使用 Vue 语法，便于你嵌入一些动态内容。</p>
<p>在构建过程中，我们会为 VuePress 站点创建一个服务端渲染 (SSR) 的版本，然后通过虚拟访问每一条路径来渲染对应的 HTML 。</p>
<h2 id="默认主题的markdown" tabindex="-1"><a class="header-anchor" href="#默认主题的markdown" aria-hidden="true">#</a> 默认主题的markdown</h2>
<p>更多请查看官网 <a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/markdown.html" target="_blank" rel="noopener noreferrer">https://v2.vuepress.vuejs.org/zh/reference/default-theme/markdown.html<ExternalLinkIcon/></a></p>
<p>输出</p>
<div class="language-markdown ext-md"><pre v-pre class="language-markdown"><code>::: tip
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
</code></pre></div><p>输出</p>
<blockquote>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这是一个提示</p>
</div>
</blockquote>
<blockquote>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>这是一个警告</p>
</div>
</blockquote>
<blockquote>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>这是一个危险警告</p>
</div>
</blockquote>
<blockquote>
<details class="custom-container details">
<p>这是一个 details 标签</p>
</details>
</blockquote>
<h3 id="自定义标题" tabindex="-1"><a class="header-anchor" href="#自定义标题" aria-hidden="true">#</a> 自定义标题</h3>
<div class="language-markdown ext-md"><pre v-pre class="language-markdown"><code>::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>
<span class="token code-block language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'你好，VuePress！'</span><span class="token punctuation">)</span></span>
<span class="token punctuation">```</span></span>
:::
</code></pre></div><blockquote>
<div class="custom-container danger"><p class="custom-container-title">STOP</p>
<p>危险区域，禁止通行</p>
</div>
</blockquote>
<blockquote>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>注意</p>
</div>
</blockquote>
<blockquote>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'你好，VuePress！'</span><span class="token punctuation">)</span>
</code></pre></div></details>
</blockquote>
<h3 id="别名" tabindex="-1"><a class="header-anchor" href="#别名" aria-hidden="true">#</a> 别名</h3>
<h2 id="代码块行号配置" tabindex="-1"><a class="header-anchor" href="#代码块行号配置" aria-hidden="true">#</a> 代码块行号配置</h2>
<p>原地址  <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-code" target="_blank" rel="noopener noreferrer">https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-code<ExternalLinkIcon/></a></p>
<p>markdown.code.lineNumbers</p>
<ul>
<li>
<p>类型： <code v-pre>boolean | number</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>配置代码块行号。</p>
<ul>
<li>布尔值 <code v-pre>boolean</code> 代表是否启用代码块行号。</li>
<li>数字 <code v-pre>number</code> 代表显示行号所需的最少行数。例如，如果你将它设置为 <code v-pre>4</code> ，那么只有在你的代码块包含至少 4 行代码时才会启用行号。</li>
</ul>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://v2.vuepress.vuejs.org/zh/guide/markdown.html#%E8%A1%8C%E5%8F%B7" target="_blank" rel="noopener noreferrer">指南 &gt; Markdown &gt; 语法扩展 &gt; 代码块 &gt; 行号<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div></div></template>
