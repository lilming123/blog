---
title: React基础知识入门
date: 2023-07-17 09:32:34
tags:
categories:
---
这篇 React 基础入门是结合 React 和 TS 来使用的，会比一般的 JS 加 React 的项目复杂的多，不过就我目前接触到的项目，采用 TS 居多，JS 越来越少了，大厂或许 TS 用的更多吧（我猜的）。
我参照的学习资料来自[掘金的一篇文章](https://juejin.cn/post/7021674818621669389)以及[官方的入门教程]( https://react.docschina.org/learn#components )，我的个人习惯一向是参照文字教程+动手写 demo ＋做项目，视频是真的看不下去，如果是国外的教程有优质的翻译还好，国内的教程质量不能说是很差吧，只是我不习惯这种按照老师讲课的方式，更倾向于文字形式能挑重点看，跳过已经掌握的部分
再说说实战视频吧，实战部分的案例都被用得太烂了，如果仅仅只是为了提升技术那么完全没有做的必要，直接参与竞赛或者老师的课题，以解决问题为导向，对自己技术的提升真的很大，实在没有也可以看看 github 的优质项目。
# 创建 React 项目
- 确保安装了 node.js 后就可以使用命令安装 react
```Terminal
npx creat-react-app my-app
```
> my-app 为创建的 react 项目名
# 初始 jsx 与组件
> 下面介绍有关 React 的基础知识
## 创建 React 组件
- React 通常有一个主入口文件，如：index.js 或 index.tsx
- 首先利用 ReactDOM.createRoot 创建一个 root 
```JSX
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
```
- document.getElementById 作用是什么？
> 获取一个 id 为“root”的 HTML 元素作为 React 的挂载点，将其组件挂载到这个容器上
- Id 为什么是“root”
> 在 public 目录下，和 index.html 文件里命名的元素有关，可以自定义命名
- 之后再用 root.render 将内部的 React 组件（<App/>）渲染到 root（根容器）中
```jsx
root.render(  
  <React.StrictMode>  
    <App />  </React.StrictMode>);
```
- App 组件是你引入的一个 React 组件
- 先在 App.jsx 文件里创建 JS 函数，函数里返回标签，这就是一个 React 组件了
> 注意：
> React 组件必须以大写字母开头
> 最外层的标签必须闭合，这和 HTML 不同
```jsx
function App() {  
  return (  
    <div className="App">  
    Hello，World！
      </div>  );  
}
```
- 要想组件在其他的组件里去使用要用 export defsult 
```jsx
export default App;
```
##  添加样式
- 使用 className 指定一个样式表
```jsx
import "./App.css"
<img className="demo">
```
```css
/*在App.css文件中*/
.demo{
	width：100px;
	height：100px;
}
```
# 条件渲染
- if 语句
```jsx
let content;  
if (isLoggedIn) {  
content = <AdminPanel />;  
} else {  
content = <LoginForm />;  
}  
return (  
<div>  
{content}  
</div>  
);
```
- 三元表达式
```jsx
let content;  
content = isLoggedIn ? <AdminPanel />:<LoginForm />;  
}  
return (  
<div>  
{content}  
</div>  
);
```
- 短路运算（逻辑中断）
```jsx
<div>  
{isLoggedIn && <AdminPanel />}  
</div>
```
## 列表渲染
- 利用 [Array 的 map 方法]( https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map )来渲染列表
```jsx
const listItems = products.map(product =>  
<li key={product.id}>  
{product.title}  
</li>  );

return (  
<ul>{listItems}</ul>  
);
```
> 循环的标签一定要有 key 属性，分配一个唯一的值，不然会有警告
## 响应事件
- 在函数组件内部声明一个事件处理函数来响应事件
```jsx
//这是函数组件
function MyButton() {  
//这是事件处理函数
function handleClick() {  
alert('You clicked me!');  
}  

return (
<button onClick={handleClick}>  
Click me  
</button>  
);  
}
```
# 组件
## 函数组件
- 函数名大写开头，函数内返回标签
```jsx
function Hello(){
	return (
	<div>hello,world!</div>
	)
}
```
- 渲染函数组件
> 直接使用<Hello/>标签
```jsx
ReactDOM.render(<Hello/>, root)
```
- 箭头函数语法
```jsx
const Hello = ()=> <div>Hello</div>
```
## 类组件
1. 必须继承 React.Component 父类
2. 必须有一个 render 方法 
3. render 方法必须要有返回值
```jsx
class Hello extends React.Component{
	render(){
		return(
		<div>hello</div>
		)
	}
}
```
- 类组件的渲染和函数组件一致
## 绑定事件
- 函数组件绑定事件
```jsx
function handleClick(){  
  console.log("abc")  
}  
  
function App() {  
  return (  
    <div className="App">  
    <button onClick={handleClick}></button>  
    </div>  );  
}
```
- 类组件绑定事件
> 在类中定义事件函数，要用 `this.funName` 的方式引用
```jsx
Class App extends React.Component {
	handleClick(){
		console.log("点击")
	}	
	render(){
	return(
		<button onClick={this.hanleClick}></button>
	) }
}
 ```
 ## 事件对象
- 通过 preventDefault 方法获取到事件对象，阻止运行
```jsx
function handleClick(e){
	//e就是这个点击事件的对象，也叫合成对象
	e.preventDefault()//阻止了链接的跳转
} 
<a onClick={handleClick}></a>
```
# 插值和状态
## class 写法和 Hook 写法
> 在前面说到 react 的组件由两种写法，一个是 class，一个是 function，在 react18 出来之前，函数组件是不能改变组件内部的值的，要做到动态的效果只能用 class，在 react18 出来之后，添加了一个新特性：Hook。可以在函数组件里定义变量，并修改变量了，在一些老的教程里没有提到这一点，我在这一点上吃了一点亏，既然官方推出了这个特新肯定是希望能成为主流去用的，比如在 react 官网教程里用的就是这个方式，所以在学习这一部分时，尽量还是以 Hook 为主，class 过一遍就好了
## class 写法
- 初始化数据：state = {}，state 是组件内部的私有数据，只能在组件内部使用，相当于 java 对象的私有变量。state 的值是一个对象，表示组件内部的多个数据
- 修改数据：this.setState({要修改的值})，`注意：不能直接修改state`
> 注意，在事件函数里存在 this 指向的问题，非箭头函数函数不能直接使用 this.setState()，因为这个 this 不是 class 的 this。
> 箭头函数没有他自己的 this，他的 this 是由外面一层的 this 决定的
```jsx
class App extends React.Component{  
  state={  
    count : 0  
  }  
  handleClick = ()=>{  
    this.setState({  
      count: this.state.count +1  
    })  
  }  
  render() {  
    return( <div>  
          <h1>{this.state.count}</h1>  
          <button onClick={this.handleClick}></button>  
        </div>    )  
  }  
}
```
##  Hook 写法
- 
# 挂载和状态设置
# 生命周期
# 