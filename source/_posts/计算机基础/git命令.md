---
title: git命令
date: 2023-04-26 15:16
updated: 星期一 17日 七月 2023 09:43:16
tags: []
categories: [计算机基础]
keywords:
description: 
---



<a name="eASn7"></a>
# 拉取与建立仓库
## 用户签名
```shell
git config          --global user.name 用户名
git config          --global user.email 邮箱
cat ~/.gitconfig
```
<a name="UrEas"></a>
## 拉取代码
```shell
git clone 远程仓库地址
```
<a name="Uacb3"></a>
## 初始化仓库
```shell
git init                    -- 初始化本地仓库
git status               --查询本地库状态
```
> 会建立并转到master分支下
<a name="dGPp5"></a>
# 提交代码
## 提交 
```shell
git add .                    -- 将改动提交至暂存区
git commit -m "日志信息"             -- 提交所有改动过的文件
git push origin master
git reflog                   --   查看历史记录
```
<a name="aSnWT"></a>
## 撤销
```shell
git reset --hard HEAD                     -- 撤销所有未提交文件的修改内容
git checkout HEAD 文件名                    --撤销所有未提交文件的修改内容
git revert <commit>	                      -- 撤销提交
```
## 
<a name="tDAWL"></a>
# 分支
## 添加远程分支
```bash
git remote add origin https://XXX
```
## 查看分支
```bash
git branch -a                   --查看本地分支和远程分支
```
## 查看远程分支 URL
```bash
git remote show origin
```
## 更新远程分支 URL
```bash
git remote set-url origin https://github.com/user/new-repo.git
```
## 创建分支
```shell
git branch 分支名                 -- 创建分支
```
## 切换分支
 ```shell
 git checkout 分支名                  -- 切换分支
```
 ## 合并分支
>首先要切换到master分支下
```shell
 git checkout master
 git merge 分支名                  --合并分支
```
## 上传到 main 分支
需要合并到 main 分支
1.  git fetch origin
2.  git checkout main
3.  git merge master --allow-unrelated-histories（合并分支解决冲突）
- 有可能两个文件有冲突，要人为决定
- 此处有[解决方案](https://blog.csdn.net/qq_35077107/article/details/108025911)
# 添加安全权限
```shell
git config --global --add safe.directory "*"
```

# 解决冲突
```shell
git fetch origin
git clean -f
git reset --hard origin/master
```