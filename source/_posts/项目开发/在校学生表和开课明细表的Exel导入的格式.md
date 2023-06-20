# 格式说明
- 标题占两行，字段占一行
- 标题的内容和格式没有要求，只要保证字段在第三行就行
> 导入导出的格式保持一致，可以通过导出功能得到前三行的格式
1. 导入在校学生明细表的字段：
 ![[af8914eae9c2130b45fd4ac61c203e1.png]]
2. 导入开课明细表的字段：
![[5e5de841d76197296ed23007b5c5a29.png]]
- 关于日期字段的导入格式
```java
@Excel(name = "年度", width = 15, format = "yyyy-MM-dd")  
private Date yearly;
```
导入的格式保持“yyyy-MM-dd”，否则会导入失败
例如：2023-01-03
# 有关外键的字段
```java
@Excel(name = "专业名称", width = 15, dictTable = "bd_disciplines", dicText = "cname", dicCode = "id")   
private String disciplinesId;
```
- 注解作用：能够将名称直接对应到关联表的ID，将名称转化成ID储存进数据库
- 参数说明：
	- name：导入导出的显示在表头的字段名
	- dictTable：外键关联的表名
	- dictText：导入导出时显示的字段值
	- dictCode：在存储到数据库里的值
- 存在的问题：没办法很好地处理脏数据
	- 比如下面有两个脏数据：![[5d602013af0e7a0069e597a7f8901a7.png]]
	- 导入之后页面展示的效果是这样的：![[17b6330ecb967e9d62c023e98db5e11.png]]
	- 数据库里是这样的：
	![[94a8a96071b56f6612e52f23600229d.png]]
- 操作者是不看数据库的，只看前端的页面也不知道是哪个数据有问题，所以最好是把这两个数据设置成null，这样只要字段值是空的操作者就知道是哪里有问题了再去手动操作，方便操作者修改
> 补充说明：dept_name_upload和disciplines_name_upload是没有用到的。我和潘时煌一致认为着两个字段有点数据冗余了