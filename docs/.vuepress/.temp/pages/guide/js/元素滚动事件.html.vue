<template><div><h1 id="元素滚动事件" tabindex="-1"><a class="header-anchor" href="#元素滚动事件" aria-hidden="true">#</a> 元素滚动事件</h1>
<p>事件名📜scroll</p>
<p>scrollLeft和scrollTop （属性）</p>
<ol>
<li>获取被卷去的大小</li>
<li>获取元素内容往左、往上滚出去看不到的距离</li>
<li>这两个值是可读写的</li>
</ol>
<blockquote>
<p>尽量在scroll事件里面获取被卷去的距离</p>
</blockquote>
<p>document.documentElement HTML 文档返回对象为HTML元素</p>
<p>检测页面滚动的头部距离（被卷去的头部）用那个属性？</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop       
<span class="token punctuation">}</span>   
</code></pre></div><h2 id="滚动到指定的坐标" tabindex="-1"><a class="header-anchor" href="#滚动到指定的坐标" aria-hidden="true">#</a> 滚动到指定的坐标</h2>
<p>scrollTo() 方法可把内容滚动到指定的坐标</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>元素<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
</code></pre></div><h2 id="元素尺寸于位置" tabindex="-1"><a class="header-anchor" href="#元素尺寸于位置" aria-hidden="true">#</a> 元素尺寸于位置</h2>
<h3 id="获取宽高" tabindex="-1"><a class="header-anchor" href="#获取宽高" aria-hidden="true">#</a> 获取宽高</h3>
<ol>
<li>获取元素的自身宽高、包含元素自身设置的宽高、padding、border</li>
<li><strong>offsetWidth</strong>和<strong>offsetHeight</strong></li>
<li>
<blockquote>
<p>注意: 获取的是可视宽高, 如果盒子是隐藏的,获取的结果是0</p>
</blockquote>
</li>
</ol>
<h3 id="获取位置" tabindex="-1"><a class="header-anchor" href="#获取位置" aria-hidden="true">#</a> 获取位置</h3>
<ol>
<li><em>获取距离父级元素的左、上距离</em></li>
<li><strong>offsetLeft</strong>和<strong>offsetTop</strong> 注意是只读属性</li>
</ol>
<p>带有定位的父级.如果都没有则以 文档左上角 为准</p>
</div></template>
