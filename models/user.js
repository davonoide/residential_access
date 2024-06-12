const mongoose = require('mongoose');// mongoose es un modulo para conectarse a una base de datos mongodb


const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:[true,'The Username is required'],
    },
    password:{
        type:String,
        required:[true,'The password is required'],
    },
    role:{
        type:String,
        required:[true, 'The role is required'],
    }
});

module.exports = mongoose.model('User',userSchema); //exportar el modelo de usuario