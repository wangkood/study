扩展：



访问路径：http://localhost:8080/druid/sql.html

web.xml中配置

####  1.监控druid 页面初级配置

```xml
<!-- 监控druid -->
    <servlet>
        <servlet-name>DruidStatView</servlet-name>
        <servlet-class>com.alibaba.druid.support.http.StatViewServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>DruidStatView</servlet-name>
        <url-pattern>/druid/*</url-pattern>
    </servlet-mapping>
```



#### 2.Web应用监控配置

```xml

    <!--web监控-->
    <filter>
        <filter-name>DruidWebStatFilter</filter-name>
        <filter-class>com.alibaba.druid.support.http.WebStatFilter</filter-class>
        <init-param>
            <param-name>exclusions</param-name>
            <param-value>*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>DruidWebStatFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
```









applicationContext.xml



#### 3.sql 监控

```xml
 <!--2、配置数据源对象-->
    <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
        <property name="driverClassName" value="${jdbc.driver}"/>
        <property name="url" value="${jdbc.url}"/>
        <property name="username" value="${jdbc.username}"/>
        <property name="password" value="${jdbc.password}"/>

        <!-- 配置监控统计拦截的filters
              Druid的监控统计功能是通过filter-chain扩展实现，如果你要打开监控统计功能，配置StatFilter，具体看这里
              -->
        <property name="proxyFilters">
            <list>
                <ref bean="druid_stat_filter"/>
                <ref bean="druid_wall_filter"/>
                <ref bean="druid_log_filter"/>
            </list>
        </property>

    </bean>





		 <!--慢sql监控-->
    <bean class="com.alibaba.druid.filter.stat.StatFilter" id="druid_stat_filter">
        <!-- 慢sql规则，单位毫秒 -->
        <property name="slowSqlMillis" value="10000"/>
        <!-- 记录慢sql到日志 -->
        <property name="logSlowSql" value="true"/>
        <!-- 统计时合并相似sql -->
        <property name="mergeSql" value="true"/>
    </bean>

    <!-- sql防御 -->
    <bean class="com.alibaba.druid.wall.WallFilter" id="druid_wall_filter">
        <!-- 记录违反规则的sql到日志 -->
        <property name="logViolation" value="true"/>
    </bean>
	   <!-- sql日志记录 -->
    <bean class="com.alibaba.druid.filter.logging.Slf4jLogFilter" id="druid_log_filter">
        <!-- 记录真正执行的语句，即参数已注入的sql -->
        <property name="statementExecutableSqlLogEnable" value="true"/>

    </bean>
```





 Spring 关联监控

```xml

    <!-- druid Spring 关联监控 ： 切面-->
    <bean id="druid-stat-interceptor"
          class="com.alibaba.druid.support.spring.stat.DruidStatInterceptor">
    </bean>

    <bean class="org.springframework.aop.framework.autoproxy.BeanNameAutoProxyCreator">
        <property name="proxyTargetClass" value="true" />
        <property name="beanNames">
            <list>
                <!-- 这里配置需要拦截的bean id列表 -->
                <value>roleDao</value>
                <value>roleService</value>
                <value>userDao</value>
                <value>userService</value>
            </list>
        </property>
        <property name="interceptorNames">
            <list>
                <value>druid-stat-interceptor</value>
            </list>
        </property>
    </bean>
```













区间分布式说明

[3,1,0,0,0,0,0,0]

0-1 ms, 1-10 ms, 10-100 ms, 100ms-1s, 1-10 s, 10-100 s, 100-1000 s, >1000 s