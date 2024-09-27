### 什么是React中的上下文（Context）它有什么作用

在React中，上下文（Context）是一种用于在组件树中共享数据的方法。它允许数据在组件之间传递。而不需要通过显式地将props逐层传递下去。上下文提供了一种在组件之间共享数据的便携方式。

上下文由两个主要组件组成

- `React.createConText`：该函数用于创建上下文对象。他接收一个初始值作为参数，并返回一个上下文对象。例如：

  ```jsx
  const MyContext = React.createContext();
  ```

- `provider`组件：该组件用于将数据传递给后代组件。通过`Provider`组件的`value`属性，可以将数据传递给下一层组件，例如

  ```jsx
  <MyContext.Provider value={myData}>
      {/*后代组件*/}
  </MyContext.Provider>
  ```

- `Consumer`组件或`useContext`钩子：后代组件可以使用`Consumer`组件或`useContext`钩子来访问上下文中的数据。

- 使用 `Consumer`

  ```jsx
  <MyContext.Consumer>
      {
          value => (
          	// 使用上下文中的数据
          )
      }
  </MyContext.Consumer>
  ```

- 使用`useContext`钩子

  ```jsx
  const value = useContext(MyContext);
  ```



**上下文的作用**

- 数据共享：上下文允许在组件树中共享数据，而不需要通过逐层传递props。这对于许多组件需要访问相同的数据的情况非常有用。
- 简化组件之间的通信：上下文提供了一种简化组件之间通信的方式。数据可以直接在上下文中共享，而不需要将其传递给每个中间组件
- 跨层级访问数据：上下文允许组件树在不同层级中访问共享的数据，这对于需要在深层嵌套的组件之间传递数据非常方便

需要注意的是，上下文不应被滥用，过多的使用上下文可能导致组件之间的耦合性增加，并使代码难以维护。因此，在使用上下文时需要谨慎评估是否真的需要共享数据，并确保上下文使用合理和适度