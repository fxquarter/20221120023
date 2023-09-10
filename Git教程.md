# Git教程

## 1.Git配置

1.clear  清除页面内容

2.git config -l 查看配置

3.git config --system --list 查看系统配置

4.git config --global --list 查看本地配置



Git/etc/gitconfig 查看基本配置

User/Administration/.gitconfig 用户配置（用户名，邮箱）

## 2.Git基本理论及项目搭建

日常使用所需命令：

git add. 添加

git commit. 提交到本地仓库

git push. 推送到远程仓库

git init 初始化

git clone[url] 克隆远程仓库



## 3.Git文件操作

==文件的四种状态==

**Untracked**：未跟踪状态，通过命令==git add.==状态变为==staged==

**Unmodify**:文件已入库未修改，被修改变为==Modified==,使用==git rm==移出库变为==Untracked==

**Modified**:文件已修改。可通过==git add==进入暂存==staged==状态，使用==git checkout==丢弃修改过，返回到==unmodify==状态

**Staged**:暂存状态。==git commit==将修改同步到库。

 

```bash
# git add .     添加所有文件到暂存区
# git commit -m 提交暂存区内容到本地仓库

```

==忽略文件==

```bash
*.txt    #忽略所有.txt结尾的文件
!lib.txt #但lib.txt除外
/temp    #仅忽略项目根目录下的TODO文件，不包括其他目录temp
build/   #忽略build/目录下的所有文件
doc/*.txt#忽略doc/notes.txt但不包括doc/sever/arch.txt
```

