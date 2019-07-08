# spring数据响应

- 基本

- ```java
  // 【页面跳转】 返回 modelAndView
  public ModelAndView test1(ModelAndView mav){
     	mav.setView("seuccess");
      mav.setObject("user","wangwu");
      return mav;
  }
  
  // 【页面跳转】spring 自动驻入model
  public String test2(Model modle){
      mav.setObject("user","wangwu");
      return "hello";
  }
  
  // 【回写数据】 1
  public void test3(HttpServletResponse response){
      response.getWriter().write("hello 你好")
  }
  
  // 【回写数据】 2
  @ResponseBody	// 告知spring框架不进行页面跳转，直接回写String
  public String test4(){
  	return "{username:\"wangpiaoyun\",age:19}";    
  }
  
  // 【回写数据】 3
  @ResponseBody
  public void test4(){
  	// 返回空相应体 
  }
  ```



## 响应json

1. 导入json依赖

   ```xml
   <!-- 在maven中加入fackson依赖 -->
   <dependency>
       <groupId>com.fasterxml.jackson.core</groupId>
       <artifactId>jackson-core</artifactId>
       <version>2.9.9</version>
   </dependency>
   <dependency>
       <groupId>com.fasterxml.jackson.core</groupId>
       <artifactId>jackson-databind</artifactId>
       <version>2.9.9</version>
   </dependency>
   <dependency>
       <groupId>com.fasterxml.jackson.core</groupId>
       <artifactId>jackson-annotations</artifactId>
       <version>2.9.9</version>
   </dependency>
   ```

   

2. 配置处理器映射器

   ```xml
   <!-- 在application中设置处理器映射器 -->
   <bean class="org.springframework.web.servlet.mvc.method.annotation.
                RequestMappingHandlerAdapter">
       <property name="messageConverters" >
           <list>
               <bean class="org.springframework.http.converter.json.
                            MappingJackson2HttpMessageConverter"></bean>
           </list>
       </property>
   </bean>
   ```

   

3. 编写代码测试

   ```java
   @ResponseBody
   public User text(){
       return new User("wangpiaoyun",19);
   }
   ```





# 几个配置

```xml
<!-- 
配置能够帮我们省去DefaultAnnotationHandlerMapping和AnnotationMethodHandlerAdapter的声明配置。同时，还提供了数据绑定支持，@NumberFormatannotation支持，@DateTimeFormat支持，@Valid支持，读写XML的支持（JAXB），读写JSON的支持（Jackson）。其中对json的处理是我们项目中经常用到的，使用Jackson库将对象序列化为json字符串。所以我们的项目中，也必须含有jackson的jar包。当我们返回的数据不是html标签的页面时，而是其他格式的数据时（如xml、json等），我们使用@ResponseBody注解，将Controller的方法返回的对象，通过适当的HttpMessageConverter转换为指定格式后，写入到Response对象的body数据区
 -->
<mvc:annotation-driven/>


<!-- https://www.cnblogs.com/dflmg/p/6393416.html
 	在 web中配置springMVCServlet路径如果选择 / 的话会处理所有请求，包括静态资源，这将导致springMVC找不到而报异常，使用这个注解，spring会在前端处理器处理前，判断是否为静态资源，是则交给 tomcat容器默认servlet去处理
-->
<mvc:default-servlet-handler/>

<!-- 
	也是为了解决找不到静态文件的问题，而这次由spring自己处理
 	允许静态资源放在任何地方，如WEB-INF目录下、类路径下等，甚至可以被打成jar包
	
-->
<mvc:resources 	location="/js,classpath:/META-INF/publicResources/" 		       		                     mapping="/js/**"/>
```

