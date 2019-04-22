<h4>git相关</h4>

### Git生成新分支
git checkout master切换master分支
从远端拉取master分支

### Git 本地分支管理
> 查看、切换、创建和删除分支

git br -r # 查看远程分支  
git br <new_branch> # 创建新的分支  
git br -v # 查看各个分支最后提交信息  
git br --merged # 查看已经被合并到当前分支的分支  
git br --no-merged # 查看尚未被合并到当前分支的分支  
git co <branch> # 切换到某个分支  
git co -b <new_branch> # 创建新的分支，并且切换过去  
git co -b <new_branch> <branch> # 基于branch创建新的new_branch  
git co $id # 把某次历史提交记录checkout出来，但无分支信息，切换到其他分支会自动删除  
git co $id -b <new_branch> # 把某次历史提交记录checkout出来，创建成一个分支  
git br -d <branch> # 删除某个分支  
git br -D <branch> # 强制删除某个分支 (未被合并的分支被删除的时候需要强制)  

> 分支合并和rebase

git merge <branch> # 将branch分支合并到当前分支  
git merge origin/master --no-ff # 不要Fast-Foward合并，这样可以生成merge提交  
git rebase master <branch> # 将master rebase到branch，相当于： git co <branch> && git rebase master && git co master && git merge <branch>

### Git远程分支管理
git pull # 抓取远程仓库所有分支更新并合并到本地  
git pull --no-ff # 抓取远程仓库所有分支更新并合并到本地，不要快进合并  
git fetch origin # 抓取远程仓库更新  
git merge origin/master # 将远程主分支合并到本地当前分支  
git co --track origin/branch # 跟踪某个远程分支创建相应的本地分支  
git co -b <local_branch> origin/<remote_branch> # 基于远程分支创建本地分支，功能同上  
git push # push所有分支  
git push origin master # 将本地主分支推到远程主分支  
git push -u origin master # 将本地主分支推到远程(如无远程主分支则创建，用于初始化远程仓库) 
git push origin <local_branch> # 创建远程分支， origin是远程仓库名  
git push origin <local_branch>:<remote_branch> # 创建远程分支  
git push origin :<remote_branch> #先删除本地分支(git br -d <branch>)，然后再push删除远程分支

### Git checkout 高级用法
git checkout b  b-file： 意思就是本地分支a拉取远程分支b上远程文件b-file的改动


<font color="red">## Git 如何删除远程仓库中提交记录</font>
1、git reset commitId （注：不要带–hard）到上个版本  
2、git stash 暂存修改  
3、git push --force 强制push，远程的最新的一次commit被删除  
4、git stash pop 释放暂存的修改，开始修改代码  
5、再决定是否需要的修改git add . -> git commit -m "message" -> git push  

### 其他
git branch -m ”本地重命名“ 给本地分支重命名  
git pull 会自动auto-merge，git fetch不会