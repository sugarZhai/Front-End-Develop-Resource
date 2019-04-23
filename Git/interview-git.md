<h4>git 相关</h4>
### Git checkout 高级用法
git checkout b  b-file： 意思就是本地分支a拉取远程分支b上远程文件b-file的改动


## Git 如何删除远程仓库中提交记录

1、git reset commitId （注：不要带–hard）到上个版本    
2、git stash 暂存修改  
3、git push --force 强制push，远程的最新的一次commit被删除  
4、git stash pop 释放暂存的修改，开始修改代码  
5、<font color="red">再决定是否需要的修改git add . -> git commit -m "message" -> git push  </font>

### 其他
git branch -m ”本地重命名“ 给本地分支重命名  
git pull 会自动auto-merge，git fetch不会

### git生成公钥步骤 ssh
cd ~/.ssh/  
ssh-keygen -t rsa -C “539138838@qq.com"  
3次回车  
vim ~/.ssh/id_rsa.pub  
ls查看文件  
id_rsa  
id_rsa.pub  
执行命令vi  id_rsa.pub  
shift i  
生成可复制的密码  