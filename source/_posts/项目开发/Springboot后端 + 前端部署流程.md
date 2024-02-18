---
title: Springboot后端 + 前端部署流程
date: 2023-06-20 13:19
updated: 星期五 8日 九月 2023 11:56:34
tags: []
categories: [项目开发]
keywords:
description: 
---



# 数据库
- mysql 版本:5.7 以上
- 不区分大小写：在\[mysqlid\]下加上 `lower_case_table_names=1`
# 后端
- 安装 jdk17: https://juejin.cn/post/7299477531640463423
- jar 包运行
		- 查看 8080 端口占用：lsof -i:8080
	- 杀死进程（PID）：kill -9 {PID}
	- nohup 不中断运行：nohup java -jar xxx.jar >> log 2>&1 &
	- 在 log 中查看日志
# 前端
- nginx 安装包下载：wget http://nginx.org/download/nginx-1.24.0.tar.gz
- nginx 安装：tar zxvf nginx-1.24.0.tar.gz 
	- cd nginx-1.24.0
	- ./configure && make && make install
- 将打包好的文件拖到 /usr/local/nginx/html 中
- 配置：
```conf
# 启动nginx压缩
    gzip on;
    gzip_min_length 1k;
    gzip_comp_level 9;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary on;
    gzip_disable "MSIE [1-6]\.";
    
server {
    listen       8000;
    server_name  localhost;
    
    root		 html;
	
    location / {
         
		 try_files $uri $uri/ /index.html;
    }
	
	location  /jeecgboot/ {
		
		proxy_pass         http://127.0.0.1:8080/jeecg-boot/;
		proxy_redirect off;
		
		proxy_set_header  Host             $host;
		proxy_set_header  X-Real-IP        $remote_addr;
		set $my_proxy_add_x_forwarded_for $proxy_add_x_forwarded_for;
		if ($proxy_add_x_forwarded_for ~* "127.0.0.1"){
		   set $my_proxy_add_x_forwarded_for $remote_addr;
		}
		proxy_set_header   X-Forwarded-For $my_proxy_add_x_forwarded_for;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }

}
```
- 重启配置：./nginx -c /usr/local/nginx/conf/nginx.conf
- 重新运行：sudo ./nginx -s reload