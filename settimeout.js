console.log("first statement");
var fs=require('fs');
console.log("file read statement");
fs.readFile('text.txt',function(err,data){
    if(err){
        console.log("could not find the file or open the file");
    }else{
        //console.log(data);for simle
        console.log(data.toString());
    }
});
setTimeout(() => {
    console.log("second time interval statement");
}, 0);
setTimeout(() => {
    console.log("third statement" );
}, 0);
console.log("last statement");