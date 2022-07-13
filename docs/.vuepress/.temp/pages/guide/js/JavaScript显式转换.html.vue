<template><div><h1 id="javascript显式转换" tabindex="-1"><a class="header-anchor" href="#javascript显式转换" aria-hidden="true">#</a> JavaScript显式转换</h1>
<h2 id="转换为数字型" tabindex="-1"><a class="header-anchor" href="#转换为数字型" aria-hidden="true">#</a> 转换为数字型</h2>
<h3 id="number-数据" tabindex="-1"><a class="header-anchor" href="#number-数据" aria-hidden="true">#</a> Number(数据)</h3>
<blockquote>
<ol>
<li>转成数字型</li>
<li>如果字符串内容里有非数字,转换失败时结果为NaN(Not a Number)即不是一个数字</li>
<li>NaN也是number类型的数据,代表非数字</li>
</ol>
</blockquote>
<h3 id="parseint-数据" tabindex="-1"><a class="header-anchor" href="#parseint-数据" aria-hidden="true">#</a> parseInt(数据)</h3>
<blockquote>
<p>只保留整数</p>
</blockquote>
<h3 id="parsefloat-数据" tabindex="-1"><a class="header-anchor" href="#parsefloat-数据" aria-hidden="true">#</a> parseFloat(数据)</h3>
<blockquote>
<p>可以保留小数</p>
</blockquote>
<p><img src="@source/guide/js/assets/显式转换.png" alt=""></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'12'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">'pink'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//NaN</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'输入年薪'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//输入20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>  <span class="token comment">//20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'12px'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'12.34px'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'12.94px'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'abc12.94px'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">'12px'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">'12.34px'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 12.34</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">'12.94px'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 12.94</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">'abc12.94px'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">'kevin12.94'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
</code></pre></div><h2 id="转换为字符型" tabindex="-1"><a class="header-anchor" href="#转换为字符型" aria-hidden="true">#</a> 转换为字符型</h2>
<h3 id="string-数据" tabindex="-1"><a class="header-anchor" href="#string-数据" aria-hidden="true">#</a> String(数据)</h3>
<h3 id="变量-tostring-进制" tabindex="-1"><a class="header-anchor" href="#变量-tostring-进制" aria-hidden="true">#</a> 变量.toString(进制)</h3>
</div></template>
