---
title: TypeScript基础入门
date: 2023-06-20 13:19
updated: 星期一 17日 七月 2023 09:32:53
tags: []
categories: [计算机语言知识库]
keywords:
description: 
---



# 前言

官方文档：[TypeScript中文网 ](https://www.tslang.cn/docs/home.html)

# 基础数据类型

>和 JavaScript 一样，TypeScript 里的所有数字都是浮点数。这些浮点数的类型是 `number`。除了支持十进制和十六进制字面量，TypeScript 还支持 ECMAScript 2015中引入的二进制和八进制字面量。


```ts
let a: string = "abc"
let b: number = 123
let c: boolean = true
```

## 模板字符串
使用模板字符串可以定义多行文本和内嵌表达式

使用 **(\`)符号包裹 ******，并且以 ` ${expr} ` 这种这种形式嵌入表达式

```typescript
let name: string = 'tom';
let hello: string = `my name is ${name}`
```

## 数组
`Array` 直接在类型后加上 `[]`

```ts
let list: number[] = [1, 2, 3];
```
使用数组泛型，`Array<元素类型>`

```ts
let list: Array<number> = [1, 2, 3];
```

## 元组
`Tuple` 存储的数据类型可不相同，元素数量和类型是固定的

```ts
let x: [stirng, number];
x = ['hello', 10]
```

## 枚举
`enum` 能为一组数值赋值为对应的编号

```ts
//默认按照0，1，3来编号
enum Color {red, green, blue}
//等同于
enum Color {red = 0, green = 1, blue = 2}
//也可以手动编号
enum Color {red =  1, green = 2, blue = 4}
```

根据键名赋键值，类型可以为 number 也可以为枚举对象

```ts
enum Color {red, green, blue}
let x: Color = Color.red//x = 0
let x: number = Color.green//x = 1
```

根据键值赋键名

```ts
enum Color {red, green, blue}
let x: string = Color[0]//x = 'red'
```

## Any
在变量类型位置时，可以使用 `any` 类型

```ts
let x: any[] = [];
x.push('Hello');
x.push(1);
```

## Void
`void` 通常用于没有返回值的函数

```ts
funcation fun(): void {
	console.log("hello，world")
}
```

`void` 类型类型的变量只能赋值为 `null` 和 `undefined`

```ts
let unusable: void = undefined;
```

## Null 和 Undefined

- 在默认情况下，null 和 undefined 是**所有类型的子类**，可以将 null 和 undefined 赋值给任何类型的变量
- 但在严格模式下，null 和 undefined 只能赋值给它们对应的类型，在这个模式下如果想传入一个 string 或 null 或 undefined 类型，可以使用联合类型 `string|null|undefined`

```ts
//严格模式下
let x: string|null|undefined = null 
```

## never
`never` 类型表示不存在值的类型，用于抛出异常的函数，或无限循环下去的函数

```ts
function error(): never {
	throw new Error("error")
}
```

## Object
Object 表示非原始类型，是除了 `number `，` string `，` boolean `，` symbol `，` null ` 或 ` undefined ` 之外的类型

可以便于更好使用像 `Object.create` 这样的 API

使用 `typeof` 函数返回非原始类型变量都是 `Object`

```ts
declare function create(o: object | null):void; 
create({ prop: 0 }); // OK 
create(null); // OK 
create(42); // Error 
create("string"); // Error
create(false); // Error 
create(undefined); // Error
```

## 类型断言
第一种方式：使用 `<>` **(不推荐)**

```ts
let someValue: any = "this is a string"; let strLength: number = (<string>someValue).length;
```
第二种方式：使用 `as`

```ts
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

在 tsx 中（react 项目里）由于尖括号和标签冲突，只能使用 `as` 的形式

# 变量声明

## var、let 和 const

- 使用 `var` 声明一个变量，在其他函数内部是可以访问的，正是因为 var 存在着这样的问题，我们更推荐使用 `let`
- let 声明的变量只能在它的语法作用域或者块作用域使用
- `const` 的作用域与 `let` 类似，只是 `const` 在被创建后不能改变

## 解构

### 数组解构
语法：`let [x, y] = array`

```ts
let input = [1, 2]; 
let [first, second] = input; 
console.log(first); // outputs 1 
console.log(second); // outputs 2
```

- 作用于函数参数可直接解构成参数

```ts
let input = [1, 2];
function f([first, second]: [number, number]) { 
console.log(first);
console.log(second); 
} 
f(input);
```

- 可以用 `...` 语法来创建剩余的变量

```ts
let [frist, ...rest] = [1, 2, 3, 4, 5]
console.log(frist)// 1
console.log(rest)// [2, 3, 4, 5]
```

- 若不关心其他变量，可以空着，只用 `,` 分隔

```ts
let [, second, , fourth] = [1, 2, 3, 4];
```

### 对象解构
语法： `let {x, y} = class`，结构的变量名要和对象的键名对应

下面的代码里的 a 和 b 没有指明类型，ts 也能正常运行，这是因为当你使用对象解构时，编译器会自动判断对象属性的类型

```ts
let o = { a: "foo", b: 12, c: "bar" }; 
let { a, b } = o;
```

将对象解构用于函数声明中

type 作用就是给类型起一个新名字，和接口一样，用来描述对象或函数的类型，`?` 表示该类型可选

```ts
type C = { a: string, b?: number } 
function f({ a, b }: C): void {}

//相当于
function f({ a, b }: {a:string, b:number }): void {}
```

## 展开
三个点 `...` 被称为扩展运算符。用于可迭代对象展开到每个元素

1. 合并数组

```ts
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2]; // 结果：[1, 2, 3, 4, 5, 6]
```

2. 复制数组

```ts
const originalArray = [1, 2, 3];
const newArray = [...originalArray];
```

3. 添加元素

```ts
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2); // 结果：[1, 2, 3, 4, 5, 6]
```

4. 函数参数

```ts
function myFunction(a: number, b: number, c: number) {
  console.log(a + b + c);
}

const args = [1, 2, 3];
myFunction(...args); // 输出：6
```

5. 对象扩展

```ts
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 }; // 结果：{a: 1, b: 2, c: 3, d: 4}

```

# 接口
与 `type` 类似，都能用于定义变量的类型

```ts
interface InterfaceExample { key: string; } 
// 使用type 
type TypeExample = { key: string; }
```

## 接口和类型的区别

1. interface 与 type 能相互扩展:
```ts
//interface能用extends来扩展
interface Name { name: string; } 
interface User extends Name { age: number; }
//type能用 & 来交叉类型
type Name = { name: string; }
type User = Name & { age: number };
//interface扩展type
type Name = { name: string; } 
interface User extends Name { age: number; }
// type 与 interface 交叉 
interface Name { name: string; }
type User = Name & { age: number; }
```

2. `interface` 可以定义多次，属性会被合并，而 `type` 不能被定义多次

```ts
interface User { name: string age: number } 
interface User { sex: string } 
let user:User={name:'wang',age:1,sex:'man'}
```

3. `type` 能定义映射类型

```ts
interface aType { name: string; age: number; }

// 使用type定义映射类型 
type ReadonlyType<T> = { readonly [key in keyof T]: T[key]; }; 

type newType = ReadonlyType<aType>
/*
	type newType = {
		 readonly name: string;
		 readonly age?: number;
	 }
*/
```

4. `type` 能定义条件类型

```ts
type arrayType = number[];
// 使用type定义条件类型 
// infer能够自动推断传入的类型,之后会再讲到
type ElementType<T> = T extends Array<infer U> ? U : T;

type newType = Elementtype<arraytype>
/*
	type newType = number
*/
```

## 可选属性
在属性后加 `?` ,则该属性是可有可无的

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
语法：`[propName: type]: any` ，能允许类型添加别的属性

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
被创建后不能被修改,用于对象在创建后就不能更改的属性

```typescript
interface IPerson {
	readonly id: string;
	name: string 
}
let p1: IPerson = { id:001, name:wdm};
p1.id = 002; //error
```

### 只读数组类型
`ReadonlyArray<T>` 类型与 `Array<T>` 类似，只不过都是不可变的数据

```ts
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```

在最后一行代码，将 `ReadonlyArray` 赋值给一个普通的数组也是不行的，但是可以用类型重写，将 `ReadonlyArray` 强制转换为数组

```ts
a = ro as number[];
```

## 可变属性
如果要使类型的属性可变,可以使用 `[propName: string]: any`

```ts
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
//即使是拼写成了 colour 也不会报错,会自动添加一个colour属性
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
```

## 函数类型
接口能描述变量类型外,还能描述函数类型

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

这能用于创建一个函数类型的变量,将一个函数赋值给一个变量

```ts
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
```

函数里的参数名不必与接口定义的参数名相同

同时也可以不指定类型, TypeScript 会推断出参数的类型，因为已经指定了变量的函数类型

```ts
let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}
```
## 可索引类型
用于描述哪些可以通过索引得到数据的类型,类似于数组和字典,比如 `a[10]` 或 `ageMap["daniel"]`

只能使用 `string` 或 `number` 来作为索引

```ts
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```

也可以同时使用 `string` 和 `number` 作为索引

下面的代码在使用 `number` 索引时,由于 `Animal` 是父类型,也会匹配到 `Dog`,因此发生冲突
正确的做法是 `number` 返回的类型是 `string` 返回的类型的子类型

因为 `number` 实际上在 typescript 内部执行的时候会转换为 `string` ，所以这也要求 `string` 索引本身对应的类型是兼容所有的，也就是说 string 索引对应的类型必须是其他类型的父类。

举一个反例，比如 `number` 索引返回的类型是 `Animal`，TS 转换成 `string` 来去查找，但是 `string` 索引返回的类型是 `Dog`，`Animal` 不是 `Dog` 类型，编译器会报错。

```ts
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：'string'索引对应的类型不兼容所有
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}
//正确的做法:使用number索引时Dog都是Animal，字符串索引和数字索引返回的类型被视为一致
interface NotOkay {
    [x: number]: Dog;
    [x: string]: Animal;
}
```

字符串索引能够描述 `dictionary` 形式的变量,但是要保证所有 `string` 类型的属性返回值都和字符串索引的返回类型一致

因为字符串索引声明了 `obj.property` 和 `obj["property"]` 两种形式都可以

```ts
interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
```

如何为既有索引又有普通属性的变量初始化：

```ts
const dict: NumberDictionary = {
  '1': 2,
  '2': 3,
  length: 2,
};
```

## 类的类型
和 java 中的接口作用一致,用于抽象一个类的数据结构(ADT)

```ts
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
```

## 接口继承
和类一样，接口也可以继承一个或多个接口

```ts
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
```

## 混合类型
使用接口的混合类型，你会得到一个对象同时也能当作函数来使用

创建混合类型对象的步骤：
1. 先通过函数表达式，将函数分配给一个变量
2. 再使用 `Object.assign()` 方法将对象属性分配给该变量

```ts
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    // 创建一个具有指定函数签名的对象
    const counterFunction = function (start: number): string { return ''; };
    // 使用Object.assign将额外属性分配给counterFunction对象
    const counter: Counter = Object.assign(counterFunction, {
        interval: 123,
        reset: function () { }
    });

    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

## 接口继承类
当一个接口继承了类后，该接口只能被这个类或其子类所实现

```ts
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}
// Image必须是Control或其子类
class Image implements SelectableControl {
    select() { }
}
```

# 类

## 继承

## 属性修饰符


|  修饰符   | 子类 | 实例 | 能否被修改 |
|:---------:|:----:|:----:| ---------- |
|public(默认)|  √   |  √   | √          |
| protected |  √   |  ×   | √          |
|  private  |  ×   |  ×   | √          |
> `readonly`关键字用于将类成员声明为**只读**。这意味着成员的值只能在**声明或构造函数**中进行设置，不能在其他地方修改。`readonly`可以与`public`、`private`和`protected`修饰符结合使用。

### public
在TypeScript里，成员都默认为`public`。

```ts
class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

### protected
`protected` 成员只能在类和子类中可以访问

```ts
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误
```

构造函数也可以被标记成 `protected`。这意味着这个类不能在包含它的类外被实例化，但是能被继承。比如，

```ts
class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee 能够继承 Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
```

TypeScript使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。

然而，当我们比较带有 `private` 或 `protected` 成员的类型的时候，情况就不同了。如果其中一个类型里包含一个 `private` 成员，那么只有当另外一个类型中也存在这样一个 `private` 成员，并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。对于 `protected` 成员也使用这个规则。

下面来看一个例子，更好地说明了这一点：

```ts
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // 错误: Animal 与 Employee 不兼容.
```

### private
当成员被标记成`private`时，它就不能在声明它的类的外部访问

```ts
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // 错误: 'name' 是私有的.
```


### readonly
你可以使用 `readonly` 关键字将属性设置为只读的。只读属性必须在声明时或构造函数里被初始化。

```ts
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
```

## 存取器
TypeScript 支持通过 `get` 和 `set` 来截取对对象属性的操作。它能帮助你有效的控制对对象成员的读取和修改。

先将属性定义为 `private`, ` get ` 用来截取对象属性的读取, ` set ` 用来截取对象属性的修改

```ts
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode === "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
//对fullName赋值时,会运行set fullName()
employee.fullName = "Bob Smith";
//读取fullName时,会运行get fullName()
if (employee.fullName) {
    alert(employee.fullName);
}
```

## 静态属性
`static` 修饰符使得该属性只存在于该对象中,所有由该对象创建的实例都使用同一个属性值

```ts
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
```

## 抽象类
抽象类做为其它派生类的基类使用，它们一般不会直接被实例化。不同于接口，抽象类可以包含成员的实现细节

# 函数

## 函数声明和函数表达式

函数声明和函数表达式的区别：
	- 函数声明会在浏览器在执行代码时被扫描，创建一个变量来储存指向该函数的引用
	- 函数表达式则是将函数赋值给一个变量来储存

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

## 接口定义函数
接口内要用 `()` 包裹函数的参数

```typescript
interface Add{
(x: number, y: number): number;
}
let add: IAdd = function(x: number, y: number): number{
	return x+y
};
```

## 可选参数
参数后加 `?` 表示该参数是可选的，要对没有传入可选参数的情况做一个判断，通常可选参数都有个默认值，也就是默认参数

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
可选参数和默认参数类似，可以有也可以没有。但是可选参数必须在必选参数后面；默认参数没有这个限制

```typescript
function name(lastName:string = 'wang' ,firstName: string ){
	return firstName + ' ' + lastName;
}
name('daiming');
```

## 获取剩余参数
`...` 在变量之前可以获取剩下的其他变量

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
利用联合类型参数，通过 `if` 判断参数类型

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

## this 和箭头函数
箭头函数会捕获包含它们的上下文中的 `this` 值，箭头函数中的 `this` 和外层的 `this` 是一致的。而普通函数中的 `this` 指向全局对象（在浏览器中是 `window`，在 Node.js 中是 `global`）

下面的例子中，一个对象的函数返回了一个函数，被返回的函数内使用了该对象的属性，则该函数要用**箭头函数**，而不是普通的函数

因为在该函数被创建之后（被赋值了之后），他的 `this` 需要是对象的，而不是它自身的，这就需要使用**箭头函数**
```ts
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),

    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
```

# 重载
如果一个函数可能会有不同类型的参数传入，采用可选参数和 `if` 来处理会使代码可读性下降很多，可以采用函数重载来限定不同类型的参数

例如：
```ts
function padding(all: number);
function padding(topAndBottom: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);
// 上面三个是函数重载，规定只能用这三种形式的参数

function padding(a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  };
}
```

之后在调用时，就只能使用前面三种的参数形式

```ts
padding(1); // Okay: all
padding(1, 1); // Okay: topAndBottom, leftAndRight
padding(1, 1, 1, 1); // Okay: top, right, bottom, left

padding(1, 1, 1); // Error: Not a part of the available overloads
```
64 4 16 20 16 

# 数组处理

## map
> 对数组的每一个元素进行操作

## filter
> 对数组的元素进行筛选


## reduce
> 按顺序对数组的元素进行操作，并将返回的结果传递到下一次

