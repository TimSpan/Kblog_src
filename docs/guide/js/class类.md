# class类

还是直接看阮一峰写的吧!毕竟人家写得好!你说呢?或者看红皮书

阮一峰  [Class的基本语法](https://es6.ruanyifeng.com/#docs/class)

阮一峰 [Class的继承](https://es6.ruanyifeng.com/#docs/class-extends)

## class

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```

`Point`类除了构造方法，还定义了一个`toString()`方法

***定义`toString()`方法前面不需要加上`function`这个关键字***

**另外，方法与方法之间不需要逗号分隔，加了会报错**

```js
class Ke {//类的数据类型就是函数
}
console.log(typeof Ke); // function 
console.log(Ke === Ke.prototype.constructor);//true
//类本身就指向构造函数

//ES6 的类，完全可以看作构造函数的另一种写法。
```

使用的时候，也是直接对类使用`new`命令，跟构造函数的用法完全一致。

```js
class Ke {
}
let kevin = new Ke
```

构造函数的`prototype`属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的`prototype`属性上面。

```js
class Point {
  constructor() {
    // ...
  }
  toString() {
    // ...
  }
  toValue() {
    // ...
  }
}
// 等同于
Point.prototype = {//原型语法简写
  constructor() {},
  toString() {},
  toValue() {},
};
//constructor()、toString()、toValue()这三个方法，其实都是定义在Point.prototype上面。
```

因此，在类的实例上面调用方法，其实就是调用原型上的方法。

```js
class B {}
const b = new B();
b.constructor === B.prototype.constructor // true
```

## 类的实例

类的属性和方法，除非显式定义在其本身（即定义在`this`对象上），否则都是定义在原型上（即定义在`class`上）。

## constructor()方法

`constructor()`方法是类的默认方法  .`constructor()`方法是类的默认方法 .如果没有显式定义，一个空的`constructor()`方法会被默认添加



```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var point = new Point(2, 3);

point.toString() // (2, 3)

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true
//类的属性和方法，除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
//x和y都是实例对象point自身的属性（因为定义在this对象上），所以hasOwnProperty()方法返回true，而toString()是原型对象的属性（因为定义在Point类上），所以hasOwnProperty()方法返回false。这些都与 ES5 的行为保持一致。

```

> 类的属性名，可以采用表达式。

## Class表达式

与函数一样，类也可以使用表达式的形式定义。

```js
const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
};
// 类的名字是Me 但是Me旨在Class的内部可用,指代当前类,在Class外部 这个类只能用MyClass使用


let inst = new MyClass();
inst.getClassName() // Me
Me.name // ReferenceError: Me is not defined
//上面代码表示，Me只在 Class 内部有定义。

//如果类的内部没用到的话，可以省略Me，也就是可以写成下面的形式。
const MyClass = class { /* ... */ };
```

### 立即执行的类



```js
let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('张三');

person.sayName(); // "张三"
```



## 静态方法static

如果在一个方法前，加上`static`关键字，就表示该方法不会被实例继承.而是直接通过类来调用

```js
class Foo {
  static classMethod() {//static关键字
    return 'hello';
  }
}

Foo.classMethod() // 'hello'.只可以在Foo中被调用

var foo = new Foo();
foo.classMethod()// 而不是在Foo的实例上调用
// TypeError: foo.classMethod is not a function
```



```js
//如果静态方法包含this关键字，这个this指的是类，而不是实例。
class Foo {
  static bar() {
    this.baz();
  }
  static baz() {
    console.log('hello');
  }
  baz() {
    console.log('world');
  }
}

Foo.bar() // hello
//静态方法bar调用了this.baz，这里的this指的是Foo类，而不是Foo的实例，等同于调用Foo.baz。另外，从这个例子还可以看出，静态方法可以与非静态方法重名
```

### super()关键字

```js
//super`这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。

//第一种情况，`super`作为函数调用时代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次`super`函数。
class A {}

class B extends A {
  constructor() {
    super();
  }
}
//子类B的构造函数之中的super()，代表调用父类的构造函数。这是必须的，否则 JavaScript 引擎会报错。

//注意，super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B的实例，因此super()在这里相当于A.prototype.constructor.call(this)。

```



```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {
  constructor() {
    super();
  }
}
new A() // A
new B() // B
//new.target指向当前正在执行的函数。可以看到，在super()执行时，它指向的是子类B的构造函数，而不是父类A的构造函数。也就是说，super()内部的this指向的是B。
```



## extends

```js
//父类的静态方法，可以被子类继承。
class Foo { //父类
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo { //Bar子类
}

Bar.classMethod() // 'hello'
//父类Foo有一个静态方法，子类Bar可以调用这个方法。
//这两个类完全一样，等于复制了一个Point类
```

```
class Point { /* ... */ }

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}
```









