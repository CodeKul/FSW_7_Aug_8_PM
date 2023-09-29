const express=require('express');
const app=express();
const bodyParser=require('body-parser');
// API -> listen, get, all, use, post

// Use JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// get -> request & response manage
app.get('/',(req,res)=>{
    // To send Response 
   
    // res.send('<h1>Response Sent </h1>');
    // res.status(505)
    // res.json({"msg":"Hello Budddy!!"});
    res.status(400).sendFile(__dirname+'/index.html');
});

app.get('/about',(req,res)=>{
    res.send('About us page');
});

// Routing parameter
// How to define route params -> /:ParameterName
app.get('/api/log/stuff/ad/log/:uname/:passw',(req,res)=>{
    // Admin & jds3edmd
    // How to fetch param data
    var username=req.params.uname;
    var passw=req.params.passw;
    if(username=="Admin" & passw=='jds3edmd' ){
        // res.send('Admin logged successful')
        res.sendFile(__dirname+'/admin.html');
    }
    else{
        res.send('Sorry u r unable to log');
    }
});

app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/form.html');
});

// POST API 
app.post('/formm',(req,res)=>{
    // Fetch data
    const userName=req.body.username;
    const email=req.body.email;
    const likes=req.body.likes;
    const colorr=req.body.col;
    const gender=req.body.gender;
    const hobbies=req.body.hobbies;
    const city=req.body.city;
    const dob=req.body.dob;
    const timee=req.body.time;

    // console.log(hobbies);
    res.send(userName+ ' ' + email + ' ' + likes + ' '+ colorr + ' ' + gender + ' ' + hobbies + ' '+city+ ' ' + dob + ' ' +timee);
})


// render 404 page using all()
app.all('*',(req,res)=>{
    res.status(404).send('<h1>404 Page not Found !! Sorry !!!</h1> <a href="/">BAck to home page</a> ');
});

// listen -> It defines port number
app.listen(8070,(err)=>{
    if(err) throw err;
    console.log('Server http://localhost:8070/')
});