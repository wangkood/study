# javaScript

## 关键字

​	面向对象	宽松类型	脚本语言	自动类型转换



## 数据类型

### 数值

```js
var num1 = 0b1111	// 二进制
var num2 = 07777	// 八进制
var num3 = 9999		// 十进制	*不能有小数位
var num4 = 0xFFFF	// 十六进制 *不能有小数位
```

### 布尔

```js
var bool1 = true
var bool2 = new Boolean(false)
```

### 数组

```js
var array1 = new Array(1,2,3)	// 初始化值
var array2 = new Array(100)		// 指定长度
var array3 = {3,4,5}		// 简写
```

### null

### undife

### 11个内置对象

```js
var var1 = new Date()	// 日期
var var3 = new Number()	// 数值
var var3 = new Array()	// 数组
var var4 = new Boolean()// 布尔
var var5 = new Function()	// 方法
var var6 = new Global()	// 全局对象，内部方法可直接调用 转码和解码
var var7 = new Math()	// 包装了数学相关方法
var var8 = new Object()	// 所以对象的超类
var var9 = new RegExp()	// 正则表达式
var var10 = new Error()
var var11 = new String()
```

### 自定义对象

```js
function Person(name,age,sex){
    this.name = name
    this.age = age
    this.sex = sex
    this.toString = function(){
        return this.name + " " + this.age + " " + this.sex
    }
}
Person.prototype.country = "China" // 类级属性

var per = new Person("王兴",23,true)
```



## 内置函数

| 函数表达式                         |                     |
| ---------------------------------- | ------------------- |
| Number  ***paseInt***(str：String) | string 转 int       |
| Boolean  ***isNan***(obj: Object)  | 判断是否是nan       |
| void  ***eval***(str: String)      | 解析str当成代码执行 |

## 单词

|      |      |
| ---- | ---- |
|      |      |
|      |      |
|      |      |

