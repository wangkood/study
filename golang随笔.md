# golang随笔



# 数据库

​	sql.Open 返回的是一个数据库连接池对象 DB

​	db.begin 开启一个事务

​		事务开启后必须 rollback 或者 commit，否则连接无法返回池子，导致连接池，无连接可用，导致程序死锁

​		rollback 和 commit 只需要执行其中一项，否则报错 

​				sql: transaction has already been committed or rolled back