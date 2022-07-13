<template><div><h1 id="事件对象" tabindex="-1"><a class="header-anchor" href="#事件对象" aria-hidden="true">#</a> 事件对象</h1>
<p>概念： Event 对象代表事件的状态，当dom tree中某个事件被触发的时候，会同时自动产生一个用来描述事件所有的相关信息（比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。）的对象，这个对象就是event（事件对象）。</p>
<ul>
<li>直接通过event来获取</li>
<li>还可以通过函数传参数的形式来使用，一般而言我们使用【形参e或event】来代替。</li>
</ul>
<p>因为event对象是用来描述【发生的事件的信息】的，而event对象当中所提供的一系列属性和方法正是用来获取这些信息的途径。</p>
<ol>
<li>type 获取当前的事件类型</li>
<li>clientX / clientY  获取光标相对于浏览器可见窗口左上角的位置</li>
<li>offsetX  /offsetY  获取相对于当前DOM元素左上角的位置</li>
<li>key 用户按下的键盘键的值,不提倡用keyCode</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>button <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>bubbles<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//用来获得【当前触发事件的类型】是否冒泡，如果当前事件类型支持冒泡则返回true，否则返回false。</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>eventPhase<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//事件传导至【当前节点】时处于什么的状态。</span>
<span class="token comment">//1：事件处于捕获状态</span>
<span class="token comment">//2：事件处于真正的触发者</span>
<span class="token comment">//3：事件处于冒泡状态</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回当事件被触发时，哪个鼠标按钮被点击</span>
<span class="token comment">//0 指定鼠标左键。</span>
<span class="token comment">//1 指定鼠标中键。</span>
<span class="token comment">//2 指定鼠标右键。</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回事件的监听者(触发的事件绑定到了哪个节点，就返回谁)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//target：返回事件真正的触发者</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//用来获得【当前触发事件】的类型，此属性只读</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><table>
<thead>
<tr>
<th style="text-align:center">属性方法</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">cancelable</td>
<td style="text-align:center">布尔值</td>
<td style="text-align:center">表示是否可以取消事件的默认行为</td>
</tr>
<tr>
<td style="text-align:center">defaultPrevented</td>
<td style="text-align:center">布尔值</td>
<td style="text-align:center">true 表示已经调用 preventDefault()方法</td>
</tr>
<tr>
<td style="text-align:center">detail</td>
<td style="text-align:center">整数</td>
<td style="text-align:center">事件相关的其他信息</td>
</tr>
<tr>
<td style="text-align:center">eventPhase</td>
<td style="text-align:center">整数</td>
<td style="text-align:center">表示调用事件处理程序的阶段：1 代表捕获阶段，2 代表 到达目标，3 代表冒泡阶段</td>
</tr>
<tr>
<td style="text-align:center">preventDefault()</td>
<td style="text-align:center">函数</td>
<td style="text-align:center">用于取消事件的默认行为。只有 cancelable 为 true 才 可以调用这个方法</td>
</tr>
<tr>
<td style="text-align:center">stopImmediatePropagation()</td>
<td style="text-align:center">函数</td>
<td style="text-align:center">用于取消所有后续事件捕获或事件冒泡，并阻止调用任 何后续事件处理程序</td>
</tr>
<tr>
<td style="text-align:center">stopPropagation()</td>
<td style="text-align:center">函数</td>
<td style="text-align:center">用于取消所有后续事件捕获或事件冒泡。只有 bubbles 为 true 才可以调用这个方</td>
</tr>
</tbody>
</table>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Event" target="_blank" rel="noopener noreferrer">参考文献<ExternalLinkIcon/></a></p>
</div></template>
