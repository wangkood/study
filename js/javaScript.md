# javaScript

> 由这三部分组成 EcmaScript 和 文档对象模型  和  浏览器对象模型



### EcmaScript

> 即语言规范，ECMA为 欧洲计算机制造商协会 ，

- 数据类型

  - undefined
  - null
  - boolean
  - string
  - number
  - object
    - Function
    - Array
    - Date
    - 。。。。

- ##### 书写格式

> ```javascript
> 全局变量 = 8
> 
> // let声明的变量绑定到最近的块级作用域（用{}括起来的，如for(){...}）
> let 变量 = 10  
> 
> // var
> var 变量 = 12
> 
> // const声明的值为常量，不能修改
> const 常量 = 89
> ```
> 

- 闭包

> ```javascript
>// 可以读取其他函数内部变量的函数
> // 定义在一个函数内部的函数
>// 闭包是将函数内部和函数外部链接起来的桥梁
> function out(){
> var num = 10;
>  return function(){
>      // 参数num函数内部并没有定义，且没有传参，仍然可以获取到
>         alert (num); 
>     }
>    };
>    out()();
>    ```



- 同步|异步







### DOM(文档对象模型)

> 对HTML文档树进行操作



### BOM(浏览器对象模型)

> > js通过BOM和浏览器进行互动
>
> ```js
> # 所有浏览器都支持 window 对象。它代表浏览器的窗口。
> # 所有全局 JS对象，函数 和 变量 自动成为 window 对象的成员。
> # 全局变量是 window 对象的属性。
> # 全局函数是 window 对象的方法
> window.document.getElementById("xx");
> 
> document
> screen
> location
> history
> 
> ```

