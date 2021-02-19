var fs=require('fs');
console.log("first statement");
/*fs.readFile('text.txt',function(err,data){
    if(err){
        console.log("could not find the file or open the file");
    }else{
        //console.log(data);for simle
        console.log(data.toString());
    }
});*/
var fdata=fs.readFileSync('text.txt');
console.log(fdata);
console.log("last Statement");