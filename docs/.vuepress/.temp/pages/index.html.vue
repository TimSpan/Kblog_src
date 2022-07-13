<template><div><h1 id="vuepress指南" tabindex="-1"><a class="header-anchor" href="#vuepress指南" aria-hidden="true">#</a> vuePress指南</h1>
<h2 id="启动本地服务器" tabindex="-1"><a class="header-anchor" href="#启动本地服务器" aria-hidden="true">#</a> 启动本地服务器</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>npm run docs<span class="token operator">:</span>dev
</code></pre></div><p>VuePress 会在 <a href="http://localhost:8080/" target="_blank" rel="noopener noreferrer">http://localhost:8080在新窗口打开<ExternalLinkIcon/></a> 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。</p>
<h2 id="vuepressbuild" tabindex="-1"><a class="header-anchor" href="#vuepressbuild" aria-hidden="true">#</a> vuepressBuild</h2>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"docs:build"</span><span class="token operator">:</span> <span class="token string">"vuepress build docs"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul>
<li><strong>构建命令：</strong><code v-pre>npm run docs:build</code> or <code v-pre>yarn docs:build</code></li>
<li><strong>发布目录：</strong><code v-pre>docs/.vuepress/dist</code></li>
</ul>
<h2 id="推送到码云gitee" tabindex="-1"><a class="header-anchor" href="#推送到码云gitee" aria-hidden="true">#</a> 推送到码云Gitee</h2>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push -f git@gitee.com:timspan/kblog.git master:gh-pages
</code></pre></div><p>默认路径</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">'/kblog/'</span><span class="token punctuation">,</span> <span class="token comment">//默认路径</span>
</code></pre></div><h2 id="自动化部署" tabindex="-1"><a class="header-anchor" href="#自动化部署" aria-hidden="true">#</a> 自动化部署</h2>
<p>在文件下新建deploy.sh文件,内容如下:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> -e

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo 'www.example.com' > CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">'deploy'</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME>.github.io</span>
<span class="token comment"># git push -f git@github.com:timspan/timspan.github.io.git master</span>
<span class="token function">git</span> push -f git@gitee.com:timspan/kblog.git master:gh-pages

<span class="token comment"># 如果发布到 https://&lt;USERNAME>.github.io/&lt;REPO></span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME>/&lt;REPO>.git master:gh-pages</span>

<span class="token builtin class-name">cd</span> -
</code></pre></div><p>我们在package.json设置快捷方式</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"echo \"Error: no test specified\" &amp;&amp; exit 1"</span><span class="token punctuation">,</span>
    <span class="token property">"docs:dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev docs"</span><span class="token punctuation">,</span>
    <span class="token property">"docs:build"</span><span class="token operator">:</span> <span class="token string">"vuepress build docs"</span><span class="token punctuation">,</span>
    <span class="token property">"docs:deploy"</span><span class="token operator">:</span> <span class="token string">"bash deploy.sh"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>运行代码</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run docs:deploy
</code></pre></div></div></template>
