<template><div><h1 id="getelementsbyclassname" tabindex="-1"><a class="header-anchor" href="#getelementsbyclassname" aria-hidden="true">#</a> getElementsByClassName</h1>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> click_me <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span>
click_me<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'玉翔一直爱江梅'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote>
<p><strong><code v-pre>Element.getElementsByClassName()</code></strong> 方法返回一个即时更新的（live） <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection" target="_blank" rel="noopener noreferrer"><code v-pre>HTMLCollection</code><ExternalLinkIcon/></a>，包含了所有拥有指定 class 的子元素。当在 document 对象上调用此方法时，会检索整个文档，包括根元素。</p>
<p>相似地，<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementsByClassName" target="_blank" rel="noopener noreferrer"><code v-pre>getElementsByClassName()</code><ExternalLinkIcon/></a> 方法会在整个文档上执行；它返回指定拥有指定 class 名称的 document 根节点的后代元素。</p>
</blockquote>
</div></template>
