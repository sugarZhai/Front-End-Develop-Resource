<h4>node相关</h4>

- [nodejs最佳实践](https://github.com/i0natan/nodebestpractices/blob/master/README.chinese.md)
- [node调试指南](https://github.com/nswbmw/node-in-debugging)


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

