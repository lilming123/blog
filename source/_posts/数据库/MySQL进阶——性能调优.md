---
title: SQL进阶
date: 2023-09-20 15:16
updated: 星期六 23日 九月 2023 19:01:32
tags:
  - 后端
  - 性能调优
categories:
  - 数据库
keywords: 
description:
---



# 索引

>索引是指一种数据结构，将数据按照一定的规则进行排列和组织，能够快速定位到数据的位置，以加快数据库的查找和访问速度

## 索引的类型

按数据结构分类有：`B+树索引`、`Hash索引`、`Full-text(全文本索引)`。
在 `MySQL` 中默认采用 `B+树索引`，这也是最广泛使用的索引类型，要去重点学习。

按物理存储分类有：`聚集索引`、`非聚集索引`。

按字段特点分有：主键索引 `Primary Key`，唯一索引 `Unique`，普通索引 `Index`，全文本索引 `Full Text`。

按字段的个数分有：`单列索引`，`联合索引`

## 常见索引数据结构和区别

### 二叉树
> 特点：每个节点最多有两个节点，如果数据越随机，树杈越明显

随机的：![image.png](https://lilming-obsidian.oss-cn-hangzhou.aliyuncs.com/pic/20230923140539.png)

顺序的：![image.png](https://lilming-obsidian.oss-cn-hangzhou.aliyuncs.com/pic/20230923140559.png)
可以看出如果数据是按顺序依次进入的，树的高度会很高，此时元素的查找效率相当于 O(n)

### 红黑树（平衡二叉树）

>红黑树是在二叉树的基础上，通过自旋平衡降低二叉树的高度

可以看一下这个视频讲解 [neko 算法课 红黑树插入【11期】](https://www.bilibili.com/video/BV1BB4y1X7u3/?share_source=copy_web&vd_source=52adb06ea8f6a4d9e58f0dfee0b96607) 

红黑树的性质：
1. 根节点是黑色的
2. 节点是红色或者黑色
3. 叶子节点是黑色的（最底层的叶子节点实际上不存放数据，都是空节点）
4. 红色节点的父节点和子节点都是黑色的（不会存在连续两个连续的红色节点）
5. 从任意节点到叶子节点的所有路径上都包含数量相同的黑色节点

左旋和右旋：
![image.png](https://lilming-obsidian.oss-cn-hangzhou.aliyuncs.com/pic/20230923163949.png)
左旋和右旋之间的区别不大，只是镜像了一次。

右旋算法步骤：
1. 祖父节点指向右子节点
2. 父节点指向祖父节点

左旋算法步骤:
1. 祖父节点指向左子节点
2. 父节点指向祖父节点

### B -树

### B+树

## B 树和 B+树的区别
## Hash 索引



