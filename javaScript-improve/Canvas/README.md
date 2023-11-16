# `Canvas`



- `canvas`是一个行内元素
- `canvas`可以使用`width`和`height`设置区域宽高（默认宽高：300*150）



**坐标系**

每一个画布中都有一个坐标系统，画布的左上角为默认的（0，0）原点



**画布区域**

使用`width`和`height`属性控制区域

这个区域有多大，其包含的坐标系就有多大



**放置区域**

使用`style`样式控制区域大小

画布区域中绘制的图形，最终会在放置区域中展示

默认放置区域与画布区域相同

放置区域如果比画布区域大或小，画布中的图形就会按比例放大或缩小（图形失真）



# 绘制图形

1. 可以绘制两种举行，有三种方式
   - 填充的矩形（实心）`ctx.fillRect(x,y,width,height)`
   - 描边的矩形（空心）`ctx.strokeRect(x,y,width,height)`
   - `ctx.rect(x,y,width,height)`  设置矩形路径，默认没有效果 需配合 `ctx.stroke()`, `ctx.fill()`
     - 使用`fillStyle`属性设置填充的颜色
     - 使用`strokeStyle`属性设置描边颜色
     - 使用`lineWidth`属性设置描边的粗细
     - **一定要在绘制图形之前设置**
2. 





