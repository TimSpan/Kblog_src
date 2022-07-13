<template><div><h1 id="vue-js" tabindex="-1"><a class="header-anchor" href="#vue-js" aria-hidden="true">#</a> vue.js</h1>
<h2 id="通过脚手架cli创建应用" tabindex="-1"><a class="header-anchor" href="#通过脚手架cli创建应用" aria-hidden="true">#</a> 通过脚手架CLI创建应用</h2>
<p><a href="https://cli.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
<p>起步</p>
<p>安装</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g @vue/cli
<span class="token comment"># OR</span>
<span class="token function">yarn</span> global <span class="token function">add</span> @vue/cli
</code></pre></div><p>创建一个项目</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>vue create my-project
<span class="token comment"># OR</span>
vue ui
</code></pre></div><p>启动</p>
<p>根据<code v-pre>package.json</code>文件中的配置来输入命令启动项目</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> my-project
<span class="token function">npm</span> run serve
</code></pre></div><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<p><strong>public/index.html 是单页面的html文件 (网页浏览的就是它)</strong></p>
<p><strong>App.vue整个应用的根组件</strong>(vue页面入口)</p>
<p><strong>mian.js入口js文件</strong>(webpack打包的入口)</p>
<p><img src="@source/guide/vue/assets/list.png" alt=""></p>
<p><img src="@source/guide/vue/assets/list1.png" alt=""></p>
<p><img src="@source/guide/vue/assets/process.png" alt=""></p>
<h3 id="自定义配置" tabindex="-1"><a class="header-anchor" href="#自定义配置" aria-hidden="true">#</a> 自定义配置</h3>
<p>项目中没有webpack.config.js文件,因为vue脚手架项目用的<code v-pre>vue.config.js</code> 二次封装</p>
<h3 id="eslint检查代码" tabindex="-1"><a class="header-anchor" href="#eslint检查代码" aria-hidden="true">#</a> eslint检查代码</h3>
<p>如果代码违反了eslint的规则 -报错</p>
<h2 id="注册组件" tabindex="-1"><a class="header-anchor" href="#注册组件" aria-hidden="true">#</a> 注册组件</h2>
<p>创建组件.vue文件,封装要复用的标签,样式,JS代码</p>
<h3 id="全局注册" tabindex="-1"><a class="header-anchor" href="#全局注册" aria-hidden="true">#</a> 全局注册</h3>
<p><strong>全局注册-mian.js中</strong></p>
<p><strong>组件名当html标签使用</strong></p>
<h3 id="_2-x-语法" tabindex="-1"><a class="header-anchor" href="#_2-x-语法" aria-hidden="true">#</a> 2.x 语法</h3>
<p>在 2.x 中，注册一个组件后，把组件名作为字符串传递给渲染函数的第一个参数，它可以正常地工作：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 2.x</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'button-counter'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;button @click="count++">
      Clicked {{ count }} times.
    &lt;/button>
  </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'button-counter'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-x-语法" tabindex="-1"><a class="header-anchor" href="#_3-x-语法" aria-hidden="true">#</a> 3.x 语法</h3>
<p>在 3.x 中，由于 VNode 是上下文无关的，不能再用字符串 ID 隐式查找已注册组件。取而代之的是，需要使用一个导入的 <code v-pre>resolveComponent</code> 方法：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 3.x</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> h<span class="token punctuation">,</span> resolveComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ButtonCounter <span class="token operator">=</span> <span class="token function">resolveComponent</span><span class="token punctuation">(</span><span class="token string">'button-counter'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>ButtonCounter<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="局部注册" tabindex="-1"><a class="header-anchor" href="#局部注册" aria-hidden="true">#</a> 局部注册</h3>
<p>通过 Babel 和 webpack 使用 ES2015 (ES6)模块</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> TopNav <span class="token keyword">from</span> <span class="token string">'./components/TopNav.vue'</span> 
<span class="token keyword">import</span> SwiperTop <span class="token keyword">from</span> <span class="token string">'./components/SwiperTop.vue'</span> 
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//局部注册组件</span>
    TopNav<span class="token punctuation">,</span>
    SwiperTop<span class="token punctuation">,</span>
    ComponentA
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>注意在 ES2015+ 中，在对象中放一个类似 <code v-pre>ComponentA</code> 的变量名其实是 <code v-pre>ComponentA: ComponentA</code> 的缩写，即这个变量名同时是：</p>
<ul>
<li>用在模板中的自定义元素(单标签)的名称</li>
<li>包含了这个组件选项的变量名</li>
</ul>
<h3 id="在模块系统中局部注册" tabindex="-1"><a class="header-anchor" href="#在模块系统中局部注册" aria-hidden="true">#</a> 在模块系统中局部注册</h3>
<p>如果你还在阅读，说明你使用了诸如 Babel 和 webpack 的模块系统。在这些情况下，我们推荐创建一个 <code v-pre>components</code> 目录，并将每个组件放置在其各自的文件中。</p>
<p>然后你需要在局部注册之前导入每个你想使用的组件。例如，假设在 <code v-pre>App.vue</code> 文件中：</p>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TopNav</span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SwiperTop</span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> TopNav <span class="token keyword">from</span> <span class="token string">'./components/TopNav.vue'</span> 
<span class="token keyword">import</span> SwiperTop <span class="token keyword">from</span> <span class="token string">'./components/SwiperTop.vue'</span> 
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//局部注册组件</span>
    TopNav<span class="token punctuation">,</span>
    SwiperTop
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div><p>现在 TopNav 和 SwiperTop 都可以在 App.vue 的模板中使用了。</p>
<h2 id="生命周期钩子函数" tabindex="-1"><a class="header-anchor" href="#生命周期钩子函数" aria-hidden="true">#</a> 生命周期钩子函数</h2>
<p>作用:特定的时间,执行特定的操作</p>
<p>场景:组件创建完毕后,可以在created生命周期函数中发起Ajax请求,从而初始化data数据</p>
<table>
<thead>
<tr>
<th style="text-align:center">阶段</th>
<th style="text-align:center">方法名</th>
<th style="text-align:center">方法名</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">初始化</td>
<td style="text-align:center">beforeCreate</td>
<td style="text-align:center">created</td>
</tr>
<tr>
<td style="text-align:center">挂载</td>
<td style="text-align:center">beforeMount</td>
<td style="text-align:center">mounted</td>
</tr>
<tr>
<td style="text-align:center">更新</td>
<td style="text-align:center">beforeUpdate</td>
<td style="text-align:center">updated</td>
</tr>
<tr>
<td style="text-align:center">销毁</td>
<td style="text-align:center">beforeDestroy</td>
<td style="text-align:center">destroyed</td>
</tr>
</tbody>
</table>
</div></template>
