# spring-aop

​	Aspect Oriented Programming 面向切面编程

​	

## 底层原理

​	通过动态代理，将增强的方法动态织入目标方法前后

​	动态代理有两种方式

| 代理方式  | 目标类与代理类关系     | 操作前提             |
| --------- | ---------------------- | -------------------- |
| jdk代理   | 相同父接口，兄弟级关系 | 目标对象必须有父接口 |
| cglib代理 | 代理对象为目标对象子类 | 必须导入cglib的jar包 |



```java
// jdk方式
代理对象 = Proxy.newProxyInstance(目标类类加载器,目标类接口数组，new header(){})
```

![](https://img-blog.csdn.net/20180530175605692?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3E5ODIxNTE3NTY=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

```xml
<bean id="myAspect" class="cn.wangxing.study_spring.aop.MyAspect" />
<aop:config  proxy-target-class="true"> <!-- 指定动态代理方式为 cglib方式，默认自动选择 -->
	<!-- 切面 -->
	<aop:aspect ref="myAspect">
        <!-- 增强和切点植入 -->
		<aop:before method="之前" 
        pointcut="execution(* cn.wangxing.study_spring.service.impl..*(..))" />
        <aop:after  method="之后" 
        pointcut="execution(* cn.wangxing.study_spring.service.impl..register(..))" />
    </aop:aspect>
</aop:config>
```

## 表达式语法

```xml
execution(  【修饰符】 返回值  包名.类名.方法(参数列表)  )
execution( 	cn.wangxing.User cn.wangxing.service.login(String,String)  )
execution(  * cn.wangxing.service.*.*(..)  )
execution(  * cn.wangxing..*.*(..)  )
```

## 通知类型

| 命名            | 作用                     | 注解特殊参数列表                |
| --------------- | ------------------------ | ------------------------------- |
| before          | 连接点前执行             |                                 |
| after-returning | 连接点后执行             | Returning     返回值            |
| after-throwing  | 连接点方法报错后会运行   | Exception      异常             |
| after           | 最后无论是否异常都会执行 |                                 |
| around          | 之前之后都执行           | ProceedingJoinPoint  当前连接点 |

## 插入方法

```java
// ProceedingJoinPoint：正在进行的目标方法
public void around(ProceedingJoinPoint pjp,Exception e){
    sout("before");
    pjp.proceed();
    sout("after");
}
```

## 注解开发

```java
@Component
@Aspect	// 标注为切面类
public class MyAspect{
    
	@Before("executing( * bao..*.*(..) )")
	public void doSomeThing(){
		// xxxxxxxxxxxxx
	}
    
    // 获取连接点返回值,只有这个注解才用returning属性
    @AfterReturning(value = "point()",returning ="o")
    public void AfterReturning(Object o){
        System.out.println("AfterReturning" + o);
    }
    
    
}
--------------------------------------------------------------------------------------
@Configuration
@ComponentScan("cn.wangxing.study_spring.aop_anno")
@EnableAspectJAutoProxy //如果使用注解需要开启切面自动代理
public class SpringConfig{}
```



