# Function函数

在 JavaScript中，函数是**头等(first-class)对象**，因为它们可以像任何其他**对象**一样具有属性和方法。它们与其他对象的区别在于函数可以被调用。简而言之，它们是**`Function`对象**。

在JavaScript中，每个函数其实都是一个`Function`对象。查看[`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)页面`了解其`属性和方法。

## IIFE（立即调用函数表达式）

写法

```javascript
// 1. 第一种写法
(function (x, y) {
  console.log(x + y)
})(1, 2);
// (function(){})();
// 2.第二种写法
// (function () { }());
(function (x, y) {
  console.log(x + y)
}(1, 3));
```

## 函数声明与函数表达式

JavaScript 引擎在任何代码执行之前，会先读取函数声明，并在执行上下文中 生成函数定义。而函数表达式必须等到代码执行到它那一行，才会在执行上下文中生成函数定义。

函数声明会在任何代码执行之前先被读取并添加到执行上下文。这个 过程叫作函数声明提升（function declaration hoisting）。在执行代码时，JavaScript 引擎会先执行一遍扫描， 把发现的函数声明提升到源代码树的顶部。

```javascript
let fn = function(){
	//函数体
}
```

> 函数表达式跟 JavaScript 中的其他表达式一样，需要先赋值再使用
>

###  函数返回值

多个返回值以数组形式返回

```javascript
//  3. 求任意数组的最大值和最小值，并且返回
function getArrValue(arr = []) {
  // (1)先准备一个max变量存放数组的第一个值
  let max = arr[0]
  let min = arr[0]  
  // (2) 遍历比较
  for (let i = 1; i < arr.length; i++) {
    // 最大值
    if (max < arr[i]) {
      max = arr[i]
    }
    // 最小值
    if (min > arr[i]) {
      min = arr[i]
    }
  }
  // (3) 返回值  返回的是数组
  return [max, min]
}
let newArr = getArrValue([11, 3, 55, 7, 29])
// let newArr = getArrValue()
console.log(newArr)
console.log(`数组的最大值是: ${newArr[0]}`)
console.log(`数组的最小值是: ${newArr[1]}`)
```

### 函数形参的默认值

js函数有个奇怪的地方,无论在函数定义中声明了多少形参,都可以传入任意数量的参数-

## 函数属性与方法



## 箭头函数概述

目的:引入箭头函数的目的是更简短的函数写法并且不绑定this，箭头函数的语法比函数表达式更简洁

使用场景:箭头函数更适用于那些本来**需要匿名函数的地方**

1. 没有 `this` 、 `super` 、 `arguments` ，也没有 `new.target` 绑定： this 、 super 、 arguments 、以及函数内部的 new.target 的值由所在的、最靠近的非箭头函数来决定
2. 不能被使用 `new` 调用： 箭头函数没有 [[Construct]] 方法，因此不能被用为构造函 数，使用 new 调用箭头函数会抛出错误。
3. 没有原型： 既然不能对箭头函数使用 new ，那么它也不需要原型，也就是没有 prototype 属性。
4. `不能更改 this` ： this 的值在函数内部不能被修改，在函数的整个生命周期内其值会 保持不变。
5. 没有 arguments 对象： 既然箭头函数没有 arguments 绑定，你必须依赖于具名参数或 剩余参数来访问函数的参数。
6. 不允许重复的具名参数： 箭头函数不允许拥有重复的具名参数，无论是否在严格模式 下；而相对来说，传统函数只有在严格模式下才禁止这种重复。

产生这些差异是有理由的。首先并且最重要的是，在 JS 编程中 this 绑定是发生错误的常 见根源之一，在嵌套的函数中有时会因为调用方式的不同，而导致丢失对外层 this 值的追 踪，就可能会导致预期外的程序行为。其次，箭头函数使用单一的 this 值来执行代码，使 得 JS 引擎可以更容易对代码的操作进行优化；而常规函数可能会作为构造函数使用（导致 this 易变而不利优化）。 其余差异也聚集在减少箭头函数内部的错误与不确定性，这样 JS 引擎也能更好地优化箭头函 数的运行。

箭头函数表达式更适用于那些本来需要匿名函数的地方,并且它不能用作构造函数。

> 注意：箭头函数也拥有 name 属性，并且遵循与其他函数相同的规则。

## 箭头函数语法

箭头函数的语法可以有多种变体，取决于你要完成的目标。***所有变体都以函数参数为开头***， **紧跟着的是箭头**，***再接下来则是函数体***。参数与函数体都根据实际使用有不同的形式。例 如，以下箭头函数接收单个参数并返回它：

```javascript
let total = x => x + 1;
console.log(total(1));//输出2
```

当箭头函数只有单个参数时，该参数可以直接书写而不需要额外的语法；接下来是箭头以及 箭头右边的表达式，该表达式会被计算并返回结果。即使此处没有明确的 return 语句，该 箭头函数仍然会将所传入的参数返回出来。

如果需要传入多于一个的参数，就需要将它们放在括号内，就像这样：

```javascript
let sum = (x, y) => x + y
//等价于
// let sum =   function(x,y){
//     return x + y
// }
console.log(sum(1, 2));//输出3
```

sum() 函数简单地将两个参数相加并返回结果。两者区别在于,参数被封闭在括号内，相互之间使用逗号分隔（就像传统函数那样）。

如果函数没有任何参数，那么在声明时就必须使用一对空括号，就像这样：

```javascript
let getName = () => alert("Nicholas");
getName()
```

### 函数体

在一个简写体中，只需要一个表达式，并附加一个隐式的返回值。在块体中，必须使用明确的`return`语句。

```javascript
var func = x => x * x;
// 简写函数 省略 return

var func = (x, y) => { return x + y; };
//常规编写 明确的返回值
```



### 换行写法

箭头函数在`参数`和`箭头=>`之间不能换行。

```javascript
var func = ()
           => 1;
// SyntaxError: expected expression, got '=>'
```

但是，可以通过在 `=>箭头` 之后换行，或者用 ‘( )’、'{ }'来实现换行，如下：

```javascript
var func = (a, b, c) =>
  1;
  
var func = (a, b, c) => {
  return 1
};

var func = (
  a,
  b,
  c
) => 1;
// 以上不会有语法错误
```

### 箭头函数也可以使用条件三元运算符

```javascript
var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;
```

### 箭头函数递归

```javascript
var fact = (x) => ( x==0 ?  1 : x*fact(x-1) );
fact(5);       // 120
```



### 使用箭头函数作为方法

箭头函数表达式对`非方法函数`是最合适的。让我们看看当我们试着把它们作为`方法`时发生了什么。

```javascript
'use strict';
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log( this.i, this)
  }
}
obj.b();
// undefined, Window{...}
obj.c();
// 10, Object {...}
```

### 通过 call 或 apply 调用

由于 箭头函数没有自己的 this 指针，通过 `call()` *或* `apply()` 方法调用一个函数时，只能传递参数（不能绑定 this---译者注），他们的第一个参数会被忽略。（这种现象对于 bind 方法同样成立 --- 译者注）

### this

箭头函数不会创建自己的`this，它只会从自己的作用域链的上一层继承 this`。

在箭头函数出现之前，每一个新函数根据它是被如何调用的来定义这个函数的 this 值：

- 如果该函数是一个构造函数，this 指针指向一个新的对象
- 在严格模式下的函数调用下，this 指向`undefined`
- 如果该函数是一个对象的方法，则它的 this 指针指向这个对象
- 等等

`This`被证明是令人厌烦的面向对象风格的编程。

## 创建IIFE（立即调用函数表达式）

```javascript
let person = function (x,y) {
    return {
        getName: function () {
            return x + y;
        }
    };
}(1,2);
console.log(person.getName()); // 3

