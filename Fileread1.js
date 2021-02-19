var fs = require("fs");
fs.writeFileSync('test.txt',"i m deepanshu kashyap");
//fs.writeFileSync('test.txt',"Wlcome to the page");
//var read=fs.readFileSync('test.txt');
//console.log(read);
//fs.appendFileSync('test.txt',"hello i m deepanshu kashyap");
var data=fs.readFileSync('test.txt');
data1=data.toString();
console.log(data1);