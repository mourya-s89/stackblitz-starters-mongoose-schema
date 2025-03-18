const mongose = require('mongoose');
const profileSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age:{
        type: Number,
        min: 0,
    },
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
      },
      email: {
        type: String,
        required: true, 
        unique: true,  
      },
      password: {
        type: String,
        required: true,
        minlength: 6, 
      },
      roles: {
        type: [String], 
        default: ['user'], 
      },
      profile: {
        type: profileSchema, 
        required: true, 
      },
      lastLogin: {
        type: Date,
        default: Date.now, 
      },
    }, { timestamps: true }); 
    
   
    const User = mongoose.model('User', userSchema);
    
  
    module.exports = User;