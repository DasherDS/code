/**
 * process
 * cwd()
 * exit()
 * argv()
 * platform()
 * kill(pid)
 * env
 */

/**
 * cwd  返回当前nodejs进程的工作目录  绝对路径
 * 跟当前文件在哪没关系，主要是得到运行node的命令行所在路径
 */
console.log("当前命令行", process.cwd());

/**
 * exit
 * 强制退出当前node进程
 * 可以传入退出码，0表示成功退出，默认为0
 */
setTimeout(() => {
  console.log("输出啦"); // 控制台没有输出
}, 2000);
process.exit();

/**
 * argv
 * String[]
 * 获取命令中所有参数
 */
console.log(process.argv);  // node index2.js abcdefg  需要单独运行

