---
title: SpringBoot接入阿里云SLS云日志服务
date: 2023-09-12 16:13
updated: 星期二 12日 九月 2023 16:13:21
tags:
  - java
  - 云日志
  - 大数据
categories:
  - 后端学习
keywords: 标签外挂
description: 本学期会计大数据课程的第一个小组作业，对材料中利用云日志同一采集数据比较感兴趣，在这里基于springboot的logback日志输出的基础上，引入阿里云相关依赖，在指定的类中输出日志到阿里云SLS中，并储存到阿里云OSS中
---

# 准备工作

本教程需要先完成以下工作，若已完成可直接跳到第二部分
1. 获取阿里云账号的 AccessKey 以及 AccessKey Secret。（建议使用 RAM 访问控制，仅授权部分权限）
2. 开通阿里云 SLS 服务，创建 Project 和 logstore

{% hideToggle 准备工作 %}
1. 要使用阿里云的云服务要先注册阿里云的账号，点击右上角的头像，进入 AccessKey，获取 AccessKey 以及 AccessKey Secret。官方建议使用 RAM 仅开放有限的权限，可查看官方文档的具体操作： [官方文档](https://help.aliyun.com/zh/ram/getting-started/create-a-ram-user-1)
[sls 控制台，点击跳转](https://sls.console.aliyun.com/lognext/profile)

![](https://lilming-obsidian.oss-cn-hangzhou.aliyuncs.com/pic/Pasted%20image%2020230913082917.png)
![](https://lilming-obsidian.oss-cn-hangzhou.aliyuncs.com/pic/Pasted%20image%2020230913082948.png)
2. 开通阿里云 SLS，创建 Project,这里名字命名为 school-accounting，注意分隔符是 `-` 不是 `_` 
![](https://lilming-obsidian.oss-cn-hangzhou.aliyuncs.com/pic/Pasted%20image%2020230913083948.png)
**注意地域要选择和服务器同一地域的**
![](https://lilming-obsidian.oss-cn-hangzhou.aliyuncs.com/pic/Pasted%20image%2020230913084052.png)
3. 创建 Logstore，这里名字命名为 cost_center
![](https://lilming-obsidian.oss-cn-hangzhou.aliyuncs.com/pic/Pasted%20image%2020230913084859.png)
4. 在记下地域所属的 endpoint，之后会用到
![](https://lilming-obsidian.oss-cn-hangzhou.aliyuncs.com/pic/Pasted%20image%2020230913084722.png)
{% endhideToggle %}

# 在 SpringBoot 中配置SLS
SpringBoot 支持多种日志框架，如 JavaUtilLogging，Log4J，Log4J2和 Logback。SpringBoot 默认采用 `Logback` 如没有特别需求，使用 Logback
即可，这里的示例也是采用 Logback

## 配置文件

1. 在项目的启动模块的 `pom.xml` 中加入阿里云 sls 相关的依赖,并且重新生成 `Maven项目依赖`
```xml
<dependencies>
    <dependency>  
        <groupId>com.google.protobuf</groupId>  
        <artifactId>protobuf-java</artifactId>  
        <version>2.5.0</version>  
    </dependency>    
    <dependency>
	    <groupId>com.aliyun.openservices</groupId>  
        <artifactId>aliyun-log-logback-appender</artifactId>  
        <version>0.1.18</version>  
    </dependency>
</dependencies>
```
2. 修改 `resources` 文件夹下的 `logback-spring.xml` 文件
```xml
<!--阿里云SLS-->  
<!--为了防止进程退出时，内存中的数据丢失，请加上此选项-->  
<shutdownHook class="ch.qos.logback.core.hook.DelayingShutdownHook"/>  
  
<appender name="loghubAppender" class="com.aliyun.openservices.log.logback.LoghubAppender">  
   <!--必选项-->  
   <!-- 账号及网络配置 -->  
   <endpoint>你的endpoint</endpoint>  
   <accessKeyId>accessKeyId</accessKeyId>  
   <accessKeySecret>你的accessKeySecret</accessKeySecret>  
  
   <!-- sls 项目配置 -->  
   <project>school-accounting</project>  
   <logStore>cost_center</logStore>  
   <!--必选项 (end)-->   <totalSizeInBytes>104857600</totalSizeInBytes>  
   <maxBlockMs>0</maxBlockMs>  
   <ioThreadCount>8</ioThreadCount>  
   <batchSizeThresholdInBytes>524288</batchSizeThresholdInBytes>  
   <batchCountThreshold>4096</batchCountThreshold>  
   <lingerMs>2000</lingerMs>  
   <retries>10</retries>  
   <baseRetryBackoffMs>100</baseRetryBackoffMs>  
   <maxRetryBackoffMs>50000</maxRetryBackoffMs>  
  
   <encoder>      <pattern>%d %-5level [%thread] %logger{0}: %msg</pattern>  
   </encoder>  
   <!-- 只打印INFO级别的日志 -->  
   <filter class="ch.qos.logback.classic.filter.LevelFilter">  
      <level>INFO</level>  
      <onMatch>ACCEPT</onMatch>  
      <onMismatch>DENY</onMismatch>  
   </filter>
</appender>  
<!--阿里云SLS (end)-->
```
> 以上配置之后还没有指定哪个模块输出的日志要上传的 sls 中，下面的配置根据项目的具体需求来选择，这里演示了两种:


{% tabs sls %}  
<!-- tab 指定业务中的类才会接入sls -->  
例如以下只有拦截器中的日志会被输入到 sls 中，其中 `loghubAppender` 是上面的配置的 appender name，会输入到 sls 中；STDOUT 是同时也在输出到控制台中
```xml
<logger name="org.jeecg.config.mybatis.MybatisInterceptor" level="info" additivity="false">  
   <appender-ref ref="STDOUT" />  
   <appender-ref ref="loghubAppender" />  
</logger>
```
<!-- endtab -->  
  
<!-- tab 所有的日志都接入到sls中 -->  
```xml
<root level="INFO">  
	<appender-ref ref="STDOUT" />  
	<appender-ref ref="FILE" />  
	<appender-ref ref="HTML" />  
	<appender-ref ref="FILE_HTML" />  
+	<appender-ref ref="loghubAppender" />  
</root>
``` 
<!-- endtab -->  
{% endtabs %}

## 在程序中输出日志
在下列的示例中，拦截了 mybatis 的插入方法，指定了特定的表，将插入的对象以支付串的形式输出。当系统往 `cd_calc_main` 表中插入记录时，会往 sls 中输出日志
```java
@Slf4j  
@Component  
@Intercepts({ @Signature(type = Executor.class, method = "update", args = { MappedStatement.class, Object.class }),  
      @Signature(type = StatementHandler.class, method = "prepare", args = {Connection.class, Integer.class})  
})  
public class MybatisInterceptor implements Interceptor {  
  
   private final Logger logger = LoggerFactory.getLogger(MybatisInterceptor.class);  
   
@Override  
public Object intercept(Invocation invocation) throws Throwable {
	if (SqlCommandType.INSERT == sqlCommandType) {  
	
		MappedStatement mappedStatement = (MappedStatement) invocation.getArgs()[0];
		//其他代码省略
		
	   //写入阿里云的sls中  
	   BoundSql boundSql = mappedStatement.getBoundSql(parameter);  
	   String sql = boundSql.getSql();  
	   String tableName = getTableNameFromSql(sql);  
	   if (Objects.equals(tableName, "cd_calc_main")){  
	      ObjectMapper mapper = new ObjectMapper();  
	      String json = mapper.writeValueAsString(parameter);  
	      logger.info(json);  
	   }  
	}
}

//获取插入数据sql的表名，匹配into后面的单词
private static final Pattern TABLE_NAME_PATTERN =  
      Pattern.compile("\\binto\\b\\s*(\\w+)", Pattern.CASE_INSENSITIVE);  
private String getTableNameFromSql(String sql) {  
   Matcher matcher = TABLE_NAME_PATTERN.matcher(sql);  
   if (matcher.find()) {  
      return matcher.group(1);  
   }  
   return null;  
}
}
```

## 运行项目，预览数据接入情况
点击右侧边栏数据接入的＋号
![](https://lilming-obsidian.oss-cn-hangzhou.aliyuncs.com/pic/Pasted%20image%2020230913085917.png)

阿里云的 SLS 支持 JAVA 的 Logback、Log4J 和 Log4J2，在弹出窗口中点击 `LogBack接入`
![](https://lilming-obsidian.oss-cn-hangzhou.aliyuncs.com/pic/Pasted%20image%2020230913085712.png)

之后运行程序，在预览界面查看 sls 接受到的日志数据
![](https://lilming-obsidian.oss-cn-hangzhou.aliyuncs.com/pic/Pasted%20image%2020230913101935.png)

SLS 中一个十分好用的功能是 `自动生成索引`，在上面的例子中我们把 CdCalcMain 对象的每个属性转换成了 `Json` 格式的字符串作为 message 的 value，点击 `自动生成索引`，SLS 能自动试别 message 为 `json` 格式，标记了每个 key 值
![](https://lilming-obsidian.oss-cn-hangzhou.aliyuncs.com/pic/Pasted%20image%2020230913143106.png)
![](https://lilming-obsidian.oss-cn-hangzhou.aliyuncs.com/pic/Pasted%20image%2020230913143354.png)
观察输出的日志格式，有以下几个字段：
1. \_\_source\_\_：表示发出日志的 ip 地址，在本实例中就是本机的 ip 地址
2. \_\_topic\_\_：日志主题，可以在 `logback-spring.xml` 中配置
3. location：是程序输出的位置
4. log：是程序控制台输出日志的内容
5. message：是日志输出的内容


