const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name: {
        type: String,

    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    status:{
        type:String
        
    },    
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    }


})


module.exports = mongoose.model('user', userSchema)