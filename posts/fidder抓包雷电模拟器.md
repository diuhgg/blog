---
title: fidder抓包雷电模拟器
date: 2025-07-22 07:46:29
cover: [https://tc.cuirx.de/i/2025/07/24/za3u2s.webp]
author: cuirx
categories: 随记
---

### 1.打开远程连接fiddler的选项

<img src="https://tc.cuirx.de/i/2025/07/22/c4ofmi-2.webp" alt="image-20250722073344936" style="zoom: 33%;" />

### 2.打开雷电模拟器的root权限

<img src="https://tc.cuirx.de/i/2025/07/22/c5tez0-2.webp" alt="image-20250722073535703" style="zoom:50%;" />

### 3.选择可写入

<img src="https://tc.cuirx.de/i/2025/07/22/c5cqhi-2.webp" alt="image-20250722073458301" style="zoom:50%;" />

### 4.修改模拟器网络

<img src="https://tc.cuirx.de/i/2025/07/22/c6fxu8-2.webp" alt="image-20250722073641197" style="zoom:33%;" />

### 5.访问ip:8866(上面fiddler设置的端口)，安装证书

<img src="https://tc.cuirx.de/i/2025/07/22/c7iwu6-2.webp" alt="image-20250722073823024" style="zoom:33%;" />

### 6.cmd

```shell
# 在windows窗口运行以下命令
adb root

adb remount
 
adb shell
 
# 查看用户证书位置
ls /data/misc/user/0/cacerts-added/

# 证书名字
# 1fc2fgb.0
 
# 拷贝证书到目标文件夹
mv /data/misc/user/0/cacerts-added/证书名字 /system/etc/security/cacerts/
```