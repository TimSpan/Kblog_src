# ES6

## 数组常用方法

### 数组置空 ###
```js
arr=[];//不会真正的清空数据，只是将一个空数组赋值到arr,并不会清空内存数据,数据量多时会导致内存溢出
arr.length=0;//彻底清空arr数据的内容，之前依赖于arr的数据也会清空
```
### 数组追加 ###
```js
arr.unshift('头部追加')；
arr=['头部追加'].concat(arr);//数据合并方法，性能更好
arr.push('尾部追加')
arr[arr.length]='尾部追加'//运行速度比push更快
```
### 数组删除 ###
```js
arr.pop()//删除最后一个元素
arr.shift()//删除第一个元素
arr.splice(起始位置，删除个数)
```
### 数组去重 ###
```js
Array.from(new Set(arr))
//new Set() 可以将目标对象里面的值给取出，它取出的值是唯一的，返回的是一个对象，Array.from()来将这个对象转换为数组
add()://往set构造函数中添加数据
has(): //判断某一个值是否是set数据结构中的成员，该方法只是用于Set构造函数中
clear()://清除set构造函数中所有数据
delete()://删除指定数据
```
### 数组排序 ###
```js
 arr.sort(function (a, b) {
      return a - b;
    })
//若sort方法中不写函数，则按照字母大小排序，可以利用函数来控制升序或者降序 a-b:升序，b-a:降序，原理等同于冒泡排序
```
### 数组复制 ###
```js
let num=[...arr]//将arr数组复制给num
let num={...arr}//也可以将数组转为对象 会把数组的下标当作对象的key值
```
### 数组合并 ###
```js
let arr=[1,2,3,4]
let arr1=[2,3,4,5]
let arr2=arr.concat(arr1);//12342345

若不需要重复数据的话 可利用 new Set()，利用Array.from()转为数组
 Array.from(new Set([...arr, ...arr1]))//...复制数组
```
### 数组运算 ###
```js
arr.reduce((a, b) => a * b)
arr.reduce(callback,[initialValue])
callback:函数中包含四个参数
- previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
- currentValue （数组中当前被处理的元素）
- index （当前元素在数组中的索引)
- array （调用的数组）
initialValue （作为第一次调用 callback 的第一个参数。）
```

### 数组反转 ###
```js
arr.reverse()
```
### 数组find ###
```js
arr.find(item=>item.id==2)：//查找数组中第一个满足条件的值，查不到返回undefined
```
### 数组findIndex() ###
```js
arr.findIndex(item=>item.id==2)：//用于找出第一个符合条件的数组成员的位置，如果没找到返回-1
```
### 数组includes() ###
```js
//表示某个数组是否包含给定的值，返回布尔值
arr.includes(给定值)
```

###  数组解构 ###
```js
//按照对应位置，对变量赋值，对象也可以实现解构
let [a,b,c]=[1,2,3]//a=1,b=2,c=3
let [a,...b]=[1,2,3] //a=1,b=[2,3]
let [a,b]=[1]//a=1,b=undefined
```
## 变量

<a href="https://blog.csdn.net/xiaoliao96530/article/details/123580403">辅助理解</a>

 	let:不能重复声明,不会成为window属性的变量，不存在变量提升(必须先声明，在使用)，不能在块作用域之外调用
 	
 	const：声明必须赋值,不能重复声明,不会成为window属性的变量，不存在变量提升(必须先声明，在使用)，不能在块作用域之外调用,一旦声明不能在修改值；
 	如果声明基本数据类型，声明后是不能修改的，但是如果声明引用数据类型，则可以修改其属性的值 例:
 		const object = {
 		    name: 'yanbin',
 		    age: 18
 		}
 			console.log(object.name);
 			object.age = 22;
 			console.log(object.age);
 	
 	暂时性死区:是指在一个块级作用域中，存在一个死区，开始于函数的开头，结束于变量声明的那一行，在这个死区内，无法访问let或const声明的变量。

### 新增数据类型

	Symbol一种数据类型，它的实例是唯一且不可改变的。
## 模板字符串

	需要利用反引号包含内容``
	console.log(`年龄${age}`)
## 隐式转换

consloe.log(+"123");//输出的是数字型number
## 常用方法

	Objct.freeze(对象名):冻结一个对象.再也不能被修改；不能向这个对象添加、删除、修改

## 面向对象

