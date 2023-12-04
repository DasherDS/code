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

### 绘制矩形

- 可以绘制两种举行，有三种方式

  - 填充的矩形（实心）`ctx.fillRect(x,y,width,height)`

  - 描边的矩形（空心）`ctx.strokeRect(x,y,width,height)`

  - `ctx.rect(x,y,width,height)`  设置矩形路径，默认没有效果 需配合 `ctx.stroke()`, `ctx.fill()`
    - 使用`fillStyle`属性设置填充的颜色
      - 使用`strokeStyle`属性设置描边颜色
      - 使用`lineWidth`属性设置描边的粗细
      - **一定要在绘制图形之前设置**

---

### `beginPath`方法

`stroke()` 或 `fill()`默认会对之前所有绘制的路径进行一个处理

当我们需要只对当前指定图形进行绘制时

就可以使用`ctx.beginPath()`方法，为不同的途设置途径开关（设置分组）

此时就只对紧邻这组路段进行一个绘制。

*一组路径可以有多个*

*使用`fillRect()`，`strokeRect()`不会有影响*    

---

### 绘制圆角矩形

使用`ctx.roundRect(x, y, width, height, r)`方法绘制圆角矩形

*r有多种写法，可以实现四个圆角单独设置*

`r:10 | [10]`（全部）

`r: [10,20]`（左上右下，右上左下）

`r:[10,20,30]`（左上，右上左下，右下）

`r:[10,20,30,40]`（上右下左）

---

### 绘制直线&折线

两点之间的连线：直线

多个直线连接：折线

使用`ctx.moveTo(x, y)`将画笔放置到指定的坐标系位置（起始点）

使用`ctx.lineTo(x,y)`从上一个点绘制直线路径到指定的点，也就是多个`ctx.lineTo(x,y)`连续使用就是折线了

---

### 线条`API`

`ctx.lineWidth`：设置线条的粗细

`ctx.lineCap`：设置线条端点的样式（连接点，线帽）

- `butt`：平的

- `round`：圆的（多出去的部分）
- `square`：方的（多出去的部分）

`ctx.lineJoin`：设置折线连接处的样式

- `miter`：尖的（默认）
- `round`：圆的
- `bevel`：平的

`ctx.miterLimit`：设置折线形成尖的限制

- 当线条比较粗，折线的夹角比较小，`lineJoin`的`miter`设置形成的尖会比较长，可以利用该属性来控制长短。

`ctx.setLineDash(array)方法`：设置虚线

- `array`中可以放置多个数值，分别表示线段的长度和线段间留白的长度
- `array = [10]`线段长度和留白的长度都是10
- `array = [20,10]`线段的长度 20 和留白的长度 10 
- `array = [10,20,30]`会按照数组的数列无限的延续下去（线段10，留白20，线段30，留白10，线段20，。。。。。。）

`ctx.lineDashOffset`：设置虚线起始位置的偏移

---

### 清除画布

大多数情况下，当`canvas`配合`js`动画实现动画效果的时候默认每一次都是在之前的基础上进行绘制，所以应该清除赏上一次的绘画效果重新绘制。

使用`ctx.clearRect(x, y, width, height)`清除画布中的指定矩形区域

- 如果`width`和`height`等于画布的宽高就相当于清除整个画布，否者清除画布的部分区域。

> 清除画布的本质就是将指定的矩形区域设置透明度为0，之前的路径依然存在。此时如果没有配合`beginPath`，而是继续`stroke()`或者`fill()`那么清除效果重新

---

### `closePath`

多个连续的线条合围的区域是可以使用`fill()`填充的。如果需要首尾节点自动闭合可以使用`ctx.closePath()`

---

### 绘制圆弧

`arc(x, y, r, startAngle, endAngle[, dir])`

- `x,y`：圆点坐标

- `r`：半径

- `startAngle`：起始绘制的角度。默认圆的x轴右侧半径位置为绘制的起始点。（0度点）

- `endAngle`：绘制的结束点的角度

- `dir`：绘制的方向 `true`： 逆时针方向  ， `false`：顺时针

- > 设计圆弧时用的是角度，传递参数时传递的是弧度。
  >
  > **`1角度 = Math.PI / 180`**

`arcTo(x1,y1,x2,y2,r)`

由三个控制点实现圆弧的绘制

`moveTo`或者上一次图形结束的点为第一个点

`x1,y1`：是第二个点

`x2,y2`：是第三个点

按照1，2，3顺序进行连线，两条线形成一个夹角。根据`r`绘制圆弧，保证两个线条相切。

---

### 绘制椭圆

