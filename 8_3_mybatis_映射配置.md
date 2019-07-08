# mapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="userMapper">
    
    
    <!--  -->
    <delete id="delete" parameterType="java.lang.Integer">
        DELETE
        FROM    user
        WHERE   id=#{id}
    </delete>
</mapper>
```



 

## 占位符

`#{} 表示一个占位符号，通过 #{} 可以实现 preparedStatement 向占位符中设置值，自动进行 java 类型和 jdbc 类型转换。#{} 可以有效防止   sql注入。 #{} 可以接收简单类型值或 pojo 属性值。 如果 parameterType 传输单个简单类型值，#{} 括号中可以是 value 或其它名称。`



`${} 表示拼接sql串，通过 ${} 可以将 parameterType 传入的内容拼接在 sql 中且不进行 jdbc 类型转换，不能防止 sql 注入问题， 可以接收简单类型值或pojo属性值，如果parameterType传输单个简单类型值，可以接收简单类型值或pojo属性值，如果parameterType传输单个简单类型值，{} 括号中只能是 value。`

| 占位符      |                          |      |
| ----------- | ------------------------ | ---- |
| ${value}    | 字符串拼接,不能防止注入  |      |
| #{xxxxx}    | 正常占位符,可防止sql注入 |      |
| ${_parater} |                          |      |



## 动态sql

```xml

<!-- if -->
<select id="search" resultMap="userDefault">
    SELECT  *
    FROM    user
    <where> <!-- 会自动判断要不要加where(相当于加上where i=1)，和自动去除and -->
        <if test="id != 0">
            AND id = #{id}
        </if>
        <if test="username != null">
            AND username = #{username}
        </if>
        <if test="sex != 0">
            AND username = #{username}
        </if>
    </where>
</select>

<!-- for -->
<select id="listById" parameterType="long" resultMap="userDefault">
    SELECT * FROM user
    <where>
        <!--
                collection: list|array 集合类型 
							如果集合是参数的属性，则写属性名
                open:       拼接前缀
                close:      拼接后缀
                item:       每列名字
                seprator:   每列分割符
            -->
        <foreach collection="list" open="id IN (" close=")" item="id" separator=",">
            #{id}
        </foreach>
    </where>
</select>

<!-- sql抽取 -->
<sql id="selectUser">
	SELECT * FROM user
</sql>
<select id="list" resultMap="userDefualt">
	<include refid="selectUser"/>
</select>

```

