const express = require('express');  //express es un framwork de nodejs para hacer apis REST
const bodyParser = require('body-parser'); //body-parser es un middleware de express para parsear el cuerpo de las peticiones
const cors = require('cors');//cors es un middleware de express para permitir peticiones de otros dominios

const jwt = require('jsonwebtoken'); //jsonwebtoken es un modulo para crear y verificar tokens
const bcrypt = require('bcryptjs'); //bcryptjs es un modulo para encriptar contraseñas
const mongoose = require('mongoose'); //mongoose es un modulo para conectarse a una base de datos mongodb
const dotenv = require('dotenv'); //dotenv es un modulo para cargar variables de entorno desde un archivo .env

const app = express();//app es una instancia de express
app.use(cors());//permitir peticiones de otros dominios

app.use(express.json({limit:'50mb'}));//parsear el cuerpo de las peticiones con formato json, con un limite por solicitud de 50 MB
app.use(express.static(`${__dirname}/public`));



app.set('jwtkey','sd#asdv0%');// clave secreta para firmar los tokens


////////Get and Add Users/////////
let users = [];
let id = 1;


app.get('/api/getusers', (req,res)=>{

    res.json(users);

});

app.post('/api/adduser', (req,res)=>{

    let bodyRequest = req.body;
    const newUser = {id:id++, 
                    user:bodyRequest.user, 
                    password:bodyRequest.password,};

    users.push(newUser);
    res.json(newUser);

});

///////////////////




/////////Run server///////////

const port = 3001;
app.listen(port,()=>{
    console.log(`Server runing in: http://localhost:${port}`)
})