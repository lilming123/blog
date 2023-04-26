---
quickshare-date: 2023-02-04 16:26:03
quickshare-url: "https://noteshare.space/note/cldpoxwng1577201pjii2ut814#BwJH5QUTLI3BF90MPPm9dj38NE4uyaRSwlfwJHN6QRY"
---
# 数据库基本操作

```sql
SHOW DATABASES					--显示所有数据库
CREATE DATABASES 数据库名		--创建数据库
USE 数据库名称					--切换默认数据库 
DROP DATABASE 数据库名			--删除数据库
```
# 数据类型
基础的数据类型忽略，只用重点看下面两个数据类型
## enum单选
```sql
enum('男','女')
```
## set多选
```sql
set('打球','下棋','音乐','游泳')
```
## 定点数
```sql
decimal(M,D)
```
- M是最大位数（精度），范围是1到65。可不指定，默认值是10。
- D是小数点右边的位数（小数位）。范围是0到30，并且不能大于M，可不指定，默认值是0。
# 新增表create

## 创建表副本

> 注意，创建的副本没有定义主键和自动增加属性，要手动添加

```sql
create table orders_archived as
select * from orders
```

- 利用where语句
```sql
create table orders_archived as
select * from orders
where order_data <'2019-01-01'
```
## 创建自定义表
```sql
create table '表名'(
	'列名1'    数据类型
	'列名2'    数据类型
	'列名3'    数据类型
	'列名4'    数据类型
)
```
## 外键的设置
- __子表的外键必须是主表的主键__
```sql
create table student_score(
	number int
	subject varchar(30)
	score tinyint 
	constraint poreign key(number) references student_info(number)
)
```

# 删除表drop
```sql
drop table 表1，表2，表3
```
- 删除不存在的表会报错，要判断一下是否存在
```sql
drop table if exists 表1，表2，表3
```
# 增加记录insert
## 表设置
| Datatype           |                                             |
| ------------------ | ------------------------------------------- |
| PK                 | 主键                                        |
| NN                 | 非空                                        |
|UQ|唯一 |
| B                  |二进制|
| UN                 | 非负数，比text更大                          |
| ZF                 | 填充，如Datatype是int(4)，内容是1，显示0001 |
| AI                 | 自动增加                                    |
| G                  | 生成列，这一列由其他列计算而得              |
| Default/Expression | 默认值                                      |
## 默认插入
```sql
insert into customers
values(
	default,
  'first_name',
  'last_name',
  'birthday',
  null,
  'address'
  'city',
  'state',
  default
)

```
<a name="ulh2s"></a>
## 指定插入，多行插入
```sql
insert into shippers(shipper_id,name)
values
	('id1','name1'),
	('id2','name2'),
	('id3','name3'),
	('id4','name4'),
	
```
<a name="vfmzO"></a>
## last_insert_id主子表连接
> 会返回上一次插入操作后的最后一个id值

```sql
insert into orders(customer_id,order_date,status)
values(1,'2019-01-02','1');
select LAST_INSERT_ID()
```

- 在子表中插入关联的id值
```sql
insert into orders(customer_id,order_date,status)
values(1,'2019-01-02','1');
insert into order_items
values
	(last_insert_id,1,1,2.95),
	(last_insert_id,2,1,2.95)
```
<a name="SfaXj"></a>

# 删除delete
<a name="KQsRW"></a>
## 基础语法
> 若不写where语句会删除所有记录

```sql
delete from invoices
where invoice_id = 1
```
<a name="ehs6d"></a>
## 在where语句中使用select语句
> 和update一样

> 括号内的select会先执行，在另一个表中筛选出client_id作为筛选条件

```sql
delete invoices
set 
	payment_totle = 1
	payment_date = '2022-10-22'
where client_id IN(
  select client_id
  from clients
  where state in('CA','NY')
)
```

