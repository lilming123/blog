---
title: orginone平台解析——anystore的api
date: 2023-07-23 12:04
updated: 星期日 23日 七月 2023 22:53:24
tags: []
categories: [orginone实习经历]
keywords:
description: 
---


# AnyStore 类
## getInstance

获取任意数据存储单例。

**请求方式**：Post

**参数**：

```json

{

    "methodName":"getInstance",

    "args":{

        "url": string,//远端地址，默认为"/orginone/anydata/hub"

    },

    "timeout":2

}

```


## isOnline
  
判断是否在线。

**请求方式**：Post


```json

{
    "methodName":"isOnline",
    "args":{
        //无参数
    },
    "timeout":2
}

```

## updateToken
  
更新 token。

**请求方式**：Post

**参数**：

```json
{
    "methodName":"updateToken",
    "args":{
        "accessToken": string
    },
    "timeout":2
}
```

## subscribed

订阅对象变更。
  
**请求方式**：Post
  
**参数**：

```json
{
    "methodName":"subscribed",
    "args":{
        "belongId": string,//对象所在域
        "key": string,//对象名称
        "callback": (data: any) => void//变更回调函数
    },
    "timeout":2
}
```

## unSubscribed

取消订阅对象变更。
  
**请求方式**：Post

**参数**：

```json
{
    "methodName":"unSubscribed",
    "args":{
        "belongId": string,//对象所在域
        "key": string,//对象名称
    },
    "timeout":2
}
```

## get

查询对象。

**请求地址**：'/orginone/anydata/Object/Get/'

**请求方式**：Post

**参数**：

```json
{
    "methodName":"get",
    "args":{
        "belongId": string,//对象所在域
        "key": string,//对象名称
    },
    "timeout":2
}
```
  
## set

修改对象。

**请求地址**：'/orginone/anydata/Object/Set/'

**请求方式**：Post

**参数**：

```json
{
    "methodName":"set",
    "args":{
        "belongId": string,//对象所在域
        "key": string,//对象名称
        "setData": any,//对象新的值
    },
    "timeout":2
}
```

## delete

删除对象。 

**请求地址**：'/orginone/anydata/Object/Delete/'

**请求方式**：Post

**参数**：

```json
{
    "methodName":"delete",
    "args":{
        "belongId": string,//对象所在域
        "key": string,//对象名称
    },
    "timeout":2
}
```

## insert

添加数据到数据集。

**请求地址**：'/orginone/anydata/Collection/Update/'

**请求方式**：Post
  
**参数**：

```json
{
    "methodName":"insert",
    "args":{
        "belongId": string,//对象所在域
        "collName": string,//数据集名称
        "data": any,//要添加的数据，对象/数组
    },
    "timeout":2
}
```
  
## update

更新数据到数据集。

**请求地址**：'/orginone/anydata/Collection/Update/'

**请求方式**：Post

**参数**：

```json
{
    "methodName":"update",
    "args":{
        "belongId": string,//对象所在域
        "collName": string,//数据集名称
        "update": any,//更新操作（match匹配，update变更,options参数）
    },
    "timeout":2
}
```
  
  

## remove

从数据集移除数据。

**请求地址**：'/orginone/anydata/Collection/Remove/'

**请求方式**：Post

**参数**：

```json
{
    "methodName":"remove",
    "args":{
        "belongId": string,//对象所在域
        "collName": string,//数据集名称
        "match": any,//匹配信息
    },
    "timeout":2
}
```

## aggregate

从数据集查询数据。

**请求地址**：'/orginone/anydata/Collection/Aggregate/'

**请求方式**：Post

**参数**：

```json
{
    "methodName":"aggregate",
    "args":{
        "belongId": string,//对象所在域
        "collName": string,//数据集名称
        "options": any,//聚合管道(例如：{match:{a:1},skip:10,limit:10})
    },
    "timeout":2
}
```

## pageRequest

从数据集查询数据并进行分页。

**请求方式**：Post

**参数**：
  
```json
{
    "methodName":"pageRequest",
    "args":{
        "belongId": string,//对象所在域
        "collName": string,//数据集名称
        "options": any,//聚合管道(例如：{match:{a:1},skip:10,limit:10})
        "page": PageModel //分页模型
    },
    "timeout":2
}

```

## bucketOpreate

进行桶操作。

**请求地址**：'/orginone/anydata/Bucket/Operate/'

**请求方式**：Post

**参数**：

```json
{
    "methodName":"bucketOpreate",
    "args":{
        "belongId": string,//对象所在域
        "data": BucketOpreateModel,//桶操作模型
    },
    "timeout":2
}
```
  
## fileUpdate

文件上传。

**请求地址**：'/orginone/anydata/Bucket/Operate/'

**请求方式**：Post

**参数**：

```json

{
    "methodName":"fileUpdateOpreate",
    "args":{
        "belongId": string,//对象所在域
        "file": Blob,//要上传的文件
        "key": string,//文件的路径
        "progress": ProgressEvent//进度事件
    },
    "timeout":2
}

```

## loadThing

加载数据。

**请求地址**：'/orginone/anydata/Thing/Load/'

**请求方式**：Post

**参数**：

```json
{
    "methodName":"loadThing",
    "args":{
        "belongId": string,//对象所在域
        "options": any//加载选项
    },
    "timeout":2
}
```
  

## createThing

创建数据。

**请求地址**：'/orginone/anydata/Thing/Create/'

**请求方式**：Post

**参数**：

```json
{
    "methodName":"createThing",
    "args":{
        "belongId": string,//对象所在域
        "name": string//数据名称
    },
    "timeout":2
}
```