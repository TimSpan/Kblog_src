<template><div><h1 id="npm使用手册" tabindex="-1"><a class="header-anchor" href="#npm使用手册" aria-hidden="true">#</a> npm使用手册</h1>
<p><a href="https://www.npmjs.com.cn/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
<h2 id="npm是什么" tabindex="-1"><a class="header-anchor" href="#npm是什么" aria-hidden="true">#</a> npm是什么?</h2>
<p>包管理工具 npm （node package manager）这个包管理器工具随着Node.js 的安装一起被安装到了用户的电脑上 ,npm由三个独立的部分组成：</p>
<ul>
<li>网站</li>
<li>注册表（registry）</li>
<li>命令行工具 (CLI)</li>
</ul>
<p><a href="https://npmjs.com/" target="_blank" rel="noopener noreferrer"><em>网站</em><ExternalLinkIcon/></a> 是开发者查找包（package）、设置参数以及管理 npm 使用体验的主要途径。</p>
<p><em>注册表</em> 是一个巨大的数据库，保存了每个包（package）的信息。</p>
<p><a href="https://docs.npmjs.com/cli/npm" target="_blank" rel="noopener noreferrer"><em>CLI</em><ExternalLinkIcon/></a> 通过命令行或终端运行。开发者通过 CLI 与 npm 打交道。</p>
<h2 id="查看已安装的-npm-软件包" tabindex="-1"><a class="header-anchor" href="#查看已安装的-npm-软件包" aria-hidden="true">#</a> 查看已安装的 npm 软件包</h2>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>npm list
</code></pre></div><p><code v-pre>npm list -g</code> 也一样，但适用于全局安装的软件包。</p>
<h2 id="安装npm软件包" tabindex="-1"><a class="header-anchor" href="#安装npm软件包" aria-hidden="true">#</a> 安装npm软件包</h2>
<p>有两种方式用来安装 npm 包：<strong>本地安装</strong>和<strong>全局安装</strong>。至于选择哪种方式来安装，取决于我们如何使用这个包。</p>
<ul>
<li>如果你自己的模块依赖于某个包，并通过 Node.js 的 <code v-pre>require</code> 加载，那么你应该选择本地安装，这种方式也是 <code v-pre>npm install</code> 命令的默认行为。</li>
<li>如果你想将包作为一个命令行工具，（比如 grunt CLI），那么你应该选择<a href="https://www.npmjs.cn/getting-started/installing-npm-packages-globally" target="_blank" rel="noopener noreferrer">全局安装<ExternalLinkIcon/></a>。</li>
</ul>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>package_name<span class="token operator">></span>
//  install可以简写成 i 
<span class="token function">npm</span> i <span class="token operator">&lt;</span>package_name<span class="token operator">></span>
</code></pre></div><p>全局安装</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g <span class="token operator">&lt;</span>package<span class="token operator">></span>
</code></pre></div><h2 id="卸载npm软件包" tabindex="-1"><a class="header-anchor" href="#卸载npm软件包" aria-hidden="true">#</a> 卸载npm软件包</h2>
<p>若要卸载之前在本地安装（在 <code v-pre>node_modules</code> 文件夹使用 <code v-pre>npm install &lt;package-name&gt;</code>）的软件包，则从项目的根文件夹（包含 <code v-pre>node_modules</code> 文件夹的文件夹）中运行：</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> uninstall <span class="token operator">&lt;</span>package-name<span class="token operator">></span>
<span class="token function">npm</span> uninstall jquery
</code></pre></div><p>如果使用 <code v-pre>-S</code> 或 <code v-pre>--save</code> 标志，则还会移除 <code v-pre>package.json</code> 文件中的引用。</p>
<p>如果程序包是开发依赖项（列出在 <code v-pre>package.json</code> 文件的 devDependencies 中），则必须使用 <code v-pre>-D</code> 或 <code v-pre>--save-dev</code> 标志从文件中移除：</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> uninstall -S <span class="token operator">&lt;</span>package-name<span class="token operator">></span>
<span class="token function">npm</span> uninstall -D <span class="token operator">&lt;</span>package-name<span class="token operator">></span>
</code></pre></div><p>如果该软件包是全局安装的，则需要添加 <code v-pre>-g</code> 或 <code v-pre>--global</code> 标志：</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> uninstall -g <span class="token operator">&lt;</span>package-name<span class="token operator">></span>
</code></pre></div><h2 id="npm全局和本地" tabindex="-1"><a class="header-anchor" href="#npm全局和本地" aria-hidden="true">#</a> npm全局和本地</h2>
<p>本地和全局的软件包之间的主要区别是：</p>
<ul>
<li><strong>本地的软件包</strong> 安装在运行 <code v-pre>npm install &lt;package-name&gt;</code> 的目录中，并且放置在此目录下的 <code v-pre>node_modules</code> 文件夹中。</li>
<li><strong>全局的软件包</strong> 放在系统中的单独位置（确切的位置取决于设置），无论在何处运行 <code v-pre>npm install -g &lt;package-name&gt;</code>。</li>
</ul>
<p>在代码中，应该只引入本地的软件包：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token constant">JS</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'package-name'</span><span class="token punctuation">)</span>
</code></pre></div><p>所以何时应该以一种或另一种方式安装？</p>
<p>通常，所有的软件包都应本地安装。</p>
<p>这样可以确保计算机中可以有数十个应用程序，并且如果需要，每个应用程序都可以运行不同的版本。</p>
<p><em><strong>更新全局软件包会使所有的项目都使用新的版本，这可能会导致维护方面的噩梦，因为某些软件包可能会破坏与其他依赖项的兼容性等。</strong></em></p>
<p>所有的项目都有自己的软件包本地版本，即使这看起来有点浪费资源，但与可能产生的负面影响相比也很小。</p>
<p>当程序包提供了可从 shell（CLI）运行的可执行命令、且可在项目间复用时，则该程序包应被全局安装。</p>
<p>也可以在本地安装可执行命令并使用 npx 运行，但是某些软件包最好在全局安装。</p>
<p>一些流行的全局软件包的示例有：</p>
<ul>
<li><code v-pre>npm</code></li>
<li><code v-pre>create-react-app</code></li>
<li><code v-pre>vue-cli</code></li>
<li><code v-pre>grunt-cli</code></li>
<li><code v-pre>mocha</code></li>
<li><code v-pre>react-native-cli</code></li>
<li><code v-pre>gatsby-cli</code></li>
<li><code v-pre>forever</code></li>
<li><code v-pre>nodemon</code></li>
</ul>
<p>可能已经在系统上安装了一些全局软件包。 可以通过在命令行上运行以下命令查看：</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token environment constant">BASH</span>
<span class="token function">npm</span> list -g --depth <span class="token number">0</span>
</code></pre></div><h2 id="npm语义版本控制" tabindex="-1"><a class="header-anchor" href="#npm语义版本控制" aria-hidden="true">#</a> npm语义版本控制</h2>
<p>如果 Node.js 软件包中有一件很棒的事情，那就是它们都同意使用语义版本控制作为版本编号。</p>
<p>语义版本控制的概念很简单：所有的版本都有 3 个数字：<code v-pre>x.y.z</code>。</p>
<ul>
<li>第一个数字是主版本。也可以叫<strong>大版本</strong></li>
<li>第二个数字是次版本。也可以叫<strong>功能版本</strong></li>
<li>第三个数字是补丁版本。也可以叫<strong>Bug修复版本</strong></li>
</ul>
<p>当发布新的版本时，不仅仅是随心所欲地增加数字，还要遵循以下规则：</p>
<ul>
<li>当进行不兼容的 API 更改时，则升级主版本。</li>
<li>当以向后兼容的方式添加功能时，则升级次版本。</li>
<li>当进行向后兼容的缺陷修复时，则升级补丁版本。</li>
</ul>
<p>该约定在所有编程语言中均被采用，每个 <code v-pre>npm</code> 软件包都必须遵守该约定，这一点非常重要，因为整个系统都依赖于此。</p>
<p>为什么这么重要？</p>
<p>因为 <code v-pre>npm</code> 设置了一些规则，可用于在 <code v-pre>package.json</code> 文件中选择要将软件包更新到的版本（当运行 <code v-pre>npm update</code> 时）。</p>
<p>规则使用了这些符号：</p>
<ul>
<li><code v-pre>^</code></li>
<li><code v-pre>~</code></li>
<li><code v-pre>&gt;</code></li>
<li><code v-pre>&gt;=</code></li>
<li><code v-pre>&lt;</code></li>
<li><code v-pre>&lt;=</code></li>
<li><code v-pre>=</code></li>
<li><code v-pre>-</code></li>
<li><code v-pre>||</code></li>
</ul>
<p>这些规则的详情如下：</p>
<ul>
<li><code v-pre>^</code>: 只会执行不更改最左边非零数字的更新。 如果写入的是 <code v-pre>^0.13.0</code>，则当运行 <code v-pre>npm update</code> 时，可以更新到 <code v-pre>0.13.1</code>、<code v-pre>0.13.2</code> 等，但不能更新到 <code v-pre>0.14.0</code> 或更高版本。 如果写入的是 <code v-pre>^1.13.0</code>，则当运行 <code v-pre>npm update</code> 时，可以更新到 <code v-pre>1.13.1</code>、<code v-pre>1.14.0</code> 等，但不能更新到 <code v-pre>2.0.0</code> 或更高版本。</li>
<li><code v-pre>~</code>: 如果写入的是 <code v-pre>〜0.13.0</code>，则当运行 <code v-pre>npm update</code> 时，会更新到补丁版本：即 <code v-pre>0.13.1</code> 可以，但 <code v-pre>0.14.0</code> 不可以。</li>
<li><code v-pre>&gt;</code>: 接受高于指定版本的任何版本。</li>
<li><code v-pre>&gt;=</code>: 接受等于或高于指定版本的任何版本。</li>
<li><code v-pre>&lt;=</code>: 接受等于或低于指定版本的任何版本。</li>
<li><code v-pre>&lt;</code>: 接受低于指定版本的任何版本。</li>
<li><code v-pre>=</code>: 接受确切的版本。</li>
<li><code v-pre>-</code>: 接受一定范围的版本。例如：<code v-pre>2.1.0 - 2.6.2</code>。</li>
<li><code v-pre>||</code>: 组合集合。例如 <code v-pre>&lt; 2.1 || &gt; 2.6</code>。</li>
</ul>
<p>可以合并其中的一些符号，例如 <code v-pre>1.0.0 || &gt;=1.1.0 &lt;1.2.0</code>，即使用 1.0.0 或从 1.1.0 开始但低于 1.2.0 的版本。</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code>  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"vue"</span><span class="token operator">:</span> <span class="token string">"^3.2.25"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"@vitejs/plugin-vue"</span><span class="token operator">:</span> <span class="token string">"^2.3.3"</span><span class="token punctuation">,</span>
    <span class="token property">"vite"</span><span class="token operator">:</span> <span class="token string">"^2.9.9"</span>
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="node-modules文件夹" tabindex="-1"><a class="header-anchor" href="#node-modules文件夹" aria-hidden="true">#</a> node_modules文件夹</h2>
<p>node_modules 文件夹用来<code v-pre>存放所有已安装到项目中的包</code>。require() 导入第三方包时，就是从这个目录中查找并加载包。</p>
<h2 id="package-lock-json" tabindex="-1"><a class="header-anchor" href="#package-lock-json" aria-hidden="true">#</a> package-lock.json</h2>
<p><em><strong>package-lock.json 配置文件用来记录 node_modules 目录下的每一个包的下载信息，例如包的名字、版本号、下载地址等。</strong></em></p>
<p><code v-pre>package-lock.json</code>对于 npm 修改<code v-pre>node_modules</code>树或<code v-pre>package.json</code>. 它描述了生成的确切树，以便后续安装能够生成相同的树，而不管中间依赖项更新如何。</p>
<ul>
<li>描述依赖关系树的单一表示，以保证团队成员、部署和持续集成安装完全相同的依赖关系。</li>
<li>为用户提供一种“时间旅行”到以前状态的工具，<code v-pre>node_modules</code>而无需提交目录本身。</li>
<li>通过可读的源代码控制差异来促进对树更改的更大可见性。</li>
<li>并通过允许 npm 跳过以前安装的包的重复元数据解析来优化安装过程。</li>
</ul>
<h2 id="安装指定版本的npm包" tabindex="-1"><a class="header-anchor" href="#安装指定版本的npm包" aria-hidden="true">#</a> 安装指定版本的npm包</h2>
<p>通过@符号指定安装包时的版本号</p>
<ul>
<li>@</li>
</ul>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i moment@2.22.2
</code></pre></div><h2 id="使用package-json" tabindex="-1"><a class="header-anchor" href="#使用package-json" aria-hidden="true">#</a> 使用package.json</h2>
<ul>
<li><code v-pre>version</code> 表明了当前的版本。</li>
<li><code v-pre>name</code> 设置了应用程序/软件包的名称。</li>
<li><code v-pre>description</code> 是应用程序/软件包的简短描述。</li>
<li><code v-pre>main</code> 设置了应用程序的入口点。</li>
<li><code v-pre>private</code> 如果设置为 <code v-pre>true</code>，则可以防止应用程序/软件包被意外地发布到 <code v-pre>npm</code>。</li>
<li><code v-pre>scripts</code> 定义了一组可以运行的 node 脚本。</li>
<li><code v-pre>dependencies</code> 设置了作为依赖安装的 <code v-pre>npm</code> 软件包的列表。</li>
<li><code v-pre>devDependencies</code> 设置了作为开发依赖安装的 <code v-pre>npm</code> 软件包的列表。</li>
<li><code v-pre>engines</code> 设置了此软件包/应用程序在哪个版本的 Node.js 上运行。</li>
<li><code v-pre>browserslist</code> 用于告知要支持哪些浏览器（及其版本）。</li>
</ul>
<h3 id="save安装-save-dev标志" tabindex="-1"><a class="header-anchor" href="#save安装-save-dev标志" aria-hidden="true">#</a> <code v-pre>--save</code>安装<code v-pre>--save-dev</code>标志</h3>
<p>添加依赖项的更简单（也更棒）的方法是从命令行执行此操作，使用或 <code v-pre>package.json</code>标记<code v-pre>npm install</code>命令，具体取决于您希望如何使用该依赖项。<code v-pre>--save  --save-dev</code></p>
<p>在<code v-pre>package.json</code>'s 下的dependencies 下添加入口</p>
<p>To add an entry to your <code v-pre>package.json</code>'s <code v-pre>dependencies</code>:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>package_name<span class="token operator">></span> --save
</code></pre></div><p>To add an entry to your <code v-pre>package.json</code>'s <code v-pre>devDependencies</code>:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>package_name<span class="token operator">></span> --save-dev
</code></pre></div><h2 id="进一步了解package-json" tabindex="-1"><a class="header-anchor" href="#进一步了解package-json" aria-hidden="true">#</a> 进一步了解package.json</h2>
<h3 id="多人协作的问题" tabindex="-1"><a class="header-anchor" href="#多人协作的问题" aria-hidden="true">#</a> 多人协作的问题:</h3>
<p>package.json中必须包含name,version,main这三个属性,分别代表包的名字,版本号,包的入口</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code>  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"kblog"</span><span class="token punctuation">,</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>
</code></pre></div><p>第三方包的体积过大,不方便在团队成员之间共享项目源代码</p>
<p><em><strong>解决:把node_modules添加到.gitignore忽略文件中</strong></em></p>
<p><em><strong>package.json中会记录之前安装过哪些包</strong></em>，团队成员拉取代码后直接基于package.json就可以快速把需要的第三方包都安装好（只需要执行一条命令）</p>
<h3 id="通过命令快速创建package-json文件" tabindex="-1"><a class="header-anchor" href="#通过命令快速创建package-json文件" aria-hidden="true">#</a> 通过命令快速创建package.json文件</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init -y
</code></pre></div><blockquote>
<p>项目文件夹的名称一定要使用英文命名，不能出现空格</p>
</blockquote>
<blockquote>
<p>运行 npm install 命令安装包的时候,npm包概念里工具会自动把包的名称和版本号,记录到package.json中</p>
</blockquote>
<h3 id="dependencies节点" tabindex="-1"><a class="header-anchor" href="#dependencies节点" aria-hidden="true">#</a> dependencies节点</h3>
<p>专门用来记录您使用 npm install 命令安装了哪些包。</p>
<h2 id="devdependencies节点" tabindex="-1"><a class="header-anchor" href="#devdependencies节点" aria-hidden="true">#</a> devDependencies节点</h2>
<ul>
<li>如果某些包只在项目<em><strong>开发阶段</strong></em>会用到，在项目上线之后不会用到，则建议把这些包记录到 <em><strong>devDependencies</strong></em> 节点中。</li>
<li>与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到 dependencies 节点中</li>
</ul>
<h3 id="开发依赖包" tabindex="-1"><a class="header-anchor" href="#开发依赖包" aria-hidden="true">#</a> 开发依赖包</h3>
<p>To add an entry to your <code v-pre>package.json</code>'s <code v-pre>devDependencies</code>:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>package_name<span class="token operator">></span> --save-dev
</code></pre></div><div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>// 指定为开发依赖包，而非核心依赖包
<span class="token function">npm</span> i 包名 -D
或者
<span class="token function">npm</span> <span class="token function">install</span> 包名 --save-dev
</code></pre></div><h3 id="安装多个包" tabindex="-1"><a class="header-anchor" href="#安装多个包" aria-hidden="true">#</a> 安装多个包</h3>
<p>一次安装多个包,分别是jquery 和 art-template,中间用空格隔开</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i jquery art-template
</code></pre></div><h3 id="一次性安装所有的包" tabindex="-1"><a class="header-anchor" href="#一次性安装所有的包" aria-hidden="true">#</a> 一次性安装所有的包</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
或者
<span class="token function">npm</span> i
</code></pre></div><blockquote>
<p>执行npm install 命令时，npm包管理工具会先读取 packagejson 中的dependencies节点</p>
<p>读取到记录的所有依赖包名称和版本号之后，npm 包管理工具会把这些包一次性下载到项目中中</p>
</blockquote>
<h2 id="npm包分类" tabindex="-1"><a class="header-anchor" href="#npm包分类" aria-hidden="true">#</a> npm包分类</h2>
<h3 id="开发依赖包-1" tabindex="-1"><a class="header-anchor" href="#开发依赖包-1" aria-hidden="true">#</a> 开发依赖包</h3>
<p>开发依赖包（被记录到 devDependencies 节点中的包，只在开发期间会用到）</p>
<h3 id="核心依赖包" tabindex="-1"><a class="header-anchor" href="#核心依赖包" aria-hidden="true">#</a> 核心依赖包</h3>
<p>核心依赖包（被记录到 dependencies 节点中的包，在开发期间和项目上线之后都会用到）</p>
<h3 id="全局包目录地址" tabindex="-1"><a class="header-anchor" href="#全局包目录地址" aria-hidden="true">#</a> 全局包目录地址</h3>
<p>在执行npm install命令时 , 如果提供了-g参数 ,则会把包安装为全局包</p>
<p>全局包会被安装到C:\Users\Kevin\AppData\Roaming\npm\node_modules目录下</p>
<p><img src="@source/guide/vue/assets/npm-g.png" alt=""></p>
<blockquote>
<p>只有<strong>工具性的包</strong> ,才会有全局安装的必要性,因为它们提供了好用的终端命令</p>
</blockquote>
<h3 id="i5ting-toc将md转为html" tabindex="-1"><a class="header-anchor" href="#i5ting-toc将md转为html" aria-hidden="true">#</a> i5ting_toc将md转为html</h3>
<p>i5ting_toc是一个可以把md文档转为html页面的小工具</p>
<h2 id="开发属于自己的包" tabindex="-1"><a class="header-anchor" href="#开发属于自己的包" aria-hidden="true">#</a> 开发属于自己的包</h2>
<h3 id="了解需要实现的功能" tabindex="-1"><a class="header-anchor" href="#了解需要实现的功能" aria-hidden="true">#</a> 了解需要实现的功能</h3>
<h3 id="初始化包的基本解构" tabindex="-1"><a class="header-anchor" href="#初始化包的基本解构" aria-hidden="true">#</a> 初始化包的基本解构</h3>
<p>新建 <code v-pre>project_name-tools</code> 文件夹，作为包的根目录</p>
<p>在 <code v-pre>project_name-tools</code> 文件夹中，新建如下三个文件：</p>
<ul>
<li><code v-pre>package.json</code> (包管理配置文件)</li>
<li><code v-pre>index.js</code> (包的入口文件) <em><strong>通过require导入这个文件</strong></em></li>
<li><code v-pre>README.md</code> (包的说明文档)</li>
</ul>
<h3 id="初始化package-json配置文件" tabindex="-1"><a class="header-anchor" href="#初始化package-json配置文件" aria-hidden="true">#</a> 初始化package.json配置文件</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"project_name-tools"</span><span class="token punctuation">,</span><span class="token comment">//名字不能是npm已经有的</span>
  <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token string">"1.1.0"</span><span class="token punctuation">,</span><span class="token comment">//版本</span>
  <span class="token string-property property">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span><span class="token comment">//入口文件</span>
  <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">"提供了XXX功能"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">//搜索关键字</span>
    <span class="token string">"XXX"</span><span class="token punctuation">,</span>
    <span class="token string">"XXX"</span><span class="token punctuation">,</span>
    <span class="token string">"XXX"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="在index-js中定义格式化时间的方法" tabindex="-1"><a class="header-anchor" href="#在index-js中定义格式化时间的方法" aria-hidden="true">#</a> 在index.js中定义格式化时间的方法</h3>
