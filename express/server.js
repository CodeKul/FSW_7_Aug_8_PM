const express=require('express');
const app=express();

// API -> listen, get, all, use, post

// get -> request & response manage
app.get('/',(req,res)=>{
    // To send Response 
   
    // res.send('<h1>Response Sent </h1>');
    // res.status(505)
    // res.json({"msg":"Hello Budddy!!"});
    res.status(400).sendFile(__dirname+'/index.html');
})

// listen -> It defines port number
app.listen(8070,(err)=>{
    if(err) throw err;
    console.log('Server http://localhost:8070/')
});