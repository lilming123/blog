---
title: JAVA基础速查速记
date: 2023-07-13 09:56
updated: 星期一 17日 七月 2023 09:33:31
tags: []
categories: [计算机语言知识库]
keywords:
description: 
---



# 基本数据类型

## 内置类型和包装类

| 包装类    | 基本数据类型 |
| --------- | ------------ |
| Boolean   | boolean      |
| Byte      | byte         |
| Short     | short        |
| Integer   | int          |
| Long      | long         |
| Character | char         |
| Float     | float        |
| Double    | double       |

### Number 与 Math

> java 将一个内置类型直接赋值给一个包装类是可以的，叫做自动装箱，反之叫拆箱。

```java
char c = 'a';
Character ch = c;
System.out.println(ch);  // 输出：a

Character ch = 'a';
char c = ch;
System.out.println(c);  // 输出：a
```

Number 常用的方法：
- XXX.valueOf: 返回一个 Number 对象指定的数据类型
- equals()：判断是非相等（类型和值都要相同才返回true）
- compareTo()：与 number 对象相比较
- toString()：转换成字符串
- Integer.parseInt()：将字符串转换成 int（建议使用valueOf）
	- Double.parseDouble
	- Long.parseLong

Math 的常用方法：
- abs()：返回参数的绝对值
- ceil()：向上取整
- floor()：向下取整
- round()：四舍五入（Math.floor(x+0.5)）
- min()：返回参数的最小值
- max()：返回参数的最大值
- exp()：返回 e 的参数次方
- log()：返回 log 以 e 为底的参数
- pow(x,y)：返回 x 的 y 次方
- sqrt()：返回参数的开方
- random()：返回一个 0 到 1 的随机数
### Character 类

> Character 是 char 的包装类

定义一个 char\[\]：
```java
char[] charArray ={ 'a', 'b', 'c', 'd', 'e' };
```

定义一个 Character：直接将 char 赋值给Character
```java
Character ch = new Character('a');
```

char\[\]不能直接赋值给 Character\[\]，要遍历 char\[\]一个一个赋值

Character、类的方法
- isLetter()：判断是否是一个字母
- isDigit()：判断是否是一个数字
- isWhitespace()：判断是否是一个空白字符
- isUpperCase()：
- isLowerCase()：
- toUpperCase()：
- toLowerCase()：
- toStrig()：

### String 类

格式化字符串：
```java
String fs = String.format("浮点型变量的值为 " + "%f, 整型变量的值为 " + " %d, 字符串变量的值为 " + " %s", floatVar, intVar, stringVar);
```

其他方法：
- char charAt(int)：返回指定索引下的 char
- String copyValueOf(char\[\])：返回 char\[\]的字符串形式
- String copyValueOf(char\[\], index, count):从 char\[\]的 index 下标开始，复制 count 个字符
- boolean endsWith(string)：字符串是否以指定的后缀结束
- boolean equals(string)：判断字符串是否相等
- boolean equalsIgnoreCase(string)：判断字符串是否相等，不考虑大小写
- int indexOf(string,int): 从下标 int 的位置开始返回指定 string 的索引值，找不到返回-1
- String trim()：返回给定字符串去除前后空值的副本
- char\[\] toCharArray()：将字符串转换成 char\[\]
- boolean contains(char|string)：判断字符串是否包含指定字符或字符串
- String valueOf(x)：返回 x 的字符串形式
- String toLowerCase()：将字符串的字母都转换成小写
- String subString(int Begin, int end)：截取指定索引范围的字符串

### StringBuilder

建立 `StringBuilder`：
```java
//建立一个容量为10的StringBuilder
StringBuilder sb = new StringBuilder(10)
```

StringBuilder 方法：
- append(String)：追加指定字符串
- reverse()：反转字符串
- delete(int start, int end)：删除指定索引的元素
- insert(int index, String str)：将 str 插入到指定的位置
- replace(int start, int end， String str)：将str替换指定索引的字符串
- String toString()：将 StringBuilder 转换成字符串

### 数组

数组的方法：
- int binarySearch(Object\[\] a, Object key)：在 a 数组中按二分查找查找 key，给定的数组是已排序好的
- void fill(Object\[\] a, Object key)：用 key 填充 a 数组
- void sort(Objext\[\])：升序排序数组


## List
### ArrayList

- add(int index，E e)：在指定 index 索引处添加元素
- get(int index)：返回 index 索引处的元素
- set(int index, E e)：修改指定 index 索引处的元素
- remove(int index)：移除 index 索引处的元素
- bolean remove(Object o)：删除某一元素，成功返回true
- size()：返回链表元素的个数
- addAll(int index, List | Set)：将 List 内的所有元素插入到 index 的索引位置（默认最后）
### LinkList

除了 `ArrayList` 有的方法之外还有：
- addFirst()：
- addLast()：
- removeFirst()：
- removeLast()：
- getFirst()：
- getLast()：
## Map
HashMap 是一个散列表，它存储的内容是键值对(key-value)映射。

创建 Map：
```java
Map<Integer, String> Sites = new HashMap<Integer, String>();
```

方法如下：
- put(key, value)：添加元素
- get(key)：获取元素
- remove(key)：移除元素
- size()：键值对个数

在对 Map 对象进行排序时，可以将 key 值作为关键词。利用 `TreeMap`
```java
 Map<String, Integer> sortedMap = new TreeMap<>(unsortedMap);
```
## Set

## Collections

Collections 类是 Java 提供的一个操作 Set、List 和 Map 等集合的工具类
方法如下：
- void reverse(List)：逆序List
- void sort(List)：升序 List
- void sort(List, Comparator)：根据指定的 Comparator 产生的序列对 List 排序
- void swap(List, int i, int j)：指定 List 的 i 和 j 进行互换
- void rotate(List, int distance)：当 distance 为正数时将 List 集合的后 distance 个元素整体移动到头部；当 distance 为负数时将 List 集合的前 distance 个元素整体移动到末尾