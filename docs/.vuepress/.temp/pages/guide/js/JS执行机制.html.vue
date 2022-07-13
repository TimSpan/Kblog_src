<template><div><h1 id="js执行机制" tabindex="-1"><a class="header-anchor" href="#js执行机制" aria-hidden="true">#</a> JS执行机制</h1>
<h3 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop" target="_blank" rel="noopener noreferrer">参考文献<ExternalLinkIcon/></a></h3>
<p>JavaScript 语言的一大特点就是<strong>单线程</strong>，也就是说，<strong>同一个时间只能做一件事</strong>。</p>
<p>这是因为 Javascript 这门脚本语言诞生的使命所致——JavaScript 是为处理页面中用户的交互，以及操作 DOM 而诞生的。比如我们对某个 DOM 元素进行添加和删除操作，不能同时进行。 应该先进行添加，之后 再删除。</p>
<p>单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是： 如 果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。</p>
<p>为了解决这个问题，利用多核 CPU 的计算能力，<strong>HTML5 提出 Web Worker 标准</strong>，允许 JavaScript 脚本创建多个线 程。于是，JS 中出现了<strong>同步和异步</strong>。</p>
<h3 id="同步" tabindex="-1"><a class="header-anchor" href="#同步" aria-hidden="true">#</a> 同步</h3>
<p>前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步 做法：我们要烧水煮饭，等水开了（10分钟之后），再去切菜，炒菜。</p>
<h3 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h3>
<p>你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事 情。比如做饭的异步做法，我们在烧水的同时，利用这10分钟，去切菜，炒菜。</p>
<blockquote>
<p>他们的本质区别： 这条流水线上各个流程的执行顺序不同。</p>
</blockquote>
<h3 id="同步任务" tabindex="-1"><a class="header-anchor" href="#同步任务" aria-hidden="true">#</a> 同步任务</h3>
<p>同步任务都在主线程上执行，形成一个<strong>执行栈</strong>。</p>
<h3 id="异步任务" tabindex="-1"><a class="header-anchor" href="#异步任务" aria-hidden="true">#</a> 异步任务</h3>
<p>JS 的异步是通过回调函数实现的。</p>
<p>一般而言，异步任务有以下三种类型:</p>
<ol>
<li>普通事件，如 click、resize 等</li>
<li>资源加载，如 load、error 等</li>
<li>定时器，包括 setInterval、setTimeout 等</li>
</ol>
<p>异步任务相关添加到任务队列中（任务队列也称为消息队列）。</p>
<ol>
<li>先执行<strong>执行栈</strong>中的同步任务。</li>
<li>异步任务放入任务队列中。</li>
<li>一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状 态，进入执行栈，开始执行</li>
</ol>
<p><img src="@source/guide/js/assets/执行机制.png" alt=""></p>
<h1 id="并发模型与事件循环" tabindex="-1"><a class="header-anchor" href="#并发模型与事件循环" aria-hidden="true">#</a> 并发模型与事件循环</h1>
<p>JavaScript 有一个基于<strong>事件循环</strong>的并发模型，事件循环负责执行代码、收集和处理事件以及执行队列中的子任务。这个模型与其它语言中的模型截然不同，比如 C 和 Java。</p>
<h3 id="运行时概念" tabindex="-1"><a class="header-anchor" href="#运行时概念" aria-hidden="true">#</a> 运行时概念</h3>
<p>接下来的内容解释了这个理论模型。现代 JavaScript 引擎实现并着重优化了以下描述的这些语义</p>
<h3 id="可视化描述" tabindex="-1"><a class="header-anchor" href="#可视化描述" aria-hidden="true">#</a> 可视化描述</h3>
<p><img src="@source/guide/js/assets/The_Javascript_Runtime_Environment_Example.svg" alt=""></p>
<h3 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h3>
<p>函数调用形成了一个由若干帧组成的栈。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> <span class="token number">11</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">foo</span><span class="token punctuation">(</span>x <span class="token operator">*</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 42</span>
</code></pre></div><p>当调用 <code v-pre>bar</code> 时，第一个帧被创建并压入栈中，帧中包含了 <code v-pre>bar</code> 的参数和局部变量。 当 <code v-pre>bar</code> 调用 <code v-pre>foo</code> 时，第二个帧被创建并被压入栈中，放在第一个帧之上，帧中包含 <code v-pre>foo</code> 的参数和局部变量。当 <code v-pre>foo</code> 执行完毕然后返回时，第二个帧就被弹出栈（剩下 <code v-pre>bar</code> 函数的调用帧 ）。当 <code v-pre>bar</code> 也执行完毕然后返回时，第一个帧也被弹出，栈就被清空了。</p>
<h3 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h3>
<p>对象被分配在堆中，堆是一个用来表示一大块（通常是非结构化的）内存区域的计算机术语。</p>
<h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h3>
<p>一个 JavaScript 运行时包含了一个待处理消息的消息队列。每一个消息都关联着一个用以处理这个消息的回调函数。</p>
<p>在 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop#%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF" target="_blank" rel="noopener noreferrer">事件循环<ExternalLinkIcon/></a> 期间的某个时刻，运行时会从最先进入队列的消息开始处理队列中的消息。被处理的消息会被移出队列，并作为输入参数来调用与之关联的函数。正如前面所提到的，调用一个函数总是会为其创造一个新的栈帧。</p>
<p>函数的处理会一直进行到执行栈再次为空为止；然后事件循环将会处理队列中的下一个消息（如果还有的话）。</p>
<h2 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> 事件循环</h2>
<p>之所以称之为 <strong>事件循环</strong>，是因为它经常按照类似如下的方式来被实现：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">waitForMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  queue<span class="token punctuation">.</span><span class="token function">processNextMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code v-pre>queue.waitForMessage()</code> 会同步地等待消息到达 (如果当前没有任何消息等待被处理)。</p>
<h3 id="执行至完成" tabindex="-1"><a class="header-anchor" href="#执行至完成" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop#%E6%89%A7%E8%A1%8C%E8%87%B3%E5%AE%8C%E6%88%90" target="_blank" rel="noopener noreferrer">执行至完成<ExternalLinkIcon/></a></h3>
<p>每一个消息完整地执行后，其它消息才会被执行。这为程序的分析提供了一些优秀的特性，包括：当一个函数执行时，它不会被抢占，只有在它运行完毕之后才会去运行任何其他的代码，才能修改这个函数操作的数据。这与 C 语言不同，例如，如果函数在线程中运行，它可能在任何位置被终止，然后在另一个线程中运行其他代码。</p>
<p>这个模型的一个缺点在于当一个消息需要太长时间才能处理完毕时，Web 应用程序就无法处理与用户的交互，例如点击或滚动。为了缓解这个问题，浏览器一般会弹出一个“这个脚本运行时间过长”的对话框。一个良好的习惯是缩短单个消息处理时间，并在可能的情况下将一个消息裁剪成多个消息。</p>
<h3 id="添加消息" tabindex="-1"><a class="header-anchor" href="#添加消息" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop#%E6%B7%BB%E5%8A%A0%E6%B6%88%E6%81%AF" target="_blank" rel="noopener noreferrer">添加消息<ExternalLinkIcon/></a></h3>
<p>在浏览器里，每当一个事件发生并且有一个事件监听器绑定在该事件上时，一个消息就会被添加进消息队列。如果没有事件监听器，这个事件将会丢失。所以当一个带有点击事件处理器的元素被点击时，就会像其他事件一样产生一个类似的消息。</p>
<p>函数 <code v-pre>setTimeout</code> 接受两个参数：待加入队列的消息和一个时间值（可选，默认为 0）。这个时间值代表了消息被实际加入到队列的最小延迟时间。如果队列中没有其它消息并且栈为空，在这段延迟时间过去之后，消息会被马上处理。但是，如果有其它消息，<code v-pre>setTimeout</code> 消息必须等待其它消息处理完。因此第二个参数仅仅表示最少延迟时间，而非确切的等待时间。</p>
<p>下面的例子演示了这个概念（<code v-pre>setTimeout</code> 并不会在计时器到期之后直接执行）：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 输出 "2"，表示回调函数并没有在 500 毫秒之后立即执行</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Ran after "</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> s<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" seconds"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> s <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Good, looped for 2 seconds"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="零延迟" tabindex="-1"><a class="header-anchor" href="#零延迟" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop#%E9%9B%B6%E5%BB%B6%E8%BF%9F" target="_blank" rel="noopener noreferrer">零延迟<ExternalLinkIcon/></a></h3>
<p>零延迟并不意味着回调会立即执行。以 0 为第二参数调用 <code v-pre>setTimeout</code> 并不表示在 0 毫秒后就立即调用回调函数。</p>
<p>其等待的时间取决于队列里待处理的消息数量。在下面的例子中，<code v-pre>&quot;这是一条消息&quot;</code> 将会在回调获得处理之前输出到控制台，这是因为延迟参数是运行时处理请求所需的最小等待时间，但并不保证是准确的等待时间。</p>
<p>基本上，<code v-pre>setTimeout</code> 需要等待当前队列中所有的消息都处理完毕之后才能执行，即使已经超出了由第二参数所指定的时间。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'这是开始'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'这是来自第一个回调的消息'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'这是一条消息'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">cb1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'这是来自第二个回调的消息'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'这是结束'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// "这是开始"</span>
<span class="token comment">// "这是一条消息"</span>
<span class="token comment">// "这是结束"</span>
<span class="token comment">// "这是来自第一个回调的消息"</span>
<span class="token comment">// "这是来自第二个回调的消息"</span>
</code></pre></div><h3 id="多个运行时互相通信" tabindex="-1"><a class="header-anchor" href="#多个运行时互相通信" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop#%E5%A4%9A%E4%B8%AA%E8%BF%90%E8%A1%8C%E6%97%B6%E4%BA%92%E7%9B%B8%E9%80%9A%E4%BF%A1" target="_blank" rel="noopener noreferrer">多个运行时互相通信<ExternalLinkIcon/></a></h3>
<p>一个 web worker 或者一个跨域的 <code v-pre>iframe</code> 都有自己的栈、堆和消息队列。两个不同的运行时只能通过 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage" target="_blank" rel="noopener noreferrer"><code v-pre>postMessage</code><ExternalLinkIcon/></a> 方法进行通信。如果另一个运行时侦听 <code v-pre>message</code> 事件，则此方法会向该运行时添加消息。</p>
<h2 id="永不阻塞" tabindex="-1"><a class="header-anchor" href="#永不阻塞" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop#%E6%B0%B8%E4%B8%8D%E9%98%BB%E5%A1%9E" target="_blank" rel="noopener noreferrer">永不阻塞<ExternalLinkIcon/></a></h2>
<p>JavaScript 的事件循环模型与许多其他语言不同的一个非常有趣的特性是，它永不阻塞。 处理 I/O 通常通过事件和回调来执行，所以当一个应用正等待一个 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API" target="_blank" rel="noopener noreferrer">IndexedDB<ExternalLinkIcon/></a> 查询返回或者一个 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest" target="_blank" rel="noopener noreferrer">XHR<ExternalLinkIcon/></a> 请求返回时，它仍然可以处理其它事情，比如用户输入。</p>
<p>由于历史原因有一些例外，如 <code v-pre>alert</code> 或者同步 XHR，但应该尽量避免使用它们。注意，<a href="https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311" target="_blank" rel="noopener noreferrer">例外的例外也是存在的<ExternalLinkIcon/></a>（但通常是实现错误而非其它原因）。</p>
</div></template>
