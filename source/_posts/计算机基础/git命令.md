<a name="eASn7"></a>
# 拉取与建立仓库
## 用户签名
```git
git config          --global user.name 用户名
git config          --global user.email 邮箱
cat ~/.gitconfig
```
<a name="UrEas"></a>
## 拉取代码
```git
git clone 远程仓库地址
```
<a name="Uacb3"></a>
## 初始化仓库
```git
git init                    -- 初始化本地仓库
git status               --查询本地库状态
```
> 会建立并转到master分支下
<a name="dGPp5"></a>
# 提交代码
## 提交 
```git
git add .                    -- 将改动提交至暂存区
git commit -m "日志信息"             -- 提交所有改动过的文件
git push origin master
git reflog                   --   查看历史记录
```
<a name="aSnWT"></a>
## 撤销
```git
git reset --hard HEAD                     -- 撤销所有未提交文件的修改内容
git checkout HEAD 文件名                    --撤销所有未提交文件的修改内容
git revert <commit>	                      -- 撤销提交
```
<a name="tDAWL"></a>
# 分支
## 添加远程分支
```git
git remote add origin https://XXX
```
  ## 查看分支
  ```git
  git branch -v                   --查看分支
```
## 创建分支
```git
git branch 分支名                 -- 创建分支
```
## 切换分支
 ```git
 git checkout 分支名                  -- 切换分支
```
 ## 合并分支
>首先要切换到master分支下
```git
 git checkout master
 git merge 分支名                  --合并分支
```
- 有可能两个文件有冲突，要人为决定
- 此处有[解决方案](https://blog.csdn.net/qq_35077107/article/details/108025911)
# 添加安全权限
```git
git config --global --add safe.directory "*"
```