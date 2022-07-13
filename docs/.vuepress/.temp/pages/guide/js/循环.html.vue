<template><div><h1 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h1>
<h2 id="while循环三要素" tabindex="-1"><a class="header-anchor" href="#while循环三要素" aria-hidden="true">#</a> while循环三要素</h2>
<ol>
<li>变量起始值</li>
<li>终止条件(没有终止条件，循环会一直自行，造成死循环)</li>
<li>变量变化量（自增或自减)</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>循环条件<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token literal-property property">循环体</span><span class="token operator">:</span>要重复执行的代码
<span class="token punctuation">}</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//当循环条件为true时,直接执行循环体</span>
	<span class="token literal-property property">循环体</span><span class="token operator">:</span>要重复执行的代码
<span class="token punctuation">}</span>
</code></pre></div><h2 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环" aria-hidden="true">#</a> for循环</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>变量起始值<span class="token punctuation">;</span> 终止条件<span class="token punctuation">;</span> 变量变化量<span class="token punctuation">)</span><span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 打开断点调试可以清晰看到循环过程以及变量value值的变化</span>
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 求偶数和</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token operator">%</span><span class="token number">2</span><span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        sum <span class="token operator">=</span> sum <span class="token operator">+</span> i
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>
</code></pre></div><h2 id="for循环遍历数组的4种写法" tabindex="-1"><a class="header-anchor" href="#for循环遍历数组的4种写法" aria-hidden="true">#</a> for循环遍历数组的4种写法</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 遍历数组的4 种写法</span>
<span class="token comment">// length 是Array的实例属性,返回或设置一个数组中的元素个数</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'马超'</span><span class="token punctuation">,</span> <span class="token string">'赵云'</span><span class="token punctuation">,</span> <span class="token string">'张飞'</span><span class="token punctuation">,</span> <span class="token string">'关羽'</span><span class="token punctuation">,</span> <span class="token string">'黄忠'</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'马超'</span><span class="token punctuation">,</span> <span class="token string">'赵云'</span><span class="token punctuation">,</span> <span class="token string">'张飞'</span><span class="token punctuation">,</span> <span class="token string">'关羽'</span><span class="token punctuation">,</span> <span class="token string">'黄忠'</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">of</span> arr<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'马超'</span><span class="token punctuation">,</span> <span class="token string">'赵云'</span><span class="token punctuation">,</span> <span class="token string">'张飞'</span><span class="token punctuation">,</span> <span class="token string">'关羽'</span><span class="token punctuation">,</span> <span class="token string">'黄忠'</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'马超'</span><span class="token punctuation">,</span> <span class="token string">'赵云'</span><span class="token punctuation">,</span> <span class="token string">'张飞'</span><span class="token punctuation">,</span> <span class="token string">'关羽'</span><span class="token punctuation">,</span> <span class="token string">'黄忠'</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="for循环嵌套" tabindex="-1"><a class="header-anchor" href="#for循环嵌套" aria-hidden="true">#</a> for循环嵌套</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> hang <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入行'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> lie <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入列'</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> hang<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;br>第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">天&lt;br></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token comment">// 里层循环打印 第几个单词</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> lie<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">⭐</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 打开断点调试可以清晰看到循环过程以及变量value值的变化</span>
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 打印直角三角形</span>
 <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'&lt;br>'</span><span class="token punctuation">)</span>
     <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">⭐</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre></div><h2 id="用户登录验证" tabindex="-1"><a class="header-anchor" href="#用户登录验证" aria-hidden="true">#</a> 用户登录验证</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 接收用户输入的用户名和密码，</span>
<span class="token comment">// 若用户名为 “admin” ,且密码为 “123456” ,则提示用户登录成功!  </span>
<span class="token comment">// 否则，让用户一直输入</span>
<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入用户名字：'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> password <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入用户密码：'</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">===</span> <span class="token string">'admin'</span><span class="token punctuation">,</span> password <span class="token operator">==</span> <span class="token string">'123456'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">break</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'登录成功'</span><span class="token punctuation">)</span>
</code></pre></div></div></template>
