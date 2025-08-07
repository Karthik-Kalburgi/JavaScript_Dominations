const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',function(req,res){
  res.send('Clhal raha hai')
})

app.listen(3001,function(){
  console.log('Server is running on port 3001');
})