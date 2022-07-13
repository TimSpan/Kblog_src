# JaveScript对象

> 可以理解为一种无序的数据集合、数组是有序的而数据集合
>
> 复杂数据类型都是object.  在 JavaScript中,所有的事物都是对象 .
>
> String ,Number ,Array Function 都是对象



## 重新认识对象

JavaScript 中的对象，Object，可以简单理解成“名称 - 值”对（而不是键值对：现在，ES 2015 的映射表（Map），比对象更接近键值对），不难联想 JavaScript 中的对象与下面这些概念类似：

- Python 中的字典（Dictionary）
- Perl 和 Ruby 中的散列/哈希（Hash）
- C/C++ 中的散列表（Hash table）
- Java 中的散列映射表（HashMap）
- PHP 中的关联数组（Associative array）

这样的数据结构设计合理，能应付各类复杂需求，所以被各类编程语言广泛采用。正因为 JavaScript 中的一切（除了核心类型，core object）都是对象，所以 JavaScript 程序必然与大量的散列表查找操作有着千丝万缕的联系，而散列表擅长的正是高速查找。

“**名称**”部分是一个 JavaScript 字符串，“**值**”部分可以是任何 JavaScript 的数据类型——包括对象。这使用户可以根据具体需求，创建出相当复杂的数据结构。

## 对象中的方法

> 1. 方法是依附在对象中的函数
> 2. 调用对象中函数，称之为方法调用(`也可以添加形参和实参`)

## 遍历对象for   in

- 对象没有像数组一样的length属性,所以无法确定长度
- 对象里面是无序的键值对, 没有规律. 不像数组里面有规律的下标

```javascript
 let obj = {
   uname: 'Kevin',
   age: 25,
   gender: '男'
 }
 for (let k in obj){
   console.log(k); //输出所有属性名
   document.write(obj[k])// 输出所有属性值
   document.write(obj.uname)
   document.write(obj['uname'])//'uname'  === k
 }
```



##  对象声明语法

```js
let 对象名 = { }
```

```js
let 对象名 = new Object()
```



如同JavaScript中的很多东西一样，创建一个对象通常先定义初始化变量、使用花括号`{ }`

```javascript
var person = {
  name : ['Bob', 'Smith'],
  age : 32,
  gender : 'male',
  interests : ['music', 'skiing'],
  bio : function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};
// . 点表示法、访问对象内部的属性或方法
person.name[0]
person.age
person.interests[1]
person.bio()
person.greeting()
// 提示对话框显示:
// Hi! I'm Bob.
// Bob Smith is 32 years old. He likes music and skiing.
```

>   一个对象`person`有很多成员组成、比如`name`、`age` 、`gender`、`interests`
>
>   每一个成员用逗号分隔开、并且名字和值之间由冒号 `:` 分隔

对象成员的值可以是任意的，在我们的person对象里有字符串(string)，数字(number)，两个数组(array)，两个函数(function)。前4个成员是资料项目，被称为对象的属性(property)，

>   后两个成员是函数，允许对象对资料做一些操作，被称为对象的方法(method)

## 子命名空间

可以用一个对象来做另一个对象成员的值。例如将name成员

```javascript
name : ['Bob', 'Smith'],
// 将上述代码改成如下:
name : {
  first : 'Bob',
  last : 'Smith'
},
```

你只需要链式的再使用一次点表示法，像这样：

```javascript
person.name.first
person.name.last
```

>   注意！你需要改变你之前的代码

```javascript
name[0]
name[1]
// 将上述代码改成如下:
name.first
name.last
```

```javascript
let person = {
            name: {
                first: 'Bob',
                last: 'Smith'
            },
            age: 32,
            gender: 'male',
            interests: ['music', 'skiing'],
            bio: function () {
                alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
            },
            greeting: function () {
                alert('Hi! I\'m ' + this.name[0] + '.');
            }
        };
        person.name.first
        person.name.last
        person.age
        person.interests[1]
        person.bio()
        person.greeting()
```

## 括号表示法

另外一种访问属性的方式是使用括号表示法(bracket notation)

```javascript
person.age
person.name.first
//  将上述代码改成如下:
person['age']
person['name']['first']
```

```javascript
// 设置对象成员的值
person.age = 45
person['name']['last'] = 'Cratchit'
```

设置成员并不意味着你只能更新已经存在的属性的值，你完全可以创建新的成员，尝试以下代码：

```javascript
person['eyes'] = 'hazel'
person.farewell = function() { alert("Bye everybody!") }
// 括号表示法一个有用的地方是它不仅可以动态的去设置对象成员的值，还可以动态的去设置成员的名字。
```

括号表示法一个有用的地方是它不仅可以动态的去设置`对象成员的值`，还可以动态的去设置`对象成员的名字`。

```javascript
// let myDataName = nameInput.value
// let myDataValue = nameValue.value
let myDataName = 'height'
let myDataValue = '1.75m'
person[myDataName] = myDataValue
alert(person.height)
```

## This的含义

你也许想知道"this"是什么，关键字"this"指向了当前代码运行时的对象( 原文：the current object the code is being written inside )——这里即指person对象，为什么不直接写person呢？当你学到下一篇[Object-oriented JavaScript for beginners](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)文章时，我们开始使用构造器(constructor)时，"this"是非常有用的——它保证了当代码的上下文(context)改变时变量的值的正确性（比如：不同的person对象拥有不同的name这个属性，很明显greeting这个方法需要使用的是它们自己的name）。