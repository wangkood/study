# session

​	1> 基于JSESSIONID这个cookie 来判断不同客户端

​	2> 默认JSESSIONID会在浏览器关闭后失效（也可以手动持久化）

​	3> 如果客户端禁用cookie，会影响session的使用，但也有解决方法（url上加入JSESSIONID）

```url
# 路径;jsessionid=XXXXXXXXXXXXXXX?参数列表
http://localhost/05/testSession;jsessionid=FF4C02A986759F88BA5AD4E96F8FE40A?aaa=bbb
```

