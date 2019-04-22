<h4>node相关</h4>

- [node官网](http://nodejs.cn/)
- [nodejs最佳实践](https://github.com/i0natan/nodebestpractices/blob/master/README.chinese.md)
- [node调试指南](https://github.com/nswbmw/node-in-debugging)

# Node.js
nodejs 篇幅比较巨大	http://liuqing.pw
Node.js 包教不包会	https://github.com/alsotang/node-lessons
篇幅比较少	http://www.rainweb.cn/article/category/Nodejs
node express 入门教程	http://www.w3cfuns.com/article-5598538-1-1.html
nodejs定时任务	http://my.oschina.net/u/568264/blog/193773
一个nodejs博客	http://60sky.com
【NodeJS 学习笔记04】新闻发布系统	http://www.cnblogs.com/yexiaochai/p/3536547.html
过年7天乐，学nodejs 也快乐	http://www.cnblogs.com/qqloving/p/3541099.html
七天学会NodeJS	https://github.com/nqdeng/7-days-nodejs
Nodejs学习笔记（二）--- 事件模块	http://www.cnblogs.com/zhongweiv/p/nodejs_events.html
nodejs入门	http://www.cnblogs.com/liusuqi/p/3735491.html
angularjs nodejs	https://github.com/zensh/jsgen
从零开始nodejs系列文章	http://blog.fens.me/series-nodejs
理解nodejs	http://debuggable.com/posts/understanding-node-js:4bd98440-45e4-4a9a-8ef7-0f7ecbdd56cb
nodejs事件轮询	http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop
node入门	http://www.nodebeginner.org/index-zh-cn.html
nodejs cms	http://ourjs.com/detail/53e1f281c5910a9806000001
Node初学者入门，一本全面的NodeJS教程	http://ourjs.com/detail/529ca5950cb6498814000005
NodeJS的代码调试和性能调优	http://www.barretlee.com/blog/2015/10/07/debug-nodejs-in-command-line

### redis支持哪些功能  
set/get, hset/hget, publish/subscribe, expire  
### redis最简单的应用

```js
let redis=require("redis")
let client=redis.createClient();
client.set("foo_rand0","some fantastic value");
client.get("foo_rand0",()=>{
  console.log(replay.toString());
})
client.end();
```
### express项目的目录大致是怎样的
app.js  
package.json  
bin/www  
public  
routes  
views

### express常用函数
express.Router路由组件,  
app.get路由定向，  
app.configure配置
app.set设定参数  
app.use使用中间件

### mongodb有哪些常用优化措施
类似传统数据库，索引和分区

