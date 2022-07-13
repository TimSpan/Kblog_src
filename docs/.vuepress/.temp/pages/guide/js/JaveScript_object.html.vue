<template><div><h1 id="javescript对象" tabindex="-1"><a class="header-anchor" href="#javescript对象" aria-hidden="true">#</a> JaveScript对象</h1>
<blockquote>
<p>可以理解为一种无序的数据集合、数组是有序的而数据集合</p>
<p>复杂数据类型都是object.  在 JavaScript中,所有的事物都是对象 .</p>
<p>String ,Number ,Array Function 都是对象</p>
</blockquote>
<h2 id="重新认识对象" tabindex="-1"><a class="header-anchor" href="#重新认识对象" aria-hidden="true">#</a> 重新认识对象</h2>
<p>JavaScript 中的对象，Object，可以简单理解成“名称 - 值”对（而不是键值对：现在，ES 2015 的映射表（Map），比对象更接近键值对），不难联想 JavaScript 中的对象与下面这些概念类似：</p>
<ul>
<li>Python 中的字典（Dictionary）</li>
<li>Perl 和 Ruby 中的散列/哈希（Hash）</li>
<li>C/C++ 中的散列表（Hash table）</li>
<li>Java 中的散列映射表（HashMap）</li>
<li>PHP 中的关联数组（Associative array）</li>
</ul>
<p>这样的数据结构设计合理，能应付各类复杂需求，所以被各类编程语言广泛采用。正因为 JavaScript 中的一切（除了核心类型，core object）都是对象，所以 JavaScript 程序必然与大量的散列表查找操作有着千丝万缕的联系，而散列表擅长的正是高速查找。</p>
<p>“<strong>名称</strong>”部分是一个 JavaScript 字符串，“<strong>值</strong>”部分可以是任何 JavaScript 的数据类型——包括对象。这使用户可以根据具体需求，创建出相当复杂的数据结构。</p>
<h2 id="对象中的方法" tabindex="-1"><a class="header-anchor" href="#对象中的方法" aria-hidden="true">#</a> 对象中的方法</h2>
<blockquote>
<ol>
<li>方法是依附在对象中的函数</li>
<li>调用对象中函数，称之为方法调用(<code v-pre>也可以添加形参和实参</code>)</li>
</ol>
</blockquote>
<h2 id="遍历对象for-in" tabindex="-1"><a class="header-anchor" href="#遍历对象for-in" aria-hidden="true">#</a> 遍历对象for   in</h2>
<ul>
<li>对象没有像数组一样的length属性,所以无法确定长度</li>
<li>对象里面是无序的键值对, 没有规律. 不像数组里面有规律的下标</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code> <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">'Kevin'</span><span class="token punctuation">,</span>
   <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
   <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'男'</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出所有属性名</span>
   document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">// 输出所有属性值</span>
   document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>uname<span class="token punctuation">)</span>
   document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">'uname'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">//'uname'  === k</span>
 <span class="token punctuation">}</span>
