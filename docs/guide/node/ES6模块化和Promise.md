# ES6模块化和Promise以及异步

## ES6模块化

ES6模块化规范是浏览器和服务器端通用的模块化开发规范,它的出现极大的降低了前端开发者的模块化学习成本,开发者不需再额外学习AMD  CMD  或 CommonJS等模块化规范

### ES6模块化规定

- 每个js文件都是一个独立的模块
- 导入其他模块成员使用 `import` 关键字
- 向外共享成员使用 export 关键字

### 在node.js中使用ES6 模块化

在package.json文件中添加 `"type":"module"` 节点

或者也可以用另外一种形式：

1. 初始化package.json: `npm init -y`
2. 安装插件：`npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node`
3. 安装第二波插件：`npm install --save @babel/polyfill`
4. 在项目根目录中创建一个 `babel.config.js` 文件，代码如下：

```js
  const presets = [
      [
         "@babel/env",{
            targets:{
               edge:"17",
               firefox:"60",
               chrome:"67",
               safari:"11.1"
            }
         }
      ]
      
   ]
   module.exports = {
      presets
   }
```

使用特定命令运行js文件：`npx babel-node ./index.js`

### ES6默认导出和导入

### 导出

`export default`

### 导入

```js
import 接受名称 from ' 模块标识符 '
```

### 导出和导入

> 每个模块中,只允许使用唯一的一次 `export default`.否则会报错

### 按需导入

大括号字面量

```js
import { createApp } from 'vue'
import { Button } from 'vant'
import { Swipe, SwipeItem } from 'vant'
```

## Promise

### 回调地狱

多层回调函数的相互嵌套,就形成了回调地狱.. 示例代码:



### Promise的基本概念

Promise是一个构造函数

- 创建Promise的实例 const p = new Promise()
- new 出来的Promise实例对象 ,代表一个异步操作

### Promise.prototype.then()

`then()` 方法返回一个 [`Promise` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。































[使用promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises#%E7%BA%A6%E5%AE%9A)

[Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[Promise.prototype.then()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)