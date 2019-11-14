# shiro笔记

重要概念

SecurityManager	核心的安全管理器

Realm	获取所有认证数据

​	 credentialsMatcher 属性可以指定加密方式

Subject	登录入口



### 加密

```java
// shiro 会更具此返回值和用户输入值比较，以用来登录
new SimpleAuthenticationInfo(
    principal, 		// 用户标识
    hashedCredentials, // 是MD5加密后的密码
    credentialsSalt, // 言值
    realmName	// 当前realm名字
); 	

// 将字符串盐值转换
ByteSource.Util.bytes(String salt)
    
//
AuthorizingRealm.class


```



### 自定义过滤器

```java
class Myfilter extends org.apache.shiro.web.servlet.AdviceFilter{
    @Override
    protected boolean preHandle(SelvletRequest req,ServletResponse resp){
        return true; // 放行
    }
}
// 在创建shiroFilterFactoryBean 时注入进参数 filters里
```