# 修改update
<a name="Ij2Ps"></a>
## 基本语法
```sql
update 表名
set 键名1=键值1，
	键名2=键值2
where 键名=键值 -- 筛选条件，确定是哪一行的数据更新
```
<a name="MlwIA"></a>
## 在where语句中使用select语句
> 括号内的select会先执行，在另一个表中筛选出client_id作为筛选条件

```sql
update invoices
set 
	payment_totle = 1
	payment_date = '2022-10-22'
where client_id IN(
  select client_id
  from clients
  where state in('CA','NY')
)
```
<a name="V2ODC"></a>

# 查询select
<a name="OgySP"></a>
## 语句结构
```sql
select '要选择的列' 
from '要选择的表'
where '筛选条件'
order by '排序条件'
limit '要显示的记录数'
```
<a name="Qiz7R"></a>
## 选择列
```sql
select 
	last_name,	--不同的列用逗号隔开
	first_name,
	points,
	points+10 as 'new point' --可以做数学运算；as用来命名新的列
from customers

select DISTINCT state --筛选出的值不会重复
from customers
```
<a name="mKJSJ"></a>
## 选择记录
<a name="C8DPK"></a>
### 关系运算符
> 可比较数字和时间

```sql
select *
from customers
where brith_date > '1990-01-01'
	and point >300
```
> 若有多个值需要配对，可用in或not in

```sql
select *
from customers
where state not in ('VA','FL','GA')
```
> 若在一个范围内，可用between ... and ... 
> 可以是数字也可以是时间

```sql
select *
from customers
where point between 1000 and 3000
	and birth_date between '1990-01-01' and '2000-01-01'
```
<a name="HHvJw"></a>
### like

- 操作符
| like  ' ' | 等于引号里字符的记录 |
| --- | --- |
| % | 任意字符 |
| _ | 一个字符 |

- 例：
```sql
SELECT * FROM Persons
WHERE City LIKE '%lon%';
SELECT * FROM Persons
WHERE City NOT LIKE '%lon%'
```
<a name="QuG7X"></a>
### regexp

- 常见正则表达式
| regexp ' ' | 包含引号里字符的记录 |
| --- | --- |
| ^ | 以后面的字符开头的 |
| $ | 以后面的字符结尾 |
| &#124; | 逻辑或 |
| [abc] | a,b,c中任意一个 |
| [a-z] | a到z中选一个 |

<a name="AWNUs"></a>
### limit

- 规定要返回的记录的数目
```sql
SELECT *
FROM Persons
LIMIT 5		--最多返回五条记录
```
<a name="iDkug"></a>
### is null 和 is not null

- 可选出特定值空的记录，或非空的记录
```sql
SELECT * FROM Persons
WHERE phone IS NOT NULL
```
<a name="HAqvR"></a>
## 结合join
<a name="O8Mie"></a>
### 结合多个表
> 使用using关键字，可以代替两个相同列的名称的值相等

```sql
SELECT *
FROM Persons
	JOIN Orders
ON using(id_p)
-- 这里的on一定要写，后面的是结合的条件
```
<a name="MfRzV"></a>
### 显示所有left join
```sql
SELECT *
FROM Persons as p
LEFT JOIN Orders as o
ON using(id_p)
-- persons表中的所有列都会列出，即使匹配不到
```
<a name="Aqiv6"></a>
### 交叉结合nature join
> 即笛卡尔积，前表中的每一行都与后表的所有行配对

```sql
select *
from shippers sh
cross join products p
-- 不需要写on
```
<a name="E1Mg6"></a>
## 合并结果集union
> 1. 每个SELECT 语句必须拥有相同数量的列。
> 2. 每个列也必须拥有相似的数据类型。
> 3.  每条 SELECT 语句中的列的顺序必须相同。

- 同一个表不同列结合
```sql
SELECT E_Name FROM Employees_China
UNION -- 把两个查询的结果纵向结合
SELECT E_Name FROM Employees_USA
```

- 不同的表之间结合
```sql
select first_name
from archived_order
union 
select name
from shippers
```
## 对查询结果排序


|  |  |  |  |  |
|:-:|:-:|:-:|:-:|:-:|
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

