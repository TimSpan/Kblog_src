# DOM节点

## insertAdjacentElement()

**把字符串格式元素添加到父元素中**

```js
element.insertAdjacentElement(position, element);
//把字符串格式元素添加到父元素中
```

position:

- `'beforebegin'`: 在该元素本身的前面。
- `'afterbegin'`:只在该元素当中，在该元素第一个子孩子前面。
- `'beforeend'`:只在该元素当中，在该元素最后一个子孩子后面。
- `'afterend'`: 在该元素本身的后面

`element`:要插入到树中的元素。

> 如果插入失败则返回 null.
>
> appendChild不支持追加字符串的子元素,insertAdjacentElement支持追加字符串的元素



DOM树里每一个内容都称之为节点

## 节点类型

### 元素节点

1. 所有的标签 比如 body、 div
2. html 是根节点

### 属性节点

所有的属性 比如 href  class

### 文本节点

所有的文本

## 查找节点

### 父节点查找parentNode

`parentNode 属性`

返回最近一级的父节点 找不到返回为`null`

```javascript
子元素.parentNode
```

### 子节点查找childNodes

`childNodes`

获得所有子节点、包括文本节点（空格、换行）、注释节点等

`children`

仅获得所有元素节点

> 返回 一个 Node 的子[`elements`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) ，是一个动态更新的 [`HTMLCollection`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection)。
>
> `children` 属性为只读属性，对象类型为 [`HTMLCollection`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection)，你可以使用 `elementNodeReference.children[1].nodeName` 来获取某个子元素的标签名称。

### 兄弟关系查找nextElementSibling

下一个兄弟节点`nextElementSibling`属性

上一个兄弟节点`previousElementSibling` 属性

## 增加节点

### 创建节点createElement

即创造出一个新的网页元素，再添加到网页内，一般先创建节点，然后插入节点

```javascript
// 创造一个新的元素节点
document.createElement('标签名')
```

### 追加节点appendChild

要想在界面看到，还得插入到某个父元素中

插入到父元素的最后一个子元素

```javascript
// 插入到这个父元素的最后
父元素.appendChild(要插入的元素)
```

插入到父元素中某个子元素的前面

```javascript
// 插插入到某个子元素的前面
父元素.insertBefore(要插入的元素,在哪个元素前面)
ul.insertBefore(li, ul.children[0])
```



```javascript
//示例
const div = document.createElement('div')
document.body.appendChild(div)
```

### 插入节点insertAdjacentHTML

**`insertAdjacentHTML()`** 方法将指定的文本解析为 [`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 元素，并将结果节点插入到 DOM 树中的指定位置。它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，使其比直接使用 innerHTML 操作更快。

```js
element.insertAdjacentHTML(position, text);
```

POSITION

- `'beforebegin'`：元素自身的前面。
- `'afterbegin'`：插入元素内部的第一个子节点之前。
- `'beforeend'`：插入元素内部的最后一个子节点之后。
- `'afterend'`：元素自身的后面。





### 克隆节点cloneNode

复制一个原有的节点

把复制的节点放入到指定的元素内部

```javascript
// 克隆一个已有的而元素节点
元素.cloneNode(布尔值)
```

`cloneNode`会克隆出一个跟原标签一样的元素，括号内传入布尔值

1. 若为true，则代表克隆时会包含后代节点一起克隆
2. 若为false，则代表克隆时不包含后代节点
3. 默认为false

### 删除节点removeChild

在 JavaScript 原生DOM操作中，要删除元素必须通过父元素删除

```javascript
父元素.removeChild(要删除的元素)
```

> 如不存在父子关系则删除不成功
>
> 删除节点和隐藏节点（display:none） 有区别的： 隐藏节点还是存在的，但是删除，则从html中删除节点

## 触屏事件touch

| 触摸touch事件 |             说明              |
| :-----------: | :---------------------------: |
|  touchstart   | 手指触摸到一个DOM元素时的触发 |
|   touchmove   | 手指在一个DOM元素上滑动时触发 |
|   touchend    | 手指在一个DOM元素上移开时触发 |

