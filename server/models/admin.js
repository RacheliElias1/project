const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    name:{
        type:String,
    },
    password:{
        type:String,
    },
    email:{
        type:String,  
    },
    status:{
        type:String,
    },
    users:[
        {type:mongoose.Schema.Types.ObjectId,ref:'User' }
   ]
})

module.exports=mongoose.model('Admin', adminSchema);