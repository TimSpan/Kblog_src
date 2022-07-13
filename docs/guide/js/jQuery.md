# jQuery

## jQuery源码

实际上jQuery是一个函数，为什么要这样设计呢，是因为：

1. 函数也是对象，于是在jQuery这个命名空间上可以绑定工具方法
2. 函数可以有原型prototype，每当通过dom = $(“#id”)取得的所谓jQuery对象，本质就是dom = new jQuery(‘#id’);

## 顶级对象

```js
$('div').hide();
// 1. 等着页面DOM加载完毕再去执行js 代码
$(document).ready(function() {
    $('div').hide();
})
```

```js
console.log(jQuery === $); // true
console.dir(jQuery) //顶级对象
console.dir(jQuery.name)// w
// jQuery
w = function (e, t) { return new w.fn.init(e, t) }
```

```js
console.dir($('video')[0] === document.querySelector('video')) //true
```



## 筛选选择器

```js
$("ul li:eq(2)").css("color", "blue");
// 获取索引号为2的元素,索引从0开始
$("ul li:first").css("color", "red");//获取第一个
$("ul li:last").css("color", "red");//获取最后一个
```

## 筛选方法

```js
// 1. 父  parent()  返回的是 最近一级的父级元素 亲爸爸
$(".son").parent()
// 2. 子
// (1) 亲儿子 children()  类似子代选择器  ul>li
$(".nav").children("p").css("color", "red");
// (2) 可以选里面所有的孩子 包括儿子和孙子  find() 类似于后代选择器
$(".nav").find("p").css("color", "red");
```

```js
// 兄弟元素siblings 除了自身元素之外的所有亲兄弟
$("ol .item").siblings("li").css("color", "red");
```

## 排他思想

```js
$(function() {
    // 1. 隐式迭代 给所有的按钮都绑定了点击事件
    $("button").click(function() {
        // 2. 当前的元素变化背景颜色
        $(this).css("background", "pink");
        // 3. 其余的兄弟去掉背景颜色 隐式迭代
        $(this).siblings("button").css("background", "");
    });
})
```

### 链式编程

```js
// 将上述代码修成为:
$(this).css("color", "red").siblings().css("color", "");
```

## 操作样式之css方法

```js
$("div").css({
    width: 400,
    height: 400,
    backgroundColor: "red",
    // 如果是复合属性则必须采取驼峰命名法，如果值不是数字，则需要加引号
})
```

## 元素的增删改查

```js
<body>
    <div class="current"></div>
    <script>
$(function() {
    // 1. 添加类 addClass()
    $("div").click(function() {
        $(this).addClass("current");
    });
    // 2. 删除类 removeClass()
    $("div").click(function() {
        $(this).removeClass("current");
    });
    // 3. 切换类 toggleClass()
    $("div").click(function() {
        $(this).toggleClass("current");
    });
})
    </script>
</body>

```

## 不影响原先类的类操作

```js
let div = $(".one").addClass("two");  //这个addClass相当于追加类名 不影响以前的类名
// let div = $(".one").removeClass("two");
console.dir(div[0]) // div.one.two
```

## 自定义动画animate

用于创建自定义动画的函数。

这个函数的关键在于指定动画形式及结果样式属性对象。***这个对象中每个属性都表示一个可以变化的样式属性（如“height”、“top”或“opacity”）***。注意：所有指定的属性必须用骆驼形式，比如用marginLeft代替margin-left. 

而每个属性的值表示这个样式属性到多少时动画结束。如果是一个数值，样式属性就会从当前的值渐变到指定的值。如果使用的是“hide”、“show”或“toggle”这样的字符串值，则会为该属性调用默认的动画形式。

## 遍历对象each()

```js
$(function () {
    var sum = 0;
    // 1. each() 方法遍历元素 
    var arr = ["red", "green", "blue"];
    $("div").each(function (i, domEle) {
        // 回调函数第一个参数是索引号
        // 回调函数第二个参数是dom元素对象 
        $(domEle).css("color", arr[i]);
        sum += parseInt($(domEle).text());
    })
}
```

