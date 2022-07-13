<template><div><h1 id="javascript隐式转换" tabindex="-1"><a class="header-anchor" href="#javascript隐式转换" aria-hidden="true">#</a> JavaScript隐式转换</h1>
<h2 id="规则" tabindex="-1"><a class="header-anchor" href="#规则" aria-hidden="true">#</a> 规则</h2>
<ol>
<li>+号两边只要有一个是字符串,都会把另外一个转成字符串</li>
<li>除了+以外的算数运算符 比如  <code v-pre>-</code>  <code v-pre>*</code>  <code v-pre>/</code>  等都会把数据转成数字类型</li>
</ol>
<h2 id="小技巧" tabindex="-1"><a class="header-anchor" href="#小技巧" aria-hidden="true">#</a> 小技巧</h2>
<ol>
<li><code v-pre>+</code>号作为正号解析可以转换成数字型</li>
<li>任何数据和字符串相加结果都是字符串</li>
</ol>
<p><img src="@source/guide/js/assets/隐式转换.png" alt=""></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'kevin'</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// kevin1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment">//4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token string">'2'</span><span class="token punctuation">)</span> <span class="token comment">// 22</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment">// 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token string">'2'</span><span class="token punctuation">)</span>  <span class="token comment">// 0  </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">12</span><span class="token punctuation">)</span>  <span class="token comment">//12 </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token string">'123'</span><span class="token punctuation">)</span>  <span class="token comment">// 转换为数字型  //123</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token keyword">typeof</span> <span class="token string">'123'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//string</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token keyword">typeof</span> <span class="token number">123</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//number </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token operator">+</span><span class="token string">'11'</span> <span class="token operator">+</span><span class="token number">11</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 22</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token number">1</span> <span class="token operator">*</span> <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'1'</span> <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//1</span>

</code></pre></div></div></template>
