# Cookie

## cookie 

​	1> 存储在客户端的键值对数据

​	2> 不可跨域

​	3> 属性

​			key	value	age	url

​	5> 提交的cookie和服务器响应的cookie都存在头部

​	6> 最好对cookie的键值进行 url 编码

```properties
# 请求头中
Cookie: JSESSIONID=xxxxxxx; wang=xing 。。。


# 响应头中 (允许多个)
Set-Cookie: wangxing=ddd; Max-Age=60; Expires=Sun, 26-May-2019 06:48:51 GMT
Set-Cookie: wangxingdd=da; Max-Age=34; Expires=Sun, 26-May-2019 06:56:47 GMT
# Max-Age	负数=浏览器关闭销毁(默认)	零=删除	正数=存活事件  优先级高于expires
# Expires	指定了coolie的生存期，默认情况下coolie是暂时存在的，他们存储的值只在浏览器会话期间存在，当		   	   用户推出浏览器后这些值也会丢失，如果想让cookie存在一段时间，就要为expires属性设置为未来的 		  	   一个过期日期。现在已经被max-age属性所取代，max-age用秒来设置cookie的生存期。
# Domain	domain属性可以使多个web服务器共享cookie。domain属性的默认值是创建cookie的网页所在服务器			 的主机名。不能将一个cookie的域设置成服务器所在的域之外的域。例如让位于order.example.com			的服务器能够读取catalog.example.com设置的cookie值。如果catalog.example.com的页面创建			的cookie把自己的path属性设置为“/”，把domain属性成“.example.com”，那么所有位于					catalog.example.com的网页和所有位于 orlders.example.com的网页，以及位于example.com			  域的其他服务器上的网页都可以访问这个coolie。
#Path 		它指定与cookie关联在一起的网页。在默认的情况下cookie会与创建它的网页，该网页处于同一目录下				的网页以及与这个网页所在目录下的子目录下的网页关联。
#HttpOnly: 	告知浏览器不允许通过脚本document.cookie去更改这个值，同样这个值在document.cookie中也不			  可见。但在http请求张仍然会携带这个cookie。注意这个值虽然在脚本中不可获取，但仍然在浏览器安			装目录中以文件形式存在。这项设置通常在服务器端设置
```

```java
// 获取所有cookie
request.getCookies；

// 新建cookie
Cookie cookie = new Coo0kie(name,value);
cookie.setMaxAge(int)； // 设置最大寿命
    
// 设置cookie
response.addCookie(cookie)
```