let person = function (name) {
    return {
        getName: function () {
            return name;
        }
    };
}("Nicholas");
console.log(person.getName()); // Nicholas
```

此代码中 IIFE 被用于创建一个包含 `getName()` 方法的对象。该方法使用 name 参数作为返 回值，有效地让 `name` 成为所返回对象的一个私有成员。 你可以使用箭头函数来完成同样的事情，只要将其包裹在括号内即可：

```javascript
let person = ((name) => {
    return {
        getName: function () {
            return name;
        }
    };
})("Nicholas");
console.log(person.getName()); // "Nicholas"
```

### 箭头函数与数组

```javascript
let arr = [1,3,5,4,2].sort(function(a,b){
    return a- b
})
console.log(arr);
```

```javascript
let arr = [1, 3, 5, 4, 2].sort((a, b) => a - b)
console.log(arr);
```

能使用回调函数的数组方法（例如 sort() 、 map() 与 reduce() 方法），都能从箭头函数 的简洁语法中获得收益，它将看似复杂的需求转换为简单的代码。



## 作用域important

### 局部作用域

#### 函数作用域

1. ***函数内部声明的变量，在函数外部无法被访问*** 
2. ***函数的参数也是函数内部的局部变量*** 
3. ***不同函数内部声明的变量无法互相访问*** 
4. ***函数执行完毕后，函数内部的变量实际被清空了***

#### 块作用域

在 JavaScript 中使用 { } 包裹的代码称为代码块，代码块内部声明的变量外部将【有可能】无法被访问

1.  let / const声明的变量会产生块作用域，var 不会产生块作用域
2. 不同代码块之间的变量无法互相访问

### 全局作用域

1. 为 window 对象动态添加的属性默认也是全局的，不推荐！
2. 函数中未使用任何关键字声明的变量为全局变量，不推荐！！！
3. 尽可能少的声明全局变量，防止全局变量被污染



















