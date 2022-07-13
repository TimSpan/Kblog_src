<template><div><h1 id="npm命令发生的事" tabindex="-1"><a class="header-anchor" href="#npm命令发生的事" aria-hidden="true">#</a> npm命令发生的事</h1>
<h2 id="当你运行npm-run命令时-会发生什么" tabindex="-1"><a class="header-anchor" href="#当你运行npm-run命令时-会发生什么" aria-hidden="true">#</a> 当你运行npm run命令时，会发生什么</h2>
<h2 id="script字段" tabindex="-1"><a class="header-anchor" href="#script字段" aria-hidden="true">#</a> script字段</h2>
<p>当我们用npm（node package manager）来管理JavaScript/TypeScript项目的时候，都会在项目的根目录下生成一个package.json文件。而这个文件里的script字段就是用于适配npm run XXX命令的。举个例子，像下图里package.json文件：</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code>  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite"</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vite build"</span><span class="token punctuation">,</span>
    <span class="token property">"preview"</span><span class="token operator">:</span> <span class="token string">"vite preview"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>那么，当我们运行npm run build命令的时候，就会去scripts字段里找到build对应的vite build命令去执行。可能有小伙伴会问了，那为什么不能直接执行vite build命令呢？因为这样会报错，操作系统里只有npm相关的命令，不存在vite build这条命令；而我们在下载安装依赖的时候，会在node_modules/.bin目录下创建好名为vite的可执行文件：</p>
<p>.bin这个目录并不是任何npm包，其目录底下的可执行文件都是一个个软链接；其余node_modules目录下的文件夹都是一个个下载下来的依赖模块。</p>
<p>而在.bin目录下，一般针对一个依赖模块，会有3个可执行文件，没有后缀名的是对应Unix系的shell脚本，.cmd为后缀名的是windows bat脚本，.ps1为后缀名的则是PowerShell中可执行文件（可以跨平台），<strong>三者作用都是用node执行一个js文件</strong>。我们可以打开名为ng 的这个文件，看看里面的内容：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token hashbang comment">#!/bin/sh</span>
basedir<span class="token operator">=</span><span class="token function">$</span><span class="token punctuation">(</span>dirname <span class="token string">"$(echo "</span>$0<span class="token string">" | sed -e 's,\\,/,g')"</span><span class="token punctuation">)</span>

<span class="token keyword">case</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">uname</span><span class="token template-punctuation string">`</span></span> <span class="token keyword">in</span>
    <span class="token operator">*</span><span class="token constant">CYGWIN</span><span class="token operator">*</span><span class="token operator">|</span><span class="token operator">*</span><span class="token constant">MINGW</span><span class="token operator">*</span><span class="token operator">|</span><span class="token operator">*</span><span class="token constant">MSYS</span><span class="token operator">*</span><span class="token punctuation">)</span> basedir<span class="token operator">=</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">cygpath -w "$basedir"</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span>
esac

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">-</span>x <span class="token string">"$basedir/node"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> then
  exec <span class="token string">"$basedir/node"</span>  <span class="token string">"$basedir/../vite/bin/vite.js"</span> <span class="token string">"$@"</span>
<span class="token keyword">else</span> 
  exec node  <span class="token string">"$basedir/../vite/bin/vite.js"</span> <span class="token string">"$@"</span>
fi

</code></pre></div><p>由此，我们得知，当我们运行npm run build命令的时候，虽然ng没有全局安装，但是npm会到./node_modules/.bin目录里找到vite.js文件作为node脚本来执行，也就是相当于执行了./node_modules/.bin/vite build命令（最后的build作为参数传入）。</p>
<h2 id="bin目录下的软链接" tabindex="-1"><a class="header-anchor" href="#bin目录下的软链接" aria-hidden="true">#</a> .bin目录下的软链接</h2>
<p>我们继续往下看，既然.bin目录下的执行文件是一个个软链接，那么这些软链接文件是哪里来的呢？npm又是怎么知道这些软链接是指向哪里呢？</p>
<p>我们可以直接在项目根目录下的<em><strong>package-lock.json文件里搜索vite.js</strong></em>，可以看到npm在install的时候，就将bin/vite.js作为bin声明了：</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token property">"bin"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">"vite"</span><span class="token operator">:</span> <span class="token string">"bin/vite.js"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>因此在npm安装的时候，就把bin/vite.js文件软链接到了./node_modules/.bin 目录下，而npm 还会自动把node_modules/.bin加入$PATH 变量内，这样vite就可以不用全局安装了，直接作为命令来运行、开发依赖程序。也就是说，软链接相当于是一种映射，在执行npm run xxx的时候，就会到node_modules/.bin目录里找到对应的映射文件，然后再找到相对应的js文件来执行。</p>
<p>而如果我们想不用软链接的方式，直接使用全局安装的命令的话，我们就需要在安装包的时候，使用npm install -g xxx来安装这个依赖，那么就会将xxx其中的bin文件加入到全局中；这样就可以和node一样，直接使用诸如xxx build这样的命令了。</p>
</div></template>
