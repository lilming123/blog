---
title: JAVA接入华为云日志服务
date: 2023-09-12 16:13
updated: 星期二 12日 九月 2023 16:13:21
tags: 
- java
- 云日志
- 大数据
categories: [后端学习]
keywords:
description: 本学期会计大数据课程的第一个小组作业，对材料中利用云日志同一采集数据比较感兴趣，不过材料里是用阿里云来做的，由于我没有个人的阿里云服务器，这里用华为云的来做一个。
---

# 准备工作

- 使用云日志 SDK 前，您需要注册华为帐号并开通华为云。
- 确认云日志服务的区域，请用户根据所在区域，选择region name。
- [获取华为帐号的AK/SK](https://support.huaweicloud.com/usermanual-lts/lts_03_0015.html)。
- 获取华为云帐号的项目ID（project id），步骤参考：请参见“我的凭证 > [API凭证](https://support.huaweicloud.com/usermanual-ca/ca_01_0002.html)”。
- 获取需要上报到LTS的[日志组ID](https://support.huaweicloud.com/usermanual-lts/lts_03_1003.html#lts_03_1003__li16888368143)和[日志流ID](https://support.huaweicloud.com/usermanual-lts/lts_03_1003.html#lts_03_1003__li01241419141411)。
- 已安装Java开发环境。日志服务Java SDK支持JDK1.8及以上，您可以执行 _java –version_ 命令检查您已安装的Java版本。如未安装，可以从[Java官方网站下载安装包](https://www.oracle.com/java/technologies/)进行安装。

