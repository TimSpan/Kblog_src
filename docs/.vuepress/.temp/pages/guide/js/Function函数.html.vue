<template><div><h1 id="function函数" tabindex="-1"><a class="header-anchor" href="#function函数" aria-hidden="true">#</a> Function函数</h1>
<p>在 JavaScript中，函数是<strong>头等(first-class)对象</strong>，因为它们可以像任何其他<strong>对象</strong>一样具有属性和方法。它们与其他对象的区别在于函数可以被调用。简而言之，它们是**<code v-pre>Function</code>对象**。</p>
<p>在JavaScript中，每个函数其实都是一个<code v-pre>Function</code>对象。查看<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function" target="_blank" rel="noopener noreferrer"><code v-pre>Function</code><ExternalLinkIcon/></a>页面<code v-pre>了解其</code>属性和方法。</p>
<h2 id="iife-立即调用函数表达式" tabindex="-1"><a class="header-anchor" href="#iife-立即调用函数表达式" aria-hidden="true">#</a> IIFE（立即调用函数表达式）</h2>
<p>写法</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 第一种写法</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (function(){})();</span>
<span class="token comment">// 2.第二种写法</span>
<span class="token comment">// (function () { }());</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="函数声明与函数表达式" tabindex="-1"><a class="header-anchor" href="#函数声明与函数表达式" aria-hidden="true">#</a> 函数声明与函数表达式</h2>
<p>JavaScript 引擎在任何代码执行之前，会先读取函数声明，并在执行上下文中 生成函数定义。而函数表达式必须等到代码执行到它那一行，才会在执行上下文中生成函数定义。</p>
<p>函数声明会在任何代码执行之前先被读取并添加到执行上下文。这个 过程叫作函数声明提升（function declaration hoisting）。在执行代码时，JavaScript 引擎会先执行一遍扫描， 把发现的函数声明提升到源代码树的顶部。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//函数体</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote>
<p>函数表达式跟 JavaScript 中的其他表达式一样，需要先赋值再使用</p>
</blockquote>
<h3 id="函数返回值" tabindex="-1"><a class="header-anchor" href="#函数返回值" aria-hidden="true">#</a> 函数返回值</h3>
<p>多个返回值以数组形式返回</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//  3. 求任意数组的最大值和最小值，并且返回</span>
<span class="token keyword">function</span> <span class="token function">getArrValue</span><span class="token punctuation">(</span><span class="token parameter">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// (1)先准备一个max变量存放数组的第一个值</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> min <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  
  <span class="token comment">// (2) 遍历比较</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 最大值</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      max <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 最小值</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">></span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      min <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// (3) 返回值  返回的是数组</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>max<span class="token punctuation">,</span> min<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> newArr <span class="token operator">=</span> <span class="token function">getArrValue</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// let newArr = getArrValue()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">数组的最大值是: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>newArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">数组的最小值是: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>newArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
</code></pre></div><h3 id="函数形参的默认值" tabindex="-1"><a class="header-anchor" href="#函数形参的默认值" aria-hidden="true">#</a> 函数形参的默认值</h3>
<p>js函数有个奇怪的地方,无论在函数定义中声明了多少形参,都可以传入任意数量的参数-</p>
<h2 id="函数属性与方法" tabindex="-1"><a class="header-anchor" href="#函数属性与方法" aria-hidden="true">#</a> 函数属性与方法</h2>
<h2 id="箭头函数概述" tabindex="-1"><a class="header-anchor" href="#箭头函数概述" aria-hidden="true">#</a> 箭头函数概述</h2>
<p>目的:引入箭头函数的目的是更简短的函数写法并且不绑定this，箭头函数的语法比函数表达式更简洁</p>
<p>使用场景:箭头函数更适用于那些本来<strong>需要匿名函数的地方</strong></p>
<ol>
<li>没有 <code v-pre>this</code> 、 <code v-pre>super</code> 、 <code v-pre>arguments</code> ，也没有 <code v-pre>new.target</code> 绑定： this 、 super 、 arguments 、以及函数内部的 new.target 的值由所在的、最靠近的非箭头函数来决定</li>
<li>不能被使用 <code v-pre>new</code> 调用： 箭头函数没有 [[Construct]] 方法，因此不能被用为构造函 数，使用 new 调用箭头函数会抛出错误。</li>
<li>没有原型： 既然不能对箭头函数使用 new ，那么它也不需要原型，也就是没有 prototype 属性。</li>
<li><code v-pre>不能更改 this</code> ： this 的值在函数内部不能被修改，在函数的整个生命周期内其值会 保持不变。</li>
<li>没有 arguments 对象： 既然箭头函数没有 arguments 绑定，你必须依赖于具名参数或 剩余参数来访问函数的参数。</li>
<li>不允许重复的具名参数： 箭头函数不允许拥有重复的具名参数，无论是否在严格模式 下；而相对来说，传统函数只有在严格模式下才禁止这种重复。</li>
</ol>
<p>产生这些差异是有理由的。首先并且最重要的是，在 JS 编程中 this 绑定是发生错误的常 见根源之一，在嵌套的函数中有时会因为调用方式的不同，而导致丢失对外层 this 值的追 踪，就可能会导致预期外的程序行为。其次，箭头函数使用单一的 this 值来执行代码，使 得 JS 引擎可以更容易对代码的操作进行优化；而常规函数可能会作为构造函数使用（导致 this 易变而不利优化）。 其余差异也聚集在减少箭头函数内部的错误与不确定性，这样 JS 引擎也能更好地优化箭头函 数的运行。</p>
<p>箭头函数表达式更适用于那些本来需要匿名函数的地方,并且它不能用作构造函数。</p>
<blockquote>
<p>注意：箭头函数也拥有 name 属性，并且遵循与其他函数相同的规则。</p>
</blockquote>
<h2 id="箭头函数语法" tabindex="-1"><a class="header-anchor" href="#箭头函数语法" aria-hidden="true">#</a> 箭头函数语法</h2>
<p>箭头函数的语法可以有多种变体，取决于你要完成的目标。<em><strong>所有变体都以函数参数为开头</strong></em>， <strong>紧跟着的是箭头</strong>，<em><strong>再接下来则是函数体</strong></em>。参数与函数体都根据实际使用有不同的形式。例 如，以下箭头函数接收单个参数并返回它：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">total</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出2</span>
</code></pre></div><p>当箭头函数只有单个参数时，该参数可以直接书写而不需要额外的语法；接下来是箭头以及 箭头右边的表达式，该表达式会被计算并返回结果。即使此处没有明确的 return 语句，该 箭头函数仍然会将所传入的参数返回出来。</p>
<p>如果需要传入多于一个的参数，就需要将它们放在括号内，就像这样：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">+</span> y
<span class="token comment">//等价于</span>
<span class="token comment">// let sum =   function(x,y){</span>
<span class="token comment">//     return x + y</span>
<span class="token comment">// }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出3</span>
</code></pre></div><p>sum() 函数简单地将两个参数相加并返回结果。两者区别在于,参数被封闭在括号内，相互之间使用逗号分隔（就像传统函数那样）。</p>
<p>如果函数没有任何参数，那么在声明时就必须使用一对空括号，就像这样：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Nicholas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="函数体" tabindex="-1"><a class="header-anchor" href="#函数体" aria-hidden="true">#</a> 函数体</h3>
<p>在一个简写体中，只需要一个表达式，并附加一个隐式的返回值。在块体中，必须使用明确的<code v-pre>return</code>语句。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token comment">// 简写函数 省略 return</span>

<span class="token keyword">var</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//常规编写 明确的返回值</span>
</code></pre></div><h3 id="换行写法" tabindex="-1"><a class="header-anchor" href="#换行写法" aria-hidden="true">#</a> 换行写法</h3>
<p>箭头函数在<code v-pre>参数</code>和<code v-pre>箭头=&gt;</code>之间不能换行。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
           <span class="token operator">=></span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// SyntaxError: expected expression, got '=>'</span>
</code></pre></div><p>但是，可以通过在 <code v-pre>=&gt;箭头</code> 之后换行，或者用 ‘( )’、'{ }'来实现换行，如下：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  <span class="token number">1</span><span class="token punctuation">;</span>
  
<span class="token keyword">var</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token parameter">a<span class="token punctuation">,</span>
  b<span class="token punctuation">,</span>
  c</span>
<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// 以上不会有语法错误</span>
</code></pre></div><h3 id="箭头函数也可以使用条件三元运算符" tabindex="-1"><a class="header-anchor" href="#箭头函数也可以使用条件三元运算符" aria-hidden="true">#</a> 箭头函数也可以使用条件三元运算符</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">simple</span> <span class="token operator">=</span> <span class="token parameter">a</span> <span class="token operator">=></span> a <span class="token operator">></span> <span class="token number">15</span> <span class="token operator">?</span> <span class="token number">15</span> <span class="token operator">:</span> a<span class="token punctuation">;</span>
<span class="token function">simple</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 15</span>
<span class="token function">simple</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>

<span class="token keyword">let</span> <span class="token function-variable function">max</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">></span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
</code></pre></div><h3 id="箭头函数递归" tabindex="-1"><a class="header-anchor" href="#箭头函数递归" aria-hidden="true">#</a> 箭头函数递归</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">fact</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span> x<span class="token operator">==</span><span class="token number">0</span> <span class="token operator">?</span>  <span class="token number">1</span> <span class="token operator">:</span> x<span class="token operator">*</span><span class="token function">fact</span><span class="token punctuation">(</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fact</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 120</span>
</code></pre></div><h3 id="使用箭头函数作为方法" tabindex="-1"><a class="header-anchor" href="#使用箭头函数作为方法" aria-hidden="true">#</a> 使用箭头函数作为方法</h3>
<p>箭头函数表达式对<code v-pre>非方法函数</code>是最合适的。让我们看看当我们试着把它们作为<code v-pre>方法</code>时发生了什么。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token string">'use strict'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>i<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">c</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>i<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// undefined, Window{...}</span>
obj<span class="token punctuation">.</span><span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 10, Object {...}</span>
</code></pre></div><h3 id="通过-call-或-apply-调用" tabindex="-1"><a class="header-anchor" href="#通过-call-或-apply-调用" aria-hidden="true">#</a> 通过 call 或 apply 调用</h3>
<p>由于 箭头函数没有自己的 this 指针，通过 <code v-pre>call()</code> <em>或</em> <code v-pre>apply()</code> 方法调用一个函数时，只能传递参数（不能绑定 this---译者注），他们的第一个参数会被忽略。（这种现象对于 bind 方法同样成立 --- 译者注）</p>
<h3 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h3>
<p>箭头函数不会创建自己的<code v-pre>this，它只会从自己的作用域链的上一层继承 this</code>。</p>
<p>在箭头函数出现之前，每一个新函数根据它是被如何调用的来定义这个函数的 this 值：</p>
<ul>
<li>如果该函数是一个构造函数，this 指针指向一个新的对象</li>
<li>在严格模式下的函数调用下，this 指向<code v-pre>undefined</code></li>
<li>如果该函数是一个对象的方法，则它的 this 指针指向这个对象</li>
<li>等等</li>
</ul>
<p><code v-pre>This</code>被证明是令人厌烦的面向对象风格的编程。</p>
<h2 id="创建iife-立即调用函数表达式" tabindex="-1"><a class="header-anchor" href="#创建iife-立即调用函数表达式" aria-hidden="true">#</a> 创建IIFE（立即调用函数表达式）</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">person</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>

<span class="token keyword">let</span> <span class="token function-variable function">person</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">"Nicholas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Nicholas</span>
</code></pre></div><p>此代码中 IIFE 被用于创建一个包含 <code v-pre>getName()</code> 方法的对象。该方法使用 name 参数作为返 回值，有效地让 <code v-pre>name</code> 成为所返回对象的一个私有成员。 你可以使用箭头函数来完成同样的事情，只要将其包裹在括号内即可：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">"Nicholas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Nicholas"</span>
</code></pre></div><h3 id="箭头函数与数组" tabindex="-1"><a class="header-anchor" href="#箭头函数与数组" aria-hidden="true">#</a> 箭头函数与数组</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token operator">-</span> b
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>能使用回调函数的数组方法（例如 sort() 、 map() 与 reduce() 方法），都能从箭头函数 的简洁语法中获得收益，它将看似复杂的需求转换为简单的代码。</p>
<h2 id="作用域important" tabindex="-1"><a class="header-anchor" href="#作用域important" aria-hidden="true">#</a> 作用域important</h2>
<h3 id="局部作用域" tabindex="-1"><a class="header-anchor" href="#局部作用域" aria-hidden="true">#</a> 局部作用域</h3>
<h4 id="函数作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域" aria-hidden="true">#</a> 函数作用域</h4>
<ol>
<li><em><strong>函数内部声明的变量，在函数外部无法被访问</strong></em></li>
<li><em><strong>函数的参数也是函数内部的局部变量</strong></em></li>
<li><em><strong>不同函数内部声明的变量无法互相访问</strong></em></li>
<li><em><strong>函数执行完毕后，函数内部的变量实际被清空了</strong></em></li>
</ol>
<h4 id="块作用域" tabindex="-1"><a class="header-anchor" href="#块作用域" aria-hidden="true">#</a> 块作用域</h4>
<p>在 JavaScript 中使用 { } 包裹的代码称为代码块，代码块内部声明的变量外部将【有可能】无法被访问</p>
<ol>
<li>let / const声明的变量会产生块作用域，var 不会产生块作用域</li>
<li>不同代码块之间的变量无法互相访问</li>
</ol>
<h3 id="全局作用域" tabindex="-1"><a class="header-anchor" href="#全局作用域" aria-hidden="true">#</a> 全局作用域</h3>
<ol>
<li>为 window 对象动态添加的属性默认也是全局的，不推荐！</li>
<li>函数中未使用任何关键字声明的变量为全局变量，不推荐！！！</li>
<li>尽可能少的声明全局变量，防止全局变量被污染</li>
</ol>
</div></template>
