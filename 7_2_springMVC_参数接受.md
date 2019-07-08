

# springMVC接受参数

# 

- ```java
  // 【普通】?username=wang&age=23&remeber=true
  public void test1(String username,int age,boolean remeber){}
  
  // 【pojo】?username=王兴&age=23
  public void test2(User user){}
  
  // 【数组】?arr=wang&arr=xing&arr=like&arr=java
  public String array(String[] arr){}
  
  // springMVC不支持直接在参数列表定义集合
  // 直接传集合，需使用RequestBody配合ajax
  // 【集合】?users[0].username=wang&user[0].password=xing
  public String list(VO vo){}
  
  // 【综合】
  ```





- | 注解            | 作用         | 参考  |
  | --------------- | ------------ | ----- |
  | @RequestHeadler | 注入请求头   | 参数  |
  | @RequestParam   | 注入请求参数 | 参数  |
  | @CookieValue    | 获取cookie   | c参数 |



- @RequestParam

  - 参数注解，规定spring 形参规则

  - ```java
    // value->前台穿过来的参数
    // required->是否必须，默认true
    // defaultValue->如果没值默认值是
    public String test(
        @RequestParam(value="user",required=true,defaultValue="wang")String username
    ){}
    ```

- @PathVariable(value="",required=true)

  - 参数注解

  - 将url中的字段解析成参数

  - ```java
    // url = xxxx//user/{user}
    public String dd(
    	@PathVariable("name") String name
    ){}
    ```

    

- 参数转换

  - 默认日期转换器 2018/11/20 -> Date

  - 自定义日期转换器

    - ```java
      // 第一步：定义日期转换器类
      public class MyConvert implements Convert<String,Date>{
      	public Date convert(String dateStr){
              
          }
      }
      ```

      ```xml
      <!-- 第二步：加入转换器组 -->
      <bean id="conversionService" 
            class="org.springframework.format.support.
                                          FormattingConversionServiceFactoryBean">
          <property name="converters">
              <set>
                  <bean class="cn.wangxing.web.DataConvert"/>
              </set>
          </property>
      </bean>
      
      
      <!-- 第三步：注册转换器组 -->
      <mvc:annotation-driven conversion-service="conversionService"/>
      ```

      

## 文件上传

- 三要素
  - post提交，
  - 多部分表单数据 enctype="multipart/from-date"
  - <input type="file" name="myfile"/>

### 代码实现

```html
<!-- html 前端配置 -->
<form action="update" method="post" enctype="multipart/form-data">
    名字<input type="text"  name="username"><br/>
    文件<input type="file"  name="file">
    <input type="submit">
</form>
```



```xml
<!-- pom 导入依赖 -->
<dependency>
    <groupId>commons-fileupload</groupId>
    <artifactId>commons-fileupload</artifactId>
    <version>1.3.1</version>
</dependency>
<dependency>
    <groupId>commons-io</groupId>
    <artifactId>commons-io</artifactId>
    <version>2.3</version>
</dependency>
```



```xml
<!-- spring.xml 配置文件上传解析器 -->
<bean id="multipartResolver" 			                                                     	class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
    <property name="defaultEncoding" value="UYF-8"/>
    <property name="maxUploadSize" value="500000"/>
</bean>
```



```java
// controller.java 文件上传
@RequestMapping(value = "/update",method = RequestMethod.POST)
public void update(String username, MultipartFile updatefile) throws IOException {
	// 获取文件名
    String originalFilename = updatefile.getOriginalFilename();
    // 存储文件
    updatefile.transferTo(new File("D:\\filetest\\"+originalFilename));
}
```

