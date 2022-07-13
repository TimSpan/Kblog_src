

# 在本地启动服务器来开发你的文档网站

```js
npm run docs:dev
```

VuePress 会在 [http://localhost:8080在新窗口打开](http://localhost:8080/) 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。

# vuepressBuild

```json
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```

- **构建命令：**`npm run docs:build` or `yarn docs:build`
- **发布目录：**`docs/.vuepress/dist`

# 自动化部署

在文件下新建deploy.sh文件,内容如下:

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:timspan/ti.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

我们在package.json设置快捷方式

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "docs:deploy": "bash deploy.sh"   
  },
```

运行代码

```shell
npm run docs:deploy
```

