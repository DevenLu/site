<!--
title: 移动端设计指引
-->

# 移动端设计指引

AntV 拥有一套基于移动端的可视化图形语法图表库（F2），我们设计师在 Ant Design “准确、有效、清晰、美”的数据可视化原则的基础之上，融入移动端的特性，拓展出专门为移动端数据可视化而生的设计指引。

## 移动端特性

在移动端运用数据可视化之前应该清晰移动端的特性，主要有以下几方面：

1. 用户碎片化时间、浏览多余交互；
2. 多试用于触摸界面，和手势化的简单交互操作；
3. 硬件界面多样性；
4. 界面相对较小，内容信息纵向和多线性特征；
5. 用户操作时环境条件多样；
6. 网络电量相对不稳定，要求具有性能高及特殊状况下的良好体验；

## 设计建议

基于以上移动端的特性，结合 AntV 可视化设计原则，建议在产品中进行数据可视化设计时，遵循以下几点建议：

### 1、信息轻量聚焦

**聚焦当前场景用户任务，避免不必要的视觉元素干扰。** 移动端可视化信息传递需要更加聚焦用户在场景中的任务和具体的信息，最大程度刨除图表展示中的无用或相对次要的信息及图形元素， **减少信息维度交叉的复杂性和视觉干扰，** 巧妙采用流程、排版、动效的方式将信息拆解。

<table style="min-width: 750px;"><colgroup><col width="421"><col width="329"></colgroup><tbody><tr height="34px"><td rowspan="1" colspan="1"><div data-type="alignment" data-value="center" style="text-align: center;"><div data-type="p">PC</div></div></td><td rowspan="1" colspan="1"><div data-type="alignment" data-value="center" style="text-align: center;"><div data-type="p">移动端</div></div></td></tr><tr height="34px"><td rowspan="3" colspan="1"><div data-type="image" data-display="block" data-align="center" data-src="https://cdn.nlark.com/lark/0/2018/png/18983/1535524712603-6195cc66-02a6-44c0-b800-ab779621445d.png" data-width="358"><img style="" src="https://cdn-pri.nlark.com/lark/0/2018/png/18983/1535524712603-6195cc66-02a6-44c0-b800-ab779621445d.png" width="358"></div></div></td><td rowspan="3" colspan="1"><div data-type="p">​<div data-type="image" data-display="block" data-align="center" data-src="https://cdn.nlark.com/lark/0/2018/png/18983/1535445049819-f9eba1bf-bd59-45f5-9d8e-8bfd2c15ee11.png" data-width="255"><img src="https://cdn-pri.nlark.com/lark/0/2018/png/18983/1535445049819-f9eba1bf-bd59-45f5-9d8e-8bfd2c15ee11.png" width="255"></div></div></td></tr><tr height="34px"></tr><tr></tr></tbody></table>

### 2、手势操作自然

移动端的硬件特质以及发展趋势，要求可视化的操作更符合人的自然行为反应，使交互操作更自然。手势方式的选择上应该源于生活经验，易于理解，学习成本低，用户无操作压力。

区别于游戏和其他沉浸式应用中的手势选择，在可视化场景中， **应该尽量避免高学习成本的手势，同时需要注意保持页面间交互的一致性。** 以下为 AntV 的设计师推荐使用的最常用的标准手势：

