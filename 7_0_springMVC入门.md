

# springMVC

- 一个web层框架
- 模块化



## 前端控制器  DispatcherServlet

- 整个springMVC的核心，指挥调度

  

## 处理器映射器  HandlerMapping

-  根据配置找到相应的 Handler，返回给前端控制器 DispatcherServlet，这个 Handler 可能包含 N 个 Interceptor 拦截器。

- 

- | 映射器                            | 规则                                                         | 基于 |
  | --------------------------------- | ------------------------------------------------------------ | ---- |
  | BeanNameUrlHandlerMapping         | 将 bean 的 name 作为 url 进行查找，                            必须实现Controller | 类   |
  | SimpleUrlHandlerMapping           | 通过内部参数去配置 url 和 handler 之间的映射关系         可以定义拦截器                                                                    必须实现Controller | 类   |
  | ControllerClassNameHandlerMapping | TestController 控制器则映射的地址就为 / test*，           TestController的 test 方法，则 url 为 test/test.action | 方法 |
  | RequestMappingHandlerMapping      | springMVC3.1后默认映射器，注解映射器                         | 方法 |

  



## 处理器适配器  HandlerAdapter

- 根据映射器找到的处理器 Handler 信息，按照特定的规则去执行相关的处理器 Handler
- SimpleControllerHandlerAdapter
- HttpRequestHandlerAdapter
- RequestMappingHandlerAdapter // 默认选择 ，注解式



## 视图解析器   ViewResolver

- 解析视图，
- 。。。。很多实现，自由选择



## web.xml

```xml
<servlet>
    <servlet-name>springMVC</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <!-- 
		如果需要配置类加载，则需要添加一下属性
 		设置applicationContext的实现类
	-->
    <init-param>
        <param-name>contextClass</param-name>
        <param-value>org.springframework.web.context.
            support.AnnotationConfigWebApplicationContext</param-value>
    </init-param>
    <init-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>cn.wangxing.config.SpringMvcConfig</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>springMVC</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```



## 注解方式

```java
---------------------------------------- 配置类 -------------------------------------

@Configuration
@ComponentScan("cn.wangxing")
public class SpringMvcConfig {

   /* @Bean
    public HandlerMapping createHandlerMapping(){
        return new BeanNameUrlHandlerMapping();
    }

    @Bean
    public HandlerAdapter createHandlerAdapter(){
        return new SimpleControllerHandlerAdapter();
    }*/

    // 视图解析器
    @Bean
    public ViewResolver createViewResolver(){
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();

        // 前缀
        viewResolver.setPrefix("WEB-INF/page/");
        // 后缀
        viewResolver.setSuffix(".jsp");

        return viewResolver;
    }
}

---------------------------------------- controller -------------------------------------

// value = 指定请求url
// method = 指定请求方法 get，post。。。
// params = {“name”，“age!100”} 指定参数必须有name，age参数不能为10
@RequestMapping(value=“/hello”,method=RequestMehth.post,params={"name"})
public String hello(){
    // 前缀可选
    //		forward:	-- 转发
    //		redirect: 	-- 重定向
    // 默认返回视图路径，默认不支持html
    return "/hello.jsp";	
}

```

## xml

```xml
<!-- 开启注解，并开启基于方法的 处理器映射器和适配器 -->
<mvc:annotation-driven/>

<!-- 处理器映射器 -->
<bean class="org.springframework.web.servlet.handler.
			BeanNameUrlHandlerMapping"/>

<!-- 处理器适配器 -->
<bean class="org.springframework.web.servlet.mvc.
				SimpleControllerHandlerAdapter"/>

<!-- 视图解析器 -->
<bean class="org.springframework.web.servlet.view.
             InternalResourceViewResolver">
    <!--重定向是否添加上下文路径-->
    <property name="redirectContextRelative" value="true"></property>

    <!--配置jsp路径的前缀-->
    <property name="prefix" value="/WEB-INF/views/"></property>

    <!--配置jsp路径的后缀-->
    <property name="suffix" value=".jsp"></property>
</bean>

<!-- 扫描contriller组件 -->
<context:component-scan base-package="cn.wangxing.study_spring">
	<context:include-filter type="annotation" 
                            expression="org.springframework.stereotype.Controller"/>   
<context:componet-scan>
```

