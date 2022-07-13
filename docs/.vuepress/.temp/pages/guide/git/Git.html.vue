<template><div><h2 id="解决git合并分支冲突" tabindex="-1"><a class="header-anchor" href="#解决git合并分支冲突" aria-hidden="true">#</a> 解决git合并分支冲突</h2>
<img src="@source/guide/git/assets/merge.png"  />
<p>当合并分支冲突后VSCode智能提示、然后点击Accept Current Change或其他选项手动解决冲突、再次输入<code v-pre>git add .</code> 命令即可提交</p>
<blockquote>
<p>需要注意的是新增代码是可以成功合并的、对现有代码产生修改、合并才会产生冲突</p>
</blockquote>
<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2>
<ul>
<li>工作区：就是你在电脑里能看到的目录。</li>
<li>暂存区：英文叫 stage 或 index。一般存放在 <strong>.git</strong> 目录下的 index 文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。</li>
<li>版本库：工作区有一个隐藏目录 <strong>.git</strong>，这个不算工作区，而是 Git 的版本库。</li>
</ul>
<h2 id="git基本操作" tabindex="-1"><a class="header-anchor" href="#git基本操作" aria-hidden="true">#</a> GIT基本操作</h2>
<h3 id="配置用户信息" tabindex="-1"><a class="header-anchor" href="#配置用户信息" aria-hidden="true">#</a> 配置用户信息</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">"Kevin"</span>
<span class="token function">git</span> config --global user.email <span class="token string">"cat20201314@163.com"</span>
</code></pre></div><h3 id="检查配置信息" tabindex="-1"><a class="header-anchor" href="#检查配置信息" aria-hidden="true">#</a> 检查配置信息</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看所有的全局配置项</span>
<span class="token function">git</span> config --list --global
</code></pre></div><h3 id="以精简的方式显示文件状态" tabindex="-1"><a class="header-anchor" href="#以精简的方式显示文件状态" aria-hidden="true">#</a> 以精简的方式显示文件状态</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token comment"># 以精简的方式显示文件状态</span>
<span class="token function">git</span> status -s
<span class="token function">git</span> status --short
</code></pre></div><h3 id="跟踪新文件" tabindex="-1"><a class="header-anchor" href="#跟踪新文件" aria-hidden="true">#</a> 跟踪新文件</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> index.html
<span class="token comment"># 如果文件过多，你项跟踪目录下所有文件</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre></div><h3 id="提交更新" tabindex="-1"><a class="header-anchor" href="#提交更新" aria-hidden="true">#</a> 提交更新</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit -m <span class="token string">"Frist commit"</span>
</code></pre></div><h3 id="取消暂存的文件" tabindex="-1"><a class="header-anchor" href="#取消暂存的文件" aria-hidden="true">#</a> 取消暂存的文件</h3>
<p>把文件移除暂存区</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset HEAD 要移出的文件名称
</code></pre></div><h3 id="跳过暂存区域" tabindex="-1"><a class="header-anchor" href="#跳过暂存区域" aria-hidden="true">#</a> 跳过暂存区域</h3>
<p>要在提交的时候，给 <code v-pre>git commit</code> 加上 <code v-pre>-a</code> 选项，Git 就会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 <code v-pre>git add</code> 步骤</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit -a -m <span class="token string">"日志信息"</span>
</code></pre></div><h3 id="移除文件" tabindex="-1"><a class="header-anchor" href="#移除文件" aria-hidden="true">#</a> 移除文件</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token comment"># 从 Git仓库和工作区中同时移除 index.js 文件</span>
<span class="token function">git</span> <span class="token function">rm</span> -f index.js
<span class="token comment"># 只从 Git 仓库中移除 index.css，但保留工作区中的 index.css 文件</span>
<span class="token function">git</span> <span class="token function">rm</span> --cached index.css
</code></pre></div><h3 id="gitignore-的格式规范" tabindex="-1"><a class="header-anchor" href="#gitignore-的格式规范" aria-hidden="true">#</a> <code v-pre>.gitignore</code> 的格式规范</h3>
<ol>
<li>以 <strong># 开头</strong>的是注释</li>
<li>以 <strong>/ 结尾</strong>的是目录</li>
<li>以 <strong>/ 开头</strong>防止递归</li>
<li>以 <strong>! 开头</strong>表示取反</li>
<li>可以使用 <strong>glob 模式</strong>进行文件和文件夹的匹配（glob 指简化了的正则表达式）
<ul>
<li><strong>星号 *</strong> 匹配<strong>零个或多个任意字符</strong></li>
<li><strong><code v-pre>[abc]</code></strong> 匹配<strong>任何一个列在方括号中的字符</strong> （此案例匹配一个 a 或匹配一个 b 或匹配一个 c）</li>
<li><strong>问号 ?</strong> 只匹配<strong>一个任意字符</strong></li>
<li><strong>两个星号 *</strong>* 表示匹配<strong>任意中间目录</strong>（比如 a/**/z 可以匹配 a/z 、 a/b/z 或 a/b/c/z 等）</li>
<li>在方括号中使用<strong>短划线</strong>分隔两个字符， 表示所有在这两个字符范围内的都可以匹配（比如 [0-9] 表示匹配所有 0 到 9 的数字）</li>
</ul>
</li>
</ol>
<h3 id="查看提交历史" tabindex="-1"><a class="header-anchor" href="#查看提交历史" aria-hidden="true">#</a> 查看提交历史</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token comment"># 按时间先后顺序列出所有的提交历史，最近的提交在最上面</span>
<span class="token function">git</span> log

