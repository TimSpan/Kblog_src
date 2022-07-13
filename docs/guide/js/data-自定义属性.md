# [data-*自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*)

## 自定义属性



```js
<ul>
    <li data-id="10784">Jason Walters, 003: Found dead in "A View to a Kill".</li>
    <li data-id="97865">Alex Trevelyan, 006: Agent turned terrorist leader; James' nemesis in "Goldeneye".</li>
    <li data-id="45732">James Bond, 007: The main man; shaken but not stirred.</li>
</ul>
```

所有这些自定义数据属性都可以通过所属元素的 [`HTMLElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement) 接口来访问。 [`HTMLElement.dataset` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) 属性可以访问它们。 `*` 可以使用遵循 [xml 名称生产规则](https://www.w3.org/TR/REC-xml/#NT-Name) 的任何名称来被替换，并具有以下限制：

1. 该名称不能以`xml`开头，无论这些字母是大写还是小写；
2. 该名称不能包含任何分号 (`U+003A`)；
3. 该名称不能包含 A 至 Z 的大写字母。



注意，[`HTMLElement.dataset` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) 属性是一个[`DOMStringMap`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMStringMap)

## 使用数据属性

[HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)是具有扩展性的设计，它初衷是数据应与特定的元素相关联，但不需要任何定义。[data-* 属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#data-*)允许我们在标准内于 HTML 元素中存储额外的信息，而不需要使用类似于 [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)，

## JavaScript 访问

在外部使用[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)去访问这些属性的值同样非常简单。你可以使用[`getAttribute()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getAttribute)配合它们完整的 HTML 名称去读取它们，但标准定义了一个更简单的方法：[`DOMStringMap`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMStringMap)你可以使用[`dataset` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)读取到数据。

为了使用`dataset`对象去获取到数据属性，需要获取属性名中`data-`之后的部分 (要注意的是破折号连接的名称需要改写为骆驼拼写法 (如"index-number"转换为"indexNumber"))。

```html
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
```

```js
var article = document.querySelector('#electriccars');

article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"
```

## CSS访问

注意，data 设定为 HTML 属性，他们同样能被[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)访问。比如你可以通过[generated content](https://developer.mozilla.org/en-US/docs/Web/CSS/content)使用函数[`attr()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr)来显示 data-parent 的内容：

```css
article::before {
  content: attr(data-parent);
}
```

你也同样可以在 CSS 中使用[属性选择器](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)根据 data 来改变样式：

```css
article[data-columns='3'] {
  width: 400px;
}
article[data-columns='4'] {
  width: 600px;
}
```

Data 属性同样可以存储不断变化的信息，比如游戏的得分。使用 CSS 选择器与 JavaScript 去访问可以让你得到花俏的效果，这里你并不需要用常规的编写方案来编写代码。有关使用生成内容和 CSS 转换（[JSBin 示例](https://jsbin.com/atawaz/3/edit)）的示例，请参阅此[视频](https://www.youtube.com/watch?v=On_WyUB1gOk)。

数据值是字符串。必须在选择器中引用数值才能使样式生效。