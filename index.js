// console.log("hello world");
// const a = 10;
// const b = 20;
// console.log(a+b);
const myMathLib =require('./math')

const sum = myMathLib.addTwonum(10,20);
const diff = myMathLib.subTwonum(20,10);

console.log(sum);
console.log(diff);





// file system 



// const fs = require('fs')
// fs.readFile('./hello.txt',function(err,data){
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// })

// fs.appendFile('./hello.txt','\n im doing great',function (err) {
//     if (err) console.log(err)
    
// })



//operating system


// const os = require('os');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.totalmem());


//creating server

// const http = require('http');
// const url = require('url');
// const fs= require('fs');

// const server = http.createServer(function requestHandler(req,res) {
    //locol host 5000
    // console.log('request made');
    // res.write('hello world');
    // res.end();
    // console.log('response sent');

//     const URL = url.parse(req.url, true);
//     console.log(req.method);
//     if (URL.pathname=='/hello') {
//         fs.readFile('hello.html',function(err,data){
//             res.write(data);
//             res.end();
//         })
//     }
// })

// server.listen(5000,function(){
//     console.log("server runing on port 5000");
// })


// express part

const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('hiii')
})

app.listen(5000,()=>{
    console.log('server running');
})