---
title: React路由踩坑
date: 2023-07-01 22:43
updated: 星期五 8日 九月 2023 11:59:50
tags: []
categories: [踩坑记录]
keywords:
description: 
---

123

# 错误实例
在一些版本较老的 React 的项目里你可能会看到这样的路由跳转方法
```jsx
import { Redirect } from 'react-router-dom';  
  
// 设置默认进入登录页面  
const RedirectPage: React.FC = () => {  
  return <Redirect to="/passport/login" />;  
};
```
然而你把这段代码放入最新的 React 项目中会有报错
![](../static/Pasted%20image%2020230701224929.png)
报错显示不存在 Redirect，这是因为在 v6 版本的 react-router-dom 中移除了 Redirect
# 正确做法
在 `react-router-dom` 的 v6 版本中，`Redirect` 组件已经被移除了，取而代之的是 `useNavigate` Hook 和 `navigate` 函数
```tsx
import React, {useEffect} from 'react';  
import { useNavigate } from 'react-router-dom';  
  
// 设置默认进入登录页面  
const RedirectPage: React.FC = () => {  
    const navigate = useNavigate();  
    useEffect(()=>{  
        navigate('/passport/login')  
    },[])  
    return <div></div>  
};  
export default RedirectPage;
```