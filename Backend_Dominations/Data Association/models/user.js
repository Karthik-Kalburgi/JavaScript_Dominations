const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testingthedatabase');


const  userSchema = mongoose.Schema({

  username:String,
  email:String,
  age:Number,
  post:Array,

});

module.exports = mongoose.model('user',userSchema);
