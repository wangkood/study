# Jquery

​	一个web前端javaScript框架

​	jquery 对象为复数形式，如果要转换为 dom 对象，需加上字段名	jqueryObject[0]

​	对jquery对象操作，会影响其内部引用的所有dom对象

​	



```html
<script>
	var idSele = $("#myDiv")	// 并非 dom 对象
</script>
<html>
    <div id="myDiv"></div>
</html>
```



# 选择器

​	基本类似css选择器

| 类型 | 语法                     | 范例                         |
| ---- | ------------------------ | ---------------------------- |
| id   | #id值                    | #username                    |
| 类   | .类值                    | .inputText                   |
| 元素 | 标签名                   | div                          |
| 并集 | 选择器1,   选择器2,  ... | div,  #username,  .inputText |
|      |                          |                              |

