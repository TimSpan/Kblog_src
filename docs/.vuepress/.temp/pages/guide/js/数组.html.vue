<template><div><h1 id="array数组" tabindex="-1"><a class="header-anchor" href="#array数组" aria-hidden="true">#</a> Array数组</h1>
<h2 id="数组概念" tabindex="-1"><a class="header-anchor" href="#数组概念" aria-hidden="true">#</a> 数组概念</h2>
<p>JavaScript 的 <strong><code v-pre>Array</code></strong> 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。</p>
<p>数组是一种类列表对象，它的原型中提供了遍历和修改元素的相关操作。<strong>JavaScript 数组的长度和元素类型都是非固定的。因为数组的长度可随时改变，并且其数据在内存中也可以不连续，所以 JavaScript 数组不一定是密集型的</strong>，这取决于它的使用方式。一般来说，数组的这些特性会给使用带来方便，但如果这些特性不适用于你的特定使用场景的话，可以考虑使用类型数组 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray" target="_blank" rel="noopener noreferrer"><code v-pre>TypedArray</code><ExternalLinkIcon/></a>。</p>
<p>只能用整数作为数组元素的索引，而不能用字符串。后者称为 关联数组。<strong>使用非整数并通过 方括号 或 点号 来访问或设置数组元素时，所操作的并不是数组列表中的元素，而是数组对象的 属性集合上的变量。数组对象的属性和数组元素列表是分开存储的，并且数组的遍历和修改操作也不能作用于这些命名属性。</strong></p>
<p>例子:</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span><span class="token number">1</span>
arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span>
arr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">6</span>
arr<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">'c'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// [1, 4, 空属性 × 3, 6, foo: 'c']</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//6</span>
</code></pre></div><h2 id="for-of" tabindex="-1"><a class="header-anchor" href="#for-of" aria-hidden="true">#</a> for...of</h2>
<h3 id="迭代数组" tabindex="-1"><a class="header-anchor" href="#迭代数组" aria-hidden="true">#</a> 迭代数组</h3>
<p><strong><code v-pre>for...of</code>语句</strong>在<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols" target="_blank" rel="noopener noreferrer">可迭代对象<ExternalLinkIcon/></a>（包括 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer"><code v-pre>Array</code><ExternalLinkIcon/></a>，<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map" target="_blank" rel="noopener noreferrer"><code v-pre>Map</code><ExternalLinkIcon/></a>，<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set" target="_blank" rel="noopener noreferrer"><code v-pre>Set</code><ExternalLinkIcon/></a>，<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer"><code v-pre>String</code><ExternalLinkIcon/></a>，<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray" target="_blank" rel="noopener noreferrer"><code v-pre>TypedArray</code><ExternalLinkIcon/></a>，<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments" target="_blank" rel="noopener noreferrer">arguments<ExternalLinkIcon/></a> 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> iterable <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> iterable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    value <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 11</span>
<span class="token comment">// 21</span>
<span class="token comment">// 31</span>
</code></pre></div><h3 id="迭代map" tabindex="-1"><a class="header-anchor" href="#迭代map" aria-hidden="true">#</a> 迭代Map</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> iterable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"c"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> entry <span class="token keyword">of</span> iterable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// ["a", 1]</span>
<span class="token comment">// ["b", 2]</span>
<span class="token comment">// ["c", 3]</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> iterable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// 3</span>
</code></pre></div><h3 id="迭代dom集合" tabindex="-1"><a class="header-anchor" href="#迭代dom集合" aria-hidden="true">#</a> 迭代DOM集合</h3>
<p>迭代 DOM 元素集合，比如一个<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList" target="_blank" rel="noopener noreferrer"><code v-pre>NodeList</code><ExternalLinkIcon/></a>对象</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//注意：这只能在实现了 NodeList.prototype[Symbol.iterator] 的平台上运行</span>
<span class="token keyword">let</span> articleParagraphs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">"article > p"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> paragraph <span class="token keyword">of</span> articleParagraphs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  paragraph<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"read"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="数组核心方法" tabindex="-1"><a class="header-anchor" href="#数组核心方法" aria-hidden="true">#</a> 数组核心方法</h2>
<table>
<thead>
<tr>
<th style="text-align:center">方法</th>
<th style="text-align:center">作用</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank" rel="noopener noreferrer">filter<ExternalLinkIcon/></a></td>
<td style="text-align:center">过滤数组</td>
<td style="text-align:center">筛选数组元素,并生成新数组</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noopener noreferrer">map<ExternalLinkIcon/></a></td>
<td style="text-align:center">迭代数组</td>
<td style="text-align:center">返回新数组,新数组里面的元素式处理之后的值</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank" rel="noopener noreferrer">reduce<ExternalLinkIcon/></a></td>
<td style="text-align:center">累计器</td>
<td style="text-align:center">返回函数累计处理的结果,求和</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank" rel="noopener noreferrer">forEach<ExternalLinkIcon/></a></td>
<td style="text-align:center">遍历数组</td>
<td style="text-align:center">不返回,不改变值</td>
</tr>
</tbody>
</table>
<h2 id="伪数组转真数组array-from" tabindex="-1"><a class="header-anchor" href="#伪数组转真数组array-from" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from" target="_blank" rel="noopener noreferrer">伪数组转真数组Array.from()<ExternalLinkIcon/></a></h2>
<h2 id="更多关于数组" tabindex="-1"><a class="header-anchor" href="#更多关于数组" aria-hidden="true">#</a> 更多关于数组</h2>
<p>在 JavaScript 中，数组不是<a href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive" target="_blank" rel="noopener noreferrer">基元<ExternalLinkIcon/></a>，而是<code v-pre>Array</code>具有以下核心特征的对象：</p>
<ul>
<li><strong>JavaScript 数组可以调整大小</strong>并且**可以包含不同<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" target="_blank" rel="noopener noreferrer">数据类型<ExternalLinkIcon/></a>**的混合。（当这些特性不受欢迎时，请改用<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays" target="_blank" rel="noopener noreferrer">类型化数组<ExternalLinkIcon/></a>。）</li>
<li><strong>JavaScript 数组不是关联数组</strong>，因此<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#notes" target="_blank" rel="noopener noreferrer">不能使用字符串作为索引来访问数组元素<ExternalLinkIcon/></a>，而必须使用整数作为索引来访问。</li>
<li>**JavaScript 数组是<a href="https://en.wikipedia.org/wiki/Zero-based_numbering" target="_blank" rel="noopener noreferrer">零索引<ExternalLinkIcon/></a>**的：数组的第一个元素在 index 处<code v-pre>0</code>，第二个在 index 处<code v-pre>1</code>，依此类推——最后一个元素位于数组<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length" target="_blank" rel="noopener noreferrer"><code v-pre>length</code><ExternalLinkIcon/></a>属性 minus的值处<code v-pre>1</code>。</li>
<li><strong>JavaScript<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copy_an_array" target="_blank" rel="noopener noreferrer">数组复制操作<ExternalLinkIcon/></a>创建<a href="https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy" target="_blank" rel="noopener noreferrer">浅拷贝<ExternalLinkIcon/></a></strong>。<em>（所有带有任何</em>JavaScript 对象的标准内置复制操作都会创建浅拷贝，而不是<a href="https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy" target="_blank" rel="noopener noreferrer">深拷贝<ExternalLinkIcon/></a>）。</li>
</ul>
</div></template>
