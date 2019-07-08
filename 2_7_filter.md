# filter过滤器

​	继承关系	HttpFilter(a)	>	GenericFilter(a)	>	Filter(i)

​	拦截器只要符合要求就都会执行，除非被拦截

​	Servlet3.0之前Filter过滤的顺序是由用户在web.xml中配置的顺序决定的

​	在3.0之后新增@WebFilter注解，当使用注解配置多个Filter时，用户无法控制其执行顺序，此时Filter过滤的顺	序是按照Filter的类名来控制的，按自然排序的规则。

​	

```java
@WebFilter("/*")
public class Demo1 implements Filter{
    public void doFilter(ServletRequest req,ServletResponse resp){
        // 执行servlet前
        ch.doFilter(req,resp)
      	// 执行完了servlet
    }
}

@WebFilter(
        urlPatterns = {"/hello","*.jsp"},
        description = "这是一个过滤器"
)
public class Demo2 implements HttpFilter{
    public void doFilter(HttpServletRequest req,HttpServletResponse resp,FilterChain ch){
        // xxxxxxxxxxxxxx
        ch.doFilter(req,resp)
    }
}
```







## url路径

|        |            |                        |
| ------ | ---------- | ---------------------- |
| /*     | 匹配所有   | servlet & .html & .jsp |
| /      | 匹配所有   | nnull                  |
| *.jsp  | 后缀名匹配 | xxxx.jsp               |
| /hello | 完全匹配   | /hello                 |
|        |            |                        |
|        |            |                        |

