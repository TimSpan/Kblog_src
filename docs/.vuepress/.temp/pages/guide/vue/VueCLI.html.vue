<template><div><h1 id="vuecli" tabindex="-1"><a class="header-anchor" href="#vuecli" aria-hidden="true">#</a> <a href="https://cli.vuejs.org/zh/guide/" target="_blank" rel="noopener noreferrer">VueCLI<ExternalLinkIcon/></a></h1>
<h2 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h2>
<p>CLI (<code v-pre>@vue/cli</code>) 是一个<strong>全局安装</strong>的 npm 包，提供了终端里的 <code v-pre>vue</code> 命令。它可以通过 <code v-pre>vue create</code> 快速搭建一个新项目，或者直接通过 <code v-pre>vue serve</code> 构建新想法的原型。你也可以通过 <code v-pre>vue ui</code> 通过一套图形化界面管理你的所有项目</p>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g @vue/cli
<span class="token comment"># OR</span>
<span class="token function">yarn</span> global <span class="token function">add</span> @vue/cli
</code></pre></div><p>安装之后，你就可以在命令行中访问 <code v-pre>vue</code> 命令。你可以通过简单运行 <code v-pre>vue</code>，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>vue --version
</code></pre></div><h3 id="升级" tabindex="-1"><a class="header-anchor" href="#升级" aria-hidden="true">#</a> 升级</h3>
<p>如需升级全局的 Vue CLI 包，请运行：</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> update -g @vue/cli
</code></pre></div><h3 id="升级插件" tabindex="-1"><a class="header-anchor" href="#升级插件" aria-hidden="true">#</a> 升级插件</h3>
<p>如需升级项目中的 Vue CLI 相关模块（以 <code v-pre>@vue/cli-plugin-</code> 或 <code v-pre>vue-cli-plugin-</code> 开头），请在项目目录下运行 <code v-pre>vue upgrade</code>：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>用法： upgrade [options] [plugin-name]
  --all                 升级所有的插件
</code></pre></div><h3 id="创建一个项目" tabindex="-1"><a class="header-anchor" href="#创建一个项目" aria-hidden="true">#</a> 创建一个项目</h3>
<h3 id="vue-create" tabindex="-1"><a class="header-anchor" href="#vue-create" aria-hidden="true">#</a> vue create</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>vue create my-project
</code></pre></div><h3 id="使用图形化界面" tabindex="-1"><a class="header-anchor" href="#使用图形化界面" aria-hidden="true">#</a> 使用图形化界面</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>vue ui
</code></pre></div><h3 id="插件和-preset" tabindex="-1"><a class="header-anchor" href="#插件和-preset" aria-hidden="true">#</a> 插件和 Preset</h3>
<p>Vue CLI 使用了一套基于插件的架构。如果你查阅一个新创建项目的 <code v-pre>package.json</code>，就会发现依赖都是以 <code v-pre>@vue/cli-plugin-</code> 开头的。插件可以修改 webpack 的内部配置，也可以向 <code v-pre>vue-cli-service</code> 注入命令。在项目创建的过程中，绝大部分列出的特性都是通过插件来实现的。</p>
<h3 id="cli服务" tabindex="-1"><a class="header-anchor" href="#cli服务" aria-hidden="true">#</a> CLI服务</h3>
<p>在一个 Vue CLI 项目中，<code v-pre>@vue/cli-service</code> 安装了一个名为 <code v-pre>vue-cli-service</code> 的命令。你可以在 npm scripts 中以 <code v-pre>vue-cli-service</code>、或者从终端中以 <code v-pre>./node_modules/.bin/vue-cli-service</code> 访问这个命令。</p>
<p>这是你使用默认 preset 的项目的 <code v-pre>package.json</code>：</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"serve"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service serve"</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service build"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>你可以通过 npm 调用这些 script：</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run serve
</code></pre></div><h3 id="vue-cli-service-build" tabindex="-1"><a class="header-anchor" href="#vue-cli-service-build" aria-hidden="true">#</a> vue-cli-service build</h3>
<p><code v-pre>vue-cli-service build</code> 会在 <code v-pre>dist/</code> 目录产生一个可用于生产环境的包，带有 JS/CSS/HTML 的压缩，和为更好的缓存而做的自动的 vendor chunk splitting。它的 chunk manifest 会内联在 HTML 里。</p>
<h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h2>
<h3 id="html-和静态资源" tabindex="-1"><a class="header-anchor" href="#html-和静态资源" aria-hidden="true">#</a> HTML 和静态资源</h3>
<h4 id="index-文件" tabindex="-1"><a class="header-anchor" href="#index-文件" aria-hidden="true">#</a> Index 文件</h4>
<p><code v-pre>public/index.html</code> 文件是一个会被 <a href="https://github.com/jantimon/html-webpack-plugin" target="_blank" rel="noopener noreferrer">html-webpack-plugin<ExternalLinkIcon/></a> 处理的模板。在构建过程中，资源链接会被自动注入。另外，Vue CLI 也会自动注入 resource hint (<code v-pre>preload/prefetch</code>、manifest 和图标链接 (当用到 PWA 插件时) 以及构建过程中处理的 JavaScript 和 CSS 文件的资源链接。</p>
</div></template>
