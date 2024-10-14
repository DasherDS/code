### setTimeout 实现倒计时 和 setInterval 的区别

```javascript
const countDown = (count) => {
    setTimeout(()=>{
        count--;
        if(count > 0){
            countDown(count)
        }
    },1000)
}

count(10)
```

```javascript
let count = 10;
let timer = setInterval(()=>{
    count--;
    if(count <= 0){
        clearInterval(timer);
        timer = null;
    }
},1000)
```



**setTimeout**：每一秒生成一个任务，等待一秒后执行，执行完成后，再生成下一个任务，等待一秒后执行，如此循环，所以第一个任务时间的间隔保证是1秒

**setInterval**：无视执行时间，每一秒往队列添加一个任务，等待一秒后执行，这样会导致任务执行间隔小于1秒，甚至任务堆积。



PS：setInterval 中当任务执行时间大于任务间隔时间，会导致消费赶不上生产。