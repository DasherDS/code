### Loader和Plugin的区别

Loader 用于处理资源文件，使其能够成为模块

Plugin 用于执行构建过程中的各种任务和优化，扩展webpack的功能



#### Loader

1. 作用：Loader用于处理模块中的资源文件，将它们转化成webpack可以理解的模块。
2. 资源处理：Loader处理各种资源文件，如JavaScript、css、图片、字体等、执行加载、转换、编译等任务
3. 模块级别：Loader工作在模块级别。通常用于处理单个文件或模块，它们之间与模块的内容交互
4. 配置：Loader通过Module.rules 进行配置，规定了哪些文件需要使用哪些Loader进行处理。
5. 示例：Bable Loader 用于将ES6+ JavaScript转换为ES5，css Loader 用于加载和处理css文件等。



#### Plugin

1. 作用：Plugin用于扩展webpack的功能，执行各种自定义构建任务和优化。
2. 构建过程控制：Plugin可以介入webpack的构建过程，在不同的生命周期执行任务，如代码压缩、文件生成、HTML注入等
3. 应用级别：Plugin工作在应用程序级别，可以操作整个构建过程，包括资源文件的加载和输出。
4. 配置：Plugin通过plugins进行配置，开发者可以根据需要添加不同的插件来扩展构建功能。
5. 示例：HtmlWebpackPlugin用于生成HTML文件，UglifyJSPlugin用于压缩代码