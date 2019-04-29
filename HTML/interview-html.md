<html>
<h2>目录</h2>
</html>

[HTML部分](#html)

&emsp;[1. Doctype作用？HTML5 为什么只需要写`<!DOCTYPE HTML>`、设立严格模式目的](#l1)

&emsp;[2. 行内元素有哪些，块级元素有哪些，空(void)元素有那些](#l2)

&emsp;[3. 简述一下你对HTML语义化的理解](#l3)

&emsp;[4. 常见的浏览器内核有哪些，介绍一下你对浏览器内核的理解](#l4)

&emsp;[5. html5有哪些新特性？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？](#l5)

&emsp;[6. 描述一下 cookies，sessionStorage 和 localStorage 的区别](#l6)

&emsp;[7. 如何实现浏览器内多个标签页之间的通信](#l7)

&emsp;[8. HTML5的离线存储怎么使用，解释一下工作原理](#l8)

&emsp;[9. src与href的区别](#l9)

&emsp;[10. 表单提交中Get和Post方式的区别](#l10)

&emsp;[11. xhtml和html的区别](#l11)

&emsp;[12. iframe有那些优点和缺点？](#l12)

&emsp;[13. label的作用是什么？怎么使用的？](#l13)

&emsp;[14. title与h1的区别、b与strong的区别、i与em的区别？](#l14)

&emsp;[14. title与h1的区别、b与strong的区别、i与em的区别？](#l14)

### HTML

<h5 id='l1'>1. Doctype作用？HTML5 为什么只需要写 <!DOCTYPE HTML>设立严格模式目的</h5>

> doctype是一种标准通用标记语言的文档类型声明，目的是告诉标准通用标记语言解析器要使用什么样的文档类型定义（DTD）来解析文档.`<!DOCTYPE>`声明必须是HTML文档的第一行，位于html标签之前

> 标准模式与兼容模式各有什么区别?
DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现,
标准模式的排版 和JS运作模式都是以该浏览器支持的最高标准运行。
在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。


> HTML5不基于SGML，所以不需要引用DTD。在HTML5中<!DOCTYPE>只有一种

> SGML: 标准通用标记语言,是现时常用的超文本格式的最高层次标准

>设立严格模式目的:  
1、
- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;（函数重命名、变量保留字，this指向全局，函数必须声明在顶层等等  
- 消除代码运行的一些不安全之处，保证代码运行的安全；  
- 提高编译器效率，增加运行速度； 
- 为未来新版本的Javascript做好铺垫。 
2、
- 规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。设定全局性的严格模式，这是合法的或者把函数包在一个无参数的立即执行函数里面。

<h5 id='l2'>2. 行内元素有哪些，块级元素有哪些，空(void)元素有那些</h5>

行内元素：`a` `span` `i` `img` `input` `select` `b` 等

块级元素：`div` `ul` `ol` `li` `h1~h6` `p` `table` 等

空元素：`br` `hr` `link` 等

<h5 id='l3'>3. 简述一下你对HTML语义化的理解</h5>
1、HTML5的语义化的标签是什么？
<article>   
<section>   
<nav>   
<aside>  
<header>  
 <footer>  
(<aside>页面、文章的侧边栏、广告、友情链接等区域,  
<section>标签所包裹的是有一组相似的主题的内容，可以用这个标签来实现文章的章节、标签式对话框中的各种标签页等类似的功能)

2、为什么要语义化？ 

简单来说，就是合适的标签做合适的事情，这样具有以下好处
- 为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构:为了裸奔时好看；
- 有助于构架良好的HTML结构，有利于搜索引擎的建立索引、抓取，利于SEO
- 有利于不同设备的解析
- 有利于构建清晰的机构，有利于团队的开发、维护
- 用户体验：例如title、alt用于解释名词或解释图片信息、label标签的活用；

<h5 id='l4'>4. 常见的浏览器内核有哪些，介绍一下你对浏览器内核的理解</h5>

> Trident内核：IE

> Gecko内核：NETSCAPE6及以上版本，火狐

> Presto内核：Opera7及以上。[Opera内核原为：Presto，现为：Blink;]

> Webkit内核：Safari，Chrome等。[Chrome的：Blink（WebKit的分支）] 

浏览器内核又可以分成两部分：**渲染引擎和JS引擎。** 渲染引擎主要负责取得网页的内容、整理讯息、计算网页的显示方式等，JS引擎则是解析Javascript语言，执行javascript语言来实现网页的动态效果。

<h5 id='l5'>5. html5有哪些新特性？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？</h5>

> html5有哪些新特性？  
- 语义化标签: `header` `footer` `nav` `section` `article` `aside` 等
- 增强型表单：`date`(从一个日期选择器选择一个日期) `email`(包含 e-mail 地址的输入域) `number`(数值的输入域) `range`(一定范围内数字值的输入域) `search`(用于搜索域) `tel`(定义输入电话号码字段) 等
- 视频和音频：`audio` `video`
- Canvas绘图 SVG绘图
- 地理定位：`Geolocation`
- 拖放API：`drag`
- web worker：是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能
- web storage: `localStorage` `sessionStorage` 
- WebSocket: HTML5开始提供的一种在单个 TCP 连接上进行全双工通讯的协议
> HTML5的form如何关闭自动完成功能？

* 给不想要提示的 form 或某个 input 设置为 autocomplete=off。

> 如何处理HTML5新标签的浏览器兼容问题？ 
* 支持HTML5新标签：  
    * IE8/IE7/IE6支持通过document.createElement方法产生的标签  
    * 可以利用这一特性让这些浏览器支持HTML5新标签  
    * 浏览器支持新标签后，还需要添加标签默认的样式 
* 当然也可以直接使用成熟的框架、比如html5shim   
```js
  <!--[if lt IE 9]>
  <script> src="http://html5shim.googlecode.com
  /svn/trunk/html5.js"</script><![endif]-->
```
> 如何区分h5?  

DOCTYPE声明\新增的结构元素\功能元素

<h5 id='l6'>6. 描述一下 cookie，sessionStorage 和 localStorage 的区别</h5>

<table>
   <tr>
        <th width=20%>特性</th>
        <th width=25% style="text-align:center">Cookie</th>
        <th widht=25% style="text-align:center">localStorage</th>
        <th widht=25% style="text-align:center">sessionStorage</th>
   </tr>
   <tr>
        <td >生命周期</td>
        <td>可设置失效时间，没有设置的话，默认是关闭浏览器后失效</td>
        <td>除非被手动清除，否则将会永久保存</td>
        <td>仅在当前网页会话下有效，关闭页面或浏览器后就会被清除</td>
   </tr>
   <tr>
        <td>存放数据大小</td>
        <td>4KB左右</td>
        <td colspan=2 align=center>可以保存5MB的信息</td>
   </tr>
   <tr>
        <td rowspan=3>http请求</td>
        <td>每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题</td>
        <td colspan=2>仅在客户端（即浏览器）中保存，不参与和服务器的通信</td>
   </tr>
</table>

> 1. web storage两种方式(sessionStorage和localStorage)

- sessionStorage用于本地存储的一个会话数据，这些数据只有在同一个会话中的页面才能访问并且会话结束后数据也随之销毁。因此  seeionStorage不是一种持久化的储存，仅仅是会话级别的存储。  

- 而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是用于不会过期的

> 2. localstorage 与sessionStorage的区别  
- sessionStorage当前会话，当前访问的储存  
- localstorage服务端永久存在，除非手动清空

> 3. web storage 和cookie的区别
- cookie的大小是受限的（不能超过4K，最多只有20条），并且每次你请求一个新的页面时，cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。Web Storage更大容量存储  

- web storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。

- cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生


> 4. cookie 和session 的区别：

- cookie数据存放在客户的浏览器上，session数据放在服务器上。

- cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗考虑到安全应当使用session。

- session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能考虑到减轻服务器性能方面，应当使用COOKIE。

- 单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。

<h5 id='l7'>7. 如何实现浏览器内多个标签页之间的通信</h5>

- 使用localStorage: `localStorage.setItem(key,value)`、`localStorage.getItem(key)`
- websocket协议
* iframe + contentWindow
* postMessage
* SharedWorker(Web Worker API)

[多个标签页之间的通信](https://juejin.im/post/5acdba01f265da23826e5633)

<h5 id='l8'>8. HTML5的离线存储怎么使用，解释一下工作原理</h5>
* 在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件 

* 原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示

* 如何使用：
    * 页面头部像下面一样加入一个manifest的属性；
    * 在cache.manifest文件的编写离线存储的资源
    * 在离线状态时，操作window.applicationCache进行需求实现

```js
    CACHE MANIFEST
    #v0.11
    CACHE:
    js/app.js
    css/style.css
    NETWORK:
    resourse/logo.png
    FALLBACK:
    / /offline.html
```

[HTML5的离线存储](https://segmentfault.com/a/1190000006984353)

<h5 id='l9'>9. src与href的区别</h5>

区别：src用于替代这个元素，而href用于建立这个标签与外部资源之间的关系

`<link href="style.css" rel="stylesheet" />`浏览器加载到这里的时候，html的渲染和解析不会暂停，css文件的加载是同时进行的

`<script src="script.js"></script>`当浏览器解析到这句代码时，页面的加载和解析都会暂停直到浏览器拿到并执行完这个js文件

<h5 id='l10'>10. 表单提交中Get和Post方式的区别</h5>

- Get一般用于从服务器上获取数据，Post向服务器传送数据
- Get传输的数据是拼接在Url之后的，对用户是可见的；Post的传输数据对用户是不可见的
- Get传送的数据量较小，不能大于2KB。Post传送的数据量较大，一般被默认为不受限制
- Get安全性非常低，Post安全性较高
- 在FORM提交的时候，如果不指定Method，则默认为Get请求

<h5 id='l11'>11.xhtml和html的区别</h5>
HTML是一种基本的WEB网页设计语言，XHTML是一个基于XML的置标语言  
最主要的不同：  
- XHTML 元素必须被正确地嵌套。  
- XHTML 元素必须被关闭。  
- 标签名必须用小写字母。  
- XHTML 文档必须拥有根元素。 

<h5 id='l12'>12.iframe 有那些优点和缺点？</h5>

* 优点：
    * 用来加载速度较慢的内容（如广告）
    * 可以使脚本可以并行下载
    * 可以实现跨子域通信
* 缺点：
    * iframe 会阻塞主页面的 onload 事件
    * 无法被一些搜索引擎索识别
    * 会产生很多页面，不容易管理

<h5 id='l13'>13.label 的作用是什么？怎么使用的？</h5>
* label标签来定义表单控件的关系：
    * 当用户选择label标签时，浏览器会自动将焦点转到和label标签相关的表单控件上
* 使用方法1：
    * <label for="mobile">Number:</label>
    * <input type="text" id="mobile"/>
* 使用方法2：
    * <label>Date:<input type="text"/></label>

<h5 id='l14'>14.title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？</h5>

* title 表示是整个页面标题，h1 则表示层次明确的标题，对页面信息的抓取有很大的影响
* strong 标明重点内容，有语气加强的含义，使用阅读设备阅读网络时，strong 会重读，而 b是展示强调内容
* i 内容展示为斜体，em 表示强调的文本
* 自然样式标签：b, i, u, s, pre
* 语义样式标签：strong, em, ins, del, code
* 应该准确使用语义样式标签, 但不能滥用。如果不能确定时，首选使用自然样式标签