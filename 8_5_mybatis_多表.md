# mybatis多表



## 一对一

```xml
<!-- 
	property 字段名
 	javatype 字段属性
-->
<association property="applicant" javaType="user">
    <id     property="id"       column="applicant_id"/>
    <result property="username" column="applicant_username"/>
    <result property="password" column="applicant_password"/>
    <result property="birthday" column="applicant_birthday"/>
    <result property="status"   column="applicant_status"/>
</association>

<association property="auditor" javaType="user">
    <id     property="id"       column="auditor_id"/>
    <result property="username" column="auditor_username"/>
    <result property="password" column="auditor_password"/>
    <result property="birthday" column="auditor_birthday"/>
    <result property="status"   column="auditor_status"/>
</association>
```



## 一对多

- 两张表关联查询，数据一次性查出，数据有冗余

```xml
<resultMap id="userDefault" type="user">
<id     property="id"           column="u_id"/>
    <result property="username"     column="u_username"/>
    <result property="password"     column="u_password"/>
    <result property="birthday"     column="u_birthday"/>
    <result property="status"       column="u_status"/>

    <collection property="leaveList" ofType="userLeave">
        <id     property="id"           column="l_id"/>
        <result property="reason"       column="l_reason"/>
        <!--<result property="applicant"    column="l_applicant"/>
        <result property="auditor"      column="l_auditor"/>-->
        <result property="applyTime"    column="l_apply_time"/>
        <result property="auditTime"    column="l_audit_time"/>
        <result property="reply"        column="l_reply"/>
        <result property="status"       column="l_status"/>
        <result property="process"      column="l_process"/>
	</collection>

    <collection property="roleList"     ofType="role">
        <id     property="id"           column="r_id"/>
        <result property="name"         column="r_name"/>
        <result property="desc"         column="r_desc"/>
        <result property="status"       column="r_status"/>
    </collection>
</resultMap>
```



### 多对多 

- 两张表关联查询，数据一次性查出，数据有冗余

```sql
<sql id="selectUser">
SELECT
    u.id        	u_id,
    u.username  	u_username,
    u.password  	u_password,
    u.birthday  	u_birthday,
    u.status    	u_status,

    l.id           	l_id,
    l.reason       	l_reason,
    l.applicant    	l_applicant,
    l.auditor      	l_auditor,
    l.apply_time   	l_apply_time,
    l.audit_time   	l_audit_time,
    l.reply        	l_reply,
    l.status       	l_status,
    l.process      	l_process,

    r.id        	r_id,
    r.name      	r_name,
    r.desc      	r_desc,
    r.status    	r_status

FROM    user u,leaves l,user_role ur,role r
WHERE   ur.user_id=u.id
	AND ur.role_id=r.id
	AND u.id=l.applicant
</sql>
```



## 注解

@Results

@Result

@One

@Many