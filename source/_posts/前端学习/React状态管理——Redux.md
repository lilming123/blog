---
title: React状态管理——Redux
date: 2024-02-26 11:59
updated: 星期一 26日 二月 2024 11:59:04
tags:
  - 前端
categories:
  - 前端学习
keywords: 状态管理
description:
---
# 使用场景
- 我们有多个组件需要共享和使用相同的状态，尤其是如果这些组件位于应用程序的不同部分。有时这可以通过将[状态](https://reactjs.org/docs/lifting-state-up.html)提升到父组件来解决，但这并不总是有用的
- 应用数据状态更新很频繁
- 更新数据状态逻辑很复杂
- 应用程序是中大型项目，很多同学共同建设

