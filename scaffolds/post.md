---
title: <% tp.file.title %>
date: <% tp.file.creation_date() %>
updated: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
tags: 
- 
categories: [<% tp.file.folder(false) %>]
keywords:
description: 
---

<% tp.file.cursor() %>