### 创建类 class和生成实例 ###
```js
class Star{ //创建对象，类名首字母大写
	constructor(uname){//构造函数，可用于接收传递的参数
		this.uname=uname;
	}
	sing(song){//类中的方法不需要function
		console.log(this.name+song);
	}
}

//constructor()方法是类的构造函数(默认方法)，用于传递参数，返回实例对象，通过new命令生成对象实例时，自动调用该方法。如果没有显示定义，类内部会自动给我们创建一个constructor();

var user=new Star('刘德华');//调用对象
	user.sing(参数);//利用属性.方法名
```
### 继承 ###
```js
关键字:extends
class Father{//父类
	constructor(x,y){
		this.x=x;
		this.y=y;
	}	
	
	sum(){
		console.log(this.x+this.y);
	}

}
class Son extends Father{//子类继承父类
	constructor(x,y){
	this.x=x;
	this.y=y;
	}
}

var son=new Son(1,2);
	son.sum();//报错:不能够利用子类的参数加入父类计算

若需要利用子类的参数加入父类计算则需要用到 super():调用父类中的构造函数

class Son extends Father{
	constructor(x,y){
	super(x,y);//调用父类中的构造函数
	}
}

特性：继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，在看父类
super():可以在子类中调用父类中的构造函数 和方法，必须在子类this之前调用；
		super().方法
		super():默认调用父类构造函数
```

### 类里面this指向 ###

	constructor里面的this指向实例对象，方法里面的this指向这个方法调用者

### 属性 		
	insertAdjacentHTML('插入位置','插入内容'):
		beforeBegin:插入到标签开始前
		afterBegin:插入到标签开始标记之后
		beforeEnd:插入到标签结束标记前
		afterEnd:插入到标签结束标记后
	
	insertAdjacentText:只能插入纯文本
	
	这两种方法必须在整个文档装载完成之后才能使用，否则将出错，这两个方法比较灵活可以选择位置插入
	e.stopPropagation:阻止冒泡事件
	
	input.select():可以选中全部文字

### 构造函数 ###
缺点：内存浪费的问题，每创建一个对象都会创建一个新的内存进行存储

	1.实例成员就是构造函数内部通过this添加的成员，只能通过实例化的对象访问
	2.静态成员在构造函数本身上添加的成员，是不能够通过实例化对象访问

#### 构造函数原型 prototype ####
	每一个构造函数都有一个prototype属性，指向另一个对象
	prototype就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有
	可以把不变的方法，定义在prototype对象上，这样所有的对象的实例都可以共享这些方法
	构造函数名.prototype.方法名=function(){}
	可利用对象的形式添加多个方法，但是需要手动添加constructor(构造函数)属性 指回原来的构造函数
	构造函数名.prototype={
		constructor:构造函数名，
		方法名:function(){},
		方法名:function(){}
	}

### 对象原型 __proto__ ###
	对象都会有一个属性__proto__指向构造函数的prototype原型对象，所以对象可以直接调用prototype定义的方法
	
	prototype（构造函数原型）和 __proto__（对象原型中）都存在constructor属性，这个属性的作用是指向原构造函数，若使用构造函数原型利用对象的形式添加多个方法，则需要手动添加constructor属性指向原构造函数，才能够利用对象调用到方法
#### instanceof关键字 ####
	用来判断右边构造函数的原型对象,是否在左边实例对象的原型链上
### 原型对象this指向 ###
	1.在构造函数中，this指向的是对象实例
	2.原型对象函数里面的this，指向的也是实例对象
		一般情况下this指向是调用者
### 原型对象扩展内置对象 ###
	可利用原型对象给原本数组没有的方法添加内置方法
	Array.prototype.sum=function(){
		let sum=0;
		for(let i=0;i<this.length;i++){
			sum+=this[i];		
		}
		return sum;
	}
	
	let arr=[1,2,3];
	console.log(arr.sum());
	如果要添加多个内置方法 不能够使用对象的形式添加，不然会把之前所包含的内置方法给覆盖
### call() ###
```js
特点：可以调用函数,可以改变函数this指向 
方法名.call();
方法名.call(this指向对象)

function Father(name,age){
	this.name=name;
	this.age=age;
}

function Son(name,age){
	Father.call(this,name,age)
}
let user= new Son('张三',18)
console.log(user);//父类中的this是指向Son的

若子类需要使用父类中原型对象的方法，则需要将父类的实例赋值给子类的原型对象,这时子类的原型对象是指向父类的，所以需要将子类的原型对象重新指向回子类Son.prototype.constructor=Son;
```
### apply() ###
```js
fun.apply(this,数组)
主要作用：Math.max.apply(Math, arr)：调用max方法 找出数组中最大值最小值
```

### bind() ###
```js
不会调用原来的函数 可以改变原来函数内部的this指向
返回的是原函数改变this之后产生的新函数
let f=fn.bind(this指向,实参);
f();

  let btn = document.querySelectorAll("button");
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      this.disabled = true;
      setTimeout(
        function () {
          this.disabled = false;
        }.bind(this),//将btn的this指向到定时器，并且不会立即执行
        2000
      );
    });
  }
```
### call()、apply()、bind() 总结 ###
####   区别 ####
	1.call和apply会调用函数，并且改变函数内部this指向
	2.call和apply传递的参数不一样，call传递参数aru1,aru2..形式，apply必须数组形式[ary]
	3.bind不会调用函数，可以改变函数内部this指向
