---
title: Matlab
date: 2023-04-26 15:16
updated: 星期三 26日 四月 2023 15:18:02
tags: []
categories: [数学建模]
keywords:
description: 
---


<a name="SJaac"></a>
# 可视化
<a name="EsaD1"></a>
## 绘图基本步骤
<a name="M07Q9"></a>
### 设置参数
### 选定图形窗口
### 绘图指令
- plot(X,'s')
1. X是实向量

横坐标是下标值，纵坐标是元素值

2. X是实矩阵

有几列就有几条曲线，横坐标是每列元素的下标值，纵坐标是元素值

3. X是复数矩阵

有几列就有几条曲线，横坐标是每列元素值的实部，纵坐标是元素值的虚部

---

- plot(X,Y,'s')
1. X,Y是同维向量
2. X是向量，Y有一维与X等维

画出Y另一维和X维数不同的图线，X作为这些曲线的共同横坐标，纵坐标

3. X,Y是同维矩阵

画出与矩阵列数相同的图线，X,Y对应列元素维对应的列元素为横纵坐标

---

- plot(X1,Y1,'s1',X2,Y2,'s2')

相当于plot画图了两次在同一个坐标轴里
<a name="M9eSo"></a>
### 设置轴的范围
<a name="Ivl2U"></a>
### 图形注释
<a name="htfAT"></a>
### hold on 与hold off
<a name="idf1D"></a>
## 曲线的色彩、线型和数据点型
plot(x,y,'s','PropertyName',PropertyValue)

- 'PropertyName'属性名
- PropertyValue 属性值
<a name="fTpNW"></a>
### 色彩
<a name="Omb2r"></a>
### 线型
<a name="IXa1c"></a>
### 点型
若设置点型，不会连线
<a name="qhXY8"></a>
### 线宽和点的大小
<a name="ykJKm"></a>
## 三维图形设置
<a name="RUYUh"></a>
### 着色、明暗、材质
<a name="DjdQc"></a>
### 视点，三度比（横、纵、高）
<a name="DA6Wj"></a>
## 图形句柄与图形窗工具条

- get
- set
<a name="vTe1C"></a>
### 对数坐标
<a name="I0wje"></a>
## 输出
# M函数文件
## M函数的一般结构
```matlab
function grade=trans(score)
if score>100 ||score<0
	grade='ERR';
elseif score>=90
	grade='A';
elseif score>=80 && score<89
	grade='B';
elseif score>=70 && score<79
	grade='C';
else
	grade='E';
end

if score>=0 && score<=100
	str=['The grade of score ', num2str(score),' is ', grade];
else
	str='Error, the score exceeds range';
end

disp(str);
```
## 调用M函数文件
```matlab
%% 调用函数，trans返回值赋值给grade
grade=trans(78);
%% 帮助
help trans
%% 显示M文件函数的内容
type trans

```
## 输入输出宗量检测指令
```matlab
nargin    %% 获取实际输入的宗量个数
nargout      %% 获取实际输出的宗量的个数
nargin('fun')      %% 在函数体外获取实际输入的宗量个数
nargout('fun')      %% 在函数体外获取实际输出的宗量的个数
inputname(n)        %% 在函数体内使用,给出第n个输入宗量的实际 调用变量名
```
## 函数句柄
