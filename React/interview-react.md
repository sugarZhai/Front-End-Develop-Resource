<html>
<h2>目录</h2>
</html>

&emsp;[1. React diff算法](#j1)

&emsp;[2. Mobx与Redux区别](#j2)

&emsp;[3. React与Vue区别](#j3)

&emsp;[4. react中如何获取一个dom元素的所有方法和属性](#j4)

&emsp;[5. react渲染机制](#j5)

&emsp;[6. react生命周期](#j6)

<h5 id='j1'>1. React diff算法</h5>

- 1、在React中，两棵DOM树只会对同一层的节点进行比较，若发现节点已不存在，则该节点及其子节点会被完全删除，不会用于进一步的比较。这样，只需要对树进行一次遍历，就能完成整个DOM树的比较
- 2、对于同层节点，React在数组遍历的增减关键字Key,若节点本身完全相同(类型相同，属性相同)，只是位置不同，则React只需要考虑同层节点的位置变换，不需要进行节点的销毁和重新创建
- 3、对于不同层的节点，只能销毁和重新创建




<h5 id='j2'>2. Mobx 与 Redux区别</h5>

>某一状态只有一个可信数据来源（通常命名为store，指状态容器）；  
操作更新状态方式统一，并且可控（通常以action方式提供更新状态的途径）；  
支持将store与React组件连接，如react-redux，mobx-react；通常使用状态管理库后，我们将React组件从业务上划分为两类：  
    容器组件（Container Components）：负责处理具体业务和状态数据，将业务或状态处理函数传入展示型组件；  
    展示型组件（Presentation Components）：负责展示视图，视图交互回调内调用传入的处理函数；  


### 关注点不同:

> 1. Redux更多的是遵循Flux模式的一种实现，是一个JavaScript库，它的关注点在于：  
     Action：一个JavaScript对象，描述动作相关信息，主要包含type属性和payload属性：  
     Reducer：定义应用状态如何响应不同动作（action），如何更新状态；  
     Store：管理action和reducer及其关系的对象，主要提供以下功能：  
          1>. 维护应用状态并支持读取访问状态（getState()）；  
          2>. 支持监听action的分发，更新状态（dispatch(action)）；  
          3>. 支持订阅store的变更（subscribe(listener)）；  
          4>. 支持通过中间件（redux-thunk、redux-saga、redux-promise等）处理异步任务流程  


> 2. Mobx是一个透明函数响应式编程的状态管理库，它使得状态管理简单可伸缩，它的关注点在于：  
    Action：定义改变状态的动作函数，包括如何变更状态；  
    Store：集中管理模块状态（State）和动作（action）；  
    Derivation（衍生）：从应用状态中派生而出，且没有任何其他影响的数据，我们称为derivation（衍生），衍生在以下情况下存在：  
       1>. 用户界面；  
       2>. 衍生数据, 衍生主要有两种：  
        Computed Values（计算值）：计算值总是可以使用纯函数（pure function）从当前可观察状态中获取；  
        Reactions（反应）：反应指状态变更时需要自动发生的副作用，这种需要实现其读写操作  

###  设计思想的不同(函数式和面向对象)

 > 1. Redux更多的是遵循函数式编程（Functional Programming, FP）思想，而Mobx则更多从面相对象角度考虑问题。  
 > 2. Redux提倡编写函数式代码，如reducer就是一个纯函数（pure function）纯函数，接受输入，然后输出结果，除此之外不会有任何影响，也包括不会影响接收的参数；对于相同的输入总是输出相同的结果。    
 > 3. Mobx设计更多偏向于面向对象编程（OOP）和响应式编程（Reactive Programming），通常将状态包装成可观察对象，于是我们就可以使用可观察对象的所有能力，一旦状态对象变更，就能自动获得更新。  

 ### 对store管理的不同(单一Store和多Store)
 Store是应用管理数据的地方，在Redux应用中，我们总是将所有共享的应用数据集中在一个大的store中，而Mbox则通常按模块将应用状态划分，在多个独立的store中管理.

 ###  数据可变性的不同(不可变（Immutable）和可变（Mutable)

 > 1. Redux状态对象通常是不可变的（Immutable）：我们不能直接操作状态对象，而总是在原来状态对象基础上返回一个新的状态对象，这样就能很方便的返回应用上一状态

 > 2. 而Mobx中可以直接使用新值更新状态对象。

 ### JavaScript对象和可观察对象
 
 > 1. Redux默认以JavaScript原生对象形式存储数据，而Mbox使用可观察对象：
 > 2. Redux需要手动追踪所有状态对象的变更
 > 3. Mobx中可以监听可观察对象，当其变更时将自动触发监听

 ### Mobx-react 和 React-redux

> 使用Redux和React应用连接时，需要使用react-redux提供的Provider和connect：
1、Provider:负责将Store注入React应用
2、connect:负责将store state 注入容器组件，并选择特定状态作为容器组件props传递；


> 对于Mobx而言，同样需要两个步骤：  
1、Provider:使用mobx-react提供的Provider将所有stores注入应用；  
2、使用inject将特定store注入某组件，store可以传递状态或action；然后使用observer保证组件能响应store中的可观察对象  （observable）变更，即store更新，组件试图响应式更新。  

参考链接：https://segmentfault.com/a/1190000017538995?utm_source=tag-newest

https://blog.csdn.net/vhwfr2u02q/article/details/79395072


<h5 id='j3'>3. React 与 Vue区别</h5>

1 component层面，web component和virtual dom 

2 数据绑定（vue双向，react的单向）等好多 

>vue和react的数据绑定有什么区别:vue的数据劫持相当于一个观察监听的过程，而React的数据绑定是通过每次渲染时生成虚拟DOM ，手动通知更新数据动态,Vue在渲染过程中，会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树。
React每当应用的状态被改变时，全部子组件都会重新渲染。这可以通过shouldComponentUpdate这个生命周期方法来进行控制。


3 计算属性 vue 有，提供方便；而 react 不行 

4 vue 可以 watch 一个数据项；而 react 不行 

5 vue 由于提供的 direct 特别是预置的 directive 因为场景场景开发更容易；react 没有 

6 生命周期函数名太长 directive

<h5 id='j4'>要从组件中获取真实的DOM节点，则可在jsx标签中加入<font color="red">ref</font>属性</h5>

<h5 id='j5'>react渲染机制</h5>

1、react render()函数将组建或者虚拟DOM元素渲染到真实的DOM上，将任务交给浏览器，进而进行layout和paint等步骤

`render():function(nextElement,container,callback){}`

>nextElement :要插入到DOM中的内容
>container :要插入到的容器
>callback: 回调函数
>createElement()接收三个参数（type，config，children），做了一些变量初始化，接着调用了ReactElement()方法。 
ReactElement()是一个工厂方法，根据传入的参数返回一个element对象


2、进入页面后render()执行了几次

首次加载

setState改变组件内部state。 注意： 此处是说通过setState方法改变。

接受到新的props


3、进行Diff算法虚拟DOM

>https://blog.csdn.net/MichelleZhai/article/details/88640265

<h5 id='j6'>react生命周期</h5>

一、挂载(Mounting)

constructor(props)

componentWillMount()
render()

componentDidMount()

二、更新(Updating)

componentWillReceiveProps(nextProps)

shouldComponentUpdate(nextProps, nextState)

componentWillUpdate(nextProps, nextState)

componentDidUpdate(prevProps, prevState)

三、卸载(Unmounting)

componentWillUnmount()
![image](https://img-blog.csdn.net/2018042618533222?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01pY2hlbGxlWmhhaQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70.png)

<img src="https://img-blog.csdn.net/2018042618533222?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01pY2hlbGxlWmhhaQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70"/>