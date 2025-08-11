const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/testapp1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

// Define user schema
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  image: String
});

// Export the model
module.exports = mongoose.model('User', userSchema); // Fix model export
