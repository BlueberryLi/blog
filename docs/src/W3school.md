::: tip 学习资料[W3school](https://www.w3school.com.cn)：
:::

::: tip javaScript查露补缺：
1、var 定义变量只有全局作用域和函数作用域，没有块作用域。

2、var 存在变量提升，let和const不存在。

3、幂运算符号 ** ，ES7开始支持。

4、
```md
typeof []                     // object
typeof null                   // object
typeof undefined              // undefined
typeof NAN                    // number
typeof Infinity               // number
typeof function myFunc(){}    // function
Array.isArray([])             // true
[] instanceof Array           // true
```

5、BigInt类型，整数末尾添加 n 或调用 BigInt() 函数。

BigInt 不能有小数;

不允许在 BigInt 和 Number 之间进行算术运算（类型转换会丢失信息）;

BigInt 无法进行无符号右移操作（>>>），因为它没有固定的宽度。

6、[正则参考手册](https://www.w3school.com.cn/jsref/jsref_obj_regexp.asp)

7、闭包实例
```js
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
```
变量 add 的赋值是自调用函数的返回值。

这个自调用函数只运行一次。它设置计数器为零（0），并返回函数表达式。

这样 add 成为了函数。最“精彩的”部分是它能够访问父作用域中的计数器。

这被称为 JavaScript 闭包。它使函数拥有“私有”变量成为可能。

计数器被这个匿名函数的作用域保护，并且只能使用 add 函数来修改。

闭包指的是有权访问父作用域的函数，即使在父函数关闭之后。

8、可选链运算符"?."和数字分隔符"_"

9、JSON.stringify 不会对函数进行字符串化。

10、prototype

11、for..of和Symbol.iterator。

12、能够将对象用作键是 Map 的一项重要特性。

13、async 使函数返回 Promise；await 使函数等待 Promise

14、JSONP 是一种无需考虑跨域问题即可传送 JSON 数据的方法。
:::

