---
title: python爬虫----Requests库
date: 2023-07-17 09:34:56
tags:
categories:
---
<a name="6b474650"></a>
# requests库的基本使用

<a name="c85ab9d3"></a>
## response对象

<a name="44a3f242"></a>
### 对象属性

- r.status_code HTTP请求的返回状态，200表示连接成功，404表示失败
- r.text HTTP响应内容的字符串形式，即，url对应的页面内容
- r.encoding 从HTTPheader中猜测的响应内容编码方式
- r.apparent_encoding 从内容中分析出的响应内容编码方式（备选编码方式）
- r.content HTTP响应内容的二进制形式

<a name="e449cf10"></a>
## 异常处理

- requests.ConnectionError 网络连接错误异常，如DNS查询失败、拒绝连接等
- requests.HTTPError HTTP错误异常
- requests.URLRequired URL缺失异常
- requests.TooManyRedirects 超过最大重定向次数，产生重定向异常
- requests.ConnectTimeout 连接远程服务器超时异常
- requests.Timeout 请求URL超时，产生超时异常

<a name="r.status_code"></a>
### r.status_code

r.raise_for_status()在方法内部判断r.status_code是否等于200，不需要<br />增加额外的if语句，该语句便于利用try‐except进行异常处理

<a name="162ddc62"></a>
## 主要方法

```
requests.request()  #支持以下的所有方法，如第一个参数设置为"Get"
requests.get()      #获取HTML网页的所有信息
requests.head()     #获取HTML网页的头部信息
requests.post()     #提交post请求，发送资源
requests.put()      #提交put请求，会替换掉原有的资源
requests.patch()    #提交局部修改请求
requests.delete()   #提交删除请求
```

- 下面以requests.request()为例，介绍所有参数的使用
- requests.request(method,url,**kwargs)

<a name="5f06bad4"></a>
### method参数

对应请求方法有七种，和requests库的其他方法功能一致<br />除了上面的六中之外还有OPTIONS请求方法

<a name="2b0eac5b"></a>
### url参数

网站url地址

<a name="bb92f887"></a>
### **kwargs（**表示可选）

- params将键值对增加到url

```
kv = {'key1': 'value1', 'key2': 'value2'}
r = requests.request('GET', 'http://python123.io/ws', params=kv)
print(r.url)
#http://python123.io/ws?key1=value1&key2=value2
```

- data将字典、字节序列或文件对象作为request的对象

```
kv = {"key1":"value1","key2":"value2"}
r = request.request("POST","http://pythton123.io/ws",data=kv)
body = "主体内容"
r = request.request("POST","http://pythton123.io/ws",data=body)
```

- json将JSON格式的数据作为requests的内容

```
kv = {"key1":"value1","key2":"value2"}
r = request.request("POST","http://pythton123.io/ws",json=kv)
```

- headers定制HTTP头部中的内容

```
hd = {'user‐agent': 'Chrome/10'}
r = requests.request('POST', 'http://python123.io/ws', headers=hd)
```

- cookies
- files字典类型，传输文件，值要用open()函数

```
fs = {'file': open('data.xls', 'rb')}
r = requests.request('POST', 'http://python123.io/ws', files=fs)
```

- auth
- timeout超时设置(秒为单位)

```
r = requests.request('GET', 'http://www.baidu.com', timeout=10)
```

- proxies字典类型设定代理服务器

```
pxs = { 'http': 'http://user:pass@10.10.10.1:1234'
'https': 'https://10.10.10.1:4321' }
r = requests.request('GET', 'http://www.baidu.com', proxies=pxs)
```

- allow_redirects :True/False，默认为True，重定向开关
- stream:True/False，默认为True，获取内容立即下载开关
- verify:True/False，默认为True，认证SSL证书开关
- cert:本地SSL证书路径

<a name="d2424c30"></a>
## 爬虫的通用框架

```
import requests
def getHtmlText(url):
    try:
        r = requests.get(url,timeout=30)
        r.raise_for_status()
        r.encoding = r.apparent_encoding()
        return r.text
    except:
        return "产生异常"
if __name__=="__main__":
    url = "http://www.baidu.com"
    print(getHtmlText(url))
```
