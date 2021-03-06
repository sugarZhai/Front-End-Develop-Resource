
<h1>目录</h1>

<h4>HTTP相关</h4>

&emsp;[1. HTTP有什么特点](#h1)

&emsp;[2. http和https协议有什么区别](#h2)

&emsp;[3. http状态码有那些？分别代表是什么意思](#h3)

&emsp;[4. 什么是HTTP持久化和管线化](#h4)

&emsp;[5. Http报文](#h5)

&emsp;[6. 从输入URL到页面加载全过程](#h6)

&emsp;[7. 为什么利用多个域名来存储网站资源会更有效](#h7)

&emsp;[8. ssh端口为什么是22](#h8)

&emsp;[9. 关于Http 2.0 ？](#h9)

### HTTP相关

|#|HTTP|
|---|----|
|1|[SSL/TLS协议运行机制](https://blog.csdn.net/MichelleZhai/article/details/82979467)|
|2|[HTTPS详解](https://note.youdao.com/share/?id=d8999256f7d7e4cfc008587adbfa6f0f&type=note#/) |
|3|[跨域CORS详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)|

### 网络安全

* [网络安全学习资源](https://github.com/euphrat1ca/fuzzdb-collect)
* [webhack](https://wizardforcel.gitbooks.io/web-hacking-101/content/3.html)


<h5 id='h1'>1. HTTP有什么特点</h5>

- 简单快速：客户向服务器请求服务时，只需传送请求方法和路径
- 灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由 `Content-Type` 加以标记
- 无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接 (深入-持久连接、管线化)
- 无状态：HTTP协议是无状态协议( `Cookie` 的出现)

<h5 id='h2'>2. http和https协议有什么区别</h5>

> http: 是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（`TCP`），用于从`WWW`服务器传输超文本到本地浏览器的传输协议，它可以使浏览器更加高效，使网络传输减少

> https: 是以安全为目标的HTTP通道，简单讲是 `HTTP` 的安全版，即 `HTTP` 下加入 `SSL` 层，`HTTPS` 的安全基础是 `SSL` ，因此加密的详细内容就需要 `SSL`

- `http` 是超文本传输协议，信息是明文传输，`https` 则是具有安全性的 `ssl` 加密传输协议
- `http` 和 `https` 使用的是完全不同的连接方式，用的端口也不一样，前者是 `80` ，后者是 `443`
- `http` 的连接很简单，是无状态的；`HTTPS` 协议是由 `SSL+HTTP` 协议构建的可进行加密传输、身份认证的网络协议，比 `http` 协议安全

参考 [http与https的区别](https://juejin.im/entry/58d7635e5c497d0057fae036)

<h5 id='h3'>3. http状态码有那些？分别代表是什么意思</h5>

常用 `http` 状态码：

- `200` `OK` 服务器成功处理了请求
- `301/302` `Moved Permanently`（重定向）请求的URL已移走
- `404` `Not Found` (页面丢失)未找到资源
- `403`  服务器拒绝请求
- `408` （请求超时） 服务器等候请求时发生超时
- `501` `Internal Server Error` 服务器遇到一个错误，使其无法对请求提供服务
- `502` （错误网关） 服务器作为网关或代理，从上游服务器收到无效响应
- `504` （网关超时） 服务器作为网关或代理，但是没有及时从上游服务器收到请求

更多 参考 [这里](https://baike.baidu.com/item/HTTP%E7%8A%B6%E6%80%81%E7%A0%81/5053660?fr=aladdin)

<h5 id='h4'>4. 什么是HTTP持久化和管线化</h5>

> 出现背景： `HTTP` 最初的版本中，每进行一次 `HTTP` 通信，就要断开一次 `TCP` 连接（无连接）

为解决上述问题，`HTTP/1.1` 增加了持久连接（HTTP Persistent Connections ）的方法，其特点是，**只要一方未明确提出断开连接，则另一方保持 `TCP` 连接状态**

> 管线化是指将多个 `HTTP` 请求整批发送，在发送过程中不用等待对方响应

管线化是在持久连接的基础上实现的，管线化的实现，能够同时并行发送多个请求，而不需要一个接一个的等待响应

<h5 id='h5'>5. Http报文</h5>

> `HTTP` 报文是面向文本的，报文中的每一个字段都是一些 `ASCII` 码串，各个字段的长度是不确定的。`HTTP` 有两类报文：**请求报文和响应报文**

> HTTP的这两种报文都由三部分组成：开始行、首部行、实体主体

参考 [这里](https://www.jianshu.com/p/a2c4ede32d11)


<h5 id='h6'>6. 从输入URL到页面加载全过程</h5>

参考 [这里](https://www.jianshu.com/p/fc95603b8cf0)

<h5 id='h7'>7. 为什么利用多个域名来存储网站资源会更有效</h5>

- `CDN` 缓存更方便
- 突破浏览器并发限制
- 节约 `cookie` 带宽
- 节约主域名的连接数，优化页面响应速度
- 防止不必要的安全问题


<h5 id='h8'>8.ssh端口为什么是22？</h5>  

ssh的作者回忆，ftp端口是21，telnet的端口是23 ,他就挑了中间剩下的22

<h5 id='h9'>9.关于Http 2.0 ？</h5>  

> 1. HTTP2引入了“服务端推（server push）”的概念，它允许服务端在客户端需要数据之前就主动地将数据发送到客户端缓存中，从而提高性能。
> 2. HTTP2提供更多的加密支持
> 3. HTTP2使用多路技术，允许多个消息在一个连接上同时交差。 
> 它增加了头压缩（header compression），因此即使非常小的请求，其请求和响应的header都只会占用很小比例的带宽。