<template><div><h1 id="在本地启动服务器来开发你的文档网站" tabindex="-1"><a class="header-anchor" href="#在本地启动服务器来开发你的文档网站" aria-hidden="true">#</a> 在本地启动服务器来开发你的文档网站</h1>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>npm run docs<span class="token operator">:</span>dev
</code></pre></div><p>VuePress 会在 <a href="http://localhost:8080/" target="_blank" rel="noopener noreferrer">http://localhost:8080在新窗口打开<ExternalLinkIcon/></a> 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。</p>
<h1 id="vuepressbuild" tabindex="-1"><a class="header-anchor" href="#vuepressbuild" aria-hidden="true">#</a> vuepressBuild</h1>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"docs:build"</span><span class="token operator">:</span> <span class="token string">"vuepress build docs"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul>
<li><strong>构建命令：</strong><code v-pre>npm run docs:build</code> or <code v-pre>yarn docs:build</code></li>
<li><strong>发布目录：</strong><code v-pre>docs/.vuepress/dist</code></li>
</ul>
<h1 id="自动化部署" tabindex="-1"><a class="header-anchor" href="#自动化部署" aria-hidden="true">#</a> 自动化部署</h1>
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
<span class="token function">git</span> push -f git@github.com:timspan/ti.github.io.git master

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
