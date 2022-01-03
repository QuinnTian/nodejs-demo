
var fs = require("fs");
/**
 *读取文件和console.log("程序执行结束!");并行输出 
 */
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");