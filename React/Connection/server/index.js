const express=require('express');
const router=express();
const bodyParser=require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.post('/login',(req,res)=>{
    // console.log("Login");
    const username=req.body.uname;
    const email=req.body.email;
    const passw=req.body.passw;

    // res.send(username+' '+email+' '+passw);

    res.redirect('http://localhost:3000/logg/')

});

router.listen(8595,()=>{console.log('http://localhost:8595/')});