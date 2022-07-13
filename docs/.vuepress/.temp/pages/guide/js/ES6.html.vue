<template><div><h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1>
<h2 id="数组常用方法" tabindex="-1"><a class="header-anchor" href="#数组常用方法" aria-hidden="true">#</a> 数组常用方法</h2>
<h3 id="数组置空" tabindex="-1"><a class="header-anchor" href="#数组置空" aria-hidden="true">#</a> 数组置空</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//不会真正的清空数据，只是将一个空数组赋值到arr,并不会清空内存数据,数据量多时会导致内存溢出</span>
arr<span class="token punctuation">.</span>length<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//彻底清空arr数据的内容，之前依赖于arr的数据也会清空</span>
</code></pre></div><h3 id="数组追加" tabindex="-1"><a class="header-anchor" href="#数组追加" aria-hidden="true">#</a> 数组追加</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">'头部追加'</span><span class="token punctuation">)</span>；
arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">'头部追加'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//数据合并方法，性能更好</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'尾部追加'</span><span class="token punctuation">)</span>
arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">'尾部追加'</span><span class="token comment">//运行速度比push更快</span>
</code></pre></div><h3 id="数组删除" tabindex="-1"><a class="header-anchor" href="#数组删除" aria-hidden="true">#</a> 数组删除</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//删除最后一个元素</span>
arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//删除第一个元素</span>
arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>起始位置，删除个数<span class="token punctuation">)</span>
</code></pre></div><h3 id="数组去重" tabindex="-1"><a class="header-anchor" href="#数组去重" aria-hidden="true">#</a> 数组去重</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//new Set() 可以将目标对象里面的值给取出，它取出的值是唯一的，返回的是一个对象，Array.from()来将这个对象转换为数组</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>往<span class="token keyword">set</span>构造函数中添加数据
<span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token comment">//判断某一个值是否是set数据结构中的成员，该方法只是用于Set构造函数中</span>
<span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>清除<span class="token keyword">set</span>构造函数中所有数据
<span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>删除指定数据
</code></pre></div><h3 id="数组排序" tabindex="-1"><a class="header-anchor" href="#数组排序" aria-hidden="true">#</a> 数组排序</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//若sort方法中不写函数，则按照字母大小排序，可以利用函数来控制升序或者降序 a-b:升序，b-a:降序，原理等同于冒泡排序</span>
</code></pre></div><h3 id="数组复制" tabindex="-1"><a class="header-anchor" href="#数组复制" aria-hidden="true">#</a> 数组复制</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> num<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span><span class="token comment">//将arr数组复制给num</span>
<span class="token keyword">let</span> num<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">...</span>arr<span class="token punctuation">}</span><span class="token comment">//也可以将数组转为对象 会把数组的下标当作对象的key值</span>
</code></pre></div><h3 id="数组合并" tabindex="-1"><a class="header-anchor" href="#数组合并" aria-hidden="true">#</a> 数组合并</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr1<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2<span class="token operator">=</span>arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//12342345</span>

若不需要重复数据的话 可利用 <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>，利用Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">)</span>转为数组
 Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">,</span> <span class="token operator">...</span>arr1<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//...复制数组</span>
