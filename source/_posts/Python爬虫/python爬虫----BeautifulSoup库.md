<a name="c024c16d"></a>
# 导入beautifulsoup

```
from bs4 import BeautifulSoup
```

<a name="063d6819"></a>
# beautifulsoup方法

```
soup = BeautifulSoup("<p>date</p>","html.parser")
soup = BeautifulSoup(open("D://demo.html"),"html.parser")
```

- 第一个参数是利用requests库得到的网页全代码，可以是字符串也可以是HTML文件
- 第二个参数是选择解析这段HTML代码的解释器
- 最后会得到一个能代表HTML标签树的一个实例
- 也可以理解为标签的集合

<a name="38ed9afc"></a>
# beautifulsoup库的基本元素

<a name="def47dff"></a>
## 所有的bs4库的解析器

- lxml的HTML解析器<br />条件：pip install lmxl<br />使用方法：BeautifulSoup(mk,"lmxl")
- lmxl的XML解析器<br />条件：pip install lxml<br />使用方法：BeautifulSoup(mk,"xml")
- html5lib的解析器<br />条件：pip install html5lib<br />使用条件：BeautifulSoup(mk,"html5lib")

<a name="61a7d4f4"></a>
## 标签的有关元素

- Tag标签，最基本的信息组织元素，用<>和</>表明开头和结尾


- Name标签的名称，如...的名称就是head

```
soup.a.name #a
soup.a.parent.name #div
```

- Attributes标签的属性，字典类型

```
soup.a.attrs 
# {'class': ['navbar-brand'], 'href': 'http://www.daidaitiantian.top/'}
```

- NavigableString<>...</>中间的字符串

```
soup.a.string
#呆呆和甜甜
```

- Comment注释类型


<a name="a4a23c11"></a>
# 遍历HTML的方法

<a name="533ecbae"></a>
## 标签数的遍历方式

![](http://note.youdao.com/yws/res/648/WEBRESOURCE8a9147bbf0b0ce3a208671adaf22bbbd#crop=0&crop=0&crop=1&crop=1&id=Wiso8&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

<a name="dbfbb788"></a>
## 下行遍历

- contents子节点的列表，将所有子节点存入列表
- children子节点的迭代类型，与contents类似用于遍历子节点
- descendants子孙节点的迭代类型，用于循环遍历

<a name="ede05cbe"></a>
## 上行遍历

- parent节点的父标签
- parents节点先辈标签的迭代类型，用于遍历

<a name="b57148a0"></a>
## 平行遍历

- next_sibling下一个平行节点的标签
- previous_sibling上一平行节点的标签
- next_sblings后续所有平行节点的迭代类型
- previous_sblinga前面所有平行节点的迭代类型<br />不是同一父节点下的标签不是平行关系<br />有可能返回的是NavigableString属性，后面会介绍排除的方法

<a name="ff1aba7d"></a>
# HTML格式输出和编码

- prettify()能够格式化输出Html内容

```
soup = beautifulsoup("<p>呆呆和甜甜</p>"，"html.parser")
print(soup.p.prettify)
# <p>
#   呆呆和甜甜
# </p>
```
<a name="f359139e"></a>
# <>.find_all()

- 返回的是一个列表

<a name="3d0a2df9"></a>
## 参数

<a name="9ee23a89"></a>
### name需要检索的标签名字符串

- 如果是True则打印所有标签
- 要打印多个标签可使用列表

<a name="19e3b452"></a>
### attrs标签属性检索字符串

- 也可以对一个特定的属性值进行检索<br />要加下划线，如：class_

```
soup.find_all(id_ = "link")
# 搜索出属性包含id= link的标签
```

<a name="ad73f43f"></a>
### recursive 是否对子孙全部检索，默认是True

<a name="e3c2dd0a"></a>
### srting对<>...</>中间的内容进行检索

<a name="d8771b35"></a>
## find——all的简写形式

- () ==.find_all()
- soup() == soup.find_all()
