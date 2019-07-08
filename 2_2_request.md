# request

​		将客户端请求的所有信息封装在这个对象

​		org.apache.catalina.connector.

​		RequestFacade(c) -> ServletRequest(i) -> HttpServletRequest(i)

## 请求报文

```request
POST /signIn Http/1.1			// 请求行
Host: hackr.jp					// 请求头
ConnectionL: keep-alive
/r/n
username=王兴&password=1234	 	// 请求体
```

注：

​	1> 一般只有POST提交才有请求体

​	2> 请求行包含	请求方式	请求路径	http协议版本



## 方法

| 方法名       |              |      |
| ------------ | ------------ | ---- |
| getMethod    | 获取请求方式 |      |
| getPerment   | 获取请求参数 |      |
| getAttrabute | 获取域对象   |      |

