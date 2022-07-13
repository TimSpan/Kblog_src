<template><div><h1 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a> 解构赋值</h1>
<h2 id="对象解构" tabindex="-1"><a class="header-anchor" href="#对象解构" aria-hidden="true">#</a> 对象解构</h2>
<p><strong>变量名</strong>和<strong>对象属性名</strong>需要一一对应</p>
<p><strong>let = 左侧的 { } 用于批量声明变量，右侧对象的属性值将被赋值给左侧的变量</strong></p>
<p>对象属性的值将被赋值给与属性名相同的变量</p>
<p>解构的变量名不要和外面的变量名冲突否则报错</p>
<p>对象中找不到与变量名一致的属性时变量值为 undefined</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Identifier"</span><span class="token punctuation">,</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"foo"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Identifier"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "foo"</span>

</code></pre></div><p>当你使用解构赋值语句时，如果所指定的本地变量在对象中没有找到同名属性，那么该变量 会被赋值为 undefined 。例如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Identifier"</span><span class="token punctuation">,</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"foo"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Identifier"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "foo"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>

</code></pre></div><h3 id="多级对象解构" tabindex="-1"><a class="header-anchor" href="#多级对象解构" aria-hidden="true">#</a> 多级对象解构</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> pig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'佩奇'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">family</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mother</span><span class="token operator">:</span> <span class="token string">'猪妈妈'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">father</span><span class="token operator">:</span> <span class="token string">'猪爸爸'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sister</span><span class="token operator">:</span> <span class="token string">'乔治'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">6</span>
<span class="token punctuation">}</span>
<span class="token comment">// 多级对象解构</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> <span class="token literal-property property">family</span><span class="token operator">:</span> <span class="token punctuation">{</span> mother<span class="token punctuation">,</span> father<span class="token punctuation">,</span> sister <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">=</span> pig
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mother<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>father<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sister<span class="token punctuation">)</span>
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'佩奇'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">family</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">mother</span><span class="token operator">:</span> <span class="token string">'猪妈妈'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">father</span><span class="token operator">:</span> <span class="token string">'猪爸爸'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sister</span><span class="token operator">:</span> <span class="token string">'乔治'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">6</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> <span class="token literal-property property">family</span><span class="token operator">:</span> <span class="token punctuation">{</span> mother<span class="token punctuation">,</span> father<span class="token punctuation">,</span> sister <span class="token punctuation">}</span><span class="token punctuation">,</span>age <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> person
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mother<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>father<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sister<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="对象解构重新改名" tabindex="-1"><a class="header-anchor" href="#对象解构重新改名" aria-hidden="true">#</a> 对象解构重新改名</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">uname</span><span class="token operator">:</span> username<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">'pink老师'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
</code></pre></div><h2 id="数组解构" tabindex="-1"><a class="header-anchor" href="#数组解构" aria-hidden="true">#</a> 数组解构</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span> thirdColor <span class="token punctuation">]</span> <span class="token operator">=</span> colors<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>thirdColor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "blue"</span>
<span class="token comment">// 模式中 thirdColor 之前的逗号，是为 数组前面的项提供的占位符</span>
</code></pre></div><h3 id="交换两个变量" tabindex="-1"><a class="header-anchor" href="#交换两个变量" aria-hidden="true">#</a> 交换两个变量</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>b<span class="token punctuation">,</span> a<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token comment">//20 10</span>
<span class="token comment">// 注意此分号</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span>b<span class="token punctuation">,</span> a<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token comment">// 注意此分号</span>
</code></pre></div><h3 id="解构多维数组" tabindex="-1"><a class="header-anchor" href="#解构多维数组" aria-hidden="true">#</a> 解构多维数组</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token punctuation">[</span>c<span class="token punctuation">,</span> d<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 2</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 3</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token comment">// 4</span>
</code></pre></div><h2 id="混合解构" tabindex="-1"><a class="header-anchor" href="#混合解构" aria-hidden="true">#</a> 混合解构</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Identifier"</span><span class="token punctuation">,</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"foo"</span><span class="token punctuation">,</span>
<span class="token literal-property property">loc</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">line</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">line</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">range</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>
<span class="token literal-property property">loc</span><span class="token operator">:</span> <span class="token punctuation">{</span> start <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">range</span><span class="token operator">:</span> <span class="token punctuation">[</span> startIndex <span class="token punctuation">]</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>start<span class="token punctuation">.</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>start<span class="token punctuation">.</span>column<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
</code></pre></div></div></template>
