<template><div><h1 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h1>
<p>一个函数对周围状态的引用捆绑在一起，内层函数中访问到其外层函数的作用域</p>
<p>简单理解：闭包 = 内层函数 + 外层函数的变量</p>
<p>闭包作用：封闭数据，提供操作，外部也可以访问函数内部的变量</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 闭包的基本格式</span>
<span class="token keyword">function</span> <span class="token function">outer</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span>  i <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> fn
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fun <span class="token operator">=</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>闭包应用：实现数据的私有</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    count<span class="token operator">++</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">函数被调用</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">次</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 全局变量count容易被修改</span>
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">function</span> <span class="token function">fun</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        count<span class="token operator">++</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">函数被调用</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">次</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> fun
<span class="token punctuation">}</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 闭包实现数据私有化</span>
</code></pre></div></div></template>