</code></pre></div><h3 id="数组运算" tabindex="-1"><a class="header-anchor" href="#数组运算" aria-hidden="true">#</a> 数组运算</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">*</span> b<span class="token punctuation">)</span>
arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span><span class="token punctuation">[</span>initialValue<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token literal-property property">callback</span><span class="token operator">:</span>函数中包含四个参数
<span class="token operator">-</span> previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
<span class="token operator">-</span> currentValue （数组中当前被处理的元素）
<span class="token operator">-</span> index （当前元素在数组中的索引<span class="token punctuation">)</span>
<span class="token operator">-</span> array （调用的数组）
initialValue （作为第一次调用 callback 的第一个参数。）
</code></pre></div><h3 id="数组反转" tabindex="-1"><a class="header-anchor" href="#数组反转" aria-hidden="true">#</a> 数组反转</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="数组find" tabindex="-1"><a class="header-anchor" href="#数组find" aria-hidden="true">#</a> 数组find</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=></span>item<span class="token punctuation">.</span>id<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span>：<span class="token comment">//查找数组中第一个满足条件的值，查不到返回undefined</span>
</code></pre></div><h3 id="数组findindex" tabindex="-1"><a class="header-anchor" href="#数组findindex" aria-hidden="true">#</a> 数组findIndex()</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=></span>item<span class="token punctuation">.</span>id<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span>：<span class="token comment">//用于找出第一个符合条件的数组成员的位置，如果没找到返回-1</span>
</code></pre></div><h3 id="数组includes" tabindex="-1"><a class="header-anchor" href="#数组includes" aria-hidden="true">#</a> 数组includes()</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//表示某个数组是否包含给定的值，返回布尔值</span>
arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>给定值<span class="token punctuation">)</span>
</code></pre></div><h3 id="数组解构" tabindex="-1"><a class="header-anchor" href="#数组解构" aria-hidden="true">#</a> 数组解构</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//按照对应位置，对变量赋值，对象也可以实现解构</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token comment">//a=1,b=2,c=3</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span><span class="token operator">...</span>b<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">//a=1,b=[2,3]</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token comment">//a=1,b=undefined</span>
</code></pre></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2>
<p><a href="https://blog.csdn.net/xiaoliao96530/article/details/123580403">辅助理解</a></p>
<pre><code>let:不能重复声明,不会成为window属性的变量，不存在变量提升(必须先声明，在使用)，不能在块作用域之外调用

const：声明必须赋值,不能重复声明,不会成为window属性的变量，不存在变量提升(必须先声明，在使用)，不能在块作用域之外调用,一旦声明不能在修改值；
如果声明基本数据类型，声明后是不能修改的，但是如果声明引用数据类型，则可以修改其属性的值 例:
	const object = {
	    name: 'yanbin',
	    age: 18
	}
		console.log(object.name);
		object.age = 22;
		console.log(object.age);

暂时性死区:是指在一个块级作用域中，存在一个死区，开始于函数的开头，结束于变量声明的那一行，在这个死区内，无法访问let或const声明的变量。
</code></pre>
<h3 id="新增数据类型" tabindex="-1"><a class="header-anchor" href="#新增数据类型" aria-hidden="true">#</a> 新增数据类型</h3>
<pre><code>Symbol一种数据类型，它的实例是唯一且不可改变的。
</code></pre>
<h2 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h2>
<pre><code>需要利用反引号包含内容``
console.log(`年龄${age}`)
</code></pre>
<h2 id="隐式转换" tabindex="-1"><a class="header-anchor" href="#隐式转换" aria-hidden="true">#</a> 隐式转换</h2>
<p>consloe.log(+&quot;123&quot;);//输出的是数字型number</p>
<h2 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h2>
<pre><code>Objct.freeze(对象名):冻结一个对象.再也不能被修改；不能向这个对象添加、删除、修改
</code></pre>
<h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2>
<h3 id="创建类-class和生成实例" tabindex="-1"><a class="header-anchor" href="#创建类-class和生成实例" aria-hidden="true">#</a> 创建类 class和生成实例</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Star</span><span class="token punctuation">{</span> <span class="token comment">//创建对象，类名首字母大写</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">uname</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//构造函数，可用于接收传递的参数</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>uname<span class="token operator">=</span>uname<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">sing</span><span class="token punctuation">(</span><span class="token parameter">song</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//类中的方法不需要function</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">+</span>song<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//constructor()方法是类的构造函数(默认方法)，用于传递参数，返回实例对象，通过new命令生成对象实例时，自动调用该方法。如果没有显示定义，类内部会自动给我们创建一个constructor();</span>

