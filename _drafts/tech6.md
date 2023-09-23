---
title: 八中机房：玩转锐捷云桌面与VDI终端
author: dimo
categories: [八中技术参考系列]
tags: [dimo]
---

开学第一节信息课，信息老师向我们简单介绍了机房配置。

> 顺便提一下，我们这一届信息老师：[冯术](http://www.dl8z.com/dl8z/web/article/2011/04/02098ecb85d811e9a8660c9d920ceddd1446.html)

当时的介绍大概意思是：我们机房的电脑没有机箱，全靠显示器后面挂的那个盒子。

这话说的也没错，同时让我们也更好理解。另一个原因是，这背后的原理会更复杂，不是一句话能讲清楚的，因此老师没有详细给我们介绍。

因此，本文将详细讲述八中机房的工作原理，并提供使用提示。

## 一.云桌面使用提示

电脑启动后，界面显示的是一个Windows系统。用不了多久，你就会发现这是个云桌面。显示器背后悬挂的为云桌面终端。

比如从屏幕最上方的快捷栏，点击关机之后，就会显示云桌面的主界面了。如下图所示

img1

云桌面使用的第一个感觉就是卡顿，这是因为整个教室将近50个（或更多）终端同时共用一个服务器，这个下面会讲到。

### 1.浏览器卡顿问题

使用360安全浏览器，想打开网页都费劲。此时我们注意到，系统还安装了firefox和一个锐捷专用浏览器。

经过测试，发现速度最快的应该是锐捷浏览器，实际为锐捷改版的chromium浏览器。

### 2.盗号问题

我们登录锐捷云课堂软件时，只需要输入用户名就会登录，因此无法避免的会产生盗号问题。

在“班级排名”界面中，可以看到本班级所有人的用户名，输入这个用户名即可登录。

另外，即使不是一个班级，输入其他班级学生的对应用户名，也能进行登录。

### 3.小游戏

机房安装的系统中没有扫雷等小游戏。最方便的方法是使用浏览器打开网页的在线游戏。另外也可以手动下载，或者使用U盘携带其他游戏。

### 4.云课堂软件管理密码

默认管理密码：`ruijie.com`。详情参见<a href="https://csc.ruijie.com.cn/wind/#/articleDetails?kw=%E8%B4%A6%E5%8F%B7%E5%AF%86%E7%A0%81&type=undefined&id=1d8d70f428a144e0abc5026c0ff0136b&keywordId=10d343e039004ead82bb1e9ea02e3d1a" target="_blank">锐捷密码问题参考</a>。

## 二.锐捷云桌面

锐捷是一家专门提供网络设置的品牌，经营内容从交换机到路由器，再到云桌面，均有涉及。

八中使用的云桌面系统为锐捷系列。经查，八中使用的云终端为[RG-Rain100 V2](https://www.ruijie.com.cn/cp/ykt-zhd/r100v2/)，属于VDI云桌面。其系统的运行均在主服务器上进行，终端基本上只进行画面传输和操作传输。将U盘插入终端复制文件时，也是通过网络将文件复制到主服务器上进行的。因此在多人同时使用系统时，会有一定程度卡顿。

也就是说，Windows系统并不会安装在我们使用的云终端上，也不会使用云终端的运算能力。软件运行的流畅程度主要取决于主服务器配置。

事实上，云终端内部运行的是锐捷根据ubuntu改版的，名为RainOS系统，这个系统运行在本地，提供与主服务器通信。系统主界面可参见题图。点击“关于”按钮可查看到系统信息。

基础设置管理密码：`ruijie.com`。详情参见<a href="https://csc.ruijie.com.cn/wind/#/articleDetails?kw=%E8%B4%A6%E5%8F%B7%E5%AF%86%E7%A0%81&type=undefined&id=1d8d70f428a144e0abc5026c0ff0136b&keywordId=10d343e039004ead82bb1e9ea02e3d1a" target="_blank">锐捷密码问题参考</a>。此处基础设置不建议修改，否则易导致云桌面无法使用。

---

锐捷云桌面官方参考

[密码问题参考](https://csc.ruijie.com.cn/wind/#/articleDetails?kw=%E8%B4%A6%E5%8F%B7%E5%AF%86%E7%A0%81&type=undefined&id=1d8d70f428a144e0abc5026c0ff0136b&keywordId=10d343e039004ead82bb1e9ea02e3d1a)

服务器终端刷机：https://csc.ruijie.com.cn/wind/#/articleDetails?kw=%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%88%B7%E6%9C%BA&type=ARTICLE&id=368fbc14ce6644d88fffadc9614206b0&keywordId=2030c9599ec44fffa61e5c397ed5e069

旧版包：https://pan.ruijie.com.cn/share/ebf20e3a79d13d5a60b0518535?folder_id=275004088717

新版包：https://pan.ruijie.com.cn/share/42ba5b9c2190ecf663a33725a5?folder_id=275003823546