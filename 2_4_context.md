# ServletContext(上下文)

​	每个web工程有且只有一个此对象

​	获取

```java
void function(HttpServletRequest request){
    request.getServletContext();
    this.getServletContext();
    this.getServletConfig().getServletContext();
}
```



## 方法

| 方法名                   |        作用         | 例子                        |
| ------------------------ | :-----------------: | --------------------------- |
| getAttribute(String key) |     获取域对象      | c.getAttribute("hello")     |
| getRealPath(String path) | 获取绝对路径(web下) | c.getRealPath("index.html") |
| setServlet()             |   动态添加Servlet   |                             |
| getMimeType              |  获取mime文件类型   |                             |
|                          |                     |                             |

