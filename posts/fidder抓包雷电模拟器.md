---
title: fidder抓包雷电模拟器
date: 2025-07-22 07:46:29
cover: [https://tc.cuirx.de/i/2025/07/24/za3u2s.webp]
author: cuirx
categories: 随记
---

111

```
adb shell

#su root

cd /data/misc/user/0/cacerts-added

mount -o remount,rw /system

cp * /etc/security/cacerts

mount -o remount,ro /system
```

# 在windows窗口运行以下命令，不要进到adb shell 里面运行
D:\platform-tools> adb root

# 雷电模拟器，直接在设置打开磁盘写入功能

# 重新挂载，没加权限 表示rwx全部挂上
D:\platform-tools> adb remount

# 进入adb shell
D:platform-tools>adb shell

# 查看用户证书位置
gracelte:/ # ls /data/misc/user/0/cacerts-added/
e5c3944b.0

# 拷贝证书到目标文件夹
gracelte:/ # mv /data/misc/user/0/cacerts-added/e5c3944b.0 /system/etc/security/cacerts/

[fiddler+安卓雷电模拟器+解决无法抓包问题，看我就对了，一站式解决问题，告别到处搜文章_雷电模拟器抓包-CSDN博客](https://blog.csdn.net/weixin_43391813/article/details/130850778)