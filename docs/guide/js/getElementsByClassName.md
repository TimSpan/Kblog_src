# getElementsByClassName

```javascript
let click_me = document.getElementsByClassName('button')
click_me[0].onclick = function () {
  alert('玉翔一直爱江梅')
}
```

> **`Element.getElementsByClassName()`** 方法返回一个即时更新的（live） [`HTMLCollection`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection)，包含了所有拥有指定 class 的子元素。当在 document 对象上调用此方法时，会检索整个文档，包括根元素。
>
> 相似地，[`getElementsByClassName()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementsByClassName) 方法会在整个文档上执行；它返回指定拥有指定 class 名称的 document 根节点的后代元素。