`ctx.ellipse(x,y,rx,ry,route,startAngle,endAngle,dir)`

- `x,y`：圆点坐标
- `rx,ry`：`x`轴半径和``y`轴半径
- `route`：`x`轴旋转角度（顺时针）
- `startAngle`：起始点角度默认0度，三点钟方向
- `endAngle`：终点角度
- `dir`：`true`： 逆时针方向  ， `false`：顺时针

---

### 绘制曲线

**贝塞尔曲线**

- 二次贝塞尔曲线
- 三次贝塞尔曲线

有一个起点和终点，在两个点中间有多个控制点*有一个控制点称为**二**次贝塞尔曲线，两个控制点为**三**次贝塞尔曲线*。

从起点经过控制点，到终点依次连线。提供一个参数`t`在[0-1]范围内变化，每一个`t`都存在以下情况

1. 在任意线段中，从起点到终点，存在一个中间点，使得前部分线段 / 整体线段 =  `t`
2. 对每条线段的的这些点，再一次连接，形成一批新的线段（比之前一批少一条）。在新的一批线段中，依然存在符合比例`t`的那个点
3. 重复之前连线，找点的操作
4. 直到找到最后一个点，就是此贝塞尔曲线，在当前比例`t`时曲线的点

当`t`在0-1范围内变化时，每次都会有一个这样的点，这些线点连接后就形成了贝塞尔曲线

**一次贝塞尔曲线**

![img](https://www.runoob.com/wp-content/uploads/2018/12/240px-b_1_big.gif)

**二次贝塞尔曲线**

![img](https://www.runoob.com/wp-content/uploads/2018/12/b_2_big.gif)

**三次贝塞尔曲线**

![img](https://www.runoob.com/wp-content/uploads/2018/12/b_3_big.gif)



`ctx.quadraticCurveTo(cx1,cy1,ex,ey)`

- `cx1,cy1`：控制点的坐标
- `ex,ey`：终点的坐标
- 起点的坐标是`moveTo`设置或上一次绘图的结尾

`ctx.bezierCurveTo(cx1,cy1,cx2,cy2,ex,ey)`：三次贝塞尔曲线

---

### 绘制文本

`ctx.fillText(textStr,x,y[, maxWidth])`：填充文本

- `textStr`：文本内容
- `x,y`：文本位置（坐标）
- `maxWidth`：（可选）设置文本最大宽度
  - 如果文本宽度  > 最大宽度 就会缩放，压缩在`maxWidth`范围内

`ctx.strokeText()`：描边文本（镂空）

`ctx.font`设置文本样式

- 粗体
- 斜体
- 大小
- 字体：`sans-serif`

> 必须设置字体，否则其他样式无效

`ctx.textAlign`：设置基于锚点水平位置`(left,center,right)`

`ctx.textBaseline`：设置基于锚点的垂直位置`(top,middle,bottom)`

`ctx.measureText("填充文本")`：预估

```javascript
const obj = ctx.measureText("填充文本");
console.log(obj);