#### 主要引用场景 ####
	1.call经常做继承
	2.apply经常跟数组有关系，比如借助数学对象实现数组中最大值，最小值
	3.bind 不调用函数，但是还是想改变this指向，比如改变定时器内部的this指向
#### forEach循环 ####
	数组.forEach(function(value,inde,array){
	//value:数组值，index：下标,array:数组本身
	})
	
	return不会终止循环
#### filter() ####
	数组.filter(function(currentValue,inde,array))
	1.创建一个新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素，主要用于筛选数组
	2.返回的是一个新数组
	3.currenValue:数组当前项的值
	4.index:数组当前项的索引
	5.arr:数组对象本身
	
	var newArray=arr.filter(function(value,index,array){
		retuen value>=20
		//筛选出数组中大于20的数添加到newArray新数组中
	})
	return不会终止循环
#### some() ####
	数组.some(function(currentValue,index,array)){
		return value>=20
	}
	主要用于检测数组中的元素是否满足指定条件
	如果找到第一个满足条件元素，则终止循环，不在继续查找
	返回值类型为bool,条件满足为true,不满足为false
####every（）  ####
	只要有一个不满足条件就返回false
### includes属性 ###
	包含，可用于模糊查询,只适用于字符串

#### 立即执行函数 ####
	(function(){
	
	})(起到调用函数的作用);
	
	(function(){}())

#### Object对象方法 ####

	Object.keys(obj);//获取对象自身所有的属性，返回由数组名组成的数组
	
	Object.defineProperty(目标对象，需要定义或修改的属性名字，目标属性所拥有的特性)：定义对象中新属性或修改原有的属性
	Object.defineProperty(obj,'属性名',{
		value:设置属性的值，默认undefined
		writable:设置值是否可以重写，true|false, 默认为false
		enumerable:目标属性是否可以被枚举，true|false 默认为false,不允许发生遍历
		configurable:目标属性是否可以被删除或者是否可以再次修改特性 true|false 默认为false
	})
	Object.values(obj)//获取对象自身的所有属性值，返回数组
	Object.assign(需拷贝对象,目标对象)：拷贝对象

#### 值传递和引用传递 ####
#### 值传递 ####
	按值传递意味着实际参数值的副本在内存中进行，
	即完成了新的内存分配，并且所有更改都在该新值中进行（即复制的值）。
	原始值和复制值彼此独立，因为它们在内存中的空间不同，
	即在更改函数内部的值时，函数外部的变量不受影响。
	存放于栈
#### 引用传递 ####

	引用传递不会在内存中创建新空间，而是传递实际参数的引用/地址，
	这意味着函数可以访问变量的原始值。
	因此，如果我们改变函数内部变量的值，那么原始值也会改变。
	地址存放于栈，对象存放于堆

#### 严格模式 ####
	'use strict'
	1.开启严格模式之后，变量必须先声明在使用
	2.不允许删除已经声明好的变量
	3.全局作用域中函数中的this是undefined
	4.构造函数不加new调用，this会报错
	5.函数里面的参数不允许重名
	6.不允许在非函数的代码块内声明函数

#### 高阶函数 ####
	高阶函数是对其他函数进行操作的函数，它接收函数作为参数或将函数作为返回值输出
	
	 function fn(a, b, car) {
	    console.log(a + b);
	    car && car();//调用函数
	  }
	  fn(2, 3, function () {
	    console.log("我是高阶函数");
	  });
#### JavaScript为何是一等公民 ####
	一等公民可以作为函数参数，可以作为函数返回值，也可以赋值给变量。
## 闭包

### 什么是闭包 ###
	指有权访问另一个函数作用域中变量的函数
	主要作用:延申了变量的作用范围
	例:
	 <ul>
	  <li>足球</li>
	  <li>蓝球</li>
	  <li>羽毛球</li>
	  <li>乒乓球</li>
	</ul>
	<script>
	  const lis = document.querySelector("ul").querySelectorAll("li");
	  for (var i = 0; i <lis.length; i++) {
	    lis[i].addEventListener("click", function () {
	      console.log(i);
	    });
	  }
	 </script>
	点击任意一个li打印的i都为4，因为通过var定义的变量，在for循环中的i是全局的，变量提升、次循环过后，i=4，因为点击每个都相当于点击最后一个。
	可以利用立即执行函数(小闭包)解决当前问题
	 for (var i = 0; i <lis.length; i++) {
		(function(i){
			lis[i].addEventListener("click", function () {
	      	console.log(i);
	  		 });
		})(i)
	    
	  }
	闭包可能会引起内存泄露的问题
