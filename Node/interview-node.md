<html>
<h2>目录</h2>
</html>

&emsp;[1. koa-bodyParser原理解析](#j1)







<h5 id='j1'>1. koa-bodyParser原理解析</h5>

1、报文主体

HTTP报文主要分为请求报文和响应报文，koa-bodyParser主要针对报文的处理。

请求报文主要由以下三个部分组成：

报文头部

空行

报文主体

而koa-bodyParser中的body指的就是请求报文中的报文主体部分

2、服务器端获取报文主体流程

HTTP底层采用TCP提供可靠的字节流服务，简单而言就是报文主体部分会被转化为二进制数据在网络中传输，所以服务器首先需要拿到二进制流数据

谈到网络传输，当然会涉及到传输速度的优化，而其中一种优化方式就是对内容进行压缩编码，常用的压缩编码方式有：
gzip、compress、deflate、identity(不执行压缩或不会变化的默认编码格式)，服务器端会根据报文头部信息中的Content-Encoding确认采用何种解压编码

3、获取二进制流

Nodejs中获取请求报文主体二进制数据流主要通过监听request对象的data事件完成

```js
   const http=require('http')
   http.createServer((req,res)=>{
     const body=[]

     req.on('data',chunk=>{
       body.push(chunk)
     })
   })
   req.on()
```

