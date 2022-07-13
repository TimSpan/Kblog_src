<template><div><h1 id="javascript控制结构" tabindex="-1"><a class="header-anchor" href="#javascript控制结构" aria-hidden="true">#</a> JavaScript控制结构</h1>
<h3 id="for-of与for-in的区别" tabindex="-1"><a class="header-anchor" href="#for-of与for-in的区别" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of#for...of%E4%B8%8Efor...in%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noopener noreferrer"><code v-pre>for...of</code>与<code v-pre>for...in</code>的区别<ExternalLinkIcon/></a></h3>
<p>无论是<code v-pre>for...in</code>还是<code v-pre>for...of</code>语句都是迭代一些东西。它们之间的主要区别在于它们的迭代方式。</p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in" target="_blank" rel="noopener noreferrer"><code v-pre>for...in</code><ExternalLinkIcon/></a> 语句以任意顺序迭代对象的<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties" target="_blank" rel="noopener noreferrer">可枚举属性<ExternalLinkIcon/></a>。</p>
<p><code v-pre>for...of</code> 语句遍历<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterables" target="_blank" rel="noopener noreferrer">可迭代对象<ExternalLinkIcon/></a>定义要迭代的数据。</p>
<h2 id="for-of" tabindex="-1"><a class="header-anchor" href="#for-of" aria-hidden="true">#</a> for   of</h2>
<p>JavaScript 也还包括其他两种重要的 for 循环： <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" target="_blank" rel="noopener noreferrer"><code v-pre>for</code>...<code v-pre>of</code><ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something with value</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="for-in" tabindex="-1"><a class="header-anchor" href="#for-in" aria-hidden="true">#</a> for   in</h2>
<p>和 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in" target="_blank" rel="noopener noreferrer"><code v-pre>for</code>...<code v-pre>in</code><ExternalLinkIcon/></a> ：一般用于遍历对象</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> property <span class="token keyword">in</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something with object property用对象属性做些什么</span>
  <span class="token comment">//遍历对象</span>
<span class="token punctuation">}</span>
</code></pre></div><p>类似地，JavaScript 也有一个用于条件表达式的三元操作符：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> allowed <span class="token operator">=</span> <span class="token punctuation">(</span>age <span class="token operator">></span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">"yes"</span> <span class="token operator">:</span> <span class="token string">"no"</span><span class="token punctuation">;</span>
<span class="token comment">// 条件 ? 满足条件执行的代码 : 不满足条件执行的代码</span>
</code></pre></div><h2 id="if语句" tabindex="-1"><a class="header-anchor" href="#if语句" aria-hidden="true">#</a> if语句</h2>
<p>if语句有三种使用：单分支、双分支、多分支</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	满足条件要执行的代码
<span class="token punctuation">}</span>
</code></pre></div><ol>
<li>括号内的条件为true时，进入大括号里执行代码</li>
<li>小括号内的结果若不是布尔类型时，会发生隐式转换转为布尔类型</li>
</ol>
<h2 id="三元表达式" tabindex="-1"><a class="header-anchor" href="#三元表达式" aria-hidden="true">#</a> 三元表达式</h2>
<p>案例</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> num1 <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'输入第一个值'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> num2 <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'输入第一个值'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> src <span class="token operator">=</span> <span class="token punctuation">(</span>num1<span class="token operator">></span>num2<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">这是最大值&amp;{num1}</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">这是最大值&amp;{num2}</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token comment">// 三元表达式中还包含了一个功能,返回的功能，可以把成功执行的代码返回</span>
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 用户输入</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请您输入一个数字:'</span><span class="token punctuation">)</span>
<span class="token comment">// 2. 判断输出- 小于10才补0</span>
num <span class="token operator">=</span> <span class="token punctuation">(</span>num <span class="token operator">>=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">?</span> num <span class="token operator">:</span> <span class="token string">'0'</span> <span class="token operator">+</span> num
<span class="token function">alert</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
</code></pre></div><h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h2>
<ol>
<li>小括号数据全等<code v-pre>===</code>case值，则执行对应的代码</li>
<li>若没有全等 === ，则会执行default对应代码</li>
<li>switch case 配合break关键字使用，没有break则会造成case穿透</li>
</ol>
</div></template>
