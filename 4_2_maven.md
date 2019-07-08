# maven

​	一个项目管理工具

​		功能

​				1> 管理依赖(jar包)

​				2> 测试方便

​				3> 



## maven仓库

​		本地仓库 -->  远程仓库 --> 中央仓库



## 目录结构

```
myapp
|--	src
|	|--	main
|	|	|--	java
|	|	|--	rescouces
|	|	┗--	webapp
|	┗--	test
|		|--	java
|		|--	rescous
|		┗--	webapp
|-- target
┗--	myapp.pom
```



## 命令

```bash
###
###		Clean Lifecycle	
#####################################
#  删除编译后信息
mvn clean

###
###		Default Lifecycle
#####################################
# 验证项目是否正确
mvn validate

# 编译main下代码
mvn compile

# 编译test下代码
mvn test

# 打包
mvn package

# 放入本地仓库
mvn install

# 上传私服
mvn deploy



# 创建工程
mvn archetype:create
    -DgroupId=cn.wangxing
    -DartifactId=tests
    -DarchetypeArtifactId=maven-archetype-webapp
    
# 
```

## pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>cn.wangxing</groupId><!-- 组织名 -->
    <artifactId>hi_mevan</artifactId><!-- 工程名 -->
    <version>1.0-SNAPSHOT</version><!-- 版本号 -->
    <packaging>war</packaging><!-- 打包方式 -->

    <!-- 编码和版本 -->
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.encoding>UTF-8</maven.compiler.encoding>
        <java.version>1.8</java.version>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
    </properties>

   	<!-- 依赖复数 -->
    <dependencies>

        <dependency><!-- 依赖 -->
            <groupId>javax.servlet.jsp</groupId><!-- 组织ID -->
            <artifactId>jsp-api</artifactId><!-- 项目ID -->
            <version>2.2</version><!-- 版本 -->
            <scope>provided</scope><!-- 依赖范围 -->
        </dependency>
  
    </dependencies>

    <build>
         <!-- 插件 -->
        <plugins>
            <plugin>
                <groupId>org.apache.tomcat.maven</groupId><!-- 组织ID -->
                <artifactId>tomcat7-maven-plugin</artifactId><!-- 项目ID -->
                <version>2.1</version><!-- 版本 -->
                <configuration><!-- 配置 -->
                    <port>80</port>
                    <path>/my</path>
                    <uriEncoding>UTF-8</uriEncoding>
                    <finalName>web</finalName>
                    <server>tomcat7</server>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

## 依赖范围

- 在不同的阶段引入依赖到classpath

| 关键字      |                | 例子        |                         |
| ----------- | -------------- | ----------- | ----------------------- |
| compile默认 | 测试 编译 运行 | spring      |                         |
| test        | 测试           | junit       |                         |
| provided    | 测试 编译      | servlet     |                         |
| runtime     | 运行           | jdbc-driver |                         |
| system      |                |             | 又系统导入，非maven管理 |
| import      |                |             |                         |



## 依赖冲突

- 当不同依赖他们的依赖项相同但版本不同时,会产生依赖冲突



### 解决

1. 谁先声明，谁优先

2. 路径近者优先,直接在pom中声明有冲突的依赖

3. 排除依赖,使用exclusion来排除不需要的依赖

   1. ```xml
      <dependency>
      	<groupID>cn.wangxing</groupID>
          <artfctID>renzhi-crm</artfctID>
          <version>2.0</version>
          <exclusion>
          	...
          </exclusion>
      </dependency>
      ```

      

4. 版本锁定！！！ 使用依赖管理器

   1. ```xml
      <dependencyManagement> <!-- 并不会引入依赖，仍然需要dependencies标签引入 -->
      	<dependency>
          	<groupID>cn.wangxing</groupID>
              <artfctID>renzhi-crm</artfctID>
              <version>2.0</version>
          </dependency>
      </dependencyManagement>
      
      <dependencies>
          <dependency>
          	<groupID>cn.wangxing</groupID>
              <artfctID>renzhi-crm</artfctID>
              <version>1.0</version><!-- 可不写，最终导入为1.0！！，不同机器有差异 -->
          </dependency>
      </dependencies>
      ```

      

## 模组

聚合

​	打包，编译时，会一起来

继承和聚合无关联



## 搭建私服

neux