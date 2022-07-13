<template><div><h1 id="es6模块化和promise以及异步" tabindex="-1"><a class="header-anchor" href="#es6模块化和promise以及异步" aria-hidden="true">#</a> ES6模块化和Promise以及异步</h1>
<h2 id="es6模块化" tabindex="-1"><a class="header-anchor" href="#es6模块化" aria-hidden="true">#</a> ES6模块化</h2>
<p>ES6模块化规范是浏览器和服务器端通用的模块化开发规范,它的出现极大的降低了前端开发者的模块化学习成本,开发者不需再额外学习AMD  CMD  或 CommonJS等模块化规范</p>
<h3 id="es6模块化规定" tabindex="-1"><a class="header-anchor" href="#es6模块化规定" aria-hidden="true">#</a> ES6模块化规定</h3>
<ul>
<li>每个js文件都是一个独立的模块</li>
<li>导入其他模块成员使用 <code v-pre>import</code> 关键字</li>
<li>向外共享成员使用 export 关键字</li>
</ul>
<h3 id="在node-js中使用es6-模块化" tabindex="-1"><a class="header-anchor" href="#在node-js中使用es6-模块化" aria-hidden="true">#</a> 在node.js中使用ES6 模块化</h3>
<p>在package.json文件中添加 <code v-pre>&quot;type&quot;:&quot;module&quot;</code> 节点</p>
<p>或者也可以用另外一种形式：</p>
<ol>
<li>初始化package.json: <code v-pre>npm init -y</code></li>
<li>安装插件：<code v-pre>npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node</code></li>
<li>安装第二波插件：<code v-pre>npm install --save @babel/polyfill</code></li>
<li>在项目根目录中创建一个 <code v-pre>babel.config.js</code> 文件，代码如下：</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>  <span class="token keyword">const</span> presets <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
         <span class="token string">"@babel/env"</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
            <span class="token literal-property property">targets</span><span class="token operator">:</span><span class="token punctuation">{</span>
               <span class="token literal-property property">edge</span><span class="token operator">:</span><span class="token string">"17"</span><span class="token punctuation">,</span>
               <span class="token literal-property property">firefox</span><span class="token operator">:</span><span class="token string">"60"</span><span class="token punctuation">,</span>
               <span class="token literal-property property">chrome</span><span class="token operator">:</span><span class="token string">"67"</span><span class="token punctuation">,</span>
               <span class="token literal-property property">safari</span><span class="token operator">:</span><span class="token string">"11.1"</span>
            <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
      
   <span class="token punctuation">]</span>
   module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
      presets
   <span class="token punctuation">}</span>
</code></pre></div><p>使用特定命令运行js文件：<code v-pre>npx babel-node ./index.js</code></p>
<h3 id="es6默认导出和导入" tabindex="-1"><a class="header-anchor" href="#es6默认导出和导入" aria-hidden="true">#</a> ES6默认导出和导入</h3>
<h3 id="导出" tabindex="-1"><a class="header-anchor" href="#导出" aria-hidden="true">#</a> 导出</h3>
<p><code v-pre>export default</code></p>
<h3 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> 接受名称 <span class="token keyword">from</span> <span class="token string">' 模块标识符 '</span>
</code></pre></div><h3 id="导出和导入" tabindex="-1"><a class="header-anchor" href="#导出和导入" aria-hidden="true">#</a> 导出和导入</h3>
<blockquote>
<p>每个模块中,只允许使用唯一的一次 <code v-pre>export default</code>.否则会报错</p>
</blockquote>
<h3 id="按需导入" tabindex="-1"><a class="header-anchor" href="#按需导入" aria-hidden="true">#</a> 按需导入</h3>
<p>大括号字面量</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vant'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Swipe<span class="token punctuation">,</span> SwipeItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vant'</span>
</code></pre></div><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2>
<h3 id="回调地狱" tabindex="-1"><a class="header-anchor" href="#回调地狱" aria-hidden="true">#</a> 回调地狱</h3>
<p>多层回调函数的相互嵌套,就形成了回调地狱.. 示例代码:</p>
<h3 id="promise的基本概念" tabindex="-1"><a class="header-anchor" href="#promise的基本概念" aria-hidden="true">#</a> Promise的基本概念</h3>
<p>Promise是一个构造函数</p>
<ul>
<li>创建Promise的实例 const p = new Promise()</li>
<li>new 出来的Promise实例对象 ,代表一个异步操作</li>
</ul>
<h3 id="promise-prototype-then" tabindex="-1"><a class="header-anchor" href="#promise-prototype-then" aria-hidden="true">#</a> Promise.prototype.then()</h3>
<p><code v-pre>then()</code> 方法返回一个 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer"><code v-pre>Promise</code> (en-US)<ExternalLinkIcon/></a>。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。</p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises#%E7%BA%A6%E5%AE%9A" target="_blank" rel="noopener noreferrer">使用promise<ExternalLinkIcon/></a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise<ExternalLinkIcon/></a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then" target="_blank" rel="noopener noreferrer">Promise.prototype.then()<ExternalLinkIcon/></a></p>
<h2 id="async-await" tabindex="-1"><a class="header-anchor" href="#async-await" aria-hidden="true">#</a> async/await</h2>
<p>async/await 是ES8  引入的新语法,  用来简化 Promise异步操作 在async/await 出现之前 开发者只能通过链式.then()的方式处理Promise 异步操作</p>
</div></template>