<span class="token keyword">var</span> user<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token string">'刘德华'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用对象</span>
	user<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//利用属性.方法名</span>
</code></pre></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">关键字</span><span class="token operator">:</span><span class="token keyword">extends</span>
<span class="token class-name">class</span> Father<span class="token punctuation">{</span><span class="token comment">//父类</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token operator">=</span>x<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token operator">=</span>y<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>	
	
	<span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span><span class="token punctuation">{</span><span class="token comment">//子类继承父类</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token operator">=</span>x<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token operator">=</span>y<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> son<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	son<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//报错:不能够利用子类的参数加入父类计算</span>

若需要利用子类的参数加入父类计算则需要用到 <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>调用父类中的构造函数

<span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span><span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">super</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用父类中的构造函数</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

特性：继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，在看父类
<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>可以在子类中调用父类中的构造函数 和方法，必须在子类<span class="token keyword">this</span>之前调用；
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>方法
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>默认调用父类构造函数
</code></pre></div><h3 id="类里面this指向" tabindex="-1"><a class="header-anchor" href="#类里面this指向" aria-hidden="true">#</a> 类里面this指向</h3>
<pre><code>constructor里面的this指向实例对象，方法里面的this指向这个方法调用者
</code></pre>
<h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3>
<pre><code>insertAdjacentHTML('插入位置','插入内容'):
	beforeBegin:插入到标签开始前
	afterBegin:插入到标签开始标记之后
	beforeEnd:插入到标签结束标记前
	afterEnd:插入到标签结束标记后

insertAdjacentText:只能插入纯文本

这两种方法必须在整个文档装载完成之后才能使用，否则将出错，这两个方法比较灵活可以选择位置插入
e.stopPropagation:阻止冒泡事件

input.select():可以选中全部文字
</code></pre>
<h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h3>
<p>缺点：内存浪费的问题，每创建一个对象都会创建一个新的内存进行存储</p>
<pre><code>1.实例成员就是构造函数内部通过this添加的成员，只能通过实例化的对象访问
2.静态成员在构造函数本身上添加的成员，是不能够通过实例化对象访问
</code></pre>
<h4 id="构造函数原型-prototype" tabindex="-1"><a class="header-anchor" href="#构造函数原型-prototype" aria-hidden="true">#</a> 构造函数原型 prototype</h4>
<pre><code>每一个构造函数都有一个prototype属性，指向另一个对象
prototype就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有
可以把不变的方法，定义在prototype对象上，这样所有的对象的实例都可以共享这些方法
构造函数名.prototype.方法名=function(){}
可利用对象的形式添加多个方法，但是需要手动添加constructor(构造函数)属性 指回原来的构造函数
构造函数名.prototype={
	constructor:构造函数名，
	方法名:function(){},
	方法名:function(){}
}
</code></pre>
<h3 id="对象原型-proto" tabindex="-1"><a class="header-anchor" href="#对象原型-proto" aria-hidden="true">#</a> 对象原型 <strong>proto</strong></h3>
<pre><code>对象都会有一个属性__proto__指向构造函数的prototype原型对象，所以对象可以直接调用prototype定义的方法

prototype（构造函数原型）和 __proto__（对象原型中）都存在constructor属性，这个属性的作用是指向原构造函数，若使用构造函数原型利用对象的形式添加多个方法，则需要手动添加constructor属性指向原构造函数，才能够利用对象调用到方法
</code></pre>
<h4 id="instanceof关键字" tabindex="-1"><a class="header-anchor" href="#instanceof关键字" aria-hidden="true">#</a> instanceof关键字</h4>
<pre><code>用来判断右边构造函数的原型对象,是否在左边实例对象的原型链上
</code></pre>
<h3 id="原型对象this指向" tabindex="-1"><a class="header-anchor" href="#原型对象this指向" aria-hidden="true">#</a> 原型对象this指向</h3>
<pre><code>1.在构造函数中，this指向的是对象实例
2.原型对象函数里面的this，指向的也是实例对象
	一般情况下this指向是调用者
</code></pre>
<h3 id="原型对象扩展内置对象" tabindex="-1"><a class="header-anchor" href="#原型对象扩展内置对象" aria-hidden="true">#</a> 原型对象扩展内置对象</h3>
<pre><code>可利用原型对象给原本数组没有的方法添加内置方法
Array.prototype.sum=function(){
	let sum=0;
	for(let i=0;i&lt;this.length;i++){
		sum+=this[i];		
	}
	return sum;
}

let arr=[1,2,3];
console.log(arr.sum());
如果要添加多个内置方法 不能够使用对象的形式添加，不然会把之前所包含的内置方法给覆盖
</code></pre>
<h3 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> call()</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>特点：可以调用函数<span class="token punctuation">,</span>可以改变函数<span class="token keyword">this</span>指向 
<span class="token function">方法名</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">方法名</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span>指向对象<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">Father</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span>age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Son</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">Father</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> user<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token string">'张三'</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//父类中的this是指向Son的</span>

若子类需要使用父类中原型对象的方法，则需要将父类的实例赋值给子类的原型对象<span class="token punctuation">,</span><span class="token class-name">这时子类的原型对象是指向父类的，所以需要将子类的原型对象重新指向回子类Son</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor<span class="token operator">=</span>Son<span class="token punctuation">;</span>
</code></pre></div><h3 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply()</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">fun</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>数组<span class="token punctuation">)</span>
主要作用：Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>Math<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>：调用max方法 找出数组中最大值最小值
</code></pre></div><h3 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind()</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>不会调用原来的函数 可以改变原来函数内部的<span class="token keyword">this</span>指向
返回的是原函数改变<span class="token keyword">this</span>之后产生的新函数
<span class="token keyword">let</span> f<span class="token operator">=</span><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span>指向<span class="token punctuation">,</span>实参<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> btn<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    btn<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span>
        <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//将btn的this指向到定时器，并且不会立即执行</span>
        <span class="token number">2000</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="call-、apply-、bind-总结" tabindex="-1"><a class="header-anchor" href="#call-、apply-、bind-总结" aria-hidden="true">#</a> call()、apply()、bind() 总结</h3>
<h4 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h4>
<pre><code>1.call和apply会调用函数，并且改变函数内部this指向
2.call和apply传递的参数不一样，call传递参数aru1,aru2..形式，apply必须数组形式[ary]
3.bind不会调用函数，可以改变函数内部this指向
</code></pre>
<h4 id="主要引用场景" tabindex="-1"><a class="header-anchor" href="#主要引用场景" aria-hidden="true">#</a> 主要引用场景</h4>
<pre><code>1.call经常做继承
2.apply经常跟数组有关系，比如借助数学对象实现数组中最大值，最小值
3.bind 不调用函数，但是还是想改变this指向，比如改变定时器内部的this指向
</code></pre>
<h4 id="foreach循环" tabindex="-1"><a class="header-anchor" href="#foreach循环" aria-hidden="true">#</a> forEach循环</h4>
<pre><code>数组.forEach(function(value,inde,array){
//value:数组值，index：下标,array:数组本身
})

return不会终止循环
</code></pre>
<h4 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter()</h4>
<pre><code>数组.filter(function(currentValue,inde,array))
1.创建一个新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素，主要用于筛选数组
2.返回的是一个新数组
3.currenValue:数组当前项的值
4.index:数组当前项的索引
5.arr:数组对象本身

var newArray=arr.filter(function(value,index,array){
	retuen value&gt;=20
	//筛选出数组中大于20的数添加到newArray新数组中
})
return不会终止循环
</code></pre>
<h4 id="some" tabindex="-1"><a class="header-anchor" href="#some" aria-hidden="true">#</a> some()</h4>
<pre><code>数组.some(function(currentValue,index,array)){
	return value&gt;=20
}
主要用于检测数组中的元素是否满足指定条件
如果找到第一个满足条件元素，则终止循环，不在继续查找
返回值类型为bool,条件满足为true,不满足为false
</code></pre>
<p>####every（）  ####
只要有一个不满足条件就返回false</p>
<h3 id="includes属性" tabindex="-1"><a class="header-anchor" href="#includes属性" aria-hidden="true">#</a> includes属性</h3>
<pre><code>包含，可用于模糊查询,只适用于字符串
</code></pre>
<h4 id="立即执行函数" tabindex="-1"><a class="header-anchor" href="#立即执行函数" aria-hidden="true">#</a> 立即执行函数</h4>
<pre><code>(function(){

})(起到调用函数的作用);

(function(){}())
</code></pre>
<h4 id="object对象方法" tabindex="-1"><a class="header-anchor" href="#object对象方法" aria-hidden="true">#</a> Object对象方法</h4>
<pre><code>Object.keys(obj);//获取对象自身所有的属性，返回由数组名组成的数组

Object.defineProperty(目标对象，需要定义或修改的属性名字，目标属性所拥有的特性)：定义对象中新属性或修改原有的属性
Object.defineProperty(obj,'属性名',{
	value:设置属性的值，默认undefined
	writable:设置值是否可以重写，true|false, 默认为false
	enumerable:目标属性是否可以被枚举，true|false 默认为false,不允许发生遍历
	configurable:目标属性是否可以被删除或者是否可以再次修改特性 true|false 默认为false
})
Object.values(obj)//获取对象自身的所有属性值，返回数组
Object.assign(需拷贝对象,目标对象)：拷贝对象
</code></pre>
<h4 id="值传递和引用传递" tabindex="-1"><a class="header-anchor" href="#值传递和引用传递" aria-hidden="true">#</a> 值传递和引用传递</h4>
<h4 id="值传递" tabindex="-1"><a class="header-anchor" href="#值传递" aria-hidden="true">#</a> 值传递</h4>
<pre><code>按值传递意味着实际参数值的副本在内存中进行，
即完成了新的内存分配，并且所有更改都在该新值中进行（即复制的值）。
原始值和复制值彼此独立，因为它们在内存中的空间不同，
即在更改函数内部的值时，函数外部的变量不受影响。
存放于栈
</code></pre>
<h4 id="引用传递" tabindex="-1"><a class="header-anchor" href="#引用传递" aria-hidden="true">#</a> 引用传递</h4>
<pre><code>引用传递不会在内存中创建新空间，而是传递实际参数的引用/地址，
这意味着函数可以访问变量的原始值。
因此，如果我们改变函数内部变量的值，那么原始值也会改变。
地址存放于栈，对象存放于堆
</code></pre>
<h4 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h4>
<pre><code>'use strict'
1.开启严格模式之后，变量必须先声明在使用
2.不允许删除已经声明好的变量
3.全局作用域中函数中的this是undefined
4.构造函数不加new调用，this会报错
5.函数里面的参数不允许重名
6.不允许在非函数的代码块内声明函数
</code></pre>
<h4 id="高阶函数" tabindex="-1"><a class="header-anchor" href="#高阶函数" aria-hidden="true">#</a> 高阶函数</h4>
<pre><code>高阶函数是对其他函数进行操作的函数，它接收函数作为参数或将函数作为返回值输出

 function fn(a, b, car) {
    console.log(a + b);
    car &amp;&amp; car();//调用函数
  }
  fn(2, 3, function () {
    console.log(&quot;我是高阶函数&quot;);
  });
</code></pre>
<h4 id="javascript为何是一等公民" tabindex="-1"><a class="header-anchor" href="#javascript为何是一等公民" aria-hidden="true">#</a> JavaScript为何是一等公民</h4>
<pre><code>一等公民可以作为函数参数，可以作为函数返回值，也可以赋值给变量。
</code></pre>
<h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2>
<h3 id="什么是闭包" tabindex="-1"><a class="header-anchor" href="#什么是闭包" aria-hidden="true">#</a> 什么是闭包</h3>
<pre><code>指有权访问另一个函数作用域中变量的函数
主要作用:延申了变量的作用范围
例:
 &lt;ul&gt;
  &lt;li&gt;足球&lt;/li&gt;
  &lt;li&gt;蓝球&lt;/li&gt;
  &lt;li&gt;羽毛球&lt;/li&gt;
  &lt;li&gt;乒乓球&lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
  const lis = document.querySelector(&quot;ul&quot;).querySelectorAll(&quot;li&quot;);
  for (var i = 0; i &lt;lis.length; i++) {
    lis[i].addEventListener(&quot;click&quot;, function () {
      console.log(i);
    });
  }
 &lt;/script&gt;
点击任意一个li打印的i都为4，因为通过var定义的变量，在for循环中的i是全局的，变量提升、次循环过后，i=4，因为点击每个都相当于点击最后一个。
可以利用立即执行函数(小闭包)解决当前问题
 for (var i = 0; i &lt;lis.length; i++) {
	(function(i){
		lis[i].addEventListener(&quot;click&quot;, function () {
      	console.log(i);
  		 });
	})(i)
    
  }
闭包可能会引起内存泄露的问题
</code></pre>
<h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2>
<pre><code>什么是递归？
	1.如果一个函数在内部可以调用其本身，那么这个函数就是递归函数
	2.在使用递归很容易发生&quot;栈溢出&quot;,所以必须要加退出条件return

递归调用函数时通过console.log()打印有值，但是在获取的时候是undefined，原因是在递归函数内部没有对递归函数进行return，否则外层函数无法接收到返回值
	
递归算法时间复杂度的计算公式：
递归算法的时间复杂度 = 递归的次数 * 每次递归的时间复杂度。
空间复杂度的计算公式：
递归算法的空间复杂度 = 递归的深度 * 每次递归的空间复杂度。
</code></pre>
<p>##正则表达式##</p>
<h3 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h3>
<pre><code>let regexp=new RegExp(/表达式/);
let regexp=/表达式/;
</code></pre>
<h3 id="检测" tabindex="-1"><a class="header-anchor" href="#检测" aria-hidden="true">#</a> 检测</h3>
<pre><code>regexobj.test(检测文本),regexobj:正则表达式变量
</code></pre>
<h3 id="符号" tabindex="-1"><a class="header-anchor" href="#符号" aria-hidden="true">#</a> 符号</h3>
<pre><code>^:表示匹配行首的文字(以谁开始)
$:表示匹配行尾的文本(以睡结束)	
/表达式/：只要包含表达式的都为true
[ ]:表示有一系列字符可供选择，只要匹配其中一个就可以了
/^[abc]$/：三选一只有abc这三个字母才返回true
-:范围符（/^[a-z]$/）
[^a-z]:[]当中的^表示取反
*：量词符
+：最少出现一次
？：允许出现一次或者0次
{3,6}：允许出现 大于等于3 并且 小于等于6，注意不要有空格
():表示优先级
|：或者，可以写多种情况
</code></pre>
<h3 id="预定义类" tabindex="-1"><a class="header-anchor" href="#预定义类" aria-hidden="true">#</a> 预定义类</h3>
<pre><code>\d 匹配0-9之间的任意数组，相当于[0-9]
\D 匹配0-9以外的字符，相当于[^0-9]
\w 匹配任意的字母，数字和下划线，相当于[A-Za-z0-9]
\W 除所有字母、数字和下划线，相当于[^A-Za-z0-9]
\s 匹配空格(包括换行符，制表符，空格符等)，相当于[\t\r\n\v\f]
\S 匹配非空格的字符，相当于[^\t\r\n\v\f]
</code></pre>
<h3 id="替换" tabindex="-1"><a class="header-anchor" href="#替换" aria-hidden="true">#</a> 替换</h3>
<pre><code>replace:(正则表达式/需要替换的字符,'替换值')：当有多个值的时候，只会替换第一个
/表达式/[switch]
	switch(也成为修饰符)按照什么样的模式匹配，有三种值：
		g:全局匹配
		i:忽略大小写
		gi:全局匹配+忽略大小写
replace:(/jq/g,'**')替换所有匹配的字符
</code></pre>
<h3 id="match" tabindex="-1"><a class="header-anchor" href="#match" aria-hidden="true">#</a> match</h3>
<pre><code>match方法可以在字符串中查找指定的值,如果找到返回该值，未找到返回null
</code></pre>
<h2 id="深拷贝和浅拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝和浅拷贝" aria-hidden="true">#</a> 深拷贝和浅拷贝</h2>
<pre><code>浅拷贝和深拷贝只针对引用类型
</code></pre>
<h3 id="浅拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝" aria-hidden="true">#</a> 浅拷贝</h3>
<pre><code>浅拷贝：拷贝的是地址
常用方法：
1. 拷贝对象：Object.assgin() / 展开运算符 {...obj} 拷贝对象
2.拷贝数组：Array.prototype.concat() 或者 [...arr]

拷贝对象之后，里面的属性值是简单数据类型直接拷贝值
如果属性值是引用数据类型则拷贝的是地址
</code></pre>
<h3 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h3>
<pre><code>深拷贝：拷贝的是对象，不是地址

常用方法：
1. 通过递归实现深拷贝
2. lodash/cloneDeep
3. 通过JSON.stringify()实现
</code></pre>
<h4 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链" aria-hidden="true">#</a> 作用域链</h4>
<pre><code>作用域链本质是底层的变量查找机制
</code></pre>
<h4 id="js垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#js垃圾回收机制" aria-hidden="true">#</a> JS垃圾回收机制</h4>
<pre><code>什么是垃圾回收机制？
	JS种内存的分配和回收是自动完成的，内存在不使用的时候会被垃圾回收器自动回收，不在用到的内存，没有及时释放，叫做内存泄露

内存的生命周期：
	1.内存分配：变量、函数、对象声明的时候，系统会自动为他们分配内存
	2.内存使用：即读写内存，也就是使用变量、函数等
	3.内存回收：使用完毕，由垃圾回收自动回收不再使用的内存
	
	全局变量一般不会回收（页面关闭回收）
	一般情况下局部变量的值，不用了，会被自动回收掉
引用计数法: 若该值被引用则会+1，若减少引用则会-1，若引用数为0则被回收，内存释放
标记清楚发:从根部出发若有引用标记为可达，未引用标记为不可达，定时清理不可达数据
</code></pre>
<h2 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h2>
<pre><code>const fn=(n1,n2)=&gt;n1+n2:若函数体中只有一句代码，可以省略大括号和return

箭头函数不绑定this关键字，箭头函数中的this，指向的是函数定义位置的上下文this

例：
	let obj={
		age:20,
		say:()=&gt;{
			alert(this.age)
		}
	}
	obj.say();//undefined
	对象是不存在作用域，this指向的是window,this.age表示全局作用域的age变量
</code></pre>
<h2 id="string-扩展方法" tabindex="-1"><a class="header-anchor" href="#string-扩展方法" aria-hidden="true">#</a> String 扩展方法</h2>
<pre><code>startsWith():表示参数字符串是否在原字符串的头部，返回布尔值

endsWith()：表示参数字符串是否在原字符串的尾部，返回布尔值

repeat():repeat方法表示讲原字符串重复n次，返回一个新字符串
</code></pre>
<p>​	
​</p>
</div></template>
