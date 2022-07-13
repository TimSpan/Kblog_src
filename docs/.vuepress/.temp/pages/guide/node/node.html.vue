<template><div><h1 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> node</h1>
<h2 id="从命令行运行-node-js-脚本" tabindex="-1"><a class="header-anchor" href="#从命令行运行-node-js-脚本" aria-hidden="true">#</a> 从命令行运行 Node.js 脚本</h2>
<p>运行 Node.js 程序的常用方法是，运行全局可用的命令 <code v-pre>node</code>（安装 Node.js 之后）并且传入您要执行的文件的名称。</p>
<p>如果您的 Node.js 主应用程序文件是 <code v-pre>app.js</code>，则您可以通过键入以下来调用它：</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> app.js
</code></pre></div><p>以上，你显式地告诉 shell 使用 <code v-pre>node</code> 运行你的脚本</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/node</span>
</code></pre></div><p>以上，我们显式地给出了解释器的绝对路径。 并非所有操作系统的 bin 文件夹中都有 <code v-pre>node</code>，但都应该有 <code v-pre>env</code>。 您可以告诉操作系统使用 node 为参数运行 <code v-pre>env</code>：</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env node</span>

// 你的代码
</code></pre></div><h2 id="fs文件系统模块" tabindex="-1"><a class="header-anchor" href="#fs文件系统模块" aria-hidden="true">#</a> fs文件系统模块</h2>
<p>fs模块是用来操作文件的模块,它提供了一系列的方法和属性,用来满足对文件的操作需求</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>fs.readFile()方法,用来读取指定文件中的内容
</code></pre></div><div class="language-text ext-text"><pre v-pre class="language-text"><code>fs.writeFile()方法,用来向指定的文件中写入内容
</code></pre></div><p>导入内置模块fs到当前的环境中</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="node中的模块化" tabindex="-1"><a class="header-anchor" href="#node中的模块化" aria-hidden="true">#</a> Node中的模块化</h2>
<h3 id="_3大分类" tabindex="-1"><a class="header-anchor" href="#_3大分类" aria-hidden="true">#</a> 3大分类</h3>
<ol>
<li>内置模块(官方提供的,例如fs , path , http等)</li>
<li>自定义模块(用户创建的每个.js文件都是自定义模块)</li>
<li>第三方模块(由第三方开发出来的模块)使用前需要先下载</li>
</ol>
<h3 id="require方法加载模块" tabindex="-1"><a class="header-anchor" href="#require方法加载模块" aria-hidden="true">#</a> require方法加载模块</h3>
<p>可以加载内置模块,用户自定义模块,第三方模块进行使用,例如:</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vuepress'</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="模块作用域" tabindex="-1"><a class="header-anchor" href="#模块作用域" aria-hidden="true">#</a> 模块作用域</h3>
<p>和函数作用域类似 在自定义模块中定义的变量,方法等成员,只能在当前模块内被访问,这种模块级别的访问限制,叫做模块作用域</p>
<blockquote>
<p>防止全局变量污染的问题</p>
</blockquote>
<h3 id="module对象" tabindex="-1"><a class="header-anchor" href="#module对象" aria-hidden="true">#</a> module对象</h3>
<p>每个.js文件中都有一个module对象,它里面存储了和当前模块有关的信息,</p>
<h3 id="module-exports对象" tabindex="-1"><a class="header-anchor" href="#module-exports对象" aria-hidden="true">#</a> module.exports对象</h3>
<p>在自定义模块中,可以使用module.exports对象,将模块内的成员共享出去,供外界使用</p>
<p>外界require()方法导入自定义模块时,得到的就是module.exports所指向的对象</p>
<h3 id="使用module-exports对象向外共享成员" tabindex="-1"><a class="header-anchor" href="#使用module-exports对象向外共享成员" aria-hidden="true">#</a> 使用module.exports对象向外共享成员</h3>
<h3 id="exports对象" tabindex="-1"><a class="header-anchor" href="#exports对象" aria-hidden="true">#</a> exports对象</h3>
<p>由于module.exports单词写起来比较长,为了简化共享成员的代码,Node提供了exports对象,默认情况下exports和module.exports指向同一个对象,最终共享的结果 ,还是module.exports指向的对象为准</p>
<h3 id="exports和module-exports的使用误区" tabindex="-1"><a class="header-anchor" href="#exports和module-exports的使用误区" aria-hidden="true">#</a> exports和module.exports的使用误区</h3>
<p><em><strong>时刻记住,require() 模块时 ,得到的永远是module.exports指向的对象</strong></em></p>
<p><img src="@source/guide/node/assets/exports.png" alt=""></p>
<p><img src="@source/guide/node/assets/module_exports.png" alt=""></p>
<p><img src="@source/guide/node/assets/3.png" alt=""></p>
<p><img src="@source/guide/node/assets/4.png" alt=""></p>
<blockquote>
<p>为了防止混乱,建议不要在同一个模块中同时使用exports和module.exports</p>
</blockquote>
<h3 id="commonjs模块化规范" tabindex="-1"><a class="header-anchor" href="#commonjs模块化规范" aria-hidden="true">#</a> CommonJS模块化规范</h3>
<p>node.js遵循了CommonJS模块化规范 , CommonJS规范了<em><strong>模块的特性</strong></em>和各模块之间如何相互依赖</p>
<p>CommonJS规定:</p>
<ol>
<li>每个模块内部,<em><strong>module变量</strong></em>  代表当前模块</li>
<li>module变量是一个对象 ,它的exports属性(即module.exports) <em><strong>是对外的接口</strong></em></li>
<li>加载某个模块,其实是加载该模块的 module.exports 属性 <em><strong>require() 方法用于加载模块</strong></em></li>
</ol>
<h2 id="npm与包" tabindex="-1"><a class="header-anchor" href="#npm与包" aria-hidden="true">#</a> npm与包</h2>
<h3 id="什么是包" tabindex="-1"><a class="header-anchor" href="#什么是包" aria-hidden="true">#</a> 什么是包?</h3>
<p>node.js中的第三方模块又叫做包</p>
<h3 id="包的来源" tabindex="-1"><a class="header-anchor" href="#包的来源" aria-hidden="true">#</a> 包的来源</h3>
<p>不同于node.js的内置模块和自定义模块,包是由第三方个人或团队开发出来的,免费供所有人使用</p>
<p>node.js中的包都是免费且开源的,</p>
<h3 id="为什么需要包" tabindex="-1"><a class="header-anchor" href="#为什么需要包" aria-hidden="true">#</a> 为什么需要包</h3>
<ul>
<li>
<p>由于node.js的内置模块仅仅提供了一些底层的API,导致在基于内置模块进行项目开发时,效率很低</p>
</li>
<li>
<p><em><strong>包是基于内置模块封装出来的</strong></em>,提供了更高级,更方便的API,极大的提高了开发效率</p>
</li>
<li>
<p><em>包和内置模块之间的关系,类似于jQuery和浏览器内置API 之间的关系</em></p>
</li>
</ul>
<p>那里下载包?</p>
<p><strong>地址</strong>:<a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm<ExternalLinkIcon/></a></p>
<p>npm,Inc公司提供了一个地址为https://registry.npmjs.com/的服务器,来对外共享所有的包,我们可以从这个服务器下载自己所需要的包</p>
<h3 id="使用第三方的包moment对时间进行格式化" tabindex="-1"><a class="header-anchor" href="#使用第三方的包moment对时间进行格式化" aria-hidden="true">#</a> 使用第三方的包moment对时间进行格式化</h3>
<p>在项目中安装格式化时间的包 moment</p>
<p>moment中文官网http://momentjs.cn/</p>
<p>moment官网https://momentjs.com/</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i moment
</code></pre></div></div></template>