<span class="token comment"># 只展示最新的两条提交历史，数字可以按需进行填写</span>
<span class="token function">git</span> log -2

<span class="token comment"># 在一行上展示最近两条提交历史的信息</span>
<span class="token function">git</span> log -2 --pretty<span class="token operator">=</span>oneline

<span class="token comment"># 在一行上展示最近两条提交历史信息，并自定义输出的格式</span>
<span class="token comment"># %h 提交的简写哈希值  %an 作者名字  %ar 作者修订日志  %s 提交说明</span>
<span class="token function">git</span> log -2 --pretty<span class="token operator">=</span>format:<span class="token string">"%h | %an | %ar | %s"</span>
</code></pre></div><p><code v-pre>常用的</code></p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log --pretty<span class="token operator">=</span>oneline
</code></pre></div><h3 id="「-回退到指定的版本」" tabindex="-1"><a class="header-anchor" href="#「-回退到指定的版本」" aria-hidden="true">#</a> 「 回退到指定的版本」</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token comment"># 使用 git reset --hard 命令，根据指定的提交 ID 回退到指定版本</span>
<span class="token function">git</span> reset --hard <span class="token operator">&lt;</span>CommitID<span class="token operator">></span>
</code></pre></div><h3 id="如果回退到历史版本-如何查看所有历史记录" tabindex="-1"><a class="header-anchor" href="#如果回退到历史版本-如何查看所有历史记录" aria-hidden="true">#</a> 如果回退到历史版本，如何查看所有历史记录</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token comment"># 在旧版本中使用 git reflog --pretty=oneline 命令，查看命令操作的历史</span>
<span class="token function">git</span> reflog --pretty<span class="token operator">=</span>onelone
</code></pre></div><h3 id="生成ssh-key" tabindex="-1"><a class="header-anchor" href="#生成ssh-key" aria-hidden="true">#</a> 生成SSH key</h3>
<ol>
<li>
<p>打开 Git Bash</p>
</li>
<li>
<p>执行如下命令</p>
<p>ssh-keygen -t rsa -b 4096 -C &quot;cat20201314@163.com&quot;</p>
</li>
</ol>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>ssh-keygen -m PEM -t ed25519 -C "cat20201314@163.com" 
</code></pre></div><h3 id="参考地址" tabindex="-1"><a class="header-anchor" href="#参考地址" aria-hidden="true">#</a> <a href="https://help.coding.net/docs/repo/ssh/config.html" target="_blank" rel="noopener noreferrer">参考地址<ExternalLinkIcon/></a></h3>
<ol>
<li>连续输入 3 次回车，即会在 <code v-pre>C:\Users\用户名文件夹\.ssh</code> 目录下生成 SSH key</li>
</ol>
<h3 id="ssh-key由哪两部分组成" tabindex="-1"><a class="header-anchor" href="#ssh-key由哪两部分组成" aria-hidden="true">#</a> SSH key由哪两部分组成</h3>
<ul>
<li>
<p>id_rsa（私钥文件，存放于客户端的电脑中即可）</p>
</li>
<li>
<p>id_rsa.pub（公钥文件，<strong>需要配置到 Github 中</strong>）</p>
</li>
</ul>
<h3 id="检查ssh-key是否配置成功" tabindex="-1"><a class="header-anchor" href="#检查ssh-key是否配置成功" aria-hidden="true">#</a> 检查SSH key是否配置成功</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">ssh</span> -T git@github.com  <span class="token comment"># GitHub</span>
<span class="token function">ssh</span> -T git@gitee.com   <span class="token comment"># 码云</span>
<span class="token function">ssh</span> -T git@coding.net  <span class="token comment">#coding</span>
</code></pre></div><h2 id="基于ssh将本地仓库推送到github" tabindex="-1"><a class="header-anchor" href="#基于ssh将本地仓库推送到github" aria-hidden="true">#</a> 基于SSH将本地仓库推送到GitHub</h2>
<h4 id="推送步骤" tabindex="-1"><a class="header-anchor" href="#推送步骤" aria-hidden="true">#</a> 推送步骤</h4>
<p>1、关联本地仓库和远程仓库，将关联到的远程仓库命令为origin</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin 远程仓库SSH地址
</code></pre></div><p>2、将当前所在主分支master重命名为main分支（非必须）</p>
<p><em>由于最近爆发的美国的黑人事件，master有奴隶主的意思，GitHub为了避嫌，因此在文档中会建议用户把master分支重命名为main分支</em></p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch -M main
</code></pre></div><p>3、将本地分支推送到远程仓库</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token comment"># 如果没有执行第2步</span>
<span class="token function">git</span> push -u origin master

