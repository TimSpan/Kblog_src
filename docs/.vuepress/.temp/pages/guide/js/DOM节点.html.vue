<template><div><h1 id="dom节点" tabindex="-1"><a class="header-anchor" href="#dom节点" aria-hidden="true">#</a> DOM节点</h1>
<h2 id="insertadjacentelement" tabindex="-1"><a class="header-anchor" href="#insertadjacentelement" aria-hidden="true">#</a> insertAdjacentElement()</h2>
<p><strong>把字符串格式元素添加到父元素中</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">insertAdjacentElement</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//把字符串格式元素添加到父元素中</span>
</code></pre></div><p>position:</p>
<ul>
<li><code v-pre>'beforebegin'</code>: 在该元素本身的前面。</li>
<li><code v-pre>'afterbegin'</code>:只在该元素当中，在该元素第一个子孩子前面。</li>
<li><code v-pre>'beforeend'</code>:只在该元素当中，在该元素最后一个子孩子后面。</li>
<li><code v-pre>'afterend'</code>: 在该元素本身的后面</li>
</ul>
<p><code v-pre>element</code>:要插入到树中的元素。</p>
<blockquote>
<p>如果插入失败则返回 null.</p>
<p>appendChild不支持追加字符串的子元素,insertAdjacentElement支持追加字符串的元素</p>
</blockquote>
<p>DOM树里每一个内容都称之为节点</p>
<h2 id="节点类型" tabindex="-1"><a class="header-anchor" href="#节点类型" aria-hidden="true">#</a> 节点类型</h2>
<h3 id="元素节点" tabindex="-1"><a class="header-anchor" href="#元素节点" aria-hidden="true">#</a> 元素节点</h3>
<ol>
<li>所有的标签 比如 body、 div</li>
<li>html 是根节点</li>
</ol>
<h3 id="属性节点" tabindex="-1"><a class="header-anchor" href="#属性节点" aria-hidden="true">#</a> 属性节点</h3>
<p>所有的属性 比如 href  class</p>
<h3 id="文本节点" tabindex="-1"><a class="header-anchor" href="#文本节点" aria-hidden="true">#</a> 文本节点</h3>
<p>所有的文本</p>
<h2 id="查找节点" tabindex="-1"><a class="header-anchor" href="#查找节点" aria-hidden="true">#</a> 查找节点</h2>
<h3 id="父节点查找parentnode" tabindex="-1"><a class="header-anchor" href="#父节点查找parentnode" aria-hidden="true">#</a> 父节点查找parentNode</h3>
<p><code v-pre>parentNode 属性</code></p>
<p>返回最近一级的父节点 找不到返回为<code v-pre>null</code></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>子元素<span class="token punctuation">.</span>parentNode
</code></pre></div><h3 id="子节点查找childnodes" tabindex="-1"><a class="header-anchor" href="#子节点查找childnodes" aria-hidden="true">#</a> 子节点查找childNodes</h3>
<p><code v-pre>childNodes</code></p>
<p>获得所有子节点、包括文本节点（空格、换行）、注释节点等</p>
<p><code v-pre>children</code></p>
<p>仅获得所有元素节点</p>
<blockquote>
<p>返回 一个 Node 的子<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element" target="_blank" rel="noopener noreferrer"><code v-pre>elements</code><ExternalLinkIcon/></a> ，是一个动态更新的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection" target="_blank" rel="noopener noreferrer"><code v-pre>HTMLCollection</code><ExternalLinkIcon/></a>。</p>
<p><code v-pre>children</code> 属性为只读属性，对象类型为 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection" target="_blank" rel="noopener noreferrer"><code v-pre>HTMLCollection</code><ExternalLinkIcon/></a>，你可以使用 <code v-pre>elementNodeReference.children[1].nodeName</code> 来获取某个子元素的标签名称。</p>
</blockquote>
<h3 id="兄弟关系查找nextelementsibling" tabindex="-1"><a class="header-anchor" href="#兄弟关系查找nextelementsibling" aria-hidden="true">#</a> 兄弟关系查找nextElementSibling</h3>
<p>下一个兄弟节点<code v-pre>nextElementSibling</code>属性</p>
<p>上一个兄弟节点<code v-pre>previousElementSibling</code> 属性</p>
<h2 id="增加节点" tabindex="-1"><a class="header-anchor" href="#增加节点" aria-hidden="true">#</a> 增加节点</h2>
<h3 id="创建节点createelement" tabindex="-1"><a class="header-anchor" href="#创建节点createelement" aria-hidden="true">#</a> 创建节点createElement</h3>
<p>即创造出一个新的网页元素，再添加到网页内，一般先创建节点，然后插入节点</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 创造一个新的元素节点</span>
document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'标签名'</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="追加节点appendchild" tabindex="-1"><a class="header-anchor" href="#追加节点appendchild" aria-hidden="true">#</a> 追加节点appendChild</h3>
<p>要想在界面看到，还得插入到某个父元素中</p>
<p>插入到父元素的最后一个子元素</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 插入到这个父元素的最后</span>
父元素<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>要插入的元素<span class="token punctuation">)</span>
</code></pre></div><p>插入到父元素中某个子元素的前面</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 插插入到某个子元素的前面</span>
父元素<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>要插入的元素<span class="token punctuation">,</span>在哪个元素前面<span class="token punctuation">)</span>
ul<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>li<span class="token punctuation">,</span> ul<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//示例</span>
<span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span>
</code></pre></div><h3 id="插入节点insertadjacenthtml" tabindex="-1"><a class="header-anchor" href="#插入节点insertadjacenthtml" aria-hidden="true">#</a> 插入节点insertAdjacentHTML</h3>
<p><strong><code v-pre>insertAdjacentHTML()</code></strong> 方法将指定的文本解析为 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element" target="_blank" rel="noopener noreferrer"><code v-pre>Element</code><ExternalLinkIcon/></a> 元素，并将结果节点插入到 DOM 树中的指定位置。它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，使其比直接使用 innerHTML 操作更快。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>POSITION</p>
<ul>
<li><code v-pre>'beforebegin'</code>：元素自身的前面。</li>
<li><code v-pre>'afterbegin'</code>：插入元素内部的第一个子节点之前。</li>
<li><code v-pre>'beforeend'</code>：插入元素内部的最后一个子节点之后。</li>
<li><code v-pre>'afterend'</code>：元素自身的后面。</li>
</ul>
<h3 id="克隆节点clonenode" tabindex="-1"><a class="header-anchor" href="#克隆节点clonenode" aria-hidden="true">#</a> 克隆节点cloneNode</h3>
<p>复制一个原有的节点</p>
<p>把复制的节点放入到指定的元素内部</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 克隆一个已有的而元素节点</span>
元素<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span>布尔值<span class="token punctuation">)</span>
</code></pre></div><p><code v-pre>cloneNode</code>会克隆出一个跟原标签一样的元素，括号内传入布尔值</p>
<ol>
<li>若为true，则代表克隆时会包含后代节点一起克隆</li>
<li>若为false，则代表克隆时不包含后代节点</li>
<li>默认为false</li>
</ol>
<h3 id="删除节点removechild" tabindex="-1"><a class="header-anchor" href="#删除节点removechild" aria-hidden="true">#</a> 删除节点removeChild</h3>
<p>在 JavaScript 原生DOM操作中，要删除元素必须通过父元素删除</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>父元素<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>要删除的元素<span class="token punctuation">)</span>
</code></pre></div><blockquote>
<p>如不存在父子关系则删除不成功</p>
<p>删除节点和隐藏节点（display:none） 有区别的： 隐藏节点还是存在的，但是删除，则从html中删除节点</p>
</blockquote>
<h2 id="触屏事件touch" tabindex="-1"><a class="header-anchor" href="#触屏事件touch" aria-hidden="true">#</a> 触屏事件touch</h2>
<table>
<thead>
<tr>
<th style="text-align:center">触摸touch事件</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">touchstart</td>
<td style="text-align:center">手指触摸到一个DOM元素时的触发</td>
</tr>
<tr>
<td style="text-align:center">touchmove</td>
<td style="text-align:center">手指在一个DOM元素上滑动时触发</td>
</tr>
<tr>
<td style="text-align:center">touchend</td>
<td style="text-align:center">手指在一个DOM元素上移开时触发</td>
</tr>
</tbody>
</table>
</div></template>
