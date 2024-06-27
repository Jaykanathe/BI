const { string } = require("joi");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type: String,
        required: true,
    },
    image:{
        type:String,
      
    },
    verificationToken:{
        type:String,
       
    }

},{timestamps:true});

module.exports = mongoose.model("User",userSchema,"User");

