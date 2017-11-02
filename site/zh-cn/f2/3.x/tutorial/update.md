<!--
index: 3
title: 升级建议
resource:
  jsFiles:
    - ${url.f2}
-->

# 升级到F2

F2 是由 G2-mobile 升级而来，两者基本兼容，本章列出从 G2-mobile 升级到 F2 的注意事项

## F2 跟 G2-mobile 的差异

跟 g2-mobile 相比 F2 的变化：

* 命名空间 GM 改成 F2 ==不兼容==
* animate 接口简化 ==不兼容==
  ```js
   // 2.0
   chart.aniamte().wavec({
    duration: 2000,
    easing: 'elastic',
    success: function() {
      alert('ok');
    } 
   });
   
   // 3.0
   chart.animate({
    type: 'wavec',
    duration: 2000,
    easing: 'elastic',
    success: function() {
      alert('ok');
    } 
   });
  ```
  
* new chart() 时的配置项
  + margin 改成 padding
  为了升级方面，margin 还保留支持
  ```js
  // 2.0
  var chart = new Chart({
    margin: 20
  });
  // 3.0
  var chart = new Chart({
    padding: 20
  });
  ```
  
  + 增加 width, height 属性，可以不在 canvas 上指定宽高
  + 增加 pixelRatio 属性
  
* intevalStack,intervalDodge,areaStack 不再在chart 上支持 ==不兼容==

  F2 3.0 所有的geomety 都支持数据调整
  ```js
    // 2.0
    chart.intervalStack().position('a*b');
  // 3.0
  chart.interval().position().adjust('stack')
  ```
  
* 自定义Shape 的接口，更改了函数名称，但是保留原先函数名的支持
  + registShape 改成  registerShape
  + getShapePoints 改成 getPoints
  + drawShape 改成 draw

  ```js
  // 2.0
  G2.Shape.registShape('interval', 'custom', {
    getShapePoints(cfg) {},
  drawShape(cfg, canvas) {}
  });
  
  G2.Shape.registerShape('interval', 'custom', {
    getPoints(cfg) {},
  draw(cfg, canvas) {}
  });
  ```
  
* 时间分类（timeCat) 类型数据的 mask 改成标准格式 ==不兼容==
  新的 mask 参考[fecha](https://github.com/taylorhakes/fecha)

## 升级建议

1. 更改所有的 GM 命名空间到 F2
2. 将 intervalStack, intervalDodge,areaStack 的写法改成 .adjust() 的写法
3. 检查是否有 timeCat 类型，自己修改了 mask
4. animate 接口的变化
5. 自定义shape 虽然依然保持兼容，但是建议改成新的写法