<span class="token comment"># 如果执行了第2步</span>
<span class="token function">git</span> push -u origin main
</code></pre></div><h2 id="git-分支管理" tabindex="-1"><a class="header-anchor" href="#git-分支管理" aria-hidden="true">#</a> <a href="https://www.runoob.com/git/git-branch.html" target="_blank" rel="noopener noreferrer">Git 分支管理<ExternalLinkIcon/></a></h2>
<ol>
<li>
<p>什么是主分支？</p>
<p>在初始化本地 Git 仓库的时候，Git默认已经帮我们创建了一个名字叫做 <code v-pre>master</code>的分支。通常我们把这个<code v-pre>master</code>分支叫做主分支。</p>
</li>
<li>
<p>使用主分支有什么注意事项？</p>
<p>按照约定，在团队开发中，不要直接在主分支上改代码。</p>
</li>
<li>
<p>主分支和其他分支有本质区别吗？</p>
<p>没有本质区别，所有分支的特性都是一样的, <code v-pre>master</code>也只是分支的名字而已。</p>
</li>
</ol>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token comment"># 创建分支命令</span>
<span class="token function">git</span> branch <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span>
<span class="token comment"># 示例</span>
<span class="token function">git</span> branch testing

<span class="token comment"># 查看本地分支</span>
<span class="token function">git</span> branch
<span class="token comment"># 查看所有分支</span>
<span class="token function">git</span> branch -a

<span class="token comment"># 切换分支命令</span>
<span class="token function">git</span> checkout <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span>
<span class="token comment"># 创建新分支并立即切换到该分支下</span>
<span class="token function">git</span> checkout -b <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span> 

<span class="token comment"># 合并分支命令</span>
<span class="token function">git</span> merge 
<span class="token comment"># 删除分支命令</span>
<span class="token function">git</span> branch -d <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span>
</code></pre></div><h2 id="git-push-完整命令" tabindex="-1"><a class="header-anchor" href="#git-push-完整命令" aria-hidden="true">#</a> git push 完整命令</h2>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push <span class="token operator">&lt;</span>远程主机名<span class="token operator">></span> :<span class="token operator">&lt;</span>本地分支名<span class="token operator">></span>
</code></pre></div><div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push <span class="token operator">&lt;</span>远程主机名<span class="token operator">></span>
<span class="token comment"># 如果当前分支和远程分支存在追踪关系，则本地分支和远程分支都可以忽略。</span>

<span class="token function">git</span> push
<span class="token comment"># 如果当前分支只有一个远程分支，那么远程主机也可以省略，可以使用</span>
</code></pre></div><div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push -u
<span class="token comment"># 如果当前分支和多个主机之间存在追踪关系，可以使用这个命令来设置一个默认的主机，例如：</span>
<span class="token function">git</span> push -u origin master
</code></pre></div><div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push –force <span class="token operator">&lt;</span>远程主机<span class="token operator">></span> <span class="token comment">#强制提交</span>
<span class="token function">git</span> push -f <span class="token comment">#简写</span>
<span class="token comment"># git push -f 这个命令的作用是将自己本地仓库的代码直接推送至仓库，完全以你的提交为准，之前其他人的提交都会被覆盖。</span>
</code></pre></div><h2 id="git-pull" tabindex="-1"><a class="header-anchor" href="#git-pull" aria-hidden="true">#</a> git pull</h2>
<blockquote>
<p>拉取最新代码至本地</p>
</blockquote>
<h2 id="git-branch" tabindex="-1"><a class="header-anchor" href="#git-branch" aria-hidden="true">#</a> git branch</h2>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token comment"># 删除分支命令</span>
<span class="token function">git</span> branch -d <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span>

<span class="token comment"># 强制删除</span>
<span class="token function">git</span> branch -D reg <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span>

<span class="token comment"># 删除远程分支</span>
<span class="token function">git</span> push origin --delete <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span>
</code></pre></div><h2 id="连接多个远程仓库" tabindex="-1"><a class="header-anchor" href="#连接多个远程仓库" aria-hidden="true">#</a> 连接多个远程仓库</h2>
</div></template>
