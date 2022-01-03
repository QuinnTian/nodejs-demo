/**
 * 阻塞代码：顺序执行，执行完打开文件 才会继续往下读取
 */
//引入读取文件的库
var fs = require("fs");
//调用方法打开文件
var data = fs.readFileSync('input.txt');
//读取到的数据输出
console.log(data.toString());
console.log("程序执行结束!");