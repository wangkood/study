# javascript在web



## BOM浏览器对象

### window

​		Window 对象是 JavaScript 层级中的顶层对象。

​		Window 对象代表一个浏览器窗口或一个框架。

​		Window 对象会在 <body> 或 <frameset> 每次出现时被自动创建。

| 返回值      | 方法名&属性   | 参数列表                | 介绍           |
| ----------- | ------------- | ----------------------- | -------------- |
| void        | alert         | String 提示信息         | 弹出警示框     |
| Boolean     | confirm       | String 提示信息         | 弹出确认框     |
| String      | prompt        | ---                     | 弹出文本输入框 |
| Window      | open          | String 地址             | 打开新的窗口   |
| ----------- | close         |                         | 关闭当前窗口   |
| 定时器对象  | setTimeout    | Function do,Number time | 定时器，一次   |
| 清楚定时器  | clearTimeout  | 定时器对象              | 清除定时器     |
| 定时器对象  | setInterval   | Function do,Number time | 定时器，循环   |
| 清楚定时器  | clearInterval | 定时器对象              | 清楚定时器     |

### history

​		History 对象实际上是 JavaScript 对象，而不是 HTML DOM 对象。

​		由 JavaScript runtime engine 自动创建的，一系列的 URL 组成。这些 URL  是用户在一个浏览器窗口内已访		问的 URL 。

|            |         |             |                              |
| ---------- | ------- | ----------- | ---------------------------- |
| ---------- | forward | ----------- | 向前跳转                     |
| --------   | back    | ----------  | 向后跳转                     |
| ---------  | go      | Number num  | 向前(正数) 或 向后(负数)跳转 |

### location

​		实际上是 JavaScript 对象，而不是 HTML DOM 对象。

​		由 JavaScript runtime engine 自动创建的，包含有关当前 URL 的信息。

| 返回值 | 方法名&属性 | 参数列表   |                    |
| ------ | ----------- | ---------- | ------------------ |
|        | reload      |            | 刷新               |
|        | href 属性   | ---------- | 设置或获取当前路径 |
|        |             |            |                    |



### screen

​		实际上是 JavaScript 对象，而不是 HTML DOM 对象。

​		由 JavaScript runtime engine 自动创建的，包含有关客户机显示屏幕的信息。

### navigator

​		实际上是一个 JavaScript 对象,而不是 HTML DOM 对象。

​		由 JavaScript runtime engine 自动创建的，包含有关客户机浏览器的信息。





## DOM模型对象

​		文档对象模型（HTML Document Object Model）定义了访问和处理 HTML 文档的标准方法

|           |      |                          |
| --------- | ---- | ------------------------ |
| node      |      | 节点对象其他五个的父对象 |
| document  |      | 文档对象                 |
| element   |      | 元素的对象               |
| attribute |      | 属性对象                 |
|           |      | 注释对象                 |
| text      |      | 文本对象                 |

### node

```js
var fatherNode
var sonNode

// 删除子节点 传入子节点对象
fatherNode.removeChild(sonNode) 

// 添加子节点
var sonNode2 = doucment.createElement("div")
fatherNode.appendChild(sonNode2)
```

### document

​		代表整个 HTML 文档，可用来访问页面中的所有元素。

```js
// 获取元素
var element = 	document.getElementById()
var array1 = 	document.getElementsByName()
var array2 =	document.getElementsByTagName()
// 像文档输入数据
document.write("")	
// 获取coolkie
var cookie = document.cookie
```



### element

```js
var element = ...

// 设置or添加一个属性
element.setAttribute("href","http://www...") 

// 更具属性名删除一个属性
element.removeAttribute("href") 
```

### attribute





## 事件

​	事件：	发生了什么事情，鼠标点击，键盘按下，鼠标聚焦……

​	事件源：组件，如：文本框，div

​	监听器：代码

​	注册监听：将 事件 事件源 监听器 绑定到一起

|            |      |      |
| ---------- | ---- | ---- |
| onclick    |      |      |
| ondbclick  |      |      |
| onblur     |      |      |
| onload     |      |      |
| onkeydown  |      |      |
| onkeyup    |      |      |
| onkeypress |      |      |
|            |      |      |