<h3 id="package-json中main属性" tabindex="-1"><a class="header-anchor" href="#package-json中main属性" aria-hidden="true">#</a> package.json中main属性</h3>
<p>package.json中main属性的作用:</p>
<ol>
<li><code v-pre>Node</code> 在使用 <code v-pre>require</code> 导入某个路径的时候，发现没有具体的文件，就会看这个路径下查看是否有 <code v-pre>package.json</code> 这个文件</li>
<li>如果有，则查看是否有 <code v-pre>main</code> 这个属性</li>
<li>而如果main属性也有，则指定 <code v-pre>main</code> 属性对应的文件作为要执行的文件</li>
</ol>
<h3 id="将不同的功能进行模块化的拆分" tabindex="-1"><a class="header-anchor" href="#将不同的功能进行模块化的拆分" aria-hidden="true">#</a> 将不同的功能进行模块化的拆分</h3>
<p>index.js中不写太多代码，主要负责导入其他模块，并把这些模块中需要向外暴露的成员，统一往外暴露。</p>
<h2 id="把包发布到npm上" tabindex="-1"><a class="header-anchor" href="#把包发布到npm上" aria-hidden="true">#</a> 把包发布到npm上</h2>
<p>将终端切换到包的根目录之后 .运行 <code v-pre>npm publish</code> 命令，即可将包发布到 <code v-pre>npm</code> 上</p>
<blockquote>
<p>注意:包名不能雷同</p>
</blockquote>
<h3 id="删除已发布的包" tabindex="-1"><a class="header-anchor" href="#删除已发布的包" aria-hidden="true">#</a> 删除已发布的包</h3>
<p><code v-pre>npm unpublish 包名 --force</code></p>
<blockquote>
<ul>
<li><code v-pre>npm unpublish</code> 命令只能删除 72 小时以内发布的包</li>
<li><code v-pre>npm unpublish</code> 删除的包，<strong>在 24 小时内不允许重复发布</strong></li>
</ul>
</blockquote>
</div></template>
