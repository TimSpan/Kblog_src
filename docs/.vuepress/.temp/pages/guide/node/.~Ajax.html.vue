<template><div><h1 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> Ajax</h1>
<h2 id="服务器概念" tabindex="-1"><a class="header-anchor" href="#服务器概念" aria-hidden="true">#</a> 服务器概念</h2>
<h3 id="服务器" tabindex="-1"><a class="header-anchor" href="#服务器" aria-hidden="true">#</a> 服务器</h3>
<p>存放和对外提供资源的电脑 ,叫服务器,</p>
<p>本质上 ,就是一台电脑,只不过,它的性能比个人电脑高得多</p>
<h3 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端" aria-hidden="true">#</a> 客户端</h3>
<p>负责获取和消费资源的电脑,叫做客户端</p>
<h2 id="url地址" tabindex="-1"><a class="header-anchor" href="#url地址" aria-hidden="true">#</a> url地址</h2>
<p>全称是 <code v-pre>UniformResourceLocator</code> 中文叫 <code v-pre>统一资源定位符</code></p>
<p>用于标识互联网每个资源的唯一存放位置.浏览器只有通过URL地址，才能正确定位资源的存放位置，从而成功访问到对应的资源</p>
<h3 id="url地址组成部分" tabindex="-1"><a class="header-anchor" href="#url地址组成部分" aria-hidden="true">#</a> url地址组成部分</h3>
<ol>
<li>客户端与服务器之间的<code v-pre>通信协议</code></li>
<li>存有该资源的<code v-pre>服务器名称</code></li>
<li>资源在服务器上的<code v-pre>具体的存放位置</code></li>
</ol>
<p><img src="@source/guide/node/assets/URL.png" alt=""></p>
<h3 id="客户端与服务器的通信过程" tabindex="-1"><a class="header-anchor" href="#客户端与服务器的通信过程" aria-hidden="true">#</a> 客户端与服务器的通信过程</h3>
<p>客户端</p>
<ol>
<li>打开浏览器</li>
<li>输入要访问的地址</li>
<li>回车,向服务器发起资源<strong>请求</strong></li>
</ol>
<p>服务器</p>
<ol>
<li>服务器接收到客户端发来的资源请求</li>
<li>服务器在内部处理这次请求 找到相关的资源</li>
<li>服务器把找到的资源 **响应(发送)**给客户端</li>
</ol>
<blockquote>
<p>分为 请求  -  处理  -  响应 三个步骤</p>
</blockquote>
<h3 id="网页如何请求数据" tabindex="-1"><a class="header-anchor" href="#网页如何请求数据" aria-hidden="true">#</a> 网页如何请求数据</h3>
<p>需要用<code v-pre>XMLHttpRequest</code>对象</p>
<p><code v-pre>XMLHttpRequest</code>简称(xhr)是浏览器提供的js成员  ,可以请求服务器上的数据资源</p>
<p>最简单的用法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> xhrObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="资源的请求方式" tabindex="-1"><a class="header-anchor" href="#资源的请求方式" aria-hidden="true">#</a> 资源的请求方式</h3>
<p>请求方式有很多种,最常见的有 <code v-pre>get</code>  和 <code v-pre>post</code> 请求</p>
<ul>
<li>get 请求用于获取服务器资源(向服务器要资源)</li>
<li>post 用于向服务器提交数据(往服务器发送资源). 比如 提交的登录信息   注册信息   用户信息 等</li>
</ul>
<h2 id="ajax-1" tabindex="-1"><a class="header-anchor" href="#ajax-1" aria-hidden="true">#</a> Ajax</h2>
<h3 id="ajax概念" tabindex="-1"><a class="header-anchor" href="#ajax概念" aria-hidden="true">#</a> Ajax概念</h3>
<p>Ajax 的全称是 Asynchronous JavaScript And XML（异步 JavaScript 和 xml）</p>
<p><strong>在网页中利用 <code v-pre>XMLHttpRequest</code> 对象和服务器进行数据交互的方式，就是Ajax</strong></p>
<h3 id="jquery中的ajax" tabindex="-1"><a class="header-anchor" href="#jquery中的ajax" aria-hidden="true">#</a> jQuery中的Ajax</h3>
<p>浏览器中提供的 XMLHttpRequest 用法比较复杂 所以 jQuery 对 XMLHttpRequest 进行了封装  提供了一系列的 Ajax的相关的函数 极大降低了 Ajax的 使用难度</p>
<p>常用方法</p>
<ol>
<li>$.get()</li>
<li>$.post()</li>
<li>$.ajax()</li>
</ol>
<h3 id="get-函数语法" tabindex="-1"><a class="header-anchor" href="#get-函数语法" aria-hidden="true">#</a> $.get()函数语法</h3>
<p>接受三个参数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$.get(url , [data] , [callback])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:center">参数名</th>
<th style="text-align:center">参数类型</th>
<th style="text-align:center">是否必选</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">url</td>
<td style="text-align:center">string</td>
<td style="text-align:center"><strong>是</strong></td>
<td style="text-align:center">要请求的<strong>资源地址</strong></td>
</tr>
<tr>
<td style="text-align:center">data</td>
<td style="text-align:center">object</td>
<td style="text-align:center">否</td>
<td style="text-align:center">请求资源期间要<strong>携带的参数</strong></td>
</tr>
<tr>
<td style="text-align:center">callback</td>
<td style="text-align:center">function</td>
<td style="text-align:center">否</td>
<td style="text-align:center">请求成功时的<strong>回调函数</strong></td>
</tr>
</tbody>
</table>
<blockquote>
<p>可以发起不带参数的请求即 没有 data  参数</p>
</blockquote>
<h3 id="post-函数语法" tabindex="-1"><a class="header-anchor" href="#post-函数语法" aria-hidden="true">#</a> $.post()函数语法</h3>
<p>$.post函数功能单一 专门用来发起post请求,从而向服务器提交数据</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$.post(url , [data] , [callback])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:center">参数名</th>
<th style="text-align:center">参数类型</th>
<th style="text-align:center">是否必选</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">url</td>
<td style="text-align:center">string</td>
<td style="text-align:center"><strong>是</strong></td>
<td style="text-align:center"><strong>请求数据的地址</strong></td>
</tr>
<tr>
<td style="text-align:center">data</td>
<td style="text-align:center">object</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><strong>要提交的数据</strong></td>
</tr>
<tr>
<td style="text-align:center">callback</td>
<td style="text-align:center">function</td>
<td style="text-align:center">否</td>
<td style="text-align:center">数据提交成功时的<strong>回调函数</strong></td>
</tr>
</tbody>
</table>
<h3 id="ajax-函数语法" tabindex="-1"><a class="header-anchor" href="#ajax-函数语法" aria-hidden="true">#</a> $.ajax()函数语法</h3>
<p>相比于 <code v-pre>$.get()</code> 和 <code v-pre>$.post()</code> 函数，<code v-pre>jQuery</code> 中提供的 <code v-pre>$.ajax()</code> 函数，是一个功能比较综合的函数，它允许我们对 <code v-pre>Ajax</code> 请求进行更详细的配置</p>
<p><img src="@source/guide/node/assets/ajax函数.png" alt=""></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">''</span> <span class="token punctuation">,</span> <span class="token comment">//请求的方法 例如GET 或 POST</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 请求的URL地址</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">//这次请求要携带的数据</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//请求成功后的回调函数</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发起-get-请求" tabindex="-1"><a class="header-anchor" href="#发起-get-请求" aria-hidden="true">#</a> 发起 GET 请求</h3>
<p>只需要将 <code v-pre>type</code> 属性 的值设置为 ‘<code v-pre>GET</code>’ 即可</p>
<p>如果省略type属性，默认发送的就是GET请求</p>
<h3 id="发起-post-请求" tabindex="-1"><a class="header-anchor" href="#发起-post-请求" aria-hidden="true">#</a> 发起 POST 请求</h3>
<p>只需要把 <code v-pre>type</code>属性的值 设置为POST即可</p>
<h3 id="接口概念" tabindex="-1"><a class="header-anchor" href="#接口概念" aria-hidden="true">#</a> 接口概念</h3>
<p>使用 Ajax 请求数据时，被请求的 URL 地址，就叫做 数据接口（简称<strong>接口</strong>）</p>
<h3 id="接口文档" tabindex="-1"><a class="header-anchor" href="#接口文档" aria-hidden="true">#</a> 接口文档</h3>
<p>接口文档，顾名思义就是 <strong>接口的说明文档</strong>，<strong>它是我们调用接口的依据</strong>。好的接口文档包含了对 <strong>接口URL</strong>，<strong>参数</strong> 以及 <strong>输出内容</strong> 的说明，我们参照接口文档就能方便的知道接口的作用，以及接口如何进行调用</p>
<h3 id="接口文档的组成部分" tabindex="-1"><a class="header-anchor" href="#接口文档的组成部分" aria-hidden="true">#</a> 接口文档的组成部分</h3>
<ol>
<li><strong>接口名称</strong>：用来标识各个接口的简单说明，如 <strong>登录接口</strong>，<strong>获取图书列表接口</strong>等</li>
<li><strong>接口URL</strong>：接口的调用地址</li>
<li><strong>调用方式</strong>：接口的调用方式，如 <strong>GET</strong> 或者 <strong>POST</strong></li>
<li><strong>参数格式</strong>：接口需要传递的参数，每个参数必须包含 <strong>参数名称</strong>、<strong>参数类型</strong>、<strong>是否必选</strong>、<strong>参数说明</strong> 这4项内容</li>
<li><strong>响应格式</strong>：接口的返回值的详细描述，一般包含<strong>数据名称</strong>、<strong>数据类型</strong>、<strong>说明</strong>3项内容</li>
<li><strong>返回示例（可选）</strong>：通过对象的形式，列举服务器返回数据的结构</li>
</ol>
<h2 id="xmlhttprequest" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest" aria-hidden="true">#</a> XMLHttpRequest</h2>
<p>XMLHttpRequest（简称 <strong>xhr</strong>），是浏览器提供的 Javascript 对象</p>
<h3 id="xhr发起get请求" tabindex="-1"><a class="header-anchor" href="#xhr发起get请求" aria-hidden="true">#</a> xhr发起GET请求</h3>
<ol>
<li>
<p>创建 <code v-pre>xhr</code> 对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>调用 <code v-pre>xhr.open()</code> 函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'http://www.liulongbin.top:3006/api/getbooks'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>调用 <code v-pre>xhr.send()</code> 函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>监听 <code v-pre>xhr.onreadystatechange</code> 事件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 获取服务器响应的数据</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="xhr发起post请求" tabindex="-1"><a class="header-anchor" href="#xhr发起post请求" aria-hidden="true">#</a> xhr发起POST请求</h3>
<ul>
<li>
<p>创建 <code v-pre>xhr</code> 对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>调用 <code v-pre>xhr.open()</code> 函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> <span class="token string">'http://www.liulongbin.top:3006/api/addbook'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><strong>设置 Content-Type 属性</strong>（固定写法）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'application/x-www-form-urlencoded'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>调用 <code v-pre>xhr.send()</code> 函数，<strong>同时指定要发送的数据</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'bookname=水浒传&amp;author=施耐庵&amp;publisher=上海图书出版社'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>监听 <code v-pre>xhr.onreadystatechange</code> 事件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="xhr对象的readystate属性" tabindex="-1"><a class="header-anchor" href="#xhr对象的readystate属性" aria-hidden="true">#</a> xhr对象的<code v-pre>readyState</code>属性</h3>
<p><img src="@source/guide/node/assets/readyState.png" alt=""></p>
<h3 id="xhr发起带参数的get请求" tabindex="-1"><a class="header-anchor" href="#xhr发起带参数的get请求" aria-hidden="true">#</a> xhr发起带参数的GET请求</h3>
<p>在调用 <code v-pre>xhr.open()</code> 设置请求<code v-pre>URL</code>的时候，<strong>携带get参数</strong>即可</p>
<p><img src="@source/guide/node/assets/xhrGET.png" alt=""></p>
<blockquote>
<p><strong>补充说明</strong>：</p>
<p>这种在 <code v-pre>URL</code> 地址后面拼接的参数，叫做<strong>查询字符串</strong>。</p>
</blockquote>
<h3 id="查询字符串" tabindex="-1"><a class="header-anchor" href="#查询字符串" aria-hidden="true">#</a> 查询字符串</h3>
<p>查询字符串（URL 参数）是指在 URL 的末尾加上用于向服务器发送信息的字符串（变量）</p>
<p>将英文的 <strong>?</strong> 放在<code v-pre>URL</code> 的末尾，然后再加上 <strong>参数＝值</strong> ，想加上多个参数的话，使用 <strong>&amp;</strong> 符号进行分隔。以这个形式，可以将想要发送给服务器的数据添加到 <code v-pre>URL</code> 中。</p>
<p><img src="@source/guide/node/assets/querystring.png" alt=""></p>
<h3 id="get请求携带参数的本质" tabindex="-1"><a class="header-anchor" href="#get请求携带参数的本质" aria-hidden="true">#</a> GET请求携带参数的本质</h3>
<p>无论使用 <code v-pre>$.ajax()</code>，还是使用 <code v-pre>$.get()</code>，又或者直接使用 xhr 对象发起 GET 请求，当需要携带参数的时候，本质上，都是直接将参数以查询字符串的形式，追加到 URL 地址的后面，发送到服务器的。</p>
<p><img src="@source/guide/node/assets/get-request.png" alt=""></p>
<h3 id="url编码" tabindex="-1"><a class="header-anchor" href="#url编码" aria-hidden="true">#</a> URL编码</h3>
<p>URL编码是一种浏览器用来打包表单输入的格式，通俗来说：而格式中，只允许出现英文相关的字母、标点符号、数字</p>
<p>如果 URL 中需要包含中文这样的字符，则必须对中文字符进行<strong>编码</strong>（转义）。</p>
<p>URL编码的原则:</p>
<ul>
<li>使用安全的字符（没有特殊用途或者特殊意义的可打印字符）去表示那些不安全的字符。</li>
<li>URL编码原则的<strong>通俗</strong>理解：使用英文字符去表示非英文字符</li>
</ul>
<h3 id="url编码与解码" tabindex="-1"><a class="header-anchor" href="#url编码与解码" aria-hidden="true">#</a> URL编码与解码</h3>
<h3 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h3>
<p>调用浏览器提供的 <code v-pre>encodeURI()</code> 编码的函数</p>
<h3 id="解码" tabindex="-1"><a class="header-anchor" href="#解码" aria-hidden="true">#</a> 解码</h3>
<p>调用浏览器提供的<code v-pre>decodeURI()</code> 解码的函数</p>
<p>如果获取的数据是通过了 <code v-pre>encodeURI</code> 进行编码的，就需要通过 <code v-pre>decodeURI</code> 进行解码</p>
<blockquote>
<p><strong>由于浏览器会自动对 URL 地址进行编码操作，因此，大多数情况下，程序员不需要关心 URL 地址的编码</strong></p>
<p>更多关于 URL 编码的知识，请参考如下博客：</p>
<p>https://blog.csdn.net/Lxd_0111/article/details/78028889</p>
</blockquote>
<h3 id="数据交换格式" tabindex="-1"><a class="header-anchor" href="#数据交换格式" aria-hidden="true">#</a> 数据交换格式</h3>
<p><strong>服务器端</strong>与<strong>客户端</strong>之间进行<strong>数据传输与交换的格式</strong></p>
<p>前端领域，经常提及的两种数据交换格式分别是 XML 和 JSON。其中 XML 用的非常少，所以，我们重点要学习的数据交换格式就是 JSON</p>
<h3 id="xml" tabindex="-1"><a class="header-anchor" href="#xml" aria-hidden="true">#</a> XML</h3>
<p><code v-pre>XML</code> 的英文全称是 <strong>EXtensible Markup Language</strong>，即<strong>可扩展标记语言</strong>。因此，XML 和 <code v-pre>HTML</code> 类似，也是一种标记语言。</p>
<p>XML 被设计用来<strong>传输和存储数据</strong>，是数据的载体</p>
<blockquote>
<p>缺点:</p>
<ul>
<li>XML 格式臃肿，和数据无关的代码多，体积大，传输效率低</li>
<li>在 Javascript 中解析 XML 比较麻烦</li>
</ul>
</blockquote>
<h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h2>
<p>JSON 的英文全称是 <strong>JavaScript Object Notation</strong>，即“<strong>JavaScript 对象表示法</strong>”。</p>
<p>简单来讲，JSON 就是 Javascript 对象和数组的字符串表示法，它使用文本表示一个 JS 对象或数组的信息，因此，<strong>JSON 的本质是字符串</strong>。</p>
<h3 id="json的的两种结构" tabindex="-1"><a class="header-anchor" href="#json的的两种结构" aria-hidden="true">#</a> JSON的的两种结构</h3>
<h3 id="对象结构" tabindex="-1"><a class="header-anchor" href="#对象结构" aria-hidden="true">#</a> 对象结构</h3>
<ol>
<li>对象结构在 JSON 中表示为 <code v-pre>{ }</code> 括起来的内容。数据结构为 <code v-pre>{ key: value, key: value, … }</code> 的键值对结构</li>
<li><code v-pre>key</code> 必须是使用英文的<code v-pre>双引号</code>包裹的字符串，value 的数据类型可以是<strong>数字、字符串、布尔值、null、数组、对象</strong>6种类型。</li>
</ol>
<blockquote>
<p>字符串也必须是双引号</p>
</blockquote>
<h3 id="数组结构" tabindex="-1"><a class="header-anchor" href="#数组结构" aria-hidden="true">#</a> 数组结构</h3>
<ol>
<li>数组结构在 JSON 中表示为 <code v-pre>[ ]</code> 括起来的内容。数据结构为 <code v-pre>[ &quot;java&quot;, &quot;javascript&quot;, 30, true … ]</code> 。</li>
<li>数组中数据的类型可以是<strong>数字、字符串、布尔值、null、数组、对象</strong>6种类型。</li>
</ol>
<h3 id="json语法注意事项" tabindex="-1"><a class="header-anchor" href="#json语法注意事项" aria-hidden="true">#</a> JSON语法注意事项</h3>
<ol>
<li>属性名必须使用双引号包裹</li>
<li>字符串类型的值必须使用双引号包裹</li>
<li>JSON 中不允许使用单引号表示字符串</li>
<li>JSON 中不能写注释</li>
<li>JSON 的最外层必须是对象或数组格式</li>
<li>不能使用 <code v-pre>undefined</code> 或函数作为 JSON 的值</li>
</ol>
<h3 id="json和js对象的关系" tabindex="-1"><a class="header-anchor" href="#json和js对象的关系" aria-hidden="true">#</a> JSON和JS对象的关系</h3>
<ol>
<li>JSON 是 JS 对象的字符串表示法</li>
<li>它使用文本表示一个 JS 对象的信息，本质是一个字符串</li>
</ol>
<h3 id="json和js对象的互转" tabindex="-1"><a class="header-anchor" href="#json和js对象的互转" aria-hidden="true">#</a> JSON和JS对象的互转</h3>
<p>要实现从 JSON 字符串转换为 JS 对象，使用 <code v-pre>JSON.parse()</code> 方法：</p>
<p>要实现从 JS 对象转换为 JSON 字符串，使用 <code v-pre>JSON.stringify()</code> 方法：</p>
<h3 id="应用场景-xhr请求" tabindex="-1"><a class="header-anchor" href="#应用场景-xhr请求" aria-hidden="true">#</a> 应用场景 -xhr请求</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'http://www.liulongbin.top:3006/api/getbooks'</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="序列化和反序列化" tabindex="-1"><a class="header-anchor" href="#序列化和反序列化" aria-hidden="true">#</a> 序列化和反序列化</h3>
<ol>
<li>把<strong>数据对象</strong> <strong>转换为</strong> <strong>字符串</strong>的过程，叫做<strong>序列化</strong>，例如：调用 <code v-pre>JSON.stringify()</code> 函数的操作，叫做 <code v-pre>JSON</code> 序列化。</li>
<li>把<strong>字符串</strong> <strong>转换为</strong> <strong>数据对象</strong>的过程，叫做<strong>反序列化</strong>，例如：调用 <code v-pre>JSON.parse()</code> 函数的操作，叫做 <code v-pre>JSON</code> 反序列化。</li>
</ol>
<h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h2>
<ol>
<li>Axios 是专注于<strong>网络数据请求</strong>的库</li>
<li>相比于原生的 XMLHttpRequest 对象，axios <strong>简单易用</strong>。相比于 jQuery，axios 更加<strong>轻量化</strong>，只专注于网络数据请求</li>
</ol>
</div></template>
