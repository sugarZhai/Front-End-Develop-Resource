
<h4>其他</h4>

&emsp;[1. 谈谈你对SEO的理解](#q1)

&emsp;[2. 前端怎么控制管理路由](#q2)

&emsp;[3. 防抖和节流的区别](#q3)

&emsp;[4. 页面重构怎么操作](#q4)

[网页性能管理详解](http://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html)
- [localForage 使用indexDB websq](https://github.com/localForage/localForage)
- [cross-storage扩展可以使用其他域下的storage](https://github.com/zendesk/cross-storage)

### 其他

<h5 id='q1'>1. 谈谈你对SEO的理解</h5>

> SEO：搜索引擎优化，其目的是为了使网站能够更好的被搜索引擎抓取，提高在搜索引擎内的自然排名，从而带来更多的免费流量，获取收益

> SEO主要有两种方法，站内优化和站外优化

- [前端SEO优化](https://imweb.io/topic/5682938b57d7a6c47914fc00)
- [网页性能管理详解](http://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html)
- [localForage 使用indexDB websq](https://github.com/localForage/localForage)
- [cross-storage扩展可以使用其他域下的storage](https://github.com/zendesk/cross-storage)

<h5 id='q2'>2. 前端怎么控制管理路由</h5>

路由就是浏览器地址栏中的 `url` 与所见网页的对应关系

前端路由的实现方式：

> 基于 `hash`（`ocation.hash+hashchange`事件）

展示层面也就是切换 `#` 后面的内容，呈现给用户不同的页面。现在越来越多的单页面应用，基本都是基于  `hash` 实现

特性：
 
- `url` 中 `hash` 值的变化并不会重新加载页面
- `hash` 值的改变，都会在浏览器的访问历史中增加一个记录，也就是能通过浏览器的回退、前进按钮控制 `hash` 的切换
- 我们可以通过 `hashchange` 事件，监听到 `hash` 值的变化，从而响应不同路径的逻辑处理

> 基于 `istory` 新 `API`（ `history.pushState()+popState` 事件）

```js

window.history.pushState(null, null, "http://www.google.com");

```

这两个 `API` 的相同之处是都会操作浏览器的历史记录，而不会引起页面的刷新。不同之处在于，`pushState` 会增加一条新的历史记录，而 `replaceState` 则会替换当前的历史记录

详见[History API -MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API)

<h5 id='q3'>3. 防抖和节流的区别</h5>

> 防抖：任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行

> 节流：指定时间间隔内只会执行一次任务

推荐 [这里](https://juejin.im/post/5c87b54ce51d455f7943dddb#chapter-three-one)

<h5 id='q4'>4. 页面重构怎么操作</h5>

> 页面重构就是根据原有页面内容和结构的基础上，通过 `div+css` 写出符合 `web` 标准的页面结构。

具体实现要达到以下三点：

- 功能不全页面的重构：页面功能符合用户体验、用户交互结构完整，可通过标准验证，
- 代码重构：代码质量、`SEO` 优化、页面性能、更好的语义化、浏览器兼容、`CSS` 优化
- 充分考虑到页面在站点中的“作用和重要性”，并对其进行有针对性的优化




#  常规优化	地址
Javascript高性能动画与页面渲染	http://www.infoq.com/cn/articles/javascript-high-performance-animation-and-page-rendering
移动H5前端性能优化指南	http://isux.tencent.com/h5-performance.html
5173首页前端性能优化实践	http://ued.5173.com/?p=1731
给网页设计师和前端开发者看的前端性能优化	http://www.uisdc.com/front-end-performance-for-web-designers-and-front-end-developers
复杂应用的 CSS 性能分析和优化建议	http://www.orzpoint.com/profiling-css-and-optimization-notes
张鑫旭——前端性能	张鑫旭——前端性能
前端性能监控总结	http://www.xiaoqiang.org/javascript/font-end-performance-monitor.html
网站性能优化之CSS无图片技术	网站性能优化之CSS无图片技术
web前端性能优化进阶路	web前端性能优化进阶路
前端技术：网站性能优化之CSS无图片技术	http://my.eoe.cn/tuwandou/archive/4544.html
浏览器的加载与页面性能优化	http://www.baiduux.com/blog/2011/02/15/browser-loading
页面加载中的图片性能优化	http://www.w3ctech.com/p/1503
Hey——前端性能	Hey——前端性能
html优化	html优化
99css——性能	99css——性能
Yslow——性能优化	http://www.yslow.net/category.php?cid=20
YSLOW中文介绍	http://www.cnblogs.com/yslow
转一篇Yahoo关于网站性能优化的文章，兼谈本站要做的优化	http://www.360ito.com/article/40.html
Yahoo!团队实践分享：网站性能	http://www.360doc.com/content/10/0928/09/2588264_56971287.shtml
网站性能优化指南：什么使我们的网站变慢？	http://blog.jiasule.com/i/153
网站性能优化实践，减少加载时间，提高用户体验	http://www.powereasy.net/helpyou/knowledge/ecommerce/9593.html
浅谈网站性能优化 前端篇	http://www.umtry.com/archives/747.html
前端重构实践之如何对网站性能优化？	http://www.adinnet.cn/blog/designview/2012-7-12/678.html
前端性能优化：使用媒体查询加载指定大小的背景图片	http://www.gbin1.com/technology/javascript/20130708-front-end-performance-optimization-9
网站性能系列博文	http://www.mykuer.com/post/factors-that-affect-the-speed-of-web-site-open.html
加载，不只是少一点点	http://tgideas.qq.com/webplat/info/news_version3/804/808/811/m579/201109/41355.shtml
前端性能的测试与优化	http://mzhou.me/article/95310
分享网页加载速度优化的一些技巧？	http://www.gbin1.com/technology/html/20130217-tips-for-speed-up-page-loading
页面加载中的图片性能优化	http://www.f2es.com/images-bytes-opt
web前端优化(基于Yslow	http://www.tcreator.info/webSchool/website/Front-end-Opt-Yslow.html
网站性能优化工具大全	https://www.qianduan.net/website-performance-optimization-tool.html
【高性能前端1】高性能HTML	http://www.alloyteam.com/2012/10/high-performance-html
【高性能前端2】高性能CSS	http://www.alloyteam.com/2012/10/high-performance-css
由12306谈谈网站前端性能和后端性能优化	http://coolshell.cn/articles/6470.html
AlloyTeam——前端优化	AlloyTeam——前端优化
毫秒必争，前端网页性能最佳实践	http://www.cnblogs.com/developersupport/p/3248695.html
网站性能工具Yslow的使用方法	http://blog.sina.com.cn/s/blog_6e9d2e0701017kvu.html
前端工程与性能优化（上）：静态资源版本更新与缓存	http://www.infoq.com/cn/articles/front-end-engineering-and-performance-optimization-part1
前端工程与性能优化（下）：静态资源管理与模板框架	http://www.infoq.com/cn/articles/front-end-engineering-and-performance-optimization-part2
HTTPS连接的前几毫秒发生了什么	http://blog.jobbole.com/48369
Yslow	http://uicss.cn/yslow/#more-12319
Essential Web Performance Metrics — A Primer, Part 1	http://blog.smartbear.com/web-performance/essential-web-performance-metrics-a-primer-part-1
Essential Web Performance Metrics — Part 2	http://blog.smartbear.com/performance/essential-web-performance-metrics-part-2
YUISlide,针对移动设备的动画性能优化	http://jayli.github.io/blog/data/2011/12/23/yuislide.html
Improving Site Performance	http://joelglovier.com/improving-site-performance
让网站提速的最佳前端实践	http://segmentfault.com/a/1190000000367899
Why Website Speed is Important	http://sixrevisions.com/web-development/why-website-speed-is-important
Need for Speed – How to Improve your Website Performance	https://www.devbridge.com/articles/need-for-speed-how-to-improve-your-website-performance
阿里无线前端性能优化指南 (Pt.1 加载期优化	https://github.com/amfe/article/issues/1