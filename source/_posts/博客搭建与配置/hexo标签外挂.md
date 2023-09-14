---
title: hexo标签外挂
date: 2023-09-13 08:25
updated: 星期三 13日 九月 2023 08:25:30
tags: 
- 
categories: [博客搭建与配置]
keywords: 标签外挂
description: 
---

# Note

语法：
```markdown
{% note [class] [no-icon] [style] %}  
Any content (support inline tags too.io).  
{% endnote %}
```

|名称|用法|
|---|---|
|class|【可选】标识，不同的标识有不同的配色  <br>（ default / primary / success / info / warning / danger ）|
|no-icon|【可选】不显示 icon |
|style|【可选】可以覆盖配置中的 style  <br>（simple/modern/flat/disabled）|

例子：
```markdown
{% note flat %}  
默认 提示块标签  
{% endnote %}  
{% note default flat %}  
default 提示块标签  
{% endnote %}  
{% note primary flat %}  
primary 提示块标签  
{% endnote %}  
{% note success flat %}  
success 提示块标签  
{% endnote %}  
{% note info flat %}  
info 提示块标签  
{% endnote %}  
{% note warning flat %}  
warning 提示块标签  
{% endnote %}  
{% note danger flat %}  
danger 提示块标签  
{% endnote %}
```

预览：

{% note flat %}  
默认提示块标签  
{% endnote %}  
{% note default flat %}  
default 提示块标签  
{% endnote %}  
{% note primary flat %}  
primary 提示块标签  
{% endnote %}  
{% note success flat %}  
success 提示块标签  
{% endnote %}  
{% note info flat %}  
info 提示块标签  
{% endnote %}  
{% note warning flat %}  
warning 提示块标签  
{% endnote %}  
{% note danger flat %}  
danger 提示块标签  
{% endnote %}

# Tag-hide
如果你需要展示的内容太多，可以把它隐藏在收缩框里，需要时再把它展开。( display 不能包含英文逗号，可用 `&sbquo;`)

语法：
```markdown
{% hideToggle display,bg,color %} 
<br>content <br>
{% endhideToggle %}
```

例子：
```markdown
{% hideToggle Butterfly安装方法 %}  
在你的博客根目录里  
  
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly  
  
如果想要安装比较新的dev分支，可以  
  
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly  
  
{% endhideToggle %}
```

{% hideToggle Butterfly 安装方法 %}  
在你的博客根目录里  
  
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly  
  
如果想要安装比较新的 dev 分支，可以  
  
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly  
  
{% endhideToggle %}

# Tabs

语法：
```markdown
{% tabs Unique name, [index] %}  
<!-- tab [Tab caption] [@icon] -->  
Any content (support inline tags too).  
<!-- endtab -->  
{% endtabs %}  
  
Unique name   : Unique name of tabs block tag without comma.  
                Will be used in #id's as prefix for each tab with their index numbers.  
                If there are whitespaces in name, for generate #id all whitespaces will replaced by dashes.  
                Only for current url of post/page must be unique!  
[index]       : Index number of active tab.  
                If not specified, first tab (1) will be selected.  
                If index is -1, no tab will be selected. It's will be something like spoiler.  
                Optional parameter.  
[Tab caption] : Caption of current tab.  
                If not caption specified, unique name with tab index suffix will be used as caption of tab.  
                If not caption specified, but specified icon, caption will empty.  
                Optional parameter.  
[@icon]       : FontAwesome icon name (full-name, look like 'fas fa-font')  
                Can be specified with or without space; e.g. 'Tab caption @icon' similar to 'Tab caption@icon'.  
                Optional parameter.
```

例子：
```markdown
{% tabs Tab %}  
<!-- tab 第一个Tab -->  
**tab名字为第一个Tab**  
<!-- endtab -->  
  
<!-- tab 第二个Tab -->  
**tab名字为第二个Tab**  
<!-- endtab -->  
  
<!-- tab 第三个Tab -->  
**tab名字为第三个Tab**  
<!-- endtab -->  
  
<!-- tab @fab fa-apple-pay -->  
**只有图标 没有Tab名字**  
<!-- endtab -->  
  
<!-- tab 炸弹@fas fa-bomb -->  
**名字+icon**  
<!-- endtab -->  
{% endtabs %}
```

{% tabs Tab %}  
<!-- tab 第一个Tab -->  
**tab名字为第一个Tab**  
<!-- endtab -->  
  
<!-- tab 第二个Tab -->  
**tab名字为第二个Tab**  
<!-- endtab -->  
  
<!-- tab 第三个Tab -->  
**tab名字为第三个Tab**  
<!-- endtab -->  
  
<!-- tab @fab fa-apple-pay -->  
**只有图标 没有Tab名字**  
<!-- endtab -->  
  
