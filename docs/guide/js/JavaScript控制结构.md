# JavaScript控制结构

### [`for...of`与`for...in`的区别](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of#for...of与for...in的区别)

无论是`for...in`还是`for...of`语句都是迭代一些东西。它们之间的主要区别在于它们的迭代方式。

[`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 语句以任意顺序迭代对象的[可枚举属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)。

`for...of` 语句遍历[可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterables)定义要迭代的数据。

## for   of

JavaScript 也还包括其他两种重要的 for 循环： [`for`...`of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

```javascript
for (let value of array) {
  // do something with value
}
```

## for   in

和 [`for`...`in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) ：一般用于遍历对象

```javascript
for (let property in object) {
  // do something with object property用对象属性做些什么
  //遍历对象
}
```

类似地，JavaScript 也有一个用于条件表达式的三元操作符：

```javascript
var allowed = (age > 18) ? "yes" : "no";
// 条件 ? 满足条件执行的代码 : 不满足条件执行的代码
```

## if语句

if语句有三种使用：单分支、双分支、多分支

```javascript
if (条件) {
	满足条件要执行的代码
}
```

1. 括号内的条件为true时，进入大括号里执行代码
2. 小括号内的结果若不是布尔类型时，会发生隐式转换转为布尔类型

## 三元表达式

案例

```javascript
let num1 = +prompt('输入第一个值')
let num2 = +prompt('输入第一个值')
let src = (num1>num2) ? alert(`这是最大值&{num1}`) : alert(`这是最大值&{num2}`)
// 三元表达式中还包含了一个功能,返回的功能，可以把成功执行的代码返回
```

```javascript
// 1. 用户输入
let num = +prompt('请您输入一个数字:')
// 2. 判断输出- 小于10才补0
num = (num >= 10) ? num : '0' + num
alert(num)
```

## Switch

1. 小括号数据全等`===`case值，则执行对应的代码
2. 若没有全等 === ，则会执行default对应代码
3. switch case 配合break关键字使用，没有break则会造成case穿透