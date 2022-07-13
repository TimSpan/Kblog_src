<template><div><h1 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h1>
<h2 id="案例1" tabindex="-1"><a class="header-anchor" href="#案例1" aria-hidden="true">#</a> 案例1</h2>
<h3 id="数组操作" tabindex="-1"><a class="header-anchor" href="#数组操作" aria-hidden="true">#</a> 数组操作</h3>
<p>让用户输入五个有效年龄（0-100之间），放入数组中  必须输入五个有效年龄年龄，如果是无效年龄，则不能放入数组中</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">请输入第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>arr<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">个人有效年龄</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> num <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="案例2" tabindex="-1"><a class="header-anchor" href="#案例2" aria-hidden="true">#</a> 案例2</h2>
<h3 id="猜数字游戏设定次数" tabindex="-1"><a class="header-anchor" href="#猜数字游戏设定次数" aria-hidden="true">#</a> 猜数字游戏设定次数</h3>
<p>开关变量</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 随机生成一个数字 1~10</span>
<span class="token comment">// 取到 N ~ M 的随机整数</span>
<span class="token keyword">function</span> <span class="token function">getRandom</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span><span class="token punctuation">,</span> <span class="token constant">M</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token constant">M</span> <span class="token operator">-</span> <span class="token constant">N</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token constant">N</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> random <span class="token operator">=</span> <span class="token function">getRandom</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// 2. 设定三次  三次没猜对就直接退出</span>
<span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>  <span class="token comment">// 开关变量 </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入1~10之间的一个数字:'</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">></span> random<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'您猜大了，继续'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> random<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'您猜小了，继续'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    flag <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'猜对了，真厉害'</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 写到for的外面来</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'次数已经用完'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="案例3" tabindex="-1"><a class="header-anchor" href="#案例3" aria-hidden="true">#</a> 案例3</h2>
<h3 id="random随机数作为索引号" tabindex="-1"><a class="header-anchor" href="#random随机数作为索引号" aria-hidden="true">#</a> random随机数作为索引号</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'赵云'</span><span class="token punctuation">,</span> <span class="token string">'黄忠'</span><span class="token punctuation">,</span> <span class="token string">'关羽'</span><span class="token punctuation">,</span> <span class="token string">'张飞'</span><span class="token punctuation">,</span> <span class="token string">'马超'</span><span class="token punctuation">,</span> <span class="token string">'刘备'</span><span class="token punctuation">,</span> <span class="token string">'曹操'</span><span class="token punctuation">]</span>
<span class="token comment">// 利用随机函数随机生成一个数字作为索引号</span>
<span class="token keyword">let</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>random<span class="token punctuation">]</span><span class="token punctuation">)</span>
arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>random<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token comment">//splice(起始位置(下标), 删除几个元素)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
</code></pre></div><h2 id="案例4-18" tabindex="-1"><a class="header-anchor" href="#案例4-18" aria-hidden="true">#</a> 案例4---18</h2>
<p>请使用<code v-pre>arguments</code>完成函数<code v-pre>getResult</code>,实现 得到输入的所有的数值中的最小值,最大值,平均数,总和等功能.要求如下:</p>
<ol>
<li>函数名:<code v-pre>getResult</code></li>
<li>函数调用方式:getResult(数值1,数值2,数值3,数值4......)</li>
<li>函数功能:返回值是一个对象,这个对象有sum,max,min,averages等属性,分别表示实参的总和,最大值,最小值,平均数等</li>
</ol>
<h3 id="写法一" tabindex="-1"><a class="header-anchor" href="#写法一" aria-hidden="true">#</a> 写法一</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>            <span class="token comment">//定义一个数组</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getResult</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment">//调用方法获得数组中的计算值</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//该方法接收了数组</span>
    <span class="token comment">//...arr表示可变参数，即为不确定传入多少个参数，可以用...表示</span>
    <span class="token comment">//最后接受进来的数据是一个数组</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> max <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> min <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断 传入的每个数据的值 并加以计算</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//将传入的arguments数组中 的每个值   进行计算</span>
            sum <span class="token operator">=</span> sum <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>   <span class="token comment">//计算总和</span>
            max <span class="token operator">=</span> max <span class="token operator">></span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">?</span> max <span class="token operator">:</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>     <span class="token comment">//计算最大值</span>
            min <span class="token operator">=</span> min <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">?</span> min <span class="token operator">:</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>     <span class="token comment">//计算最小值</span>
            num<span class="token operator">++</span>   <span class="token comment">//计算数据总量</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">传入一个数组,数组长度是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> avg <span class="token operator">=</span> sum <span class="token operator">/</span> num     <span class="token comment">//计算平均值</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sum</span><span class="token operator">:</span> sum<span class="token punctuation">,</span>
        <span class="token literal-property property">avg</span><span class="token operator">:</span> avg<span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> max<span class="token punctuation">,</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> min
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div><h3 id="写法二" tabindex="-1"><a class="header-anchor" href="#写法二" aria-hidden="true">#</a> 写法二</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> num3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> num3<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> max <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// max[arr.length - 1]</span>
    <span class="token keyword">let</span> min <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">=</span> sum <span class="token operator">+</span> value
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> averages <span class="token operator">=</span> sum <span class="token operator">/</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sum</span><span class="token operator">:</span> sum<span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> max<span class="token punctuation">,</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> min<span class="token punctuation">,</span>
        <span class="token literal-property property">averages</span><span class="token operator">:</span> averages<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="写法三" tabindex="-1"><a class="header-anchor" href="#写法三" aria-hidden="true">#</a> 写法三</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// function getResult(arr=[]) {</span>