<!-- tab 炸弹@fas fa-bomb -->  
**名字+icon**  
<!-- endtab -->  
{% endtabs %}

# Button

语法：
```markdown
{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}  
  
[url]         : 链接  
[text]        : 按钮文字  
[icon]        : [可选] 图标  
[color]       : [可选] 按钮背景顔色(默认style时）  
                      按钮字体和边框顔色(outline时)  
                      default/blue/pink/red/purple/orange/green  
[style]       : [可选] 按钮样式 默认实心  
                      outline/留空  
[layout]      : [可选] 按钮佈局 默认为line  
                      block/留空  
[position]    : [可选] 按钮位置 前提是设置了layout为block 默认为左边  
                      center/right/留空  
[size]        : [可选] 按钮大小  
                      larger/留空
```

例子：
```markdown
<div class="btn-center">  
{% btn 'https://blog.falling42.top/',Falling42のBlog,far fa-hand-point-right,larger %}  
{% btn 'https://blog.falling42.top/',Falling42のBlog,far fa-hand-point-right,blue larger %}  
{% btn 'https://blog.falling42.top/',Falling42のBlog,far fa-hand-point-right,pink larger %}  
{% btn 'https://blog.falling42.top/',Falling42のBlog,far fa-hand-point-right,red larger %}  
{% btn 'https://blog.falling42.top/',Falling42のBlog,far fa-hand-point-right,block outline purple larger %}  
{% btn 'https://blog.falling42.top/',Falling42のBlog,far fa-hand-point-right,block center outline orange larger %}  
{% btn 'https://blog.falling42.top/',Falling42のBlog,far fa-hand-point-right,block right outline green larger %}  
</div>
```

<div class="btn-center">  
{% btn 'https://blog.falling42.top/',Falling42のBlog,far fa-hand-point-right,larger %}  
{% btn 'https://blog.falling42.top/',Falling42のBlog,far fa-hand-point-right,blue larger %}  
{% btn 'https://blog.falling42.top/',Falling42のBlog,far fa-hand-point-right,pink larger %}  
{% btn 'https://blog.falling42.top/',Falling42のBlog,far fa-hand-point-right,red larger %}  
{% btn 'https://blog.falling42.top/',Falling42のBlog,far fa-hand-point-right,block outline purple larger %}  
{% btn 'https://blog.falling42.top/',Falling42のBlog,far fa-hand-point-right,block center outline orange larger %}  
{% btn 'https://blog.falling42.top/',Falling42のBlog,far fa-hand-point-right,block right outline green larger %}  
</div>

# Label

高亮所需的文字

语法：
```
{% label text color %}
```

|参数|解释|
|---|---|
|text|文字|
|color|【可选】背景颜色，默认为 default  <br>default/blue/pink/red/purple/orange/green|

例子：
```markdown
臣亮言：{% label 先帝 %}创业未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此诚{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈于内；{% label 忠志之士 purple %}，忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气；不宜妄自菲薄，引喻失义，以塞忠谏之路也。  
宫中、府中，俱为一体；陟罚臧否，不宜异同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及为忠善者，宜付有司，论其刑赏，以昭陛下平明之治；不宜偏私，使内外异法也。
```

预览：
臣亮言：{% label 先帝 %}创业未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此诚{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈于内；{% label 忠志之士 purple %}，忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气；不宜妄自菲薄，引喻失义，以塞忠谏之路也。  
宫中、府中，俱为一体；陟罚臧否，不宜异同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及为忠善者，宜付有司，论其刑赏，以昭陛下平明之治；不宜偏私，使内外异法也。

# inlineimg

主题中的图片都是默认以块级元素显示，如果你想以内联元素显示，可以使用这个标签外挂。

语法：
```markdown
{% inlineImg [src] [height] %}  
  
[src]      :    图片链接  
[height]   ：   图片高度限制【可选】
```

例子：
```markdown
这是{% inlineImg https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/5150.gif 20px %} 一段话。  
  
这是{% inlineImg https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/5150.gif 40px %} 一段话。
```

预览：
这是{% inlineImg https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/5150.gif 20px %} 一段话。  
  
这是{% inlineImg https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/5150.gif 40px %} 一段话。

# Mermai

用 mermaid 标籤可以绘製 Flowchart（流程图）、Sequence diagram（时序图 ）、Class Diagram（类别图）、State Diagram（状态图）、Gantt（甘特图）和 Pie Chart（圆形图），具体可以查看 [mermaid 文档](https://mermaid-js.github.io/mermaid/#/)

语法：
```markdown
{% mermaid %}  
mermaid语法
{% endmermaid %
```


{% mermaid %}  <br>pie  <br>    title Key elements in Product X  <br>    "Calcium" : 42.96  <br>    "Potassium" : 50.05  <br>    "Magnesium" : 10.01  <br>    "Iron" :  5  <br>{% endmermaid %}