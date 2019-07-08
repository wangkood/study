# spring事务·入门

​	基于spring-aop管理数据库事务

​	声明式事务控制

​	！！Spring默认情况下是捕获到 ！运行时异常！ 就回滚

 	TransactionAspectSupport.currentTransactionStatus().setRollbackOnly(); // 手动回滚

## 事务管理的三个类

### 事务管理器   PlatformTransactionManager

​	platform == 平台

​	PlatformTransactionManager为spring的事务管理器，为接口

​	spring为不同dao层技术提供了不同的实现类

| dao层技术    | 实现类                                     |
| ------------ | ------------------------------------------ |
| mybatis      | jdbc.datasourceTranscationManager          |
| jdbcTemplate | \/ \/ \/ \/ \/                             |
| hibernate    | orm.hibernate5.HibernateTransactionMannger |

### 事务控制	TransactionDefinition 

Definition == 定义



隔离级别

事务传播行为(业务方法嵌套调用)

超时时间(默认-1，无超时)

是否只读(当查询时建议设置只读)



### 事务状态   TransactionStatus

​	由spring控制，反应事务的一些状态，通过这个类可以手动控制事务

​	**`TransactionAspectSupport`**.currentTransactionStatus()



## xml方式配置事务

```xml
<!-- 目标对象，切入点 -->
<bean id="service" class="xxx.xxx.service.xxxService"/>

<!-- 平台事务管理器 -->
<bean id="transtationMange"	class="">
	<property name="dataSource" ref="dataSource"/>
</bean>

<!-- 事务增强，通知 -->
<tx:advice id="txAdvice" transacton-manager="transactionMange">
	<tx:attributes>
        <!-- 基于方法的事务设置，
			隔离级别,传播行为，超时时间，回滚异常指定，回滚异常排除。。。。 -->
    	<tx:method name="login" isoltion="xx" .../>
        <tx:method name="save*" isoltion="xx" .../>
        ....
    </tx:attributes>
</tx:advice>

<!-- 织入 -->
<aop:config>
	<aop:adviser advice-ref="txAdvice" 
                 pointcut="execution(* xxx.xxx.service.*(..))"/>
</aop:config>

```



## 全注解方式配置事务

```java
--------------------------------------- 配置类 ----------------------------------------
// 开启事务管理，一般放在配置类上，
// 等同于xml配置方式的 <tx:annotation-driven />
@enableTransactionManager 	
public class SpringConfig{
    // 。。。。。。。。。。此处省略连接池，模板等创建代码
    
    // 设置事务管理器具体实现，spring会自动去容器中找
    // @Bean 将被优先加载，框架不会重新实例化其他的 PlatformTransactionManager 实现类
    @Bean
    public PlatformTransactionManager txManager(DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }
}

-------------------------------------- service层业务方法 ----------------------------------
// 放在需要事务的方法上
@Transaction	
public void doSomeThingService(){
    // 。。。。。。业务代码
}
```

