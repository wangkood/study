# mybatis进阶

[TOC]



## 动态代理dao层

- 基于JDK动态代理机制
- 应为mapper中id不能重复，所以不可以重载
- 规则
  - 需要有一个对应的dao接口
  - 在namespace中写dao接口全名
  - 接口方法无需手动和mapper.xml中方法关联，但方法名和id值相同
  - 且 返回值类型相同
  - 且 参数列表类型相同

```java
public void testList(){
		// 获取接口的代理对象
        userDao = sqlSession.getMapper(UserDao.class);
		
    	// 执行相应方法
        List<User> userList = userDao.list();
        userList.forEach( (user)-> System.out.println(user) );
}
```



## 自定义类型转换器

- 如果java和数据库中数据类型对应不上时，会导致异常，所有需要自定义类型转换器



1 编写类

- 实现TypeHandler接口或继承BaseTypeHandler抽象类
- 下面是一个 util.data 和 BIGINT互转的类

```java
package cn.wangxing.study_mybatis.dao;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

public class DataHandle  extends BaseTypeHandler<Date> {

    // date --> long
    @Override
    public void setNonNullParameter(PreparedStatement ps, int i, Date parameter, JdbcType jdbcType) throws SQLException {
        System.out.println("setNonNullParameter");
        ps.setLong(i,parameter.getTime());
    }

    // 根据列名获取值
    @Override
    public Date getNullableResult(ResultSet rs, String columnName) throws SQLException {
        System.out.println("getNullableResult ResultSet columnName");
        return new Date(rs.getLong(columnName));
    }

    // 一个是根据列索引位置获取值
    @Override
    public Date getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
        System.out.println("getNullableResult ResultSet columnIndex");
        return new Date(rs.getLong(columnIndex));
    }

    // 存储过程。
    @Override
    public Date getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
        System.out.println("getNullableResult CallableStatement columnIndex");
        return new Date(cs.getLong(columnIndex));
    }
}
```



2 在配置文件中配置

```xml
<typeHandlers>
    <typeHandler handler="cn.wangxing.study_mybatis.dao.DataHandle" 
                 javaType="java.util.Date" 
                 jdbcType="BIGINT"
</typeHandlers>
```



## plugins标签

- 类似于springMVC中的拦截器

- 需要实现Interceptor接口

  - ```java
    package cn.wangxing.study_mybatis.dao.interceptors;
    
    import org.apache.ibatis.cache.CacheKey;
    import org.apache.ibatis.executor.Executor;
    import org.apache.ibatis.mapping.BoundSql;
    import org.apache.ibatis.mapping.MappedStatement;
    import org.apache.ibatis.plugin.*;
    import org.apache.ibatis.session.ResultHandler;
    import org.apache.ibatis.session.RowBounds;
    
    import java.util.Properties;
    
    // 一个@Intercepts可以配置多个@Signature，相当于拦截条件
    // type：	表示拦截的类，这里是Executor的实现类
    // method：	表示拦截的方法，这里是拦截Executor的update方法
    // args：	表示方法参数
    @Intercepts({
        @Signature(
            type = Executor.class,
            method = "query",
            args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class}
        ),
        @Signature(
            type = Executor.class,
            method = "query",
            args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class, CacheKey.class, BoundSql.class}
        )
    })
    public class PrintSQLInterceptor implements Interceptor {
        // 拦截器具体处理逻辑方法
        @Override
        public Object intercept(Invocation invocation) throws Throwable {
            // do something ...... 方法拦截前执行代码块
           
            Object result = invocation.proceed();
    
            // do something .......方法拦截后执行代码块
            return result;
        }
    
        // 根据签名signatureMap生成动态代理对象
        @Override
        public Object plugin(Object target) {
            System.out.println("plugin");
            return Plugin.wrap(target, this);
        }
    
        // 获取在配置文件中设置的属性
        @Override
        public void setProperties(Properties properties) {
            // System.out.println("setProperties: "+properties);
        }
    }
    
    ```

    

  

- 在plugins标签中配置

  - ```xml
    <plugins>
        <plugin interceptor="cn.wangxing.study_mybatis.dao.
                             interceptors.PrintSQLInterceptor">
            <property name="property1" value="hello"/>
        </plugin>
    </plugins>
    ```

    



## 分页插件

<https://github.com/pagehelper/Mybatis-PageHelper/blob/master/wikis/zh/HowToUse.md>

导入坐标

```xml
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>5.1.10</version>
</dependency>
```



激活插件

```xml
<plugins>
    <plugin interceptor="com.github.pagehelper.PageHelper">
        <!-- 指定数据库方言 -->
        <property name="helperDialect" value="mysql"/>
    </plugin>
</plugins>
```



基础API

```java
@Test
public void testList() throws NoSuchMethodException {
    
    // 设置分页信息
    PageHelper.startPage(2, 2);
    
    // 调用获取所有的方法，会自动拼接sql -->  SELECT * FROM user LIMIT ?, ? 
    List<User> userList = userDao.list();
	
    // 获取分页数据
    PageInfo pageInfo = new PageInfo<User>(userList);
	System.out.println("总条数：\t"+pageInfo.getTotal());
    System.out.println("总页数：\t"+pageInfo.getPageNum());
    System.out.println("上一页：\t"+pageInfo.getPrePage());
    System.out.println("下一页：\t"+pageInfo.getNextPage());


}
```



