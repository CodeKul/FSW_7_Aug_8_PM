// http -> Hyper Text Transfer Protocol (http)
const http=require('http');
const fs=require('fs')

//  server create + Port define

http.createServer(
    // (Request,Response)=>{}
    (req,res)=>{
        // Create response
        // res.write('<h1> Hello <br/> World !!! </h1>'); // Write response on webpage
        // res.end(); //complete your response

        // console.log(req.url);

        if(req.url=='/'){
            fs.readFile('index.html','utf-8',(err,data)=>{
                res.end(data);
            })

        }
        else if(req.url=='/about'){

            fs.readFile('about.html','utf-8',(err,data)=>{
                res.end(data);
            })

        }

        else{
            res.end('<h1>404 page not found </h1>');
        }

    }

).listen(
    // Port Define Handler
    // 1024-9999 (3306,3000) (8080,8000)
    8051,(err)=>{
        if(err) throw err;
        console.log('http://localhost:8051/');
        // To stop server Kill -> CTRL + c
    }
);