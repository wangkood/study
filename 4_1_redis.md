# redis	

​	一个NOSQL数据库(非关系型数据库)

​	存储key，value

​	redis命令和sql一样不区分大小写



## 基本命令

### string

​	string类型为redis最基本数据类型，string最大可存储512M数据

```sql
set key value [EX seconds] [PX milliseconds] [NX|XX]
	# EX seconds – 设置键key的过期时间，单位时秒
	# PX milliseconds – 设置键key的过期时间，单位时毫秒
	# NX – 只有键key不存在的时候才会设置key的值
	# XX – 只有键key存在的时候才会设置key的值
例子>set name wangxing ex 15 XX  # 更新 name=wangxing，15秒后删除

get key # 根据键获取值

del key # 删除键值对(通用命令)
```



### hash

​	键值对数据，key和value都必须为string

```
# 添加或修改hash
hmset key ^field fieldValue￥ ...

# 获取hash中相应数据(可以查多个)
hmget key field ...

# 获取hash中一个数据(only one)
hget key field

# 获取所有键值对值
hgetAll key

# 删除相应属性
hdel key field ...
```



### list

​	有序可重复链表数据结构

```
# 从左边加入
lpush key field...

# 从右边加入
rpush key value

# 从左边弹出
lpop key

# 从右边弹出
rpop key

# 便利元素（左->右） !! 包含尾部
lrange key startIndex stopIndex
```



### set

​	无序并不重复数据

```
# 添加数据
sadd key member...

# 获取所有数据
smembers key

# 删除数据
srem key member...
```



### zset

​	有序不可重复类型

```sql
# 添加数据
zadd key member...
zadd key [NX|XX] [CH] [INCR] score member [score member ...]
	# NX|XX
	# CH
	# INCR
	# score 浮点数，排序权重

# 获取所有成员
zrange key start end 

# 删除对应成员
zrem key member...
```



### 通用命令

```
# 获取正则表达式对应key
keys pattern

# 获取键的类型 
type key

# 删除键
del key
```



## 持久化

​	将内存中数据存入硬盘

​	ROB 方式

​		1>在 redis.windows.conf中配置

```conf
# 在60秒内1000个key发生改变,就持久化
save 60 1000
```

​		

​	AOF 方式

​		1>redis.windows.conf中配置

```conf
# 开启aof模式
appendonly no
# 每次改变都持久化
appemd
# 每格 1秒持久化

```

​		2>启动服务 redis-service.exe  redis.windows.conf

​		

## java中使用

​	jar包

​		jedis

```java
Jedis jedis = new Jedis("127.0.0.1",6379,5*1000);
jedis.auth("1234");

```



## golang中使用

​	需要依赖包 go get github.com/garyburd/redigo/redis

```go
package main

func main（）{
    conn,err := redis.Dial("tcp","ip:port")
    
    resp,err := conn.Do("comm",".....")
}
```

​		

