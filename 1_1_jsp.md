# JSP(Java Server Pages)

​	1> 既可以写html代码，又可以写java代码

​	2> 其本质是一个servlet

​	3> 执行jsp 后 会在tomcat/work 目录下生成对应的serclet类

## helloworld

```jsp
<%@ page contentType="text/html;charset=utf-8" %>
<html>
    <head>
      <title>jsp学习👍</title>  
    </head>
    <body>
        
    <%-- 我是一行注释 --%>
    <%!
    	// 此代码块将会放入成员变量位置(类中方法外)
    	String str = "helloworld";
    %>
    <%
    	// 此代码快将会放入service方法中	
    	SyStem.out.println(str);
    %>
    
    <h1><%="将会被移入文档流"%></h1>
    
 	</body>
</html>
```



## 各种语句块

| 语句块            |                                           | 作用                             |
| ----------------- | ----------------------------------------- | -------------------------------- |
| <%!  ...  %>      | `<jsp:scriptlet>等价</jsp:scriptlet>`     | 成员变量区域                     |
| <%  ...  %>       | `<jsp:declaration>等价</jsp:declaration>` | service方法内部                  |
| <%=  ...  %>      | `<jsp:expression>等价</jsp:expression>`   | 表达式结果会被转成string嵌入文档 |
| <%--   ...   --%> | ``                                        | jsp注释                          |



## jsp指令

```jsp
<%@ page %>		<%-- 定义页面的依赖属性，比如脚本语言、error页面、缓存需求等等 --%>

<%@ include  %>		<%-- 	包含其他文件 --%>

<%@ taglib  %>		<%-- 	引入标签库的定义，可以是自定义标签 --%>
```



## 九大隐含对象

| 对象名      | 作用                              |                       |
| ----------- | --------------------------------- | --------------------- |
| application | HttpServletContext实例            |                       |
| request     | HttpServletRequest实例            |                       |
| response    | HttpServletResponse实例           |                       |
| session     | HttpSession实例                   |                       |
| config      | ServletConfig类实例               |                       |
| pageContext | 提供jsp页面所有对象及命名空间访问 | !!!!!!!!!!!!!!!!!!!!! |
| out         | PrintWrite对象                    |                       |
| page        | 类似 this                         |                       |
| Exception   |                                   |                       |



## el表达式

​		EL 全名为Expression Language

​		pageScope、requestScope、sessionScope，applicationScope都是EL 的隐含对象

​		四个隐含对象只能用来取得范围属性值，即JSP中的getAttribute(String name)，却不能取得其他相关信息，

​		EL表达式只能通过内置对象取值，也就是只读操作，如果想进行写操作的话就让后台代码去完成

```jsp
${requestScope.user.password}
${requestScope.user["password"]}
${"100"+100} // 结果为200

```

​		域读取优先级

​				pageContext 	>	request	> 	session	>	application

## jstl标签

​		配合el表达式使用

```jsp
<c:forEach var="每个变量" items="迭代集合" varStatus="每个对象的状态" begin="从哪儿开始" end="到哪儿结束" step="循环的步长">
	<p>${每个变量}</p>
</c:forEach>
```

