<template><div><h1 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h1>
<h2 id="jsx" tabindex="-1"><a class="header-anchor" href="#jsx" aria-hidden="true">#</a> JSX</h2>
<h3 id="jsx到底是什么" tabindex="-1"><a class="header-anchor" href="#jsx到底是什么" aria-hidden="true">#</a> JSX到底是什么?</h3>
<p>JSX是一种JavaScript的语法扩展，首先在<a href="https://baike.baidu.com/item/React/18077599" target="_blank" rel="noopener noreferrer">React<ExternalLinkIcon/></a>中被进入，其格式比较像是模版语言，但事实上完全是在<a href="https://baike.baidu.com/item/JavaScript/321142" target="_blank" rel="noopener noreferrer">JavaScript<ExternalLinkIcon/></a>内部实现的。元素是构成React应用的最小单位，JSX就是用来声明React当中的元素。React主要使用JSX来描述用户界面，但React并不强制要求使用JSX [1] ，而JSX也在React之外的框架得到了广泛的支持，包括Vue.js [3] ，Solid [2] 等。</p>
<h3 id="在-jsx-中嵌入表达式" tabindex="-1"><a class="header-anchor" href="#在-jsx-中嵌入表达式" aria-hidden="true">#</a> 在 JSX 中嵌入表达式</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'Josh Perez'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
</code></pre></div><p>在 JSX 语法中，你可以在大括号内放置任何有效的 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions" target="_blank" rel="noopener noreferrer">JavaScript 表达式<ExternalLinkIcon/></a></p>
<p>示例:调用 JavaScript 函数 <code v-pre>formatName(user)</code> 的结果，并将结果嵌入到 <code v-pre>&lt;h1&gt;</code> 元素中。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">formatName</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">'Harper'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">'Perez'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">></span>
        Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token function">formatName</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">!</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//Hello, Harper Perez!</span>
</code></pre></div><h2 id="将一个元素渲染为-dom" tabindex="-1"><a class="header-anchor" href="#将一个元素渲染为-dom" aria-hidden="true">#</a> 将一个元素渲染为 DOM</h2>
<h3 id="_17version" tabindex="-1"><a class="header-anchor" href="#_17version" aria-hidden="true">#</a> 17version</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span>
<span class="token keyword">const</span> title <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'h1'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">'hello world'</span><span class="token punctuation">)</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_18version" tabindex="-1"><a class="header-anchor" href="#_18version" aria-hidden="true">#</a> 18version</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello world<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="深入jsx-语法糖" tabindex="-1"><a class="header-anchor" href="#深入jsx-语法糖" aria-hidden="true">#</a> 深入JSX-语法糖</h3>
<p>实际上，JSX 仅仅只是 <code v-pre>React.createElement(component, props, ...children)</code> 函数的语法糖。比如上面的 JSX 代码：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello world<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token comment">//会编译为</span>
React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'h1'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">'hello world'</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="函数组件与-class-组件" tabindex="-1"><a class="header-anchor" href="#函数组件与-class-组件" aria-hidden="true">#</a> 函数组件与 class 组件</h2>
<h3 id="渲染函数组件-无状态高性能" tabindex="-1"><a class="header-anchor" href="#渲染函数组件-无状态高性能" aria-hidden="true">#</a> 渲染函数组件(无状态高性能)</h3>
<p>定义组件最简单的方式就是编写 JavaScript 函数：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//之前我们遇到的 React 元素都只是 DOM 标签：</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token operator">&lt;</span>div <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token comment">//不过，React 元素也可以是用户自定义的组件：</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token operator">&lt;</span>Welcome name<span class="token operator">=</span><span class="token string">"Sara"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token comment">//当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。</span>

<span class="token comment">//下面这个函数是一个有效的 React 组件，因为它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。</span>
<span class="token comment">//这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数。</span>
<span class="token comment">//函数组件</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">Welcome</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//函数组件必须有返回值，表示该组件的 UI 结构</span>
    <span class="token comment">//如果不需要渲染任何内容，则返回 null</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token operator">&lt;</span>Welcome name<span class="token operator">=</span><span class="token string">"Sara"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span><span class="token comment">//渲染组件</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//使用组件//Hello, Sara</span>

<span class="token comment">//当然你可以这样去渲染一个组件</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Welcome name<span class="token operator">=</span><span class="token string">"Sara"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//Hello, Sara//效果是一样的</span>

<span class="token comment">//组件就像HTML标签一样可以被渲染到页面中。组件表示的是一段结构内容</span>
<span class="token comment">//对于函数组件来说，函数返回值的内容就是渲染的内容</span>

