<template><div><h1 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> Vue3</h1>
<h2 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for" aria-hidden="true">#</a> v-for</h2>
<p>用 <code v-pre>v-for</code> 指令基于一个数组来渲染一个列表。<code v-pre>v-for</code> 指令需要使用 <code v-pre>item in items</code> 形式的特殊语法，其中 items 是源数据数组，而 <code v-pre>item</code> 则是被迭代的数组元素的<strong>别名</strong></p>
<h2 id="组件名为多个单词" tabindex="-1"><a class="header-anchor" href="#组件名为多个单词" aria-hidden="true">#</a> 组件名为多个单词</h2>
<p><strong>组件名应该始终由多个单词组成，除了根组件 <code v-pre>App</code>，以及 <code v-pre>&lt;transition&gt;</code>、<code v-pre>&lt;component&gt;</code> 之类的 Vue 内置组件。</strong></p>
<p>这样做可以避免与现有以及未来的 HTML 元素<a href="https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name" target="_blank" rel="noopener noreferrer">产生冲突<ExternalLinkIcon/></a>，因为所有的 HTML 元素名称都是单个单词的。</p>
<h2 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> mount</h2>
<p>在 Vue 3.x 中，当我们挂载一个应用时，其渲染内容会替换我们传递给 <code v-pre>mount</code> 的元素的 <code v-pre>innerHTML</code>：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello Vue!'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;div id="rendered">{{ message }}&lt;/div>
  </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre></div><p>当这个应用挂载到拥有匹配 <code v-pre>id=&quot;app&quot;</code> 的 <code v-pre>div</code> 的页面时，结果会是：</p>
<div class="language-html ext-html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span> <span class="token attr-name">data-v-app</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rendered<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello Vue!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre></div><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h2>
<p>Vue3 的一大特性函数 ---- setup</p>
<p>1、setup函数是处于 生命周期函数 beforeCreate 和 Created 两个钩子函数之间的函数 也就说在 setup函数中是无法 使用 data 和 methods 中的数据和方法的</p>
<p>2、setup函数是 Composition API（组合API）的入口</p>
<p>3、在setup函数中定义的变量和方法最后都是需要 return 出去的 不然无法再模板中使用</p>
<h4 id="setup函数的注意点" tabindex="-1"><a class="header-anchor" href="#setup函数的注意点" aria-hidden="true">#</a> setup函数的注意点</h4>
<ol>
<li>由于在执行 setup函数的时候，还没有执行 Created 生命周期方法，所以在 setup 函数中，无法使用 data 和 methods 的变量和方法</li>
<li>由于我们不能在 setup函数中使用 data 和 methods，所以 Vue 为了避免我们错误的使用，直接将 setup函数中的this修改成了 undefined</li>
<li>setup函数只能是同步的不能是异步的</li>
</ol>
<p></p>
</div></template>
