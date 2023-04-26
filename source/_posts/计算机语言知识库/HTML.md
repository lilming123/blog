
![](https://cdn.nlark.com/yuque/0/2022/jpeg/28499732/1662089020914-f6b495a3-b70e-4644-ac41-654313569dd0.jpeg)
<a name="HFtsm"></a>
# 元素
 
## 根元素
> **<!DOCTYPE html> 是一个声明，表示该文档是由 HTML5 进行编写的。**
> **<!DOCTYPE> 声明必须是 HTML 文档的第一行，位于 < html> 标签之前**

| 主根元素 | html | html 元素用于告诉告诉浏览器其自身是一个 HTML 文档 |
| --- | --- | --- |
| 分区根元素 | body |表明这是文档的主体部分|

```html
<!doctype html>
<html lang="en">
  <head>
    这是文档的头部
  </head>
  <body>
    这是文档的主体
  </body>
</html>
```
<a name="e3ce87db"></a>
## 元数据
<a name="TWAh9"></a>
### head标签
> **< head> 标签用于定义文档的头部，它是所有头部元素的容器**

<a name="cFRIO"></a>
### title标签
> **< title> 标签用于定义文档的标题。**

- < title> 标签必须位于 < head>标签内部。
- 会在浏览器的窗口或选项卡的顶部显示
```html
<title>显示在浏览器的标题栏上</title>
```

<a name="Wujh1"></a>
### meta标记
> **< meta> 标签用于描述页面内容，关键词，作者，最新修订时间以及其它元信息。**

下面介绍meta元素的功能：

1. 编码和自适应

```html
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1">
```

2. 网站描述

```html
<meta name="keywords" content="（关键字）">
<meta name="descript" content="（描述）">
<meta name="author" content="（作者）">
<meta name="generator" content="（制作所用的软件）">
<meta name="copyright" content="（版权所有）">
<meta name="revisit-after" content="7 days" >//设置搜索引擎的抓取频率
<meta name="robots" content="none">
1、none : 搜索引擎将忽略此网页，等价于noindex，nofollow。
2、noindex : 搜索引擎不索引此网页。
3、nofollow: 搜索引擎不继续通过此网页的链接索引搜索其它的网页。
4、all : 搜索引擎将索引此网页与继续通过此网页的链接索引，等价于index，follow。
5、index : 搜索引擎索引此网页。
6、follow : 搜索引擎继续通过此网页的链接索引搜索其它的网页。
```

3. 向浏览器头部(响应头)返回信息

```html
<meta http-equiv="refresh" content="30">//每30秒刷新一次
<meta http-equiv="Pragma"content="no-cache"> //禁止从缓存中读取HTML
//两秒刷新并且指向新页面
<meta http-equiv="refresh" content="2";URL="http://www.haorooms.com">[//两秒刷新并且指向新页面
<meta http-equiv="expires" content="（GMT时间格式）">//设置到期时间
<meta http-equiv="content-Type" content="text/html;charset=gb2312"> 
<meta http-equiv="charset" content="iso-8859-1">
```
<a name="fnyhk"></a>
### base标签
> **< base>为相对链接设置基本URL**
> **< base>指定用户如何打开链接，以及表单提交后浏览器的状态**

属性：

1. herf		为文档的相对URL指定基本URL
```html
<head>
   <base  href="//www.w3cschool.cn/listings/"/>
</head>
<body>
   <a href="/javascript.html">JavaScript</a>
</body>
```

2. target		指示浏览器如何打开网址
| 属性值    | 描述                                          |
| --------- | --------------------------------------------- |
|           |                                               |
| \_blank    | 在新窗口打开链接                              |
| \_self    | 在同一窗口或框架打开链接（默认），即当前的div |
| \_parent   | 在父框架打开链接，即上一层框架                |
| \_top      | 在整个窗口打开链接                            |
| framename | 在一指定框架打开链接，即在指定div             |

<a name="dWD6I"></a>
## div和语义化布局
在HTML5出世之前，人们实现网页布局都是利用div，而HTML5新的语义化元素也能实现网页布局，而且更凸显语义化<br />在经典的页面布局中，页面被分为 header、main、aside、footer 四个部分:![](https://cdn.nlark.com/yuque/0/2022/jpeg/28499732/1662092868310-ef59cd51-a19c-4865-a31c-250695024632.jpeg)
### div
> **\<div> 标签定义 HTML 文档中的一个分隔区块或者一个区域部分。**
div通常和css一起使用

### 页眉header
> **\<header> 标签用于定义文档的页眉（介绍信息）**

### 导航nav
> **\<nav> 标签用于定义页面主导航功能。**

<a name="Lv1ms"></a>
### 主体main
> **\<main> 标签用于定义文档**[**\<body>**](https://man.ilovefishc.com/pageHTML5/body.html)**或应用的主体部分。**

<a name="TJFWp"></a>
### 节section
> **\<section> 标签用于定义定义文档中的节。**


<a name="dDkzH"></a>
### 文章article
> **\<article> 标签用于定义一篇文章，是网页中独立的内容，与页面其它部分无关。**

<a name="vyxWh"></a>
### 详情details
> **\<details> 标签用于定义用户可见的或者隐藏的需求的补充细节。**

| **属性** | **值** | **描述** |
| --- | --- | --- |
| open | open | 规定 details 是否默认可见。 |

<a name="DBBFL"></a>
### 总结summary
> **\<summary> 标签定义 **[**\<details>**](https://man.ilovefishc.com/pageHTML5/detail.html)** 元素的标题**

```html
<details>
    <summary>《零基础入门学习Python》</summary>
    <p>配有同名书籍。</p>
    <p>配有视频教程</p>
</details>

```
<a name="HaRxr"></a>
### 插图figure
> **\<figure> 标签规定独立的流内容（图像、图表、照片、代码等等）。**

figure 元素代表一段独立的内容, 经常与说明 [figcaption](https://man.ilovefishc.com/pageHTML5/figcaption.html) 元素配合使用, 并且作为一个独立的引用单元。
> **\<figcaption> 标签为 figure 元素定义标题。**

```html
 <figure>
  	<img src="../img/logo.png"  alt="鱼C-Logo" />
    <figcaption>鱼C工作室，让自学编程变得妙不可言｡◕‿◕｡</figcaption>
</figure>
```
<a name="K1cYQ"></a>
### aside
> **\<aside> 标签定义侧边栏，通常是网页的说明、提示、引用、附加注释、相关链接、广告等内容。**

<a name="Wsw5i"></a>
### 页脚footer
> **\<footer> 标签定义文档或节的页脚**


## 文字内容
<a name="QZF96"></a>
### 超链接a
> **\<a> 标签用于定义超链接，超链接可以让用户从一个网页跳转到另一个网页。**

基础语法：
```html
<a href="文件路径" name="anchor名称" title="提示信息" target="打开方式">超链接</a>
```
特殊用法：

1. FTP站点访问链接
```html
<a herf="ftp://服务器IP地址或域名">超链接文字</a>
```

2. 电子邮件超链接
```html
<a href="mailto:E-mali邮箱地址？subject=邮件主题">
```

3. 定义书签
```html
<a  name="书签名">书签标题</a>

```

4. 跳转至书签
```html
<a href="#书签名">书签标题</a>同页跳转 
<a href="URL#书签名">书签标题</a>异页跳转
```
<a name="Ux6mJ"></a>
### 标题h1
> **\<h1> - \<h6> 标签可定义标题。**


```html
<h1>一号标题</h1>
<h2>二号标题</h2>
<h3>三号标题</h3>
```

- align属性:  left | center | right | justfiy
<a name="pZDqS"></a>
### 粗体b
> **\<b> 标签用于定义表示粗体的文本。**

根据 HTML5 的规范，如果你只是想实现加粗效果，推荐使用 css 样式来实现：.bolder {font-weight: bolder;}
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>用css代替加粗</title>
    <style>
    .bolder{
      font-weight:bolder;
    }
    </style>
</head>
<body>
    <p class="bloder">这是粗体文本</p>
</body>
</html>
```
<a name="kAhDq"></a>
### 斜体i
> **\<i> 标签用于定义表示斜体的文本。**

同样推荐使用 css 样式来实现：.italic{font-style: italic;}
<a name="Uv1uj"></a>
### 空格、回车、分割线和特殊字符

- 空格和特殊字符

```html
&nbsp;	( )
&lt;   	(<)
&gt; 		(>)
&amp;   (&)
&quot;  (")
&times; (×)
&divide;(÷)
&cope;  (©)版权
&reg;   (®)注册商标
&trade;	(™)商标
```

- 回车和分割线

```html
<br>或者<br/>
<hr width="(百分比或者像素px)" size="像素px" color="" align="left|center|right">
```
<a name="BKyav"></a>
### 段落p
> **\<p> 标签用于定义一个段落。**

```html
<p align=""></p>
```

<a name="HyrXI"></a>
### 整体缩进blockquote
> **\<blockquote> 标签定义块引用。**


```html
<blockquote>缩进5个字符位置</blockquote>
<blockquote><blockquote>缩进10个字符位置</blockquote></blockquote>
```

<a name="hJjuJ"></a>
### 预格式化pre
> **\<pre> 标签用于定义预格式化的文本。**

pre 元素中的文本通常会保留空格和换行符，而文本自身也会呈现为等宽字体。
```html
<pre>
          春 晓
春眠不觉晓⑴，处处闻啼鸟⑵。
夜来风雨声⑶，花落知多少⑷。
</pre>
```

<a name="Q9EmI"></a>
## 图片和多媒体
<a name="YxCUZ"></a>
### 图像img
> **<img> 标签用于向网页中嵌入一幅图像。**

```html
<img src="URL" alt="替代文本">
```
完整属性：

| 属性 | 值 | 说明 | 属性 | 值 | 说明 |
| --- | --- | --- | --- | --- | --- |
| alt | text | <br />- 鼠标悬停在图片上时出现的文字<br />- 加载失败时会代替图片<br /> | align | top&#124;middle&#124;bottom&#124;<br/>left&#124;center&#124;right | 排列方式 |
| src | URL | 图片的链接 | boder | pixels | 边框 |
| name | text | 名称 | hspace | pixels | 左侧和右侧的空白 |
| height | pixels | 高 | vspace | pixels | 顶部和底部的空白 |
| width | pixels | 宽 | usemap | URL | 将图像定义为客户器端图像映射 |


### map与area

- 为图像设置超链接
```html
<a herf="URL" target="打开方式"><img src="URL"></a>
```

- 为图像设置热区链接
```html
<img src="URL" usemap="#+映射图像名称">
<map  name="映射图像名称">
  <area  shap="热区形状" coords="热区坐标" href="URL">
  <area  shap="热区形状" coords="热区坐标" href="URL">
  ...
</map>
```
注意事项：img的usemap的属性值要"#+映射图像名称"

| shape值 | coords值 | 说明 |
| --- | --- | --- |
| rect（矩形） | x1,y1,x2,y2 | 矩形的四个坐标 |
| circle（圆形） | center-x,center-y,radius | 圆心坐标和半径 |
| poly（多边形） | x1,y1,x2,y2,x3,y3... | 各顶点坐标 |


### picture与source

> **< picture> 标签为其内部特定的 img 元素提供多样的 [source](https://man.ilovefishc.com/pageHTML5/source.html) 元素**
> **<source> 标签为 picture , audio 或者 video 元素指定多个媒体资源。**





| **属性** | **值** | **描述** |
| --- | --- | --- |
| src | url | 规定媒体文件的 URL。 |
| srcset | url | 仅当source元素是picture元素的直接子元素时，srcset属性才有效。 |
| [media](https://man.ilovefishc.com/pageHTML5/media.html) | media query | 规定媒体资源的类型。 |
| sizes |  | 表示源大小的列表，用于描述源代表的图像的最终渲染宽度。 |
| type | numeric value | 规定媒体资源的 MIME 类型。 |

```html
<picture>
  <source media="(min-width:1024px)" srcset="big.jpg">
  <source media="(min-width:512px)" srcset="normal.jpg">
  <img src="small.jpg" alt="图片" sytle="width:auto">
</picture>
```
代码效果讲解：

1. 当屏幕大于1024时，显示big.jpg
2. 当屏幕大于512小于1024时，显示normal.jpg
3. 当屏幕小于512时，显示small.jpg
<a name="vYXRh"></a>
### 任何插件embed
> **< embed> 标签定义嵌入的内容，比如插件。**

```html
<embed src="URL" width="" higth="" autostart="true|false(是否自动播放)" loop
  ="true|false(是否循环)">
```
| **属性** | **值** | **说明** |
| --- | --- | --- |
| height | pixels | 规定嵌入内容的高度。 |
| src | URL 规定被嵌入内容的 URL。 |  |
| type | MIME_type | 规定嵌入内容的 MIME 类型。注：MIME = Multipurpose Internet Mail Extensions。 |
| width | pixels | 规定嵌入内容的宽度。 |


### 视频video
> **< video> 标签定义视频，比如电影片段或其他视频流。**

目前，< video> 元素支持三种视频格式：MP4、WebM、Ogg。
```html
<!--显示控件--!>
<video width="640" height="360" controls>
		<source src="http://fishc.oss-cn-hangzhou.aliyuncs.com/Web/video_tag.mp4"  type="video/mp4">
</video>
```
| **属性** | **值** | **说明** |
| --- | --- | --- |
| autoplay | autoplay | 如果指定该属性，则视频在就绪后将自动播放。 |
| controls | controls | 如果指定该属性，则向用户显示控件，比如播放/暂停按钮。 |
| width | pixels | 指定视频播放器的宽度。 |
| height | pixels | 指定视频播放器的高度。 |
| loop | loop | 如果指定该属性，将循环播放视频。 |
| muted | muted | 如果指定该属性，则将视频的音频输出为静音。 |
| poster | URL | 指定视频的封面 |
| preload | auto、metadata、none | 指定视频在页面加载时，是否进行预加载。注意：如果同时指定了 autoplay 属性，则忽略该属性。<br />auto（默认）：要求浏览器尽快加载整个视频<br />metadata：只加载视频的元数据（宽度、高度、第一帧影像和视频总长度等）<br />none：在用户点击开始播放之前不会加载视频，若不设定poster视频的黑的 |
| src | URL | 指定要播放的视频文件的 URL 地址。 |

注意事项：

1. 使用video标签时controls属性或antoplay属性二选一，否则视频无法播放
2. controls与antoplay同时使用时，chrome浏览器不会自动播放，要添加muted属性（静音）才能自动播放 
<a name="hWx0q"></a>
### 音频audio
> **\<audio> 标签定义声音，比如音乐或其他音频流。**

目前，\<audio> 标签定义声音，支持的3种文件格式：MP3、Wav、Ogg
```html
<audio controls loop>
	<source src="http://fishc.oss-cnhangzhou.aliyuncs.com/Web/audio_tag.mp3" >
</audio>
```
| **属性** | **值** | **说明** |
| --- | --- | --- |
| autoplay | autoplay | 如果指定该属性，则音频在就绪后马上播放。 |
| controls | controls | 如果指定该属性，则向用户显示播放控件（比如播放/暂停按钮）。 |
| loop | loop | 如果指定该属性，将循环播放音频。 |
| muted | muted | 如果指定该属性，则音频输出为静音。 |
| preload | auto、metadata、none | 指定音频在页面加载时，是否进行预加载。注意：如果同时指定了 autoplay 属性，则忽略该属性。<br />auto：要求浏览器尽快加载整个音频，默认行为<br />metadata：只加载音频的元数据<br />none：在用户点击开始播放之前不会加载音频 |
| src | URL | 指定要播放的音频文件的 URL 地址。 |

<a name="g5RWU"></a>
## 内嵌内容
<a name="sW8YR"></a>
### iframe
> **\<iframe> 标签会创建包含另外一个文档的内联框架（即行内框架）。**

```html
<body>
		<iframe src="javascript.html" class="iframe" frameborder="0"></iframe>
</body>
```
| **属性** | **值** | **描述** |
| --- | --- | --- |
| height | pixels、% | 指定 iframe 的高度。 |
| name | text | 指定 iframe 的名称。 |
| sandbox | allow-forms、allow-pointer-lock、allow-popups、allow-same-origin、allow-scripts、allow-top-navigation | 启用一系列对 < iframe>中内容的额外限制。 |
| seamless | seamless | 指示浏览器将 iframe 的内容显示得像主 HTML 文档的一个整体组成部分。 |
| src | URL | 指定在 iframe 中显示的文档的 URL 地址。 |
| srcdoc | HTML_code | 指定在 < iframe> 中显示的页面的 HTML 内容。 |
| width | pixels、% | 指定 iframe 的宽度。 |


#### sandbox沙盒属性
> **限制了嵌入网页的内容和操作**

| sandbox的值 | 描述 |
| --- | --- |
| allow-forms | 允许提交表单 |
| allow-pointer-lock | 允许执行脚本 |
| allow-popups | 允许同域请求 |
| allow-same-origin | 允许iframe能主导window .top进行页面跳转 |
| allow-scripts | 允许iframe中弹出新窗口 |
| allow-top-navigation | 允许在iframe中锁定鼠标 |

 
### object
> **< object> 标签定义一个嵌入的对象。**

```html
<object width="666" height="375" data="video_tag.mp4" >
</object>
```
| **属性** | **值** | **说明** |
| --- | --- | --- |
| form | form_id | 规定对象所属的一个或多个表单。 |
| height | pixels | 规定对象的高度。 |
| width | pixels | 规定对象的宽度。 |
| name | name | 为对象规定名称。 |
| type | MIME_type | 规定 data 属性中规定的数据的 MIME 类型。 |
| usemap | mapname | 规定与对象一同使用的客户端图像映射的名称。 |

 
## 脚本
> **这一部分可以先草草了解一下，详见javascript教程**

[Javascript](./Javascript.md)
<a name="m34IF"></a>
### canvas
> **< canvas> 标签定义图形，比如图表和其他图像。**

| **属性** | **值** | **描述** |
| --- | --- | --- |
| height | pixels | 设置 canvas 的高度。 |
| width | pixels | 设置 canvas 的宽度。 |

<a name="NuSUB"></a>
### script
> **< script> 标签用于在 HTML 文档中加入脚本（例如 JavaScript）**

```html
<script>
    document.write("lilming");
</script>
```
| **属性** | **值** | **描述** |
| --- | --- | --- |
| type | media_type | 指定所定义或引用的脚本类型（如果使用 JavaScript 脚本，这个属性可以忽略）。 |
| async | async | 告诉浏览器异步执行脚本。<br />注意：该属性只能用于引用外部脚本文件，对内嵌脚本不起作用。 |
| charset | charset | 指定外部脚本文件中使用的字符编码。<br />注意：该属性只能与 src 属性一起使用。 |
| defer | defer | 告诉浏览器延迟执行脚本（直到页面载入并解析完毕后再执行脚本）。<br />注意：该属性只能用于引用外部脚本文件，对内嵌脚本不起作用。 |
| src | URL | 指定外部脚本文件的 URL。 |

<a name="DdbGP"></a>
## 列表

<a name="wCnzZ"></a>
### 无序列表ul
> **< ul> 标签用于定义无序列表。**

type的属性值：

- disc      实心圆
- circle    空心圆
- square    实心正方形

```html
<ul type="">
  <li type=""></li>
  <li type=""></li>
</ul>
```
无序列表更常用，可以用css设置序号样式，而有序列表的序号是固定的。
<a name="QNqSJ"></a>
### 有序列表ol
> **< ol> 标签用于定义有序列表。**


```html
<ol type="1|A|a|i|I" start="数值（初始数字）" >
  <li type=""></li>
  <li type=""></li>
</ol>
```

<a name="kk3wt"></a>
### 定义列表dl
> **< dl> 标签定义了一个包含术语定义以及描述的列表。**

```html
<dl>
  <dt>项目一</dt>
    <dd>描述一<dd>
    <dd>描述二</dd>
  <dt>项目二</dt>
    <dd>描述一</dd>
    <dd>描述二</dd>
<dl>
```
<a name="fTbxI"></a>
## 表格
<a name="Aj8si"></a>
### 基本结构

- 宏观结构
> **< table> 标签用于定义 HTML 表格**
> **< thead> 标签定义表格的表头**
> **< tbody> 标签用于组合 HTML 表格的主体内容**
> **< tfoot> 标签定义表格的页脚（脚注或表注）**

- 微观结构
> **< tr> 标签用于定义 HTML 表格中的行。**
> **< th> 标签用于定义表格内的表头单元格。**
> **< td> 标签用于定义 HTML 表格中的标准单元格。**

```html
<table>
  <thead>
    <tr>
      <th>姓名</th>
      <th>班级</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>王小明</td>
      <td>会计3班</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">学生信息</td>
    </tr>
  </tfoot>
</table>
```
<a name="SgfKs"></a>
### 表格样式：table属性
| 属性             | 值                                                                                | 描述                   |
| ---------------- | --------------------------------------------------------------------------------- | ---------------------- |
| align            | left&#124;right&#124;center                                                       | 内容对齐               |
| bgcolor          |                                                                                   | 背景颜色               |
| border           | pixels                                                                            | 边框宽度               |
| cellpadding      | pixels                                                                            | 边缘与内容之间的空白   |
| cellspacing      | pixels                                                                            | 单元格之间的空白       |
| frame            | above&#124;below&#124;hsides&#124;<br/>vsides&#124;lhs&#124;border&#124;void | 规定外边框哪个部分可见 |
| rules            | none&#124all&#124rows&#124cols&#124groups                                         | 规定内边框哪个是可见的 |
| height           | pixels                                                                            | 表格高度               |
| width            | pixels                                                                            | 表格宽度               |
| bordercolor      | rgb                                                                               | 边框颜色               |
| bordercolorlight | rgb                                                                               | 设置亮边框（左上）     |
| bordercolordark  | rgb                                                                               | 设置暗边框（右下）     |
<a name="T0FdN"></a>
#### 表格边框属性
| 属性 | 值 | 描述 |
| --- | --- | --- |
| border | pixels | 宽度 |
| bordercolor | rgb | 边框颜色 |
| bordercolorlight | rgb | 设置亮边框（左上） |
| bordercolordark | rgb | 设置暗边框（右下） |

<a name="VVJw4"></a>
#### 表格样式：frame和rules
| fram属性值 | 规定外边框哪个部分可见 | rules属性值 | 规定内边框哪个是可见的 |
| --- | --- | --- | --- |
| above | 上 | none | 无 |
| below | 下 | all | 所有 |
| hsides | 上下 | rows | 行边框 |
| vsides | 左右 | cols | 列边框 |
| lhs | 左 | groups | 介于行列间边框 |
| rhs | 右 |  |  |
| border | 上下左右 |  |  |
| void | 无 |  |  |

<a name="DXSD6"></a>
### 行样式：tr属性
| 属性 | 值 | 描述 | 属性 | 值 | 描述 |
| --- | --- | --- | --- | --- | --- |
| align | left&#124;right&#124;center | 水平对齐 | bordercolorlight | rgb | 设置亮边框（左上） |
| valign | top&#124;bottom&#124;middle | 垂直对齐 | bordercolordark | rgb | 设置暗边框（右下） |
| bgcolor |  |  | bordercolor | rgb | 边框颜色 |

<a name="NlVbS"></a>
### 单元格样式：td属性
| 属性 | 值 | 描述 | 属性 | 值 | 描述 |
| --- | --- | --- | --- | --- | --- |
| align | left&#124;right&#124;center | 水平对齐 | bordercolorlight |  |  |
| valign | top&#124;bottom&#124;middle | 垂直对齐 | bordercolordark |  |  |
| bgcolor |  | 背景颜色 | rowspan | int | 单元格跨行 |
| background |  | 背景图案 | colspan | int | 单元格跨列 |
| bordercolor |  | 边框颜色 | width |  |  |
|  |  |  | heith |  |  |

<a name="wZE5i"></a>
## 表单
<a name="dBe2M"></a>
### 表单：form
> **< form> 标签用于为用户输入创建 HTML 表单，用于向服务器传输数据**

```html
<form action="demo/welcome.php" method="post">
</form>
```
| **属性** | **值** | **描述** |
| --- | --- | --- |
| action | URL | 规定当提交表单时向何处发送表单数据。 |
| method | get、post（更常用） | 规定用于发送 form-data 的 HTTP 方法。 |
| autocomplete | on（默认）、off | 规定是否启用表单的自动填充功能。 |
| target | \_blank、\_self、\_parent、\_top、framename | 规定在何处打开 action URL。 |
| name | form_name | 规定表单的名称。 |
| accept-charset | charset_list | 规定服务器可处理的表单数据字符集。 |
| enctype | application/x-www-form-urlencoded、multipart/form-data、text/plain | 规定在发送表单数据之前如何对其进行编码：<br />- application/x-www-form-urlencoded在发送前编码所有字符（默认）（空格被编码为“+”，特殊字符被编码为ASCII十六进制字符）<br />- multipart/form-data 不对字符编码。在使用包含文件上传控件的表单时，必须使用该值<br />- text/plain 空格转换为 “+” 加号，但不对特殊字符编码<br /> |
| novalidate | novalidate | 如果使用该属性，则提交表单时不进行验证。 |

> get和post的区别：
> 1. GET 和 POST 是HTTP 协议中的两种发送请求的方法，底层都是 TCP/IP，理论上get也可以将数据放在request body中，post也可以将数据放在url中，但不同的浏览器和服务器的处理不太一样
> 2. GET 产生一个 TCP 数据包；POST 产生两个 TCP 数据包，具体表现为：
> 
对于 GET 方式的请求，浏览器会把 http header 和 data 一并发送出去，服务器响应 200（返回数据）
> 而对于 POST，浏览器先发送 header，服务器响应 100（continue），浏览器再发送 data，服务器响应 200（返回数据）

<a name="MLOxb"></a>
### 输入框：input
> **< input> 标签用于搜集用户信息。**

```html
<form action="demo/welcome.php" method="post">
  名字：<input type="text" name="name"><br><br>
  邮箱：<input type="text" name="email"><br><br>
  <button type="submit">提交</button>
</form>
```
input元素中的type与name属性是必填的，才能让服务器知道传输的数据是什么类型，该怎么称呼这一数据

| **属性** | **值** | **描述** |
| --- | --- | --- |
| type | button、checkbox、color、date、datetime-local、email、file、hidden、image、month、number、password、radio、range、reset、search、submit、tel、text、time、url、week | 规定 input 元素的类型 |
| name | field_name | 指定元素的名称，用于在 JavaScript 中引用元素，或者在表单提交后引用表单数据，只有设置了 name 属性的表单才能在提交表单时传递该值 |
| autocomplete | on、off | 指定是否自动填充 |
| autofocus | 无 | 指定是否将光标自动移动到指定处 |
| value | text | 指定输入字段的初始值 |
| disabled | 无 | 指定是否禁用该 input 元素，通常已经有value属性 |
| readonly | 无 | 将文本框设为只读模式，防止用户编辑其内容，通常已经有value属性<br />与disabled的区别在于readonly依然会将值提交至服务器；而disabled不会 |
| accept | mime_type | 指定提交的文件类型（多个类型之间使用英文的逗号隔开，文件类型的几种表述方式请参考 -> [传送门）](https://fishc.com.cn/thread-128222-1-1.html) |
| alt | text | 指定图像的说明文字 |
| checked | checked | 指定该属性的复选框，默认显示为勾选状态 |
| form | formname | 指定其所属的一个或多个表单 id 值（在 HTML5 中，表单允许你将 input 放在文档中的任意位置，当你这么做的时候，可以通过指定该属性来确定元素所关联的表单） |
| formaction | URL | 指定表单提交的位置（只能作用于具有提交性质的按钮，比如 type="submit" 或 type="image"） |
| formenctype | application/x-www-form-urlencoded、multipart/form-data、text/plain | 指定表单提交的编码方式（只能作用于具有提交性质的按钮，比如 type="submit" 或 type="image"） |
| formmethod | get、post | 指定表单提交的方法（只能作用于具有提交性质的按钮，比如 type="submit" 或 type="image"） |
| formnovalidate | formnovalidate | 指定是否重置 form 元素的 novalidate 属性，如果重置，那么当表单提交时 input 元素将不再进行任何验证（只能作用于具有提交性质的按钮，比如 type="submit" 或 type="image"） |
| formtarget | \_blank、\_self、\_parent、\_top、framename | 指定表单提交后在何处打开 action URL（只能作用于具有提交性质的按钮，比如 type="submit" 或 type="image"） |
| height | pixels、% | 指定图像的高度（像素） |
| list | datalist-id | 指定一个数据列表，即 datalist 元素的 id 值 |
| max | number、date | 指定可接受的最大值，以便进行输入验证 |
| maxlength | number | 指定用户可以在文本框输入的最大字符数 |
| min | number、date | 指定可接受的最小值，以便进行输入验证 |
| multiple | multiple | 指定该属性后可以上传多个文件 |
| pattern | regexp_pattern | 指定一个用于输入验证的正则表达式 |
| placeholder | text | 指定一个占位提示文本 |
| required | required | 表明用户必须输入一个值，否则无法通过输入验证 |
| size | number_of_char | 指定文本框的宽度 |
| src | URL | 指定要显示的图像的 URL |
| step | number | 指定上下调节数值的步长 |
| width | pixels、% | 指定图像的宽度（像素） |

<a name="ZocKe"></a>
### 按钮：button
> **\<button> 标签用于定义一个按钮。**

```html
<form action="demo/welcome.php" method="post">
    名字：<input type="text" name="name"><br><br>
    邮箱：<input type="text" name="email"><br><br>
    <button type="submit">提交</button>
</form>
```
| **属性** | **值** | **描述** |
| --- | --- | --- |
| autofocus | autofocus | 指定当页面加载的时候，按钮将获得焦点。 |
| disabled | disabled | 禁用按钮。 |
| form | form_id | 指定按钮所关联的表单 ID。 |
| formaction | url | 覆盖 form 元素的 action 属性<br />注释：该属性与 type="submit" 配合使用。 |
| formenctype | application/x-www-form-urlencoded、multipart/form-data、text/plain | 覆盖 form 元素的 enctype 属性<br />注释：该属性与 type="submit" 配合使用。 |
| formmethod | get、post | 覆盖 form 元素的 method 属性<br />注释：该属性与 type="submit" 配合使用。 |
| formnovalidate | formnovalidate | 覆盖 form 元素的 novalidate 属性<br />注释：该属性与 type="submit" 配合使用。 |
| formtarget | \_blank、\_self、\_parent、\_top、framename | 覆盖 form 元素的 target 属性<br />注释：该属性与 type="submit" 配合使用。 |
| name | button_name | 指定按钮的名称 |
| type | button（脚本运行按钮）、reset（清空）、submit（提交数据到服务器） | 指定按钮的类型 |
| value | text | 指定按钮的初始值<br />注释：可由脚本进行修改。 |

> **若input标签的type属性的值为submit，则实现的是按钮效果，与button类似**

```html
<form action="demo/welcome.php" method="post">
    名字：<input type="text" name="name"><br><br>
    邮箱：<input type="text" name="email"><br><br>
    <input type="submit" value="提交">
</form>
```
<a name="WeC2D"></a>
### 标签：label
> **\<label> 标签为 input 元素定义标注（标记）。**

```html
  <form>
    <label for="male">Male</label>
    <input type="radio" name="sex" id="male"><br/>
    <label for="female">Female</label>
    <input type="radio" name="sex" id="female">
</form>
```
| **属性** | **值** | **描述** |
| --- | --- | --- |
| for | 与所属的input的id值对应，如：<br /><label for="XXX"></label><br />\<input id ="XXX"/> | 指定 label 将绑定另一个表单元素的 ID 属性值 |
| form | formid | 指定 label 所属的表单 ID |

> 将input置于label元素的里面也可以实现label与input的一一对应哦

<a name="XMQVB"></a>
### 表单分类：fieldset与legend元素
> **\<fieldset> 标签将表单内容的一部分打包，生成一组相关表单的字段。**
> **\<legend> 标签用于为 fieldset 元素定义说明文字。**

```html
<form>
  	<fieldset>
      	<legend>学生一</legend>
            <label for="name1">姓名：</label><input id="name1" type="text" />
            <label for="class1">班级：</label><input id ="class1" type="text" />
    </fieldset>
    <fieldset>
      	<legend>学生二</legend>
            <label for="name2">姓名：</label><input id="name2" type="text" />
            <label for="class2">班级：</label><input id ="class2" type="text" />
    </fieldset>
</form>
```
<a name="ngNSA"></a>
### 可选框：select、option与optgroup
> **\<select> 标签用于创建单选或多选菜单。**
> **\<option> 标签用于定义下拉列表中的一个选项。**
> **\<optgroup> 标签用于为下拉列表的选项进行分组。**

select与input类似，type与name也必填的；若存在对应的label元素，还要加上id属性
```html
<form>
  	<fieldset>
      	<legend>学生一</legend>
            <label for="name1">姓名：</label><input id="name1" name="name" type="text" />
            <label for="class1">班级：</label>
            <select name="class" id="class1">
                <option>计算机一班</option>
              	<option>计算机二班</option>
             	 	<option>计算机三班</option>
              	<option>计算机四班</option>
            </select>
    </fieldset>
    <fieldset>
      	<legend>学生二</legend>
            <label for="name2">姓名：</label><input id="name2" name="name" type="text" />
            <label for="class2">班级：</label>
            <select name="class" id="class2">
                <option>计算机一班</option>
              	<option>计算机二班</option>
             	 	<option>计算机三班</option>
              	<option>计算机四班</option>
            </select>
    </fieldset>
</form>
```
| **select属性** | **值** | **描述** |
| --- | --- | --- |
| autofocus | 无 | 指定在页面加载后文本区域自动获得焦点 |
| name | name | 指定该下拉列表的名称 |
| disabled | 无 | 指定该下拉列表被禁用 |
| form | form_id | 指定所属表单 |
| multiple | 无 | 指定该下拉列表支持多个选项 |
| required | 无 | 指定文本区域是必填的 |
| size | number | 指定下拉列表中可见选项的数目 |

| **option属性** | **值** | **描述** |
| --- | --- | --- |
| disabled | disabled | 指定该选项被禁用 |
| label | text | 指定该选项在列表中所显示的标签 |
| selected | selected | 指定该选项表现为选中状态 |
| value | text | 指定发送到服务器的值<br />如标签显示“计算机一班”；发送到服务器处理的值是"211461" |

> 若选项多，且可分组，则可以利用\<optgroup>属性对option元素进行分类

```html
<select>
        <optgroup label="计算机学院">
            <option value="211461">一班</option>
            <option value="211462">二班</option>
        </optgroup>
        <optgroup label="通信学院">
            <option value="211451">一班</option>
            <option value="211452">二班</option>
        </optgroup>
</select>
```
| **optgroup属性** | **值** | **描述** |
| --- | --- | --- |
| disabled | disabled | 指定该选项被禁用 |
| label | text | 指定该分组的标签 |

<a name="r4r7j"></a>
### 单选框：type属性radio
> **若要设置单选框，则设置input元素的type属性值为radio**

```html
<form>
	<label>
		<input type="radio" name="sex" value="male">男
	</label><br/>
	<label>
		<input type="radio" name="sex2" value="male">女
	</label>
</form>
```

- 若要几个当中选一个，那么所有name属性都要一致
- 若name属性不一致，则可复选
<a name="plv5S"></a>
### 多选框：type属性checkbox
> **若要设置多选下拉框，则可设置input元素type属性为checkbox**

```html
<form>
    <input type="checkbox" name="fruit" value="watermelon">西瓜<br>
    <input type="checkbox" name="fruit" value="banana">香蕉<br>
    <input type="checkbox" name="fruit" value="blueberry">蓝莓<br>
</form>
```
<a name="UipPp"></a>
### 日期与时间datetime-local
> **时间加日期的选择框，type的值选择datetime-local**

> **注意哦，这里提交数据中的":"是按照URL编码表示为"%3A"**

若要了解更多[URL编码](#pEGrg)，请点击链接
```html
<form>
    生日 (日期和时间): <input type="datetime-local" name="bdaytime">
    <input type="submit" value="提交>
</form>
```
<a name="OVwDU"></a>
### 
<a name="wKc7Z"></a>
### 搜索框：type属性search
> **在input的type属性值设置为search实现搜索框**

```html
<form>
    度娘: <input type="search" name="bdSearch">
</form>
```
<a name="sMd95"></a>
### 接收多行表单
> **\<textarea>** **标签定义多行的文本输入控件。**

```html
<textarea rows="10" cols="30">
   我是一个文本框。
</textarea>
```

<a name="RZkS4"></a>
## 可交互元素

<a name="E5fNf"></a>
### meun
<a name="IdgES"></a>
### meunitem
<a name="x2Xxi"></a>
# 属性
<a name="PGNKb"></a>
## 全局属性
<a name="fnegB"></a>
## 常用属性
<a name="OCIvl"></a>
# 事件
<a name="tRf3d"></a>
## 窗口事件
<a name="jIumZ"></a>
## 表单事件
<a name="A66W7"></a>
## 键盘事件
<a name="rgnZj"></a>
## 鼠标事件
<a name="PUNgO"></a>
## 多媒体事件
<a name="GmwMx"></a>
# 编码
<a name="pEGrg"></a>
## URL编码
| backspace | 8% | A | 41% | b | 62% | ¬ | %AC | Ù | %D9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tab | 9% | B | 42% | c | 63% | ¯ | %AD | Ú | %DA |
| linefeed | %0A | C | 43% | d | 64% | º | %B0 | Û | %DB |
| creturn | %0D | D | 44% | e | 65% | ± | %B1 | Ü | %DC |
| space | 20% | E | 45% | f | 66% | ª | %B2 | Ý | %DD |
| ! | 21% | F | 46% | g | 67% | , | %B4 | Þ | %DE |
| " | 22% | G | 47% | h | 68% | µ | %B5 | ß | %DF |
| # | 23% | H | 48% | i | 69% | » | %BB | à | %E0 |
| $ | 24% | I | 49% | j | %6A | ¼ | %BC | á | %E1 |
| % | 25% | J | %4A | k | %6B | ½ | %BD | â | %E2 |
| & | 26% | K | %4B | l | %6C | ¿ | %BF | ã | %E3 |
| ' | 27% | L | %4C | m | %6D | À | %C0 | ä | %E4 |
| ( | 28% | M | %4D | n | %6E | Á | %C1 | å | %E5 |
| ) | 29% | N | %4E | o | %6F | Â | %C2 | æ | %E6 |
| * | %2A | O | %4F | p | 70% | Ã | %C3 | ç | %E7 |
| + | %2B | P | 50% | q | 71% | Ä | %C4 | è | %E8 |
| , | %2C | Q | 51% | r | 72% | Å | %C5 | é | %E9 |
| - | %2D | R | 52% | s | 73% | Æ | %C6 | ê | %EA |
| . | %2E | S | 53% | t | 74% | Ç | %C7 | ë | %EB |
| / | %2F | T | 54% | u | 75% | È | %C8 | ì | %EC |
| 0 | 30% | U | 55% | v | 76% | É | %C9 | í | %ED |
| 1 | 31% | V | 56% | w | 77% | Ê | %CA | î | %EE |
| 2 | 32% | W | 57% | x | 78% | Ë | %CB | ï | %EF |
| 3 | 33% | X | 58% | y | 79% | Ì | %CC | ð | %F0 |
| 4 | 34% | Y | 59% | z | %7A | Í | %CD | ñ | %F1 |
| 5 | 35% | Z | %5A | { | %7B | Î | %CE | ò | %F2 |
| 6 | 36% | ? | %3F | &#124; | %7C | Ï | %CF | ó | %F3 |
| 7 | 37% | @ | 40% | } | %7D | Ð | %D0 | ô | %F4 |
| 8 | 38% | \[ | %5B | ~ | %7E | Ñ | %D1 | õ | %F5 |
| 9 | 39% | \\ | %5C | ¢ | %A2 | Ò | %D2 | ö | %F6 |
| : | %3A | ] | %5D | £ | %A3 | Ó | %D3 | ÷ | %F7 |
| ; | %3B | ^ | %5E | ¥ | %A5 | Ô | %D4 | ø | %F8 |
| <  | %3C | _ | %5F | &#124; | %A6 | Õ | %D5 | ù | %F9 |
| = | %3D | ` | 60% | § | %A7 | Ö | %D6 |  |  |
| >  | %3E | a | 61% | « | %AB | Ø | %D8 |  |  |

## 语言代码

## 字符集
