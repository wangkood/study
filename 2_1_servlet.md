# Servlet

​	servlet 通常通过 HTTP（超文本传输协议）接收和响应来自 Web 客户端的请求。 

​	单例：只会被创建一次

​	多线程：每次请求都会创建一个线程

​	注解：@WebServlet("/hello")  不在需要去配置web.xml

​				@WebServlet("/a","/b","/c")

​	继承关系 Servlet(i) -> GenericServlet(a) -> HttpServlet(a) 



## 方法

| 方法    |                    |      |
| ------- | ------------------ | ---- |
| init    | (生命周期)初始化时 |      |
| service | (生命周期)每次访问 |      |
| destory | (生命周期)即将销毁 |      |



## 创建时机

默认：在第一次访问时创建

也可以自定义web.xml,在服务启动时创建 负数为第一次访问，整数或零为项目启动

```xml
<servlet>
	<servlet-name>xxx</servlet-name>
    <servlet-class>xxx.XXX</servlet-class>
    <load-on-startup>0</load-on-startup>
</servlet>
```




