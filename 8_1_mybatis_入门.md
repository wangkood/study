# mybatis

- 对数据库进行CRUD操作的dao层框架
- orm思想 对象映射数据表
- 配置文件可以是下xml 或 java类(@Configuration)
- 将sql代码和java文件解耦合，



[外部资料]: https://blog.csdn.net/xudan1010/article/details/53435018	"原理分析"

[官方文档]: http://www.mybatis.org/mybatis-3/configuration.html#typeAliases



## 编码

- 依赖

- ```xml
  <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>${mysql-version}</version>
  </dependency>
  
  <!-- mybatis -->
  <dependency>
      <groupId>org.mybatis</groupId>
      <artifactId>mybatis</artifactId>
      <version>${mybatis-version}</version>
  </dependency>
  ```

  

- 主配置文件

- ```xml
  <?xml version="1.0" encoding="UTF-8" ?>
  <!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" 
  			"http://mybatis.org/dtd/mybatis-3-config.dtd">
  <configuration>
      
      <!-- 运行环境设置 -->
      <environments default="dev">
          <environment id="dev">
              <transactionManager type="JDBC"></transactionManager>
              <dataSource type="POOLED">
                  <property name="driver"     value="com.mysql.cj.jdbc.Driver"/>
                  <property name="url"        
                    value="jdbc:mysql:///study_mybatis?serverTimezone=Asia/Shanghai"/>
                  <property name="username"   value="root"/>
                  <property name="password"   value="1234"/>
              </dataSource>
          </environment>
      </environments>
  
      <!-- 引入mapper映射 -->
      <mappers>
          <mapper resource="cn/wangxing/study_mybatis/dao/UserMapping.xml" />
      </mappers>
  
  </configuration>
  ```

  

- mapping配置文件

- ```xml
  <?xml version="1.0" encoding="UTF-8" ?>
  <!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
  <mapper namespace="userMapper">
      <select id="list" resultType="cn.wangxing.study_mybatis.domain.User">
          SELECT  *
          FROM    user
      </select>
  </mapper>
  ```



- 测试类

- ```java
  public  void test(){
  	InputStream configInput = Test1.class.getClassLoader().getResourceAsStream("mybatis.xml");
  
      SqlSessionFactory sqlSessionFactory = 
          new SqlSessionFactoryBuilder().build(configInput);
      SqlSession sqlSession = sqlSessionFactory.openSession();
  
  
      User user = 
          new User(0,"刘🐷备",(byte) 1,new Date(1996,11,20),88.00,new Timestamp());
  
      sqlSession.insert("userMapper.insert", user );
  
      close(sqlSession);
      
  }
  ```

  

