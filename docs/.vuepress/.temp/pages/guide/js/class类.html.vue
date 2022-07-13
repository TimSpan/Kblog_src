<template><div><h1 id="class类" tabindex="-1"><a class="header-anchor" href="#class类" aria-hidden="true">#</a> class类</h1>
<p>还是直接看阮一峰写的吧!毕竟人家写得好!你说呢?或者看红皮书</p>
<p>阮一峰  <a href="https://es6.ruanyifeng.com/#docs/class" target="_blank" rel="noopener noreferrer">Class的基本语法<ExternalLinkIcon/></a></p>
<p>阮一峰 <a href="https://es6.ruanyifeng.com/#docs/class-extends" target="_blank" rel="noopener noreferrer">Class的继承<ExternalLinkIcon/></a></p>
<h2 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'('</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">', '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">')'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code v-pre>Point</code>类除了构造方法，还定义了一个<code v-pre>toString()</code>方法</p>
<p><em><strong>定义<code v-pre>toString()</code>方法前面不需要加上<code v-pre>function</code>这个关键字</strong></em></p>
<p><strong>另外，方法与方法之间不需要逗号分隔，加了会报错</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Ke</span> <span class="token punctuation">{</span><span class="token comment">//类的数据类型就是函数</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> Ke<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// function </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Ke <span class="token operator">===</span> <span class="token class-name">Ke</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
<span class="token comment">//类本身就指向构造函数</span>

<span class="token comment">//ES6 的类，完全可以看作构造函数的另一种写法。</span>
</code></pre></div><p>使用的时候，也是直接对类使用<code v-pre>new</code>命令，跟构造函数的用法完全一致。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Ke</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> kevin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ke</span>
</code></pre></div><p>构造函数的<code v-pre>prototype</code>属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的<code v-pre>prototype</code>属性上面。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
  <span class="token function">toValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 等同于</span>
<span class="token class-name">Point</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token comment">//原型语法简写</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">toValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//constructor()、toString()、toValue()这三个方法，其实都是定义在Point.prototype上面。</span>
</code></pre></div><p>因此，在类的实例上面调用方法，其实就是调用原型上的方法。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span>constructor <span class="token operator">===</span> <span class="token class-name">B</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token comment">// true</span>
</code></pre></div><h2 id="类的实例" tabindex="-1"><a class="header-anchor" href="#类的实例" aria-hidden="true">#</a> 类的实例</h2>
<p>类的属性和方法，除非显式定义在其本身（即定义在<code v-pre>this</code>对象上），否则都是定义在原型上（即定义在<code v-pre>class</code>上）。</p>
<h2 id="constructor-方法" tabindex="-1"><a class="header-anchor" href="#constructor-方法" aria-hidden="true">#</a> constructor()方法</h2>
<p><code v-pre>constructor()</code>方法是类的默认方法  .<code v-pre>constructor()</code>方法是类的默认方法 .如果没有显式定义，一个空的<code v-pre>constructor()</code>方法会被默认添加</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'('</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">', '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">')'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

point<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// (2, 3)</span>

point<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'x'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
point<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'y'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
point<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'toString'</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
point<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'toString'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token comment">//类的属性和方法，除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。</span>
<span class="token comment">//x和y都是实例对象point自身的属性（因为定义在this对象上），所以hasOwnProperty()方法返回true，而toString()是原型对象的属性（因为定义在Point类上），所以hasOwnProperty()方法返回false。这些都与 ES5 的行为保持一致。</span>

</code></pre></div><blockquote>
<p>类的属性名，可以采用表达式。</p>
</blockquote>
<h2 id="class表达式" tabindex="-1"><a class="header-anchor" href="#class表达式" aria-hidden="true">#</a> Class表达式</h2>
<p>与函数一样，类也可以使用表达式的形式定义。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MyClass <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">Me</span> <span class="token punctuation">{</span>
  <span class="token function">getClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Me<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 类的名字是Me 但是Me旨在Class的内部可用,指代当前类,在Class外部 这个类只能用MyClass使用</span>


<span class="token keyword">let</span> inst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
inst<span class="token punctuation">.</span><span class="token function">getClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Me</span>
Me<span class="token punctuation">.</span>name <span class="token comment">// ReferenceError: Me is not defined</span>
<span class="token comment">//上面代码表示，Me只在 Class 内部有定义。</span>

<span class="token comment">//如果类的内部没用到的话，可以省略Me，也就是可以写成下面的形式。</span>
<span class="token keyword">const</span> MyClass <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="立即执行的类" tabindex="-1"><a class="header-anchor" href="#立即执行的类" aria-hidden="true">#</a> 立即执行的类</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">class</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">'张三'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "张三"</span>
</code></pre></div><h2 id="静态方法static" tabindex="-1"><a class="header-anchor" href="#静态方法static" aria-hidden="true">#</a> 静态方法static</h2>
<p>如果在一个方法前，加上<code v-pre>static</code>关键字，就表示该方法不会被实例继承.而是直接通过类来调用</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//static关键字</span>
    <span class="token keyword">return</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Foo<span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 'hello'.只可以在Foo中被调用</span>

<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 而不是在Foo的实例上调用</span>
<span class="token comment">// TypeError: foo.classMethod is not a function</span>
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//如果静态方法包含this关键字，这个this指的是类，而不是实例。</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Foo<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// hello</span>
<span class="token comment">//静态方法bar调用了this.baz，这里的this指的是Foo类，而不是Foo的实例，等同于调用Foo.baz。另外，从这个例子还可以看出，静态方法可以与非静态方法重名</span>
</code></pre></div><h3 id="super-关键字" tabindex="-1"><a class="header-anchor" href="#super-关键字" aria-hidden="true">#</a> super()关键字</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//super`这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。</span>

<span class="token comment">//第一种情况，`super`作为函数调用时代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次`super`函数。</span>
<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//子类B的构造函数之中的super()，代表调用父类的构造函数。这是必须的，否则 JavaScript 引擎会报错。</span>

<span class="token comment">//注意，super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B的实例，因此super()在这里相当于A.prototype.constructor.call(this)。</span>

</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// A</span>
<span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// B</span>
<span class="token comment">//new.target指向当前正在执行的函数。可以看到，在super()执行时，它指向的是子类B的构造函数，而不是父类A的构造函数。也就是说，super()内部的this指向的是B。</span>
</code></pre></div><h2 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//父类的静态方法，可以被子类继承。</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span> <span class="token comment">//父类</span>
  <span class="token keyword">static</span> <span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span> <span class="token comment">//Bar子类</span>
<span class="token punctuation">}</span>

Bar<span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 'hello'</span>
<span class="token comment">//父类Foo有一个静态方法，子类Bar可以调用这个方法。</span>
<span class="token comment">//这两个类完全一样，等于复制了一个Point类</span>
</code></pre></div><div class="language-text ext-text"><pre v-pre class="language-text"><code>class Point { /* ... */ }

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}
</code></pre></div></div></template>
