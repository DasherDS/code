### webpack常用的Plugin

- HtmlWebpackPlugin：用于生成HTML文件，并自动引入打包后的JavaScript和css文件。它还支持模块，可以根据模板生成HTML，非常适合页面应用。
- MiniCssExtractPlugin：用于提取css文件到单独的文件，而不是将css嵌入到JavaScript中，这有助于提高性能和代码可维护性。
- CleanWebpackPlugin：用于在每次构建前清理输出目录，确保输出目录中不会残留旧的文件。
- CopyWebpackPlugin：用于复制静态文件（如图片、字体等）到输出目录，以便在生产环境中引用。
- DefinePlugin：允许你在代码中定义全局常量，用于在开发和生产环境中切换配置，例如设置API的不同地址。
- HotModuleReplacementPlugin：用于启用webpack的热模块替换（HMR）功能，允许在开发过程中实时查看代码更改的效果。
- ProvidePlugin：用于在代码中自动加载模块，可以减少模块导入的代码。
- BundelAnalyzerPlugin：用于分析构建输出的包大小，帮助识别和解决优化问题。
- FriendlyErrorsWebpackPlugin：改善开发体验，提供更友好的构建错误信息，以便更容易定位问题。
- ESLintWebpackPlugin：集成ESLint代码检查，用于在构建过程中检查和修复代码问题。
- stylelint-webpack-plugin：用于集成stylelint，对css和sass等样式文件进行代码检查。