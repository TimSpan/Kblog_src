<template><div><h2 id="windows对象简介" tabindex="-1"><a class="header-anchor" href="#windows对象简介" aria-hidden="true">#</a> windows对象简介</h2>
<p><code v-pre>在js中，一个浏览器窗口就是一个windows对象（这句话很重要）</code></p>
<p>简单里说js会把一个窗口看成一个对象，这样我们就可以用这个对象的属性的方法来操作这个窗口。实际上我们每次打开一个页面时，浏览器都会自动为这个页面创建一个windows对象</p>
<ul>
<li>window对象是一个全局对象，也可以说是JavaScript中的顶级对象</li>
<li>像document、alert()、console.log()这些都是window的属性，基本BOM的属性和方法都是window的。</li>
<li>所有通过var定义在全局作用域中的变量、函数都会变成window对象的属性和方法</li>
<li>window对象下的属性和方法调用的时候可以省略window</li>
</ul>
<h2 id="windows对象下的子对象" tabindex="-1"><a class="header-anchor" href="#windows对象下的子对象" aria-hidden="true">#</a> windows对象下的子对象</h2>
<ol>
<li>document 文档操作，用于操作页面元素</li>
<li>location 地址对象，用于操作URL地址</li>
<li>navigator 浏览器对象，用于操作获取浏览器的版本</li>
<li>history 历史对象，用于操作浏览历史</li>
<li>screen 屏幕对象，操作屏幕高度宽度</li>
</ol>
<p>windows对象以及下面的location、navigator等子对象，由于都是操作浏览器窗口的，所以又称之为&quot; BOM &quot;也就是Browser Object Module（浏览器对象模型）。</p>
</div></template>