</code></pre></div><h2 id="对象声明语法" tabindex="-1"><a class="header-anchor" href="#对象声明语法" aria-hidden="true">#</a> 对象声明语法</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> 对象名 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> 对象名 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>如同JavaScript中的很多东西一样，创建一个对象通常先定义初始化变量、使用花括号<code v-pre>{ }</code></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Bob'</span><span class="token punctuation">,</span> <span class="token string">'Smith'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span> <span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span> <span class="token operator">:</span> <span class="token string">'male'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">interests</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'music'</span><span class="token punctuation">,</span> <span class="token string">'skiing'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">bio</span> <span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">' is '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token string">' years old. He likes '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>interests<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">' and '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>interests<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">greeting</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Hi! I\'m '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// . 点表示法、访问对象内部的属性或方法</span>
person<span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
person<span class="token punctuation">.</span>age
person<span class="token punctuation">.</span>interests<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
person<span class="token punctuation">.</span><span class="token function">bio</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
person<span class="token punctuation">.</span><span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 提示对话框显示:</span>
<span class="token comment">// Hi! I'm Bob.</span>
<span class="token comment">// Bob Smith is 32 years old. He likes music and skiing.</span>
</code></pre></div><blockquote>
<p>一个对象<code v-pre>person</code>有很多成员组成、比如<code v-pre>name</code>、<code v-pre>age</code> 、<code v-pre>gender</code>、<code v-pre>interests</code></p>
<p>每一个成员用逗号分隔开、并且名字和值之间由冒号 <code v-pre>:</code> 分隔</p>
</blockquote>
<p>对象成员的值可以是任意的，在我们的person对象里有字符串(string)，数字(number)，两个数组(array)，两个函数(function)。前4个成员是资料项目，被称为对象的属性(property)，</p>
<blockquote>
<p>后两个成员是函数，允许对象对资料做一些操作，被称为对象的方法(method)</p>
</blockquote>
<h2 id="子命名空间" tabindex="-1"><a class="header-anchor" href="#子命名空间" aria-hidden="true">#</a> 子命名空间</h2>
<p>可以用一个对象来做另一个对象成员的值。例如将name成员</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Bob'</span><span class="token punctuation">,</span> <span class="token string">'Smith'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// 将上述代码改成如下:</span>
<span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">first</span> <span class="token operator">:</span> <span class="token string">'Bob'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">last</span> <span class="token operator">:</span> <span class="token string">'Smith'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>你只需要链式的再使用一次点表示法，像这样：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>person<span class="token punctuation">.</span>name<span class="token punctuation">.</span>first
person<span class="token punctuation">.</span>name<span class="token punctuation">.</span>last
</code></pre></div><blockquote>
<p>注意！你需要改变你之前的代码</p>
</blockquote>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment">// 将上述代码改成如下:</span>
name<span class="token punctuation">.</span>first
name<span class="token punctuation">.</span>last
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">'Bob'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">last</span><span class="token operator">:</span> <span class="token string">'Smith'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
            <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'male'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">interests</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'music'</span><span class="token punctuation">,</span> <span class="token string">'skiing'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token function-variable function">bio</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">' is '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token string">' years old. He likes '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>interests<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">' and '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>interests<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">greeting</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Hi! I\'m '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span>name<span class="token punctuation">.</span>first
        person<span class="token punctuation">.</span>name<span class="token punctuation">.</span>last
        person<span class="token punctuation">.</span>age
        person<span class="token punctuation">.</span>interests<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        person<span class="token punctuation">.</span><span class="token function">bio</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        person<span class="token punctuation">.</span><span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="括号表示法" tabindex="-1"><a class="header-anchor" href="#括号表示法" aria-hidden="true">#</a> 括号表示法</h2>
<p>另外一种访问属性的方式是使用括号表示法(bracket notation)</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>person<span class="token punctuation">.</span>age
person<span class="token punctuation">.</span>name<span class="token punctuation">.</span>first
<span class="token comment">//  将上述代码改成如下:</span>
person<span class="token punctuation">[</span><span class="token string">'age'</span><span class="token punctuation">]</span>
person<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'first'</span><span class="token punctuation">]</span>
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 设置对象成员的值</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">45</span>
person<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'last'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'Cratchit'</span>
</code></pre></div><p>设置成员并不意味着你只能更新已经存在的属性的值，你完全可以创建新的成员，尝试以下代码：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>person<span class="token punctuation">[</span><span class="token string">'eyes'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'hazel'</span>
person<span class="token punctuation">.</span><span class="token function-variable function">farewell</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Bye everybody!"</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token comment">// 括号表示法一个有用的地方是它不仅可以动态的去设置对象成员的值，还可以动态的去设置成员的名字。</span>
</code></pre></div><p>括号表示法一个有用的地方是它不仅可以动态的去设置<code v-pre>对象成员的值</code>，还可以动态的去设置<code v-pre>对象成员的名字</code>。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// let myDataName = nameInput.value</span>
<span class="token comment">// let myDataValue = nameValue.value</span>
<span class="token keyword">let</span> myDataName <span class="token operator">=</span> <span class="token string">'height'</span>
<span class="token keyword">let</span> myDataValue <span class="token operator">=</span> <span class="token string">'1.75m'</span>
person<span class="token punctuation">[</span>myDataName<span class="token punctuation">]</span> <span class="token operator">=</span> myDataValue
<span class="token function">alert</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
</code></pre></div><h2 id="this的含义" tabindex="-1"><a class="header-anchor" href="#this的含义" aria-hidden="true">#</a> This的含义</h2>
<p>你也许想知道&quot;this&quot;是什么，关键字&quot;this&quot;指向了当前代码运行时的对象( 原文：the current object the code is being written inside )——这里即指person对象，为什么不直接写person呢？当你学到下一篇<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript" target="_blank" rel="noopener noreferrer">Object-oriented JavaScript for beginners<ExternalLinkIcon/></a>文章时，我们开始使用构造器(constructor)时，&quot;this&quot;是非常有用的——它保证了当代码的上下文(context)改变时变量的值的正确性（比如：不同的person对象拥有不同的name这个属性，很明显greeting这个方法需要使用的是它们自己的name）。</p>
</div></template>
