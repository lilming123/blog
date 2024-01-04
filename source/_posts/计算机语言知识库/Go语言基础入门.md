---
title: Go语言基础入门
date: 2023-9-7 13:19
updated: 星期日 10日 九月 2023 20:21:34
tags: 
- 
categories: [计算机语言知识库]
keywords:
description: 
---
# 从 Hello World 开始入门
先由打印一个 hello world 开始入门吧
```go
package main  
  
import "fmt"  
  
func main() {  
    fmt.Printf("hello, world")  
}
```

现在介绍一下这段程序的组成和每个语句的含义吧
1. 在所有的 go 语言程序中都是由函数和变量组成，这些函数和变量被组织在一个个 go 源文件中，这些源文件按照作者的意图可以被组织为一个 package。
2. 要使用一个包的函数，就要先 import 进来 
3. main 包必须要有一个 main 函数作为程序的执行入口
4. go 语言中的字符串是不可以修改的

# 数组、字符串和切片
先介绍一下在 go 中最常用的三个数据结构
## 数组
## 字符串
## 切片