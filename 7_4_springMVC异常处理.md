# 异常处理

​	在dao，service发生的异常可以向上抛出，给springMVC处理，默认springMVC会返回异常页面



## 简单异常处理器

- 只能进行页面跳转
- 更具异常类型，选择不同页面

```xml
<!-- 简单异常处理器-->
<bean class="org.springframework.web.servlet.handler.SimpleMappingExceptionResolver">
    <property name="defaultErrorView" value="err/500"/>
    <property name="exceptionMappings">
        <map>
        	<entry key="cn.MyException" value="myErrorPage"/>
        </map>
    </property>
</bean>
```



## 自定义异常处理器

- 可以写逻辑代码，也可页面跳转
- 所有异常都会调用此处理器
- 可在此类中使用  obj instanceof  Obj  判断异常类型，实现不同异常不同处理

```xml
<!-- 自定义异常处理器 -->
<bean id="exceptionResolver" class="cn.wangxing.user_manager.web.MyExceptionResolver"/>
```



```java
public class MyExceptionResolver implements HandlerExceptionResolver {
    @Override
    public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, 	Exception ex) {

        ModelAndView modelAndView = new ModelAndView("my_err");
        modelAndView.addObject("info",ex.getMessage());
        return modelAndView;
    }
}
```

