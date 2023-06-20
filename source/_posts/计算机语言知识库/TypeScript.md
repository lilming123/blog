# 格式化字符串
```typescript
let name: string = 'tom';
let hello: string = `my name is ${name}`
```
# 联合类型
```typescript
let age : number | String;
age = 1
age = '1'
```
# 接口
- 接口的属性用分号隔开
- 变量用逗号隔开
## 可选属性
> 在属性后加?
```typescript
interface IPerson {
	name: string;
	age?: number;
}
let tom : Iperson = {
	name: 'tom',
	//age: 21
}
```
## 任意属性
> 能允许有别的属性
```typescript
interface IPerson {
	name: String;
	[propName: string]: any
}
let tom : Iperson = {
	name: 'tom',
	gender: 'male'
}
```
## 只读属性
> 被创建后不能被修改
```typescript
interface IPerson {
	readonly id: string;
	name: string 
}
```
# 数组
```typescript
let temp: number[] = [1,2,3,4,5,6]
```
## 任意类型数组
```typescript
let temp: any[] = [1,2,3,'1',false]
```
# 函数
## 函数声明和函数表达式
```typescript
//函数声明
function add(x: number,y: number): number{
	return x + y;
}
//函数表达式
let add = function(x: number, y: number): number{
	return x + y;
}
//箭头函数
let add = (x: number, y: number ): number =>{
	return x + y
}
```
- 区别：
	- 函数声明会在浏览器在执行代码时被扫描，创建一个变量来储存指向该函数的引用
## 接口定义函数
```typescript
interface Add{
(x: number, y: number): number;
}
let add: IAdd = function(x: number, y: number): number{
	return x+y
};
```
## 可选参数
```typescript
function name(firstName: string, lastName?:string){
	if(lastName){
		return firstName+' '+lastName;
	}else{
		return firstName;
	}
}
name('lilming');
```
## 默认参数
> 可选参数和默认参数类似，可以有也可以没有
> 但是可选参数必须在必选参数后面；默认参数没有这个限制
```typescript
function name(lastName:string = 'wang' ,firstName: string ){
	return firstName + ' ' + lastName;
}
name('daiming');
```
## 获取剩余参数
```typescript
function push(a:any[], ...items:any[]){
	items.forEach((item)=>{
		a.push(item)
	})
}
let a = [1,2,3]
push(a,4,5,6,7)
```
## 函数重载
> 利用联合类型参数，通过 if 判断参数类型
```typescript
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number| String): number| String| void {
	if(typeof x ==='number'){
		return Number(x.tostring.split('').reverse().join(''));
	}else{
		return x.split('').reverse.join('');
	}
}
```
# 重载