<span class="token keyword">function</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> max <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> min <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            max <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">></span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            min <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> averages <span class="token operator">=</span> sum <span class="token operator">/</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">return</span> <span class="token punctuation">{</span> sum<span class="token punctuation">,</span> max<span class="token punctuation">,</span> min<span class="token punctuation">,</span> averages <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="写法四" tabindex="-1"><a class="header-anchor" href="#写法四" aria-hidden="true">#</a> 写法四</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">function</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> max <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> min <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            max <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">></span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            min <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> averages <span class="token operator">=</span> sum <span class="token operator">/</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">return</span> <span class="token punctuation">{</span> sum<span class="token punctuation">,</span> max<span class="token punctuation">,</span> min<span class="token punctuation">,</span> averages <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="轮播图" tabindex="-1"><a class="header-anchor" href="#轮播图" aria-hidden="true">#</a> 轮播图</h2>
<div class="language-html ext-html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slider<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 
    <span class="token comment">&lt;!-- slider滑块/滑动条,wrapper封装器 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slider-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/slider01.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slider-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>对人类来说会不会太超前了？<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- indicator 指示器 标记 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slider-indicator<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- toggle 切换开关  prev 上一个--></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prev<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&lt;">&amp;lt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>next<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre></div><div class="language-css ext-css"><pre v-pre class="language-css"><code>    <span class="token selector">*</span> <span class="token punctuation">{</span>
      <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.slider</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 560px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.slider-wrapper</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 320px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.slider-wrapper img</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.slider-footer</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>100<span class="token punctuation">,</span> 67<span class="token punctuation">,</span> 68<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 12px 12px 0 12px<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.slider-footer .toggle</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.slider-footer .toggle button</span> <span class="token punctuation">{</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span>
      <span class="token property">appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.slider-footer .toggle button:hover</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.slider-footer p</span> <span class="token punctuation">{</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
      <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.slider-indicator</span> <span class="token punctuation">{</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.slider-indicator li</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0.4<span class="token punctuation">;</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.slider-indicator li.active</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'./images/slider01.jpg'</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'对人类来说会不会太超前了？'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgb(100, 67, 68)'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'./images/slider02.jpg'</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'开启剑与雪的黑暗传说！'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgb(43, 35, 26)'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'./images/slider03.jpg'</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'真正的jo厨出现了！'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgb(36, 31, 33)'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'./images/slider04.jpg'</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'李玉刚：让世界通过B站看到东方大国文化'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgb(139, 98, 66)'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'./images/slider05.jpg'</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'快来分享你的寒假日常吧~'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgb(67, 90, 92)'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'./images/slider06.jpg'</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'哔哩哔哩小年YEAH'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgb(166, 131, 143)'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'./images/slider07.jpg'</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'一站式解决你的电脑配置问题！！！'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgb(53, 29, 25)'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'./images/slider08.jpg'</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'谁不想和小猫咪贴贴呢！'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgb(99, 72, 114)'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
    <span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.slider-wrapper img'</span><span class="token punctuation">)</span><span class="token comment">//渲染元素</span>
    <span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.slider-footer p'</span><span class="token punctuation">)</span><span class="token comment">//渲染元素</span>
    <span class="token keyword">const</span> footer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.slider-footer'</span><span class="token punctuation">)</span><span class="token comment">//渲染元素</span>
    <span class="token keyword">const</span> next <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.next'</span><span class="token punctuation">)</span><span class="token comment">//下一张元素</span>
    <span class="token keyword">const</span> prev <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.prev'</span><span class="token punctuation">)</span><span class="token comment">//上一张元素</span>
    <span class="token keyword">const</span> slider <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.slider'</span><span class="token punctuation">)</span><span class="token comment">//大图片鼠标经过元素</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>  
    next<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      i<span class="token operator">++</span>
      <span class="token comment">// 1.6判断条件  如果大于8 就复原为 0</span>
      <span class="token comment">// if (i >= 8) {</span>
      <span class="token comment">//   i = 0</span>
      <span class="token comment">// }</span>
      i <span class="token operator">=</span> i <span class="token operator">>=</span> data<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> i
      <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    prev<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      i<span class="token operator">--</span>
      i <span class="token operator">=</span> i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">:</span> i
      <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">function</span> <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      img<span class="token punctuation">.</span>src <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>url
      p<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>title
      footer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>color
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.slider-indicator .active'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'active'</span><span class="token punctuation">)</span>
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">.slider-indicator li:nth-child(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'active'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 3. 自动播放模块</span>
    <span class="token keyword">let</span> timerId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      next<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 4. 鼠标经过大盒子，停止定时器</span>
    slider<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mouseenter'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 停止定时器</span>
      <span class="token function">clearInterval</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 5. 鼠标离开大盒子，开启定时器</span>
    slider<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mouseleave'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 停止定时器</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>timerId<span class="token punctuation">)</span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span>
      <span class="token comment">// 开启定时器</span>
      timerId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        next<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="报名系统" tabindex="-1"><a class="header-anchor" href="#报名系统" aria-hidden="true">#</a> 报名系统</h2>
<h3 id="写法一本地存储" tabindex="-1"><a class="header-anchor" href="#写法一本地存储" aria-hidden="true">#</a> 写法一本地存储</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 读取本地存储的数据   student-data  本地存储的命名</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'student-data'</span><span class="token punctuation">)</span>
<span class="token comment">// 2. 如果有就返回对象，没有就声明一个空的数组  arr 一会渲染的时候用的</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> data <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> tbody <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'tbody'</span><span class="token punctuation">)</span>
<span class="token comment">// 3. 渲染模块函数</span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 遍历数组 arr，有几个对象就生成几个 tr，然后追击给tbody</span>
  <span class="token comment">// map 返回的是个数组  [tr, tr]</span>
  <span class="token keyword">const</span> trArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  &lt;tr>
    &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>class<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
    &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>uname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
    &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
    &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>gender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
    &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>subject<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
    
    &lt;td>
      &lt;a href="javascript:" data-id=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">>删除&lt;/a>
    &lt;/td>
  &lt;/tr> 
  </span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 追加给tbody</span>
  <span class="token comment">// 因为 trArr 是个数组， 我们不要数组，我们要的是 tr的字符串 join()</span>
  tbody<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> trArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 4. 录入模块</span>
<span class="token keyword">const</span> info <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.info'</span><span class="token punctuation">)</span>
<span class="token comment">// 获取表单form 里面带有 name属性的元素</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> info<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'[name]'</span><span class="token punctuation">)</span>
<span class="token comment">// console.log(items)</span>
info<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 阻止提交</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 声明空的对象</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// obj.stuId = arr.length + 1</span>
  <span class="token comment">// 加入有2条数据   2 </span>
  obj<span class="token punctuation">.</span>stuId <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">?</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>stuId <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span>
  <span class="token comment">// 非空判断</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(items) // 数组里面包含 5个表单  name</span>
    <span class="token comment">// console.log(items[i]) //  每一个表单 对象</span>
    <span class="token comment">// console.log(items[i].name) //  </span>
    <span class="token comment">// item 是每一个表单</span>
    <span class="token keyword">const</span> item <span class="token operator">=</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'输入内容不能为空'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// console.log(item.name)  uname  age gender</span>
    <span class="token comment">// obj[item.name]   === obj.uname  obj.age </span>
    obj<span class="token punctuation">[</span>item<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span>
  <span class="token comment">// console.log(obj)</span>
  <span class="token comment">// 追加给数组</span>
  arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  <span class="token comment">//  把数组 arr 存储到本地存储里面</span>
  localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'student-data'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// 渲染页面</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 重置表单</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 5. 删除模块</span>
tbody<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName <span class="token operator">===</span> <span class="token string">'A'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 删除数组对应的这个数据</span>
    arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment">// 写入本地存储</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'student-data'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 重新渲染</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="写法二-1" tabindex="-1"><a class="header-anchor" href="#写法二-1" aria-hidden="true">#</a> 写法二</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> add <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".add"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> tbody <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"tbody"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> typename <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">"[name]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
add<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  typename<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    obj<span class="token punctuation">[</span>item<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  tbody<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span>
    <span class="token string">"beforeEnd"</span><span class="token punctuation">,</span>
    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;tr>
            &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">[</span><span class="token string">"class"</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
            &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">[</span><span class="token string">"uname"</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
            &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
            &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">[</span><span class="token string">"gender"</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
            &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">[</span><span class="token string">"subject"</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
            &lt;td>
              &lt;a href="javascript:" class="delete">删除&lt;/a>
            &lt;/td></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
tbody<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName <span class="token operator">===</span> <span class="token string">"A"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="页面结构" tabindex="-1"><a class="header-anchor" href="#页面结构" aria-hidden="true">#</a> 页面结构</h3>
<div class="language-html ext-html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">a</span> <span class="token punctuation">{</span>
      <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #721c24<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">h1</span> <span class="token punctuation">{</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">table</span> <span class="token punctuation">{</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
      <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #004085<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">th</span> <span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #cfe5ff<span class="token punctuation">;</span>

      <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">td,
    th</span> <span class="token punctuation">{</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #b8daff<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">td</span> <span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">tbody tr</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">tbody tr:hover</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #e1ecf8<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.info</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 900px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 50px auto<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.info input</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
      <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #16da47<span class="token punctuation">;</span>
      <span class="token property">padding-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.info button</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #e68a12<span class="token punctuation">;</span>
      <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.info .age</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>报名系统<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        班级：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>class<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>class<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        姓名：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uname<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uname<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        年龄：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        性别:
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>男<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>女<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
        学科:
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>subject<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>subject<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>前端<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>前端<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Java<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>测试<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UI<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>UI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>add<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>报名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>学生名单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>班级<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>姓名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>年龄<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>性别<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>学科<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>操作<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- &lt;tr>
          &lt;td>204&lt;/td>
          &lt;td>小明&lt;/td>
          &lt;td>22&lt;/td>
          &lt;td>男&lt;/td>
          &lt;td>前端&lt;/td>
          &lt;td>
            &lt;a href="javascript:" class="deconste">删除&lt;/a>
          &lt;/td>
        &lt;/tr> --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
</code></pre></div></div></template>