<span class="token comment">//也可以使用双标签渲染元素</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Welcome<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Welcome<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>让我们来看看这个函数组件渲染是怎么执行的:</p>
<ol>
<li>我们调用 <code v-pre>root.render()</code> 函数，并传入 <code v-pre>&lt;Welcome name=&quot;Sara&quot; /&gt;</code> 作为参数。</li>
<li>React 调用 <code v-pre>Welcome</code> 组件，并将 <code v-pre>{name: 'Sara'}</code> 作为 props 传入。</li>
<li><code v-pre>Welcome</code> 组件将 <code v-pre>&lt;h1&gt;Hello, Sara&lt;/h1&gt;</code> 元素作为返回值。</li>
<li>React DOM 将 DOM 高效地更新为 <code v-pre>&lt;h1&gt;Hello, Sara&lt;/h1&gt;</code>。</li>
</ol>
<blockquote>
<div class="custom-container tip"><p class="custom-container-title">组件名称必须以大写字母开头</p>
<p>React 会将以小写字母开头的组件视为原生 DOM 标签。例如，<code v-pre>&lt;div /&gt;</code> 代表 HTML 的 div 标签，而 <code v-pre>&lt;Welcome /&gt;</code> 则代表一个组件，并且需在作用域内使用 <code v-pre>Welcome</code>。</p>
<ol>
<li>函数组件无状态(state),静态,不会发生变化(不考虑hooks的情况下)</li>
<li>不能自己提供数据</li>
</ol>
</div>
</blockquote>
<h3 id="渲染多个组件" tabindex="-1"><a class="header-anchor" href="#渲染多个组件" aria-hidden="true">#</a> 渲染多个组件</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Hello <span class="token keyword">from</span> <span class="token string">'./hello.js'</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'./home.js'</span>
<span class="token comment">//类组件</span>
<span class="token comment">// import React from "react";</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Welcome</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Welcome name<span class="token operator">=</span><span class="token string">"Sara"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Hello <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span>

<span class="token comment">//hello.js</span>
<span class="token keyword">const</span> <span class="token function-variable function">Hello</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello 你好<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Hello
<span class="token comment">//home.js</span>
<span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>这是首页<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre></div><h3 id="class组件-有状态" tabindex="-1"><a class="header-anchor" href="#class组件-有状态" aria-hidden="true">#</a> class组件(有状态)</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//你同时还可以使用 ES6 的 class来定义组件：</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 定义ES6 class组件</span>
<span class="token keyword">class</span> <span class="token class-name">Welcome</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Welcome name<span class="token operator">=</span><span class="token string">"Sara"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>

<span class="token number">1.</span> 类组件应该继承 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">React.Component</span><span class="token template-punctuation string">`</span></span> 父类，从而使用父类中提供的方法或属性
<span class="token number">2.</span> 类组件必须提供 render 方法
<span class="token number">3.</span> render 方法必须有返回值，表示该组件的 <span class="token constant">UI</span> 结构
<span class="token number">4.</span> 状态（state）是组件的私有数据

<span class="token comment">//也可以单独引入Component</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Welcome</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><h3 id="class组件的状态state" tabindex="-1"><a class="header-anchor" href="#class组件的状态state" aria-hidden="true">#</a> class组件的状态state</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Welcome</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
<span class="token comment">// 为组件提供状态</span>
    state <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token comment">//从语法层面看state就是类的实例属性</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isLoading</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// Welcome</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//object</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token comment">// this就是当前类的实例对象</span>
            <span class="token comment">// 交给了react,react内部回去 new 一下</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>计数器：<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="react核心思想-状态不可变" tabindex="-1"><a class="header-anchor" href="#react核心思想-状态不可变" aria-hidden="true">#</a> React核心思想:-状态不可变</h2>
<blockquote>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p><em><strong>状态不可变并不是指的状态不能变,而是不要直接修改状态的值，是基于当前状态创建新的状态值</strong></em></p>
</div>
</blockquote>
<p><strong>不要直接修改 State</strong>.<strong>而是应该使用</strong> <code v-pre>setState()</code>.<strong>构造函数是唯一可以给 <code v-pre>this.state</code> 赋值的地方。</strong></p>
<h3 id="this-setstate修改状态的唯一方式" tabindex="-1"><a class="header-anchor" href="#this-setstate修改状态的唯一方式" aria-hidden="true">#</a> this.setState修改状态的唯一方式</h3>
<p>react唯一修改状态的方式就是<code v-pre>this.setState</code></p>
<ul>
<li>思想：<strong>数据驱动视图</strong>，也就是只需要修改数据（状态）那么页面（视图）就会自动刷新
<ul>
<li>核心：数据！！！</li>
<li>从现在开始，我们关心的是如何修改数据，而不再是关心如何修改DOM</li>
<li>并且，注意：尽量避免直接手动 DOM（通过 document.querySelector() 获取到到DOM对象然后再操作） 操作！！！</li>
</ul>
</li>
<li>注意：<em>不要直接修改 state 中的值，这是无效的</em>！</li>
</ul>
<h3 id="state注意事项" tabindex="-1"><a class="header-anchor" href="#state注意事项" aria-hidden="true">#</a> state注意事项</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">person</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 【不推荐】直接修改当前值的操作：</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token operator">++</span>
<span class="token operator">++</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count
<span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment">// 只要是数组中直接修改当前数组的方法都不能用！</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'rose'</span>