## 递归

	什么是递归？
		1.如果一个函数在内部可以调用其本身，那么这个函数就是递归函数
		2.在使用递归很容易发生"栈溢出",所以必须要加退出条件return
	
	递归调用函数时通过console.log()打印有值，但是在获取的时候是undefined，原因是在递归函数内部没有对递归函数进行return，否则外层函数无法接收到返回值
		
	递归算法时间复杂度的计算公式：
	递归算法的时间复杂度 = 递归的次数 * 每次递归的时间复杂度。
	空间复杂度的计算公式：
	递归算法的空间复杂度 = 递归的深度 * 每次递归的空间复杂度。

##正则表达式##

### 创建 ###
	let regexp=new RegExp(/表达式/);
	let regexp=/表达式/;

### 检测 ###
	regexobj.test(检测文本),regexobj:正则表达式变量

### 符号 ###
	^:表示匹配行首的文字(以谁开始)
	$:表示匹配行尾的文本(以睡结束)	
	/表达式/：只要包含表达式的都为true
	[ ]:表示有一系列字符可供选择，只要匹配其中一个就可以了
	/^[abc]$/：三选一只有abc这三个字母才返回true
	-:范围符（/^[a-z]$/）
	[^a-z]:[]当中的^表示取反
	*：量词符
	+：最少出现一次
	？：允许出现一次或者0次
	{3,6}：允许出现 大于等于3 并且 小于等于6，注意不要有空格
	():表示优先级
	|：或者，可以写多种情况
### 预定义类 ###

	\d 匹配0-9之间的任意数组，相当于[0-9]
	\D 匹配0-9以外的字符，相当于[^0-9]
	\w 匹配任意的字母，数字和下划线，相当于[A-Za-z0-9]
	\W 除所有字母、数字和下划线，相当于[^A-Za-z0-9]
	\s 匹配空格(包括换行符，制表符，空格符等)，相当于[\t\r\n\v\f]
	\S 匹配非空格的字符，相当于[^\t\r\n\v\f]
### 替换 ###
	replace:(正则表达式/需要替换的字符,'替换值')：当有多个值的时候，只会替换第一个
	/表达式/[switch]
		switch(也成为修饰符)按照什么样的模式匹配，有三种值：
			g:全局匹配
			i:忽略大小写
			gi:全局匹配+忽略大小写
	replace:(/jq/g,'**')替换所有匹配的字符
### match ###
	match方法可以在字符串中查找指定的值,如果找到返回该值，未找到返回null

## 深拷贝和浅拷贝

	浅拷贝和深拷贝只针对引用类型
### 浅拷贝 ###
	浅拷贝：拷贝的是地址
	常用方法：
	1. 拷贝对象：Object.assgin() / 展开运算符 {...obj} 拷贝对象
	2.拷贝数组：Array.prototype.concat() 或者 [...arr]
	
	拷贝对象之后，里面的属性值是简单数据类型直接拷贝值
	如果属性值是引用数据类型则拷贝的是地址
### 深拷贝 ###
	深拷贝：拷贝的是对象，不是地址
	
	常用方法：
	1. 通过递归实现深拷贝
	2. lodash/cloneDeep
	3. 通过JSON.stringify()实现

####   作用域链  ####
	作用域链本质是底层的变量查找机制

#### JS垃圾回收机制 ####
	什么是垃圾回收机制？
		JS种内存的分配和回收是自动完成的，内存在不使用的时候会被垃圾回收器自动回收，不在用到的内存，没有及时释放，叫做内存泄露
	
	内存的生命周期：
		1.内存分配：变量、函数、对象声明的时候，系统会自动为他们分配内存
		2.内存使用：即读写内存，也就是使用变量、函数等
		3.内存回收：使用完毕，由垃圾回收自动回收不再使用的内存
		
		全局变量一般不会回收（页面关闭回收）
		一般情况下局部变量的值，不用了，会被自动回收掉
	引用计数法: 若该值被引用则会+1，若减少引用则会-1，若引用数为0则被回收，内存释放
	标记清楚发:从根部出发若有引用标记为可达，未引用标记为不可达，定时清理不可达数据

## 箭头函数

	const fn=(n1,n2)=>n1+n2:若函数体中只有一句代码，可以省略大括号和return
	
	箭头函数不绑定this关键字，箭头函数中的this，指向的是函数定义位置的上下文this
	
	例：
		let obj={
			age:20,
			say:()=>{
				alert(this.age)
			}
		}
		obj.say();//undefined
		对象是不存在作用域，this指向的是window,this.age表示全局作用域的age变量

## String 扩展方法

	startsWith():表示参数字符串是否在原字符串的头部，返回布尔值
	
	endsWith()：表示参数字符串是否在原字符串的尾部，返回布尔值
	
	repeat():repeat方法表示讲原字符串重复n次，返回一个新字符串


​	
​		


