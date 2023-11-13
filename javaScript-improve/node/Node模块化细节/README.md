### 1. 模块的查找

- 绝对路径

  - 根据绝对路径直接加载模块

- 相对路径 ./ 或者 ../

  - 相对于当前模块
  - 转换为绝对路径
  - 加载模块

- 相对路径

  - 检测是否是内置模块，如`fs`,`path`等
  - 检查当前目录中的`node_modules`
  - 检查上级目录中的`node_modules`
  - 转换为绝对路径
  - 加载模块

- 关于后缀名

  - 如果不提供后缀名，自动补全
  - `js`,`json`,`node`,`mjs`,

- 关于文件名
  - 如果仅提供目录，不提供文件名，则自动寻找改目录中的`index.js`
  - `package.json`中的`main`字段
    - 表示包的默认入口
    - 导入或执行时若仅提供目录，则使用`main`补全入口
    - 默认值为`index.js`

### 2. `module`对象

- 记录当前模块的信息

### 3. `require`函数

### 4. 当执行一个模块或者使用`require`时，会将模块放置在一个函数环境中

---

### 5. `node`中的 ES 模块化

- 目前 node 中的 ES 模块化仍然处于试验阶段

- 模块化要么是`commonjs`，要么是 ES

  - `commonjs`默认情况下都是`commonjs`
  - ES
    1. 文件后缀名为 `mjs`
    2. 最近的`package.json`中的`tyep`的值是`module`

- 当前使用 ES 模块化运行，必须添加`--experimental-modules`标记

---

### 6. 基本内置模块

- [**`os`**](https://nodejs.org/dist/latest-v20.x/docs/api/os.html)
  - `EOL` : 一行结束的分隔符（不同系统的分隔符是不同的）
  - `arch()` : 获取`cpu`的架构名
  - **`cpus()`** : 获取`cpu`的每一个核的信息
  - `freeman()` : 得到当前空闲的内存
  - `homedir()` : 获取用户目录
  - `hostname()` : 获取主机名
  - **`tmpdir()`** : 获取操作系统的临时目录
- [**`path`**](https://nodejs.org/dist/latest-v20.x/docs/api/path.html)
  - **`basename`** : 获取路径最后一个部分
  - `sep` : 分隔符
  - `delimiter` : 系统分隔符 `win`和其他的不一样 `win`--> ;
  - **`dirname`** : 获取目录  给一个路径获取目录 （不检查路径是否存在）(去掉最后一块)
  - **`extname`** : 获取后缀名 (没有后缀名结束空字符串)
  - **`join`** : 多段路径拼接成一个完整路径
  - `normalize` : 得到一个规范化的路径
  - `relative` : 两个路径 第二个路径相对于第一个路径的相对路径
  - **`resolve`** : 得到绝对路径 （根路径）
- [**`url`**](https://nodejs.org/dist/latest-v20.x/docs/api/url.html)  `url`字符串处理
- [**`util`**](https://nodejs.org/dist/latest-v20.x/docs/api/util.html)
  - `callbackify` : 异步函数转换成`callback`
  - `inherits` : 继承 子类第一个  父类第二个 现在有`class`
  - **`isDeepStrictEqual`** : 深度严格比较
  - **`promisify`** `callback` 转换成 `promise`异步模式
