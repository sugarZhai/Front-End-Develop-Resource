<html>
<h2>目录</h2>
</html>

&emsp;[1. 数组对象 reduce 去重](#j1)

&emsp;[2. 手写一个 Bind 函数](#j2)

&emsp;[3. 实现 const 对象内部的 key 值不可修改](#j3)

&emsp;[4. es5 实现 const](#j4)

&emsp;[5.JS 手动实现一个 new 操作符](#j5)

&emsp;[6.实现简易模板函数](#j6)

&emsp;[7.手写一个 ajax 请求函数](#j7)

&emsp;[8.手写一个 promise.all 函数](https://blog.csdn.net/MichelleZhai/article/details/104475521)

<h5 id='j1'>1. 数组对象reduce去重</h5>

```js
const oldInfo = [
  { id: 1, name: "cen" },
  { id: 2, name: "cen" },
  { id: 3, name: "hua" },
  { id: 4, name: "cen" },
];
const hash = {};
let newInfo = [];
newInfo = oldInfo.reduce((item, next) => {
  hash[next.name] ? item.push() : (hash[next.name] = true && item.push(next));
  return item;
}, []);
```

<h5 id='j2'>2. 手写一个Bind函数</h5>
Bind函数有哪些特性：
1、改变调用者的this指向(使用new时该功能无效)
2、能接受参数
3、返回的是一个函数
4、不会自动执行，需要手动调用

```js
//写法一
Function.prototype._bind = function (...args) {
  if (typeof this !== "function") return;
  //获取this数组args的第一项(要指向的this{x:100})
  const _this = args.shift();
  //获取fn._bind(...)中fn
  const self = this;
  return function () {
    return self.apply(_this, args);
  };
};
//测试代码
function fn() {
  console.log(this); //{x:100}
}
let say = fn._bind({ x: 100 }, 1, 2, 3);
say();
```

```js
//写法二
Function.prototype._bind = function () {
  if (typeof this !== "function") return;
  //利用Array原型对象上的slice()方法，该方法返回一个新的数组，获取传入的参数arguments
  const args = Array.prototype.slice.call(arguments);
  const _this = args.shift();
  const self = this;
  return function () {
    return self.apply(_this, args);
  };
};
//测试代码
function fn() {
  console.log(this);
}
let say = fn._bind({ x: 90 }, 123, 67, 8);
say();
```

```js
//写法三
Function.prototype._bind = function () {
  if (typeof this !== "function") return;
  const args = Array.from(arguments);
  const _this = args.shift();
  const self = this;
  return function () {
    return self.apply(_this, args);
  };
};
//测试代码
function fn() {
  console.log(this);
}
let say = fn._bind({ x: 60 }, 1, 2, 3);
say();
```

<h5 id='j3'>3. 实现const对象内部的key值不可修改</h5>

const 只读属性不可修改，但是 const 对象内部的 key 值可以修改，比如说 const Test={}不可修改，但是 const Test={key1:value1}中的 key1 就可以修改

```js
//方法一 Object.freeze()
const Test = { key1: 22 };
Object.freeze(Test);
Test.key1 = 78;
console.log(Test);
```

```js
//方法二 利用 对象的数据属性writable
const Test = { key1: 22 };
Object.defineProperty(Test, "key1", {
  value: Test.key1,
  writeable: false,
});
Test.key1 = 77;
console.log(Test.key1); //22
```

```js
//方法三 利用对象的访问器getter和setter属性
const book = {
  year: 2004,
};
Object.defineProperty(book, "year", {
  get: function () {
    return this.year;
  },
  set: function (newValue) {
    if (newValue !== 2004) {
      alert("不可修改");
    } else {
      return this.year;
    }
  },
});
book.year = 2007;
console.log(book);
```

<h5 id='j4'>4. es5实现const</h5>

```js
function myConst(key, val) {
  window.key = val;
  Object.defineProperty(window.key, {
    enumerable: false,
    configurable: false,
    get: function () {
      return val;
    },
    set: function (value) {
      if (value !== val) {
        throw new TypeError("不能重复定义");
      } else {
        return val;
      }
    },
  });
}
```

<h5 id='j5'>5.JS手动实现一个new操作符</h5>
要手动实现一个new操作符，首先要知道new操作符都做了什么事，即构造函数的内部原理：

1、创建一个新对象

2、链接到原型（将构造函数的 prototype 赋值给新对象的**proto**）;

3、绑定 this(构造函数中的 this 指向新对象并且调用构造函数)

4、返回新对象

这样我们就可以手动实现一个 new 方法了

```js
function realizeNew() {
  //创建一个新对象
  let obj = {};
  // 获得构造函数
  let Con = [].shift.call(arguments);
  // 链接到原型(给obj这个新生对象的原型指向它的构造函数的原型)
  obj.__proto__ = Con.prototype;
  // 绑定this
  let result = Con.apply(obj, arguments);
  // 确保new出来的是一个对象
  return typeof result === "object" ? result : obj;
}
```

测试下

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log("I am" + this.name);
  };
}

//通过new创建构造实例
let person1 = new Person("Curry", 18);
console.log(person1.name); //Curry
console.log(person1.age); //18
person1.say(); //I am Curry

//通过realize()方法创造实例
let person2 = realizeNew(Person, "Curry", 18);
console.log(person2.name); //Curry
console.log(person2.age); //18
person2.say(); //I am Curry
```

<h5 id='j6'>6.实现简易模板函数</h5>

```js
function template(tmpl, data) {
  let result = tmpl;
  for (var key in data) {
    result = result.replace(new RegExp("\\(" + key + "\\)", "g"), data[key]);
  }
  return result;
}
let me2 = template("我的名字是(name),我的工作是(work)，(name) Love (work)", {
  name: "xxx",
  work: "yy",
});
console.log(me2);
//我的名字是小周，我的工作是编程，我喜欢编程
```

<h5 id='j7'>7.手写一个ajax请求函数</h5>

1、获取异步请求对象

```js
//获取异步请求对象
function getXhr() {
  var xhr = null;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    //如果浏览器版本是IE8以下浏览器
    xhr = new ActiveXObject("Microsoft.XMLHttp");
  }
  return xhr;
}
```

2、创建 ajax 函数

```js
//url:'url路径' type:请求方式 data：请求参数类型 dataType:返回的字符串类型
function ajax({ url, type, data, dataType }) {
  return new Promise(function (open, err) {
    //1、创建异步请求对象
    var xhr = new XMLHttpRequest();
    //2.绑定监听事件
    xhr.onreadystatechange = function () {
      //当异步请求状态变为4时，并且返回的状态码为200，接收响应成功
      if (xhr.readyState === 4 && xhr.status === 200) {
        //当返回接收的字符串类型为json串时，自动转换json串
        if (dataType !== undefined && dataType.toLowerCase() === "json") {
          var res = JSON.parse(xhr.responseText);
        } else {
          // 否则直接获取返回的响应文本中的内容
          var res = xhr.responseText;
          // 通过Promise,将返回的数据向后传递
          open(res);
        }
      }
    };
    // 如果请求方式为get请求，则将请求参数拼接在url后
    if (type.toLowerCase() == "get" && data !== undefined) {
      url += "?" + data;
    }
    //3.打开链接
    xhr.open(type, url, true);
    //如果请求方式为post请求，则修改请求消息头
    if (type.toLowerCase() === "post") {
      // 增加：设置请求消息头
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      // 4.发送请求
      if (type.toLowerCase() == "post" && data !== undefined) {
        xhr.send(data);
      } else {
        xhr.send(null);
      }
    }
  });
}
```

3、jquery 中调用 ajax 函数获取数据：通过 promise 中.then(function(res){}),其中 res 即返回给客户端的数据。或者通过 success：function(res){}来获取服务器返回的数据

通过 success:function(res){}来获取服务器返回的数据

```js
$ajax({
  url: "header.html",
  success: function (res) {
    $(res).replaceAll("header");
    $(`<link rel="stylesheet" href="css/header.css">`).prependTo("head");
  },
});
```

通过 promise 中.then(function(res)){}获取服务器返回的数据

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

```js
const promiseAll = (arr) => {
  let returnRes = [];
  return new Promise(function (resolve, reject) {
    let i = 0;
    next();
    function next() {
      arr[i].then(function (res) {
        returnRes.push(res);
        i++;
        if (i === arr.length) {
          resolve(returnRes);
        } else {
          next();
        }
      });
    }
  });
};
let p1 = Promise.resolve(1);
let p2 = Promise.resolve("hello I am No2");
let p3 = Promise.resolve("hello I am No3");

promiseAll([p1, p2, p3]).then((value) => {
  console.log(value);
});
```

[手写 promise.all 函数](https://blog.csdn.net/MichelleZhai/article/details/104475521)

<h5 id='j9'>9.手写实现一个promise函数</h5>
首先知道

它是什么？
Promise 是一个方案，用来解决多层回调嵌套的解决方案。它现在是 ES6 的原生对象。

干嘛用的？可以把一个多层嵌套的同步、异步都有回调的方法，拉平为一串.then()组成的调用链

解决啥问题？回调地狱，多层嵌套的回调方法中，如果同时存在同步、异步的方法，那么实际执行顺序会混乱。不好调试也不好维护

思路：一般如何将异步函数同步执行的呢，正常情况下，我们只需要用函数嵌套就可以解决，但是现在我们要封装一个 promise,其实原理还是一样的，只要能在第一个函数执行完再调用下一个函数

```js
//写法二
function promise() {
  this.status = "pending";
  this.msg = ""; //存储value与reason
  let process = arguments[0];
  let that = this;
  process(
    function () {
      that.status = "resolve";
      that.msg = arguments[0];
    },
    function () {
      that.status = "reject";
      that.msg = arguments[0];
    }
  );
  return this;
}
promise.prototype.then = function () {
  if (this.status === "resolve") {
    arguments[0](this.msg);
  } else if (this.status === "reject" && arguments[1]) {
    arguments[1](this.msg);
  }
};
```

<h5 id='j10'>10.函数节流与函数防抖</h5>
记得在网上看到一个比喻很形象

节流：
比如公交车站等车，每经过 5 分钟就会发车，不管有没有人都会发车，这就是节流的过程

防抖：
以最后一个上车乘客为准，再等 5 分钟，5 分钟内没人上来就发车，否则就再等 5 分钟，这就是防抖的过程

```js
// 函数节流
function throttle(fn, wait) {
  let last = 0;
  let dur = wait || 500;
  return function () {
    let self = this;
    const current_time = +new Date();
    if (current_time - last > dur) {
      fn.apply(self, arguments);
      last = +new Date();
    }
  };
}
```

```js
// 函数防抖
function debounce(fn, wait) {
  let timer;
  let dur = wait || 500; //间隔时间
  return function () {
    clearTimeout(timer);
    let self = this;
    let args = arguments; //保存此处的arguments
    timer = setTimeout(function () {
      fn.apply(self, args);
    }, dur);
  };
}
```

<h5 id='j11'>11.实现destructuringArray方法</h5>

// destructuringArray([1,[2,4],3],"[a,[b],c]")
// result //{a:1,b:2,c:3}

```js
//调用es6结构后自己组装对象
function test(arr, str) {
  var o = new Function(
    "",
    `
   const ${str}=${JSON.stringify(arr)};
   const arr=${JSON.stringify(str)}.match(/[a-z]+/ig);
   const obj={};
   for(let iof arr){
     obj[i]=eval(i);
   }
   console.log(obj);
   `
  );
  o(arr, str);
}
test([1, [2, 4], 3], "[a,[b,d,e],c]");
```
