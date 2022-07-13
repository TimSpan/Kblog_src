# [Math对象在线文档]([Math - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math))

```javascript
	// 随机点名
    let arr = ['赵云', '黄忠', '关羽', '张飞', '马超', '刘备', '曹操']
    // 1. 得到一个随机数， 作为数组的索引号， 这个随机数 0~6
    let random = Math.floor(Math.random() * arr.length)
    // 2. 页面输出数组里面的元素 
    document.write(arr[random])

    // 3. splice(起始位置(下标), 删除几个元素)
    arr.splice(random, 1)
    console.log(arr)
```

