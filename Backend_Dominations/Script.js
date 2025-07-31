const express = require('express');
const app = express();


app.use(function(req,res,next){
  console.log('middleware chala na');
  next();
  
})
app.use(function(req,res,next){
  console.log('middleware chala ek aur baarr!!!');
  
})
app.get('/',function(req,res){
    res.send('Chapmion mera anuj')
})


app.get('/profile',function(req,res){
    res.send('CHampion uska coach Sheryians')
})
  
app.get('/about',function(req,res){
  res.send('KK is  my name');
  
})

app.listen(3001);