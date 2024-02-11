const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    uname:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
})

const User = mongoose.model("User" , Userschema)
module.exports = User