![mobile-1](https://cdn-pri.nlark.com/lark/0/2018/png/18983/1537185184636-284c7592-00d2-4dc9-918a-5edb3edaa8f6.png)

在 “信息轻量聚焦” 中我们提到移动端的可视化设计多聚焦于用户的直接任务，用 [可视化交互](./interaction.md) 一文中提及的任务层次来分析，移动端交互设计上会更聚焦在数据获取层，对复杂程度较高的交互行为要进行适度的克制。下图是 AntV 设计总结的常用手势表，给大家做参考。

<table style="min-width: 552px;"><colgroup><col width="61"><col width="auto"><col width="auto"><col width="311.98858642578125"></colgroup><tbody><tr><td rowspan="1" colspan="1"><div data-type="p"><span data-type="ranges"><strong>动作</strong></span></div></td><td rowspan="1" colspan="1"><div data-type="p"><span data-type="ranges"><strong>目的</strong></span></div></td><td rowspan="1" colspan="1"><div data-type="p"><span data-type="ranges"><strong>操作</strong></span></div></td><td rowspan="1" colspan="1"><div data-type="p"><span data-type="ranges"><strong>示例</strong></span></div></td></tr><tr><td rowspan="4" colspan="1"><div data-type="p">浏览</div></td><td rowspan="4" colspan="1"><div data-type="p">寻找感兴趣的数据</div></td><td rowspan="4" colspan="1"><div data-type="p">Touch and hold</div><div data-type="p"><div data-type="image" data-display="block" data-align="center" data-src="https://cdn.nlark.com/lark/0/2018/png/18983/1537235411468-140aa447-0914-4715-8362-87d0e505e529.png" data-width="120"><img src="https://cdn-pri.nlark.com/lark/0/2018/png/18983/1537235411468-140aa447-0914-4715-8362-87d0e505e529.png" width="120"></div></div></td><td rowspan="4" colspan="1"><div data-type="p">​​<div data-type="image" data-display="block" data-align="" data-src="https://cdn.nlark.com/lark/0/2018/gif/18983/1538125905229-74308a08-17a3-4226-903d-f09836cfdd87.gif" data-width="290"><img src="https://cdn-pri.nlark.com/lark/0/2018/gif/18983/1538125905229-74308a08-17a3-4226-903d-f09836cfdd87.gif" width="290"></div></div></td></tr><tr></tr><tr></tr><tr></tr><tr><td rowspan="2" colspan="1"><div data-type="p">选中</div></td><td rowspan="2" colspan="1"><div data-type="p">对单个数据点感兴趣</div></td><td rowspan="2" colspan="1"><div data-type="p">Tap</div><div data-type="p"><div data-type="image" data-display="block" data-align="center" data-src="https://cdn.nlark.com/lark/0/2018/png/18983/1537235445539-7b355456-54cf-4c79-957d-c4e18f8afff6.png" data-width="120"><img src="https://cdn-pri.nlark.com/lark/0/2018/png/18983/1537235445539-7b355456-54cf-4c79-957d-c4e18f8afff6.png" width="120"></div></div></td><td rowspan="2" colspan="1"><div data-type="p">​<div data-type="image" data-display="block" data-align="" data-src="https://cdn.nlark.com/lark/0/2018/gif/18983/1538124900879-cd9bb001-2853-43f0-b59b-19ed5206b515.gif" data-width="290"><img src="https://cdn-pri.nlark.com/lark/0/2018/gif/18983/1538124900879-cd9bb001-2853-43f0-b59b-19ed5206b515.gif" width="290"></div>​</div></td></tr><tr></tr><tr><td rowspan="1" colspan="1"><div data-type="p">过滤</div></td><td rowspan="1" colspan="1"><div data-type="p">聚焦重点信息</div></td><td rowspan="1" colspan="1"><div data-type="p">Touch and hold</div><div data-type="p"><div data-type="image" data-display="block" data-align="center" data-src="https://cdn.nlark.com/lark/0/2018/png/18983/1537235502098-72787470-0316-46ce-8b85-47c48168c165.png" data-width="120"><img src="https://cdn-pri.nlark.com/lark/0/2018/png/18983/1537235502098-72787470-0316-46ce-8b85-47c48168c165.png" width="120"></div></div></td><td rowspan="1" colspan="1"><div data-type="p">​​<div data-type="image" data-display="block" data-align="" data-src="https://cdn.nlark.com/lark/0/2018/gif/18983/1538127057220-3b01fb54-c397-43ed-a7ae-d557291e7e2a.gif" data-width="290"><img src="https://cdn-pri.nlark.com/lark/0/2018/gif/18983/1538127057220-3b01fb54-c397-43ed-a7ae-d557291e7e2a.gif" width="290"></div></div></td></tr><tr><td rowspan="1" colspan="1"><div data-type="p">缩放</div></td><td rowspan="1" colspan="1"><div data-type="p">探索、识别数据</div></td><td rowspan="1" colspan="1"><div data-type="p">Pinch</div><div data-type="p"><div data-type="image" data-display="block" data-align="center" data-src="https://cdn.nlark.com/lark/0/2018/png/18983/1537235526858-670428ff-bcf5-4b47-a486-17c87faa53ff.png" data-width="120"><img src="https://cdn-pri.nlark.com/lark/0/2018/png/18983/1537235526858-670428ff-bcf5-4b47-a486-17c87faa53ff.png" width="120"></div></div></td><td rowspan="1" colspan="1"><div data-type="p">​<div data-type="image" data-display="block" data-align="" data-src="https://cdn.nlark.com/lark/0/2018/gif/18983/1537189959901-23ac94fc-1f47-4a26-9f98-a40c041ad862.gif" data-width="290"><img src="https://cdn-pri.nlark.com/lark/0/2018/gif/18983/1537189959901-23ac94fc-1f47-4a26-9f98-a40c041ad862.gif" width="290"></div>​</div></td></tr><tr><td rowspan="1" colspan="1"><div data-type="p">平移</div></td><td rowspan="1" colspan="1"><div data-type="p">探索更大的数据空间</div></td><td rowspan="1" colspan="1"><div data-type="p">Swipe</div><div data-type="p"><div data-type="image" data-display="block" data-align="center" data-src="https://cdn.nlark.com/lark/0/2018/png/18983/1537235549338-9684ff83-c1bc-4f6a-9824-3d0f5e5e3e04.png" data-width="120"><img src="https://cdn-pri.nlark.com/lark/0/2018/png/18983/1537235549338-9684ff83-c1bc-4f6a-9824-3d0f5e5e3e04.png" width="120"></div></div></td><td rowspan="1" colspan="1"><div data-type="p">​<div data-type="image" data-display="block" data-align="" data-src="https://cdn.nlark.com/lark/0/2018/gif/18983/1538125461825-c4caf0c9-b0bb-430f-9608-c17c0463373a.gif" data-width="290"><img src="https://cdn-pri.nlark.com/lark/0/2018/gif/18983/1538125461825-c4caf0c9-b0bb-430f-9608-c17c0463373a.gif" width="290"></div></div></td></tr></tbody></table>

### 3、功能组件完善易用

由于硬件显示屏的限制，传统 PC 上的图表在展示上并不能很好的在移动端上做适应，因此对于某些功能组件，需要针对移动端做更具针对性的设计（以下拿 tooltip 为例）。

<table style="min-width: 747px;"><colgroup><col width="82"><col width="331"><col width="334.98858642578125"></colgroup><tbody><tr height="34px"><td rowspan="1" colspan="1"><div data-type="p">名称</div></td><td rowspan="1" colspan="1"><div data-type="p">改造前（传统 PC）</div></td><td rowspan="1" colspan="1"><div data-type="p">改造后</div></td></tr><tr height="34px"><td rowspan="1" colspan="1"><div data-type="p"></div></td><td rowspan="1" colspan="1"><div data-type="p"><div data-type="image" data-display="block" data-align="left" data-src="https://cdn.nlark.com/lark/0/2018/png/18983/1537237371524-102c1b72-3d6f-487a-a4d5-eb70c2214ea0.png" data-width="311"><img src="https://cdn-pri.nlark.com/lark/0/2018/png/18983/1537237371524-102c1b72-3d6f-487a-a4d5-eb70c2214ea0.png" width="311"></div></div></td><td rowspan="1" colspan="1"><div data-type="p"><div data-type="image" data-display="block" data-align="center" data-src="https://cdn.nlark.com/lark/0/2018/png/18983/1537237332887-a9412710-8ee5-4d74-855c-72ae5456a5ca.png" data-width="280"><img src="https://cdn-pri.nlark.com/lark/0/2018/png/18983/1537237332887-a9412710-8ee5-4d74-855c-72ae5456a5ca.png" width="280"></div></div></td></tr><tr height="34px"><td rowspan="1" colspan="1"><div data-type="p"></div></td><td rowspan="1" colspan="1"><div data-type="p">传统的 tooltip 的展示方式在移动端上展示时，浪费了更多的信息空间，并遮挡了有效信息。</div></td><td rowspan="1" colspan="1"><div data-type="p">有效利用屏幕的空间并尝试结合图例展示详细信息。</div></td></tr></tbody></table>

### 4、布局灵活响应

移动端可视化图表往往承载于卡片等“容器”的载体之上，对于图表本身而言也许并不需要复杂的栅格系统，但同样需要找到图表结构的动态空间秩序，达到无论硬件或“容器”如何变化，都有可遵循的『秩序之美』。

在移动端的可视化体系中，建议从三个方面出发：

- 容器尺寸；
- 布局及适配；
- 阅读模式切换；

#### 4-1、容器尺寸

移动端的界面尺寸非常多样，为了保证在浏览状态下图表各信息显示的完整性，并在主流尺寸下显示更多信息内容，AntV 移动端的容器尺寸（下面会给出定义）建议用 4：3 比例进行设计。

![mobile-2](https://cdn-pri.nlark.com/lark/0/2018/png/18983/1532594113222-0d8ad1c4-3011-438a-996d-fdf42fe9c328.png)

#### 4-2、布局及适配

虽然 AntV 的图表组件在各个组块的配置上给出了足够的灵活性，但由于移动端的硬件的多变性，设计师更应该带着适配的概念，判断哪些模块应该是确定，哪些模块应该动态适应硬件的变化，具体的模块定义如下图。

![mobile-3](https://cdn-pri.nlark.com/lark/0/2018/png/18983/1532599184320-777e1173-c11b-4096-a46b-5fd47eefcbb5.png)

#### 4-3、阅读模式切换

由于用户的某些细节阅读和深度分析的需要，需要对图表的展示形态做变化，使得用户更容易看到细节，或有利于用户的进一步的操作。主要包括：

##### 场景切换和纵向的适配

在不同页面中相同图表可能承载的用户诉求类型不相同，需要通过不同场景的切换和变化，来更好的满足并达到较好的用户体验。

<table style="min-width: 750px;"><colgroup><col width="91"><col width="305"><col width="354"></colgroup><tbody><tr height="34px"><td rowspan="1" colspan="1"><div data-type="p"></div></td><td rowspan="1" colspan="1"><div data-type="p">在多图表的长页面中，多为浏览型的诉求，设计上更简明更快速做为主要体验目标。</div></td><td rowspan="1" colspan="1"><div data-type="p">对某一图表做进一步操作（详情、下钻等）时，可以通过切换场景或扩大面积方式，沉入式操作。</div></td></tr><tr height="34px"><td rowspan="2" colspan="1"><div data-type="p"><span data-type="ranges"><strong>场景切换</strong></span></div><div data-type="p"></div></td><td rowspan="2" colspan="1"><div data-type="p"><div data-type="image" data-display="block" data-align="left" data-src="https://cdn.nlark.com/lark/0/2018/png/18983/1535445049819-f9eba1bf-bd59-45f5-9d8e-8bfd2c15ee11.png" data-width="283"><img src="https://cdn-pri.nlark.com/lark/0/2018/png/18983/1535445049819-f9eba1bf-bd59-45f5-9d8e-8bfd2c15ee11.png" width="283"></div></div></td><td rowspan="2" colspan="1"><div data-type="p"><div data-type="image" data-display="block" data-align="center" data-src="https://cdn.nlark.com/lark/0/2018/png/18983/1535443805710-2dc89e88-11d1-43fd-8bc9-a4adcb8979ec.png" data-width="269"><img src="https://cdn-pri.nlark.com/lark/0/2018/png/18983/1535443805710-2dc89e88-11d1-43fd-8bc9-a4adcb8979ec.png" width="269"></div></div></td></tr><tr height="34px"></tr><tr height="34px"><td rowspan="1" colspan="1"><div data-type="p"><span data-type="ranges"><strong>纵向拉伸</strong></span></div></td><td rowspan="1" colspan="1"><div data-type="p">​​<div data-type="image" data-display="block" data-align="left" data-src="https://cdn.nlark.com/lark/0/2018/png/18983/1535445040274-cb6ac43b-f71b-4068-8e43-4d58b07d8b20.png" data-width="283"><img src="https://cdn-pri.nlark.com/lark/0/2018/png/18983/1535445040274-cb6ac43b-f71b-4068-8e43-4d58b07d8b20.png" width="283"></div></div></td><td rowspan="1" colspan="1"><div data-type="p"><div data-type="image" data-display="block" data-align="center" data-src="https://cdn.nlark.com/lark/0/2018/png/18983/1535444461316-38e6d8ce-b94c-4349-9141-42b076b019f2.png" data-width="264"><img src="https://cdn-pri.nlark.com/lark/0/2018/png/18983/1535444461316-38e6d8ce-b94c-4349-9141-42b076b019f2.png" width="264"></div></div></td></tr></tbody></table>

##### 阅读模式的切换

在时间跨度比较大的时序数据图表中，纵向屏展示时很多数据细节会因清晰表达的原因隐藏掉，可以利用移动硬件的横竖屏的转换，横屏条件下展示更多信息。

<table style="min-width: 750px;"><colgroup><col width="327"><col width="423"></colgroup><tbody><tr height="34px"><td rowspan="1" colspan="1"><div data-type="alignment" data-value="center" style="text-align: center;"><div data-type="p">纵向</div></div></td><td rowspan="1" colspan="1"><div data-type="alignment" data-value="center" style="text-align: center;"><div data-type="p">横向</div></div></td></tr><tr height="34px"><td rowspan="1" colspan="1"><div data-type="p">​<div data-type="image" data-display="block" data-align="left" data-src="https://cdn.nlark.com/lark/0/2018/png/18983/1535507942454-68dc80e7-d612-46d4-8948-fbcf12a7a246.png" data-width="306"><img src="https://cdn-pri.nlark.com/lark/0/2018/png/18983/1535507942454-68dc80e7-d612-46d4-8948-fbcf12a7a246.png" width="306"></div></div></td><td rowspan="1" colspan="1"><div data-type="p">​</div><div data-type="p">​</div><div data-type="p"><div data-type="image" data-display="block" data-align="left" data-src="https://cdn.nlark.com/lark/0/2018/png/18983/1535528605277-c969b93b-7c69-4bfa-acca-1553928fa53f.png" data-width="401"><img src="https://cdn-pri.nlark.com/lark/0/2018/png/18983/1535528605277-c969b93b-7c69-4bfa-acca-1553928fa53f.png" width="401"></div>​</div><div data-type="p"></div><div data-type="p"></div><div data-type="p"></div><div data-type="p"></div><div data-type="p">​</div></td></tr></tbody></table>

## 总结

本文基于移动端硬件及用户习惯的特性，对数据可视化图表的展示从信息整理、交互手势、功能模块改造、适配布局等四个角度，给出了一些在移动端可视化设计中的建议和指引，文中使用的案例均基于我们在 AntV F2 组件库中的实践，但指引并非是局限性的规则，目的是希望让每一个设计师能够转变思维，根据自身实际的设计场景，给出最优秀的移动端可视化设计方案。

最后，移动端可视化在现阶段已远远不只是承载于手机、平板设备上，试想，随着人们在智能数据化、IoT 、及穿戴式、虚拟屏设备上的不断探索，移动端可视化的设计将会有更多的趣味和可能性，也希望在未来和大家一起来探索。