<span class="token comment">// 【推荐】不是直接修改当前值，而是创建新值的操作：</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">person</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>person<span class="token punctuation">,</span>
    <span class="token comment">// 要修改的属性，会覆盖原来的属性，这样，就可以达到修改对象中属性的目的了</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'rose'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2>
<p>JSX中最好不要包含太多的逻辑,可以抽离到单独的函数中</p>
<h2 id="受控组件-表单" tabindex="-1"><a class="header-anchor" href="#受控组件-表单" aria-hidden="true">#</a> 受控组件-表单</h2>
<p>受控组件：<strong>value值受到了react状态控制的表单元素</strong></p>
<h3 id="onchange" tabindex="-1"><a class="header-anchor" href="#onchange" aria-hidden="true">#</a> onChange</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    state <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'hello react'</span>
    <span class="token punctuation">}</span>

    <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">msg</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token comment">//最新值</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>input
                    type<span class="token operator">=</span><span class="token string">"text"</span>
                    value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>msg<span class="token punctuation">}</span>
                    onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span><span class="token comment">//关键</span>
                <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
<span class="token comment">//表单value的更新过程:</span>
<span class="token number">1.</span> 在文本框输入内容后<span class="token punctuation">,</span>会触发文本框的onChange事件
<span class="token number">2.</span> onChange事件触发<span class="token punctuation">,</span>handleChange中的代码执行
<span class="token number">3.</span> <span class="token function">handleChange执行后拿到文本框最新的值</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token number">4.</span> 将最新的文本框值交给了setState <span class="token punctuation">,</span>setState更新了状态
<span class="token number">5.</span> 调用setState后状态会更新<span class="token punctuation">,</span>同时<span class="token punctuation">,</span>组件会重新渲染<span class="token punctuation">,</span>会重新调用render
<span class="token number">6.</span> render重新调用就拿到了文本框最新的值<span class="token punctuation">,</span>并且把最新的文本框值渲染到页面上
<span class="token number">7.</span> 此时<span class="token punctuation">,</span>就看到文本框变化了        
</code></pre></div><h3 id="非受控组件-ref" tabindex="-1"><a class="header-anchor" href="#非受控组件-ref" aria-hidden="true">#</a> 非受控组件-ref</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1 导入 createRef 函数（ 用来创建 ref 对象 ）</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRef<span class="token punctuation">,</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
<span class="token comment">//调用 createRef 函数来创建一个 ref 对象</span>
<span class="token comment">//ref 对象的名称（txtRef）可以是任意值</span>
<span class="token comment">//命名要规范： txt（DOM 元素的自己标识） + Ref</span>
    txtRef <span class="token operator">=</span> <span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 文本框对应的 DOM 元素</span>
        <span class="token comment">// console.log(this.txtRef.current)</span>

        <span class="token comment">// 4 获取文本框的值：</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>txtRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>input ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>txtRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>获取文本框的值<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span>
        <span class="token comment">//将创建好的 ref 对象，设置为 input 标签的 ref 属性值</span>
        <span class="token comment">//作用：将 ref 和 input DOM 绑定到一起，将来在通过 this.txtRef 拿到的就是当前 DOM 对象</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>注意:</strong></p>
<ol>
<li>ref是个对象,对象中有一个current属性</li>
<li>current属性的值才是DOM对象</li>
</ol>
<p><strong>打印结果:</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>txtRef<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><img src="@source/guide/react/assets/ref.png" alt=""></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>txtRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><img src="@source/guide/react/assets/ref2.png" alt=""></p>
<blockquote>
<p><strong>尽量避免使用这种方式</strong></p>
</blockquote>
<p><strong>非受控组件借助ref,使用原生DOM的方式来获取表单元素的值</strong></p>
<ul>
<li>非受控组件通过React组件的状态来控制表单元素的值</li>
<li>手动操作DOM来控制</li>
<li>ref: 用来在React中获取DOM元素</li>
</ul>
<p><strong>何时使用 Refs:</strong></p>
<ul>
<li>管理焦点，文本选择或媒体播放。</li>
<li>触发强制动画。</li>
<li>集成第三方 DOM 库。</li>
</ul>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
</div></template>
