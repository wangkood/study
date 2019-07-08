# XML (extensible markup language)

​		简介： 可扩展标记语言

​		用途： 主要用于 配置文件 和 网络交换数据



## 和HTML的区别

​	都是 w3c(万维网联盟)，先有html，浏览器的恶性竞争导致语法松散，w3c推出了xml原意替换html，但并没有	替换，后被大量用于配置文件

| 哈哈 | 标签   | 用途     |
| ---- | ------ | -------- |
| HTML | 预定义 | 展示数据 |
| XML  | 自定义 | 存储数据 |



## 基本语法

```xml
<?xml version="1.0" ?><!-- 标签头 xml只能小写 -->
<users>
	<user id="01"><!-- 有且只有一个根标签 -->
        <name charset="UTF-8">王兴</name>
        <age  charset="ASCLL">23</age>
        <sex  charset="UTF-8">男</sex>
    </user>
</users>
```



## 标签头

| 属性名   | 介绍   | 可选值 |
| -------- | ------ | ------ |
| version  | 版本号 | 1.0    |
| encoding | 编码集 | UTF-8, |
|          |        |        |



## DTD约束

​		简单的约束    <filename.dtd>

​		引入约束

​			内部：<!DOCTYPE 根标签 [约束写在这里]>

​			本地：<!DOCTYPE 根标签 SYSTEM "文件路径">

​			网络：<!DOCTYPE 根标签 PUBLIC "dtd文件名" "文件路径">



```xml
<!DOCTYPE students [
	<!ELEMENT students (student*) >
    <!ELEMENT student (name,age,sex)>
    <!ELEMENT name (#PCDATA)>
    <!ELEMENT age (#PCDATA)>
    <!ELEMENT sex (#PCDATA)>
    <!ATTLIST student number ID #REQUIRED>
]> <!-- 内部应用 -->

<!DOCTYPE students SYSTEM "student.dtd"><!-- 本地引入 -->

<!DOCTYPE students PUBLIC "https：//www... "student.dtd"/><!-- 网络引用 -->
```



## Schema约束

​		复杂的约束，功能更强大可以约束属性类型 <filename.xsd>

```xml
<rootTag x
```



## xml增删改产

​	思想

​		DOM:	一次性加载进内存，生成DOM树，

​				消耗内存

​				可实现增删改查并持久化				

​		SAX:	 一行一行读取，事件驱动

​				不耗内存

​				onlyread

​	常见解析器

​		dom4j：专门解析XML 基于Dom

​		jsoup：可以解析HTML 基于DOM，爬虫

​		