# Spring

## IOC

​	控制反转，在spring中使用控制反转概念的地方都可以用依赖注入(DI)代替

​	将程序中的资源引入放在程序外部，降低程序耦合性



## 注解

```java

@Repository("userDap")
public class UserDaoImpl implements UserDao {

    // @Resuorce("")
    @Autowired
    @Qualifier("dataSource")
    DataSource dataSource;


    public User getByUsername(String username) {
 	}
}

```

| 注解名                                           | 作用字段     | 作用                                             |
| ------------------------------------------------ | ------------ | ------------------------------------------------ |
| @Component("all")                                | 类           | 创建此类对象加入spring容器                       |
| @Repository("dao")                               | 类           | \/ \/                                            |
| @Service("service")                              | 类           | \/ \/                                            |
| @Controller("web")                               | 类           | \/ \/                                            |
| @Value("${driver}")                              | 属性         | 注入值，可从配置文件加载                         |
| @Autowired                                       | 属性         | 更具属性类型，自动注入                           |
| @Qualifier("userDao")                            | 属性         | 配合Autowired指定注入资源id                      |
| ------------------------------------------------ | ------------ | ------------------------------------------------ |
| @Configuration                                   | 类           | 标识为配置类                                     |
| @ComponentScan("cn.test")                        | 类           | 组件扫描                                         |
| @Bean("dataSource")                              | 方法         | 将方法返回值作为组件加入spring容器               |
| @PropertySource("classpath:xx.pro")              | 类           | 配置文件扫描                                     |
| @Import({Co1.class,Co2.class})                   | 类           | 导入配置类                                       |
| ------------------------------------------------ | ------------ | ------------------------------------------------ |
| @RunWith(SpringJu ... unner.class)               | 测试类       | junit注解,通过啥类运行                           |
| @ContextConfiguration("clas...xml")              | 测试类       | 配置文件                                         |
| @\/\/\/(classes=xxxx.class)                      | 测试类       | 配置类                                           |


