const express = require('express');
const app = express();
const userModel = require('./usermodel');




app.get('/',function(req,res){
    res.send('Hello World!');
})

app.get('/create'  ,  async (req,res) =>{
 let createduser = await  userModel.create({
        name:'KK',
        username:'KK123',
        email:'kk@12345gmail.com',
    })
    res.send(createduser);
})

app.listen(3001,function(){
    console.log('Server is running on port 3001');
})