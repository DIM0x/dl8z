---
title: 互联网系列2：连接加速（Windows）
author: dimo
categories: [八中技术参考系列, 世界互联网]
tags: [dimo, 网络]
---

怎样能提升访问网站的速度呢……

## 1.服务器，网络，IP地址，域名

这些概念可能介绍得比较简略，有不严谨之处还请谅解。如果想看方法可以暂时掠过此处部分。

> 服务器：实际上就是一台计算机，但是经过特殊配置，可以为其他计算机提供服务。

例如，我们使用百度搜索、观看bilibili视频，都分别连接了百度服务器、bilibili服务器。

想要连接其他服务器，我们需要知道那个服务器具体在哪里。之后我们向服务器发信息，服务器还需要向我们回传数据。因此服务器也必须知道我们的位置。

就像我们写信给一个人，我们要知道他所在的地址。同时我们自己也需要有个发信地址，以便对方回信。

因此，服务器（计算机）相对于网络的具体位置，我们可以称其为**网络地址**。连接到这个服务器，我们称其为“**访问**服务器”。

**IP地址**就是用来描述一个网络中计算机的位置的。

> IP指网际互连协议，Internet Protocol的缩写，是TCP/IP体系中的网络层协议。

在同一规模的网络上，IP地址是独一无二的。**比如**全球的公网IP地址不会有重复，否则我们就没法找到需要访问的服务器了。

就像这个世界上不能出现两个名称一模一样的国家。

然而，世界上并不是只有互联网这一个世界级的网络。因为，除了计算机、服务器能直接连接到互联网上，下一级的网络也可以连接到互联网。这个下一级的网络还可能连接有再下一级的网络……我们往往是连接到第n级网络，之后一级一级的向上跨越，最终连接到互联网。

这和直接连接到互联网不同。拿中国举例，我们属于大连市，大连市属于辽宁省，辽宁省属于中国。而北京市作为直辖市也属于中国。虽然大连市、辽宁省、北京市这几个地名都属于中国，但我们不能说大连市和北京市是同一级别的地名。

理解这些问题，我们来说说这些网络。我们说，IP地址是用来描述一个网络中计算机的位置的。不同网络的IP自然可能重复。

就像同一个市不能有两个人民广场，但是全中国有很多人民广场。

也就是说，我们所称的**公网IP**和我们看到自己的局域网IP是不同的。

> 实际上，计算机网络的结构很多也比较复杂：https://zhuanlan.zhihu.com/p/311656440

简单说说域名。它最初是为了便于人们记住，通过域名访问对应的网站。可见域名和IP地址是相互关联的。

## 2.DNS服务与hosts

DNS就是用于把域名转换为IP地址的服务。这个服务同样是由一些服务器提供。它们称为**DNS服务器**。很多不同的提供商都有提供这个服务。

DNS服务原理看起来很简单，只是通过域名查找对应的IP即可。然而不同运营商，不同DNS服务器所记载的信息内容可能会略有差别。

例如某个网站在不同地区架设了好几个服务器，初衷是用户距离哪个服务器更近就访问哪个服务器，加快访问速度。因此某些具有地区性的DNS服务会提供本地访问快的域名。

但是这里也有问题，例如某个DNS服务器只知道这个网站的一个服务器的IP地址，所以全球的电脑通过这个DNS服务器只会获取到同一个IP地址，造成访问慢。

同时为了阻止用户访问某些网站，一些DNS服务还会故意删除这些网站的记录信息，用户无法得知这些网站的IP也就无法访问了。