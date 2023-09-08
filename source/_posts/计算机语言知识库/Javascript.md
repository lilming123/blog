---
title: Javascript
date: 2023-04-26 15:16
updated: 星期一 17日 七月 2023 09:33:23
tags: 
- 前端
- 语言基础
categories: [计算机语言知识库]
keywords:
description: 
---

# 语法
javascript的语法比较简单，类似与python与C的结合，阅读文档自行了解：[javascript教程](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

# 数据类型深入

## 数组
> 数组是一种特殊的变量，它能够一次存放一个以上的值。

```javascript
var cars = [
  "Saab",
  "Volvo",
  "BMW"
];
```
请不要最后一个元素之后写逗号（比如 "BMW",）,可能存在跨浏览器兼容性问题。

### 访问数组元素
```javascript
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars[0]; 
```

### 修改数组元素
```javascript
cars[0] = "Opel";
```

## 数组方法
<a name="PwXt7"></a>
### 数组长度length()
<a name="uWCrC"></a>
### 转换成字符串toString()，join()
<a name="dwyHR"></a>
### 增加和删除pop(),push(),shift(),unshift(),delete(),splice()
<a name="qLYLl"></a>
### 拼接与剪切 concat(),slice()
<a name="O3iHp"></a>
## 数组排序
<a name="PkSPb"></a>
### sort()
<a name="SYB1M"></a>
### reverse
<a name="oyH3I"></a>
### 
<a name="KZ0oN"></a>
## lterable object(可迭代对象)

<a name="rtAIM"></a>
# 对象
<a name="XRB4R"></a>

