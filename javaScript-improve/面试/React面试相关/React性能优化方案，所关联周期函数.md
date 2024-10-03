### `React` 性能优化方案，所关联周期函数

1. 使用`PureComponent` 或 `shouldComponentUpdate` 方法来避免不必要的重新渲染。可确定是否需要重新渲染。
2. 使用`React.memo()` 来缓存组件，避免不必要的重新渲染。`React.memo()` 可以将组件的输入和输出缓存起来，避免相同的输入导致相同的输出。
3. 使用`React.lazy()`和`Supense`来延迟加载组件。可降低初始加载时间，并提高应用程序的性能
4. 使用`shouldComponentUpdate`或`React.memo()`来避免不必要的props更新，避免不必要的渲染。
5. 使用`React.useCallback()` 和`React.useMemo()` 来缓存函数和计算结果，避免不必要的函数调用和计算。
6. 使用`React.Fragment`来避免不必要的DOM节点。可减少DOM节点数量，提高应用程序的性能



`shouldComponentUpdate`方法和`React.memo()`与React性能优化的关联性较大。

- `shouldComponentUpdate`方法可以帮助你确定是否需要重新渲染组件，从而避免不必要的渲染。
- `React.memo()`可以将组件的输入和输出缓存起来，避免相同的输入导致相同输出，从而避免不必要的重新渲染。