# mybatis主配置

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <environments default="dev">
        <environment id="dev">
            <transactionManager type="JDBC"></transactionManager>
            <dataSource type="POOLED">
                <property name="driver"     value="com.mysql.cj.jdbc.Driver"/>
                <property name="url"        
                    value="jdbc:mysql:///study_mybatis?serverTimezone=Asia/Shanghai"/>
                <property name="username"       value="root"/>
                <property name="password"   value="1234"/>
            </dataSource>
        </environment>
    </environments>

    <mappers>
        <mapper resource="cn/wangxing/study_mybatis/dao/UserMapping.xml" />
    </mappers>

</configuration>
```



## 所有标签

- configuration		`根标签`
  - properties          	`映入外部配置文件(jdbc)`
  - settings                   `设置，可以设置输出sql`
  - typeAliases             `设置别名(简化全类名书写 复数)`
  - environments		`环境配置可以有多个(复数)`
    - environment		`环境(单数)`	
      - transactionManager	`事务管理器`
      - dataSource                    `数据源`
  - mappers                 `对象和数据库映射(复数)`
    - mapper           		`映射(单数)`
  - 



### properties

```xml
<!-- 从类路径下加在配置文件 使用 ${jdbc.url} 提取对象 -->
<properties resource="jdbc.properties"/>
```



### typeAliases

```xml
<!-- 别名设置(复数) -->
<typeAliases>
    <!-- 下次在需要写User全类名的地方，只要写User就行了，简化书写-->
    <typeAlias type="cn.wang.domain.User" alias="User"/>
</tyepAlicase>
```



### environments

```xml
<!-- environments == 环境；围绕物；周围；环境艺术作品
		配置mybatis的一些运行环境
 		可以有多个，通过 default属性指定生效
-->
<environments default="dev">
    <environment id="dev">
        
        <!-- 事务管理器
 				type 
					JDBC: 和jdbc操作类似，手动提交和回滚事务
					MANAGED:啥事都没干，从不回滚和提交，让容器管理，默认会关闭连接 -->
        <transactionManager type="JDBC"/>
        
        <!-- 数据源设置
 				type:
					POOLED:	数据库形式，会将连接缓存
					UNPOOLED: 每次都新建和关闭连接
					JNDI: 可配合容器使用，将连接池设置在mybatis外部 -->
        <dataSource type="POOLED">
            <property name="driver"     value="com.mysql.cj.jdbc.Driver"/>
            <property name="url"        
                      value="jdbc:mysql:///study_mybatis?serverTimezone=Asia/Shanghai"/>
            <property name="username"       value="root"/>
            <property name="password"   value="1234"/>
        </dataSource>
    </environment>
</environments>
```



### mappers

```xml
<mappers>
    <!-- 相对于类路径加载 -->
    <mapper resource="cn/wang/dao/xxxMapper.xml"/>
   
    <!-- 资源全限定资源定位符 -->
    <mapper url="file:///E:/balabala/UserMapping.xml" />
    
    <!-- 更具全路径名加载(类名) -->
    <mapper class="cn.wang.dao.xx"/>
        
    <!-- 包扫描(接口) -->
    <package name="cn/wangxing/study_mybatis"/>
</mappers>
```

