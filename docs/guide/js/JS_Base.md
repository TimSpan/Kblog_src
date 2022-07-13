
## windows对象简介

`在js中，一个浏览器窗口就是一个windows对象（这句话很重要）`

简单里说js会把一个窗口看成一个对象，这样我们就可以用这个对象的属性的方法来操作这个窗口。实际上我们每次打开一个页面时，浏览器都会自动为这个页面创建一个windows对象

- window对象是一个全局对象，也可以说是JavaScript中的顶级对象
- 像document、alert()、console.log()这些都是window的属性，基本BOM的属性和方法都是window的。
- 所有通过var定义在全局作用域中的变量、函数都会变成window对象的属性和方法
- window对象下的属性和方法调用的时候可以省略window

## windows对象下的子对象

1. document 文档操作，用于操作页面元素
2. location 地址对象，用于操作URL地址
3. navigator 浏览器对象，用于操作获取浏览器的版本
4. history 历史对象，用于操作浏览历史
5. screen 屏幕对象，操作屏幕高度宽度

windows对象以及下面的location、navigator等子对象，由于都是操作浏览器窗口的，所以又称之为" BOM "也就是Browser Object Module（浏览器对象模型）。
