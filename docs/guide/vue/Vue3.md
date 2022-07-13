# Vue3

## v-for

用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 items 是源数据数组，而 `item` 则是被迭代的数组元素的**别名**

## 组件名为多个单词

**组件名应该始终由多个单词组成，除了根组件 `App`，以及 `<transition>`、`<component>` 之类的 Vue 内置组件。**

这样做可以避免与现有以及未来的 HTML 元素[产生冲突](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)，因为所有的 HTML 元素名称都是单个单词的。

## mount

在 Vue 3.x 中，当我们挂载一个应用时，其渲染内容会替换我们传递给 `mount` 的元素的 `innerHTML`：

```js
const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  template: `
    <div id="rendered">{{ message }}</div>
  `
})

app.mount('#app')
```

当这个应用挂载到拥有匹配 `id="app"` 的 `div` 的页面时，结果会是：

```html
<body>
  <div id="app" data-v-app="">
    <div id="rendered">Hello Vue!</div>
  </div>
</body>
```

## setup

Vue3 的一大特性函数 ---- setup

　　1、setup函数是处于 生命周期函数 beforeCreate 和 Created 两个钩子函数之间的函数 也就说在 setup函数中是无法 使用 data 和 methods 中的数据和方法的

　　2、setup函数是 Composition API（组合API）的入口

　　3、在setup函数中定义的变量和方法最后都是需要 return 出去的 不然无法再模板中使用



#### setup函数的注意点

1. 由于在执行 setup函数的时候，还没有执行 Created 生命周期方法，所以在 setup 函数中，无法使用 data 和 methods 的变量和方法
2. 由于我们不能在 setup函数中使用 data 和 methods，所以 Vue 为了避免我们错误的使用，直接将 setup函数中的this修改成了 undefined
3. setup函数只能是同步的不能是异步的

　


