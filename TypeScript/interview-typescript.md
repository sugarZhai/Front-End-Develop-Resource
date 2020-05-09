<html>
<h2>目录</h2>
</html>

&emsp;[1. void和undefined有什么区别？](#j1)




<h5 id='j1'>1. void和undefined有什么区别？</h5>

1、typescript中的void是undefined的子类型

2、void 作为类型也可以用于参数和所有其他声明。唯一可以传递的值是 undefined：

```javascript
  declare function iTakeNoParameters(x:void):void
  iTakeNoParameters()//
  iTakeNoParameters(undefined)//
  iTakeNoParameters(void 2)//
```

3、主要区别是：作为返回类型的void可以用不同的类型替换，以允许高级回调模式：
```javascript
  function doSomething(callback:()=>void){
    let c=callback()//at this position,callback always returns undefined 
    //c is also of type undefined
  }
  //this function returns a number
  function aNumberCallback():number{
    return 2;
  }
  //works type safety is ensured in doSometing
  doSomething(aNumberCallback)

```