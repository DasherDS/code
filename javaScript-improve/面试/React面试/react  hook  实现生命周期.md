### hook 实现生命周期

1. `componentDidMount`（组件挂载后）

   用于在组件首次渲染后执行副作用操作。

   ```jsx
   import { useEffect } from 'react'
   
   function Component() {
       useEffect(()=>{
           console.log('组件挂载')
       },[]) // 空数组确保只在组件挂载和卸载时运行
   }
   ```

2. `componentDidUpdate`：（组件更新后）

   用于在组件更新后执行操作，可以监控特定状态或属性的变化

   ```jsx
   import { useEffect, useState } from 'react'
   
   function Component() {
       const [count, setCount] = useState(0)
       
       useEffect(()=>{
           console.log('count 更新')
       },[count])
   }
   ```

3. `componentWillUnmount`（组件卸载前）

   用于在组件卸载签执行清理操作，例如取消订阅，清理定时器等

   ```jsx
   import { useEffect } from 'react'
   
   function Component(){
       useEffect(()=>{
         const timer = setInterval(()=>{
             console.log('计时中....')
         },1000)  
         
         return ()=> {
             clearInterval(timer)
             console.log('计时器清除')
         }
       },[])
   }
   ```

4. `getDerivedStateFormProps` 和 `shouldComponentUpdate`

   React 没有直接提供 Hooks 替代 `getDerivedStateFromProps` 和 `shouldComponentUpdate`。不过可以通过以下方法来实现类似的功能：

   - 条件渲染：可以在渲染时根据条件渲染觉得是否渲染某个部分
   - `useMemo` 和 `useCallback` ：使用`useMemo` 缓存复杂计算结果，避免不必要的更新；用`useCallbak`缓存函数引用

   通过 `useMemo` 代替 `shouldComponentUpdate` 的某些场景

   ```jsx
   import { useState, useMemo } from 'react'
   
   function Component({value}) {
       const expensiveCalculation = useMemo(()=>{
           return value * 2
       },[value])
   }
   ```

5. `componentDidCatch`（捕捉错误）

   可以通过 `Error Boundary` 实现错误边界，但`hooks`中没有直接的等价实现，需要使用`class`组件来创建 `Error Boundary`