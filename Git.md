# study-Git

> git是一个分布式的版本控制系统，分布式即每个用户都有一个仓库



### 常用命令

```bash
# 第一次使用需要设置用户和邮箱
git config --global user.name='wangxing'
git config --global user.email='248238757@qq.com'

# 让当前文件夹变成Git可管理的文件夹
git init 

# 将文件添加到暂存区
# 只要有文件修改必须添加到提交列表
git add fileName

# 将文件添加到仓库
#	commit 相当于一个快照，都可以回滚
git commit -m '提交说明|注释'

# 查看仓库状态
git status
# 查看文件改动
git diff

# 查看提交日志
git log

# 记录了每次版本切换 
git reflog

# 回滚操作 ^=一个代表上一个
#	HEAD 代表当前版本,几个^代表上几个版本
#	也可以直接使用 vommitId 号,无需写全，git会自己找
git reset --hard HEAD^

# 推送到远程仓库
git push 

# 从远程仓库拉取代码
git pull 

```

> 新建文件和修改文件 都需要 先add后commit

### 可能存在问题

```bash
# git的换行符检查,检查是否混用了linux和windows的换行符
	core.safecrlf
		false 	不做检查 
		warn 	在提交时警告
		true	如果发现，拒绝提交
warning: LF will be replaced by CRLF in 【fileName】
The file will have its original line endings in your working directory



```

