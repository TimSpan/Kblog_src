<template><div><h1 id="事件流" tabindex="-1"><a class="header-anchor" href="#事件流" aria-hidden="true">#</a> 事件流</h1>
<h2 id="事件捕获" tabindex="-1"><a class="header-anchor" href="#事件捕获" aria-hidden="true">#</a> 事件捕获</h2>
<p>概念:从DOM的根元素开始去执行对应的事件(从外到里)</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token constant">DOM</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>事件类型<span class="token punctuation">,</span>事件处理函数<span class="token punctuation">,</span>是否使用捕获机制<span class="token punctuation">)</span>
</code></pre></div><blockquote>
<ol>
<li>addEventListener第三个参数传入 true 代表是捕获阶段触发（很少使用）</li>
<li>若传入false代表冒泡阶段触发，默认就是false</li>
<li>若是用 L0 事件监听，则只有冒泡阶段，没有捕获</li>
</ol>
</blockquote>
<h2 id="事件冒泡" tabindex="-1"><a class="header-anchor" href="#事件冒泡" aria-hidden="true">#</a> 事件冒泡</h2>
<p>当一个元素的事件被触发时，同样的事件将会在该元素的所有祖先元素中依次被触发。这一过程被称为事件冒泡</p>
<ul>
<li>简单理解：当一个元素触发事件后，会依次向上调用所有父级元素的 <strong>同名事件</strong></li>
<li>事件冒泡是默认存在的</li>
<li>L2事件监听第三个参数是 false，或者默认都是冒泡</li>
</ul>
<h2 id="阻止冒泡" tabindex="-1"><a class="header-anchor" href="#阻止冒泡" aria-hidden="true">#</a> 阻止冒泡</h2>
<ul>
<li>因为默认就有冒泡模式的存在，所以容易导致事件影响到父级元素</li>
<li>若想把事件就限制在当前元素内，就需要阻止事件冒泡</li>
<li>阻止事件冒泡需要拿到事件对象</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>事件对象<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>我们某些情况下需要阻止默认行为的发生，比如 阻止 链接的跳转，表单域跳转</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="解绑事件" tabindex="-1"><a class="header-anchor" href="#解绑事件" aria-hidden="true">#</a> 解绑事件</h2>
<p>on事件方式，直接使用null覆盖偶就可以实现事件的解绑</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.btn'</span><span class="token punctuation">)</span>
btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'点错了'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//解绑时间</span>
btn<span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre></div><p>addEventListener方式，必须使用：</p>
<p>removeEventListener(事件类型, 事件处理函数, [获取捕获或者冒泡阶段])</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>btn<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span>fn<span class="token punctuation">)</span>
</code></pre></div><h2 id="鼠标经过事件的区别" tabindex="-1"><a class="header-anchor" href="#鼠标经过事件的区别" aria-hidden="true">#</a> 鼠标经过事件的区别</h2>
<p>mouseover 和 mouseout 会有冒泡效果</p>
<p>mouseenter 和 mouseleave 没有冒泡效果 (推荐)</p>
<h2 id="两种注册事件的区别" tabindex="-1"><a class="header-anchor" href="#两种注册事件的区别" aria-hidden="true">#</a> 两种注册事件的区别</h2>
<h3 id="传统on注册-l0" tabindex="-1"><a class="header-anchor" href="#传统on注册-l0" aria-hidden="true">#</a> 传统on注册（L0）</h3>
<ul>
<li>同一个对象,后面注册的事件会覆盖前面注册(同一个事件)</li>
<li>直接使用null覆盖偶就可以实现事件的解绑</li>
<li>都是冒泡阶段执行的</li>
</ul>
<h3 id="事件监听注册-l2" tabindex="-1"><a class="header-anchor" href="#事件监听注册-l2" aria-hidden="true">#</a> 事件监听注册（L2）</h3>
<ul>
<li>语法: addEventListener(事件类型, 事件处理函数, 是否使用捕获)</li>
<li>后面注册的事件不会覆盖前面注册的事件(同一个事件)</li>
<li>可以通过第三个参数去确定是在冒泡或者捕获阶段执行</li>
<li>必须使用removeEventListener(事件类型, 事件处理函数, 获取捕获或者冒泡阶段</li>
<li>匿名函数无法被解绑</li>
</ul>
<h2 id="事件委托" tabindex="-1"><a class="header-anchor" href="#事件委托" aria-hidden="true">#</a> 事件委托</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName
</code></pre></div><div class="language-html ext-html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>第1个孩子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>第2个孩子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>第3个孩子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>第4个孩子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>第5个孩子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>我不需要变色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 点击每个小li 当前li 文字变为红色</span>
  <span class="token comment">// 按照事件委托的方式  委托给父级，事件写到父级身上</span>
  <span class="token keyword">const</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'ul'</span><span class="token punctuation">)</span>
  ul<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName <span class="token operator">===</span> <span class="token string">'LI'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">'red'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div></div></template>
