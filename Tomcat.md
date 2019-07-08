# Tomcat

## 部署方式

​	1.直接将项目放入webapp文件夹

​	2.配置config\server.xml 

```xml
<!-- docBase=项目路径  path=访问路径 -->
<Context docBase="E:\xxx" path="/">
```

 	3.在conf\Catalina\localhost创建      任意名称.xml

```xml
<!-- docBase=项目路径  访问路径为文件名 -->
<Context docBase="E:\xxx" >
```