TextMetrics:{
    actualBoundingBoxAscent: 43.515625
    actualBoundingBoxDescent: -3.515625
    actualBoundingBoxLeft: 80
    actualBoundingBoxRight: 80
    alphabeticBaseline: 9.515625
    fontBoundingBoxAscent: 51.515625
    fontBoundingBoxDescent: 0.484375
    hangingBaseline: 43.115623474121094
    ideographicBaseline: -0.484375
    width: 160
}
```

---

### 绘制图形

#### 基本使用

需要有一个图片源

- `image`对象对应`img`标签
  - 可以是图片的路径
  - 可以是`base64`表示
- `video`对象
- `canvas`对象

`ctx.drawImage(imgSource,x,y)`：会按照图像原大小展示

`ctx.drawImage(imgSource,x,y,width,height)`：图像展示的大小（缩放处理）

`ctx.drawImage(imgSource,x1,y1,w1,h1,x2,y2,w2,h2)`：

- `x1,y1,w1,h1`：图像的截图区域，此时给予图像的坐标系
- `x2,y2,w2,h2`：画布展示区域

#### 图像与动画

#### 视频图像

在视频播放中，抓取当前帧作为图像，引入`canvas`

---

#### 引入`canvas `图像

`canvas`本身也是一个图像，也可以作为图像源，引入另一个`canvas`画布。

下载 右键下载；编程式下载

- `toDataURL()`：默认`png`格式
  - `toDataURL('image/jpg')`
- 如果`canvas`中的图像来自于其他的图像源可能出现同源问题：画布被污染
  - 设置同源策略
  - 服务器启动

---

#### 图像像素处理

`imageData`对象，包含了某一个区域的像素值

- `imageData.width`
- `imageData.height`
- `imageData.data array`：包含区域内所有的像素值(`rgba`值)
  - `array` ：是一个以为数组，每四个位置表示一个像素值。
  - `(x,y)`：像素值为
    - `(imageData.width * 4) * x + y * 4 + 0/1/2/3 `

使用`ctx.getImageData()`：获取画布中指定区域的`ImageData`对象

获得`ImageData`对象后，就可以通过其获得每一个像素的值，也可以设置每一个像素的值，设置之后不会默认生效，还需要重新设置画布的`ImageData`，使用`ctx.putImageData(ImageData,x,y)`

---

### 图像合成

`ctx.globalCompositeOperation`属性设置合成机制

需要在前后两个图形中间设置

#### 路径合成

- `source-over`：前后图形都展示，后面的图形覆盖在前面的图形上（默认值）
- `source-over`：只展示后面的图像，展示重叠的部分
- `source-out`：只展示后面的图像，展示不重叠的部分
- `source-atop`：展示前面的图形，后面的图形只展示与前面图像重叠的部分
- `destination`：系列（`over,in,out,atop`）上述合成特点，前后图像交换
- `copy`：后面的图形覆盖前面的图像（前面的图像不展示了）
- `xor`：展示前后图形非重叠的部分

#### 颜色合成

关注的是颜色的混合，图像的形状没有变化

- `lighter`：重叠部分的颜色相加
- `multiply`：整体偏暗
- `screen`：整体偏亮
- `darken`：同一个像素的颜色，取暗色（整体偏 暗）
- `lighten`：同一个像素的颜色，取亮色（整体偏亮）

---

### 颜色渐变

#### 线性渐变

`const gradient = ctx.createLinearGradient(x0,y0,x1,y1)`

`x0,y0,x1,y1`会按照两点连线方向渐变（渐变中两点是基于坐标系的，最总在图形中显现的渐变效果可能与预期不同）

使用`gradient.addColorStop(%,color)`方法设置渐变过程中每一部分的颜色

设置`ctx.fillStyle = gradient` 或者 `ctx.strokeStyle= gradient`

> 如果渐变范围比图形范围小，图形范围的两侧就是渐变两侧的颜色

#### 径向渐变

`const gradient = ctx.createRadialGradient(x1,y1,r1,x2,y2,r2)`

`x1,y1,r1`：表示渐变开始的圆

`x2,y2,r2`：表示渐变结束的圆

> 一般都是一个大圆一个小圆才会有效果
>
> 小圆一定要在大圆内，否则会出现意想不到的效果
>
> 小圆以内大圆以外的范围就是渐变两端的颜色

#### 锥形渐变

` const gradient = ctx.createConicGradient(startAngle,x,y)`

`startAngle`：旋转角度（默认0度角，3点钟方向）

>`startAngle`：使用的是角度对应的弧度制

---

### 图像阴影

`ctx.shadowBlur`：设置模糊程度，数字越大，越模糊

`ctx.shadowColor`：设置阴影颜色

`ctx.shadowOffsetX,ctx.shadowOffsetY`：设置阴影的偏移量

---

### 滤镜

`ctx.filter`：

- `ctx.filter = "blur(10px)"`：值越大，模糊效果越明显
- `ctx.filter = "brightness(0.5)"`：1 原样子，小于1 变暗   大于1 变亮
- `ctx.filter = "contrast(0.5)"`：1 原样，小于1 颜色接近  大于1颜色鲜明
- `ctx.filter = "saturate(0.5)";` ：1 原样，小于1 颜色变灰 大于1颜色鲜明
- `ctx.filter = "grayscale(0.5)";`：0 原样 1变灰
- `ctx.filter = "sepia(0.5)";`：1 怀旧风格 0 原样

---

### 图像变换

对图像进行移动，旋转，缩放，矩阵斜切。

#### 图像移动

移动不是动画只是视觉位置上的变化

`ctx.translate(x,y)`

> **实际移动的不是图像而是坐标系**
>
> 对于之前就已经绘制过的图像没有影响

#### 图像的缩放

本质也是对坐标系的操作，横纵坐标系的缩放

`ctx.scale(xRatio,yRatio)`：

- `0 ratio <1` ：相当于缩小

- `ratio > 1` ：相当于放大
- 负数：整个坐标系的方向发生反转

#### 图像旋转

`ctx.rotate(angle)`顺时针旋转的角度

逻辑上传递的是角度，语法上要求传递是弧度
