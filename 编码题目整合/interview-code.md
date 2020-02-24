<html>
<h2>目录</h2>
</html>

&emsp;[1. 数组对象reduce去重](#j1)

&emsp;[2. 手写一个Bind函数](#j2)

&emsp;[3. 实现const对象内部的key值不可修改](#j3)

&emsp;[4. es5实现const](#j4)

&emsp;[5.JS手动实现一个new操作符](#j5)

&emsp;[6.实现简易模板函数](#j6)

&emsp;[7.手写一个ajax请求函数](#j7)

&emsp;[8.手写一个promise.all函数](https://blog.csdn.net/MichelleZhai/article/details/104475521)

<h5 id='j1'>1. 数组对象reduce去重</h5>

```js
   const oldInfo=[
     {id:1,name:'cen'},
     {id:2,name:'cen'},
     {id:3,name:'hua'},
     {id:4,name:'cen'}
   ]
   const hash={}
   let newInfo=[]
   newInfo=oldInfo.reduce((item,next)=>{
     hash[next.name]?item.push():hash[next.name]=true&&item.push(next)
     return item
   },[])

```

<h5 id='j2'>2. 手写一个Bind函数</h5>

```js
    Function.prototype.myBind=function(thisArg){
      if(typeof this!=='function'){
        return;
      }
      var _self=this
      var args=Array.prototype.slice.call(arguments,1)
      var fnBound=function(){
        var _this=this instanceof _self?this:thisArg;
        return _self.apply(_this,args.concat(Array.prototype.slice.call(arguments)));
      }
      fnBound.prototype=this.prototype
      return fnBound;
    }
```

```js
   if(!Function.prototype.bind){
     Function.prototype.bind=function(){
       var self=this,                        // 保存原函数
           context=[].shift.call(arguments) //  保存需要绑定的this上下文
           args=[].slice.call(arguments);  //   剩余的参数转为数组
       return function(){
           self.apply(context,[].concat.call(args,[].slice.call(arguments)));
       }
     }
   }
```

```js
   Function.prototype.myBind=function(context){
     const fnToBind=this
     const fnBound=function(){
       return fnToBind.apply(context)
     }
     return fnBound
   }
```

<h5 id='j3'>3. 实现const对象内部的key值不可修改</h5>

const只读属性不可修改，但是const对象内部的key值可以修改，比如说const Test={}不可修改，但是const Test={key1:value1}中的key1就可以修改

```js
   //方法一 Object.freeze()
   const Test={key1:22}
   Object.freeze(Test)
   Test.key1=78
   console.log(Test,key1)
```

```js
   //方法二 利用 对象的数据属性writable
   const Test={key1:22}
   Object.defineProperty(Test,'key1',{
     value:Test.key1,
     writeable:false
   });
   Test.key1=77
   console.log(Test.key1)//22
```
```js
   //方法三 利用对象的访问器getter和setter属性
   const book={
     year:2004,
   };
   Object.defineProperty(book,'year',{
     get:function(){
       return  this.year;

     },
     set:function(newValue){
       if(newValue!==2004){
         alert('不可修改')
       }else{
         return this.year;
       }
     }
   })
   book.year=2007
   console.log(book)
```
<h5 id='j4'>4. es5实现const</h5>

```js
  function myConst(key,val){
    window.key=val
    Object.defineProperty(window.key,{
      enumerable:false,
      configurable:false,
      get:function(){
        return val
      },
      set:function(value){
        if(value!==val){
          throw new TypeError('不能重复定义')
        }else{
          return val
        }
      }
    })
  }
```
<h5 id='j5'>5.JS手动实现一个new操作符</h5>
要手动实现一个new操作符，首先要知道new操作符都做了什么事，即构造函数的内部原理：

1、创建一个新对象

2、链接到原型（将构造函数的prototype赋值给新对象的__proto__）;

3、绑定this(构造函数中的this指向新对象并且调用构造函数)

4、返回新对象

这样我们就可以手动实现一个new方法了

```js
  function realizeNew(){
    //创建一个新对象
    let obj={};
    // 获得构造函数
    let Con=[].shift.call(arguments);
    // 链接到原型(给obj这个新生对象的原型指向它的构造函数的原型)
    obj.__proto__=Con.prototype;
    // 绑定this
    let result=Con.apply(obj,arguments);
    // 确保new出来的是一个对象
    return typeof result==='object'?result:obj
  }
```
测试下

```js
   function Person(name,age){
     this.name=name;
     this.age=age;
     this.say=function(){
       console.log('I am'+this.name)
     }
   }

   //通过new创建构造实例
   let person1=new Person("Curry",18);
   console.log(person1.name);//Curry
   console.log(person1.age);//18
   person1.say()//I am Curry

   //通过realize()方法创造实例
   let person2=realizeNew(Person,"Curry",18);
   console.log(person2.name);//Curry
   console.log(person2.age);//18
   person2.say();//I am Curry
```

<h5 id='j6'>6.实现简易模板函数</h5>

```js
   function template(tmpl,data){
     let result=tmpl;
     for(var key in data){
       result=result.replace(new RegExp("\\("+key+"\\)","g"),data[key]);
     }
     return result;
   }
   let me2=template("我的名字是(name),我的工作是(work)，(name) Love (work)",{
     name:"xxx",
     work:"yy"
   });
   console.log(me2)
   //我的名字是小周，我的工作是编程，我喜欢编程
```

<h5 id='j7'>7.手写一个ajax请求函数</h5>

1、获取异步请求对象

```js
   //获取异步请求对象
   function getXhr(){
     var xhr=null;
     if(window.XMLHttpRequest){
       xhr=new XMLHttpRequest();
     }else{
       //如果浏览器版本是IE8以下浏览器
       xhr=new ActiveXObject('Microsoft.XMLHttp');
     }
     return xhr;
   }
```
2、创建ajax函数
```js
  //url:'url路径' type:请求方式 data：请求参数类型 dataType:返回的字符串类型
  function ajax({url,type,data,dataType}){
    return new Promise(function(open,err){
      //1、创建异步请求对象
      var xhr=new XMLHttpRequest();
      //2.绑定监听事件
      xhr.onreadystatechange=function(){
          //当异步请求状态变为4时，并且返回的状态码为200，接收响应成功
          if(xhr.readyState===4&&xhr.status===200){
            //当返回接收的字符串类型为json串时，自动转换json串
            if(dataType!==undefined&&dataType.toLowerCase()==="json"){
              var res=JSON.parse(xhr.responseText)
            }else{
              // 否则直接获取返回的响应文本中的内容
              var res=xhr.responseText
              // 通过Promise,将返回的数据向后传递
              open(res);
            }
          }
      }
      // 如果请求方式为get请求，则将请求参数拼接在url后
      if(type.toLowerCase()=="get"&&data!==undefined){
         url+="?"+data;
      }
      //3.打开链接
      xhr.open(type,url,true);
      //如果请求方式为post请求，则修改请求消息头
      if(type.toLowerCase()==="post"){
        // 增加：设置请求消息头
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        // 4.发送请求
        if(type.toLowerCase()=="post"&&data!==undefined){
          xhr.send(data)
        }else{
          xhr.send(null)
        }
      }
    })
  }
```

3、jquery中调用ajax函数获取数据：通过promise中.then(function(res){}),其中res即返回给客户端的数据。或者通过success：function(res){}来获取服务器返回的数据

 通过success:function(res){}来获取服务器返回的数据

 ```js
     $ajax({
       url:"header.html",
       success:function(res){
            $(res).replaceAll("header");
            $(`<link rel="stylesheet" href="css/header.css">`).prependTo("head")
       }
     })
 ```
 
 通过promise中.then(function(res)){}获取服务器返回的数据

```js
   $ajax({
     url:"http://127.0.0.1:3000/index",
     type:"get",
     dataType:"json"
   }).then(function(res){...})
```

<h5 id='j7'>7.webpack配置文件</h5>

```js
   const path=require('path')
   const CopyWebpackPlugin=require('copy-webpack-plugin')//复制静态资源的插件
   const CleanWebpackPlugin=require('clean-webpack-plugin')//清空打包目录的插件
   const HtmlWebpackPlugin=require('html-webpack-plugin')//生成html的插件
   const ExtractTextWebpackPlugin=require('extract-text-webpack-plugin')//CSS文件单独提取出来
   const webpack=require('webpack')
   module.exports={
     entry:{
       index:path.resolve(__dirname,'src','index.js'),
       page:path.resolve(__dirname,'src','page.js'),
       vendor:'lodash'//多个页面所需的公共库文件，防止重复打包带入
     },
     output:{
       publicPath:'/',
       path:path.resolve(__dirname,'dist'),
       filename:'[name].[hash].js'
     },
     resolve:{
       extensions:[".js",".css",".json"],
       alias:{}//配置别名可以加快webpack查找模块的速度
     },
     module:{
       // 多个loader是有顺序要求的，从右往左写，因为转换的时候是从右往左转换的
       rules:[
         {
           test:/\.css$/,
           use:ExtractTextWebpackPlugin.extract({
              fallback:'style-loader',
              use:['css-loader','postcss-loader']//不再需要style-loader放到html文件内
           }),
           include:path.join(__dirname,'src'),//限制范围，提高打包速度
           exclude:/node_modules/
         },
         {
           test:/\.less$/,
           use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader', 'less-loader']
           }),
           include: path.join(__dirname, 'src'),
           exclude: /node_modules/
         },
         {
            test:/\.scss$/,
            use: ExtractTextWebapckPlugin.extract({
                 fallback: 'style-loader',
                 use:['css-loader', 'postcss-loader', 'sass-loader']
            }),
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/
         },
         {
            test:/\.jsx?$/,
            use:{
                loader:'babel-loader',
                query:{  // 同时可以把babel配置写到根目录下的.babelrc中
                  presets:['env','stage-0']//env转换es6 stage-0转es7
                }
            }
         },
         { //file-loader 解决css等文件中引入图片路径的问题
          //url-loader 当图片较小的时候会把图片BASE64编码，大于limit参数的时候还是使用file-loader 进行拷贝
          test:/\.(png|jpg|jpeg|gif|svg)/,
          use:{
              loader:"url-loader",
              options:{
                outputPath:'images/',//图片输出的路径
                limit:1 * 1024
              }
          }
         }
       ]
     },
     plugins:[
       // 多入口的html文件用chunks这个参数来区分
       new HtmlWebpackPlugin({
         template:path.resolve(__dirname,'src','index.html'),
         filename:'index.html',
         chunks:['index','vendor'],
         hash:true,//防止缓存
         minify:{
           removeAttributeQuotes:true //压缩 去掉引号
         }
       }),
       new webpack.ProvidePlugin({
         _:'lodash'//所有页面都会引入 _这个变量，不用再import引入
       }),
       new ExtractTextWebpackPlugin('css/[name].[hash].css'),//其实这个特性只用于打包生产环境，测试环境这样设置会影响HMR
       new CopyWebpackPlugin([
         {
           from:path.resolve(__dirname,'static'),
           to:path.resolve(__dirname,'dist/static'),
           ignore:['.*']
         }
       ]),
       new CleanWebpackPlugin([path.join(__dirname,'dist')]),
     ],
     devtool:'eval-source-map',//指定加source-map的方式
     devServer:{
       contentBase:path.join(__dirname,"dist"),//静态文件目录
       port:8888.//端口
       host:'localhost',
       overlay:true,
       compress:false
     },
     watch:true,//开启监听文件更改，自动刷新
     watchOptions:{
       ignored:/node_modules/,//忽略不用监听变更的目录
       aggregateTimeout:500,//防止重复保存频繁重新编译，500毫米内重复保存不打包
       poll:1000 //每秒询问的文件变更的次数
     }
   }
```
<h5 id='j8'>8.手写一个promise.all函数</h5>

 [手写promise.all函数](https://blog.csdn.net/MichelleZhai/article/details/104475521)