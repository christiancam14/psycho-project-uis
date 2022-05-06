//llamamos a express
const express = require("express");
// CORS
const cors = require('cors');

// creamos la variable para usar los metodos de express
const app = express();

app.use(cors());

//capturar datos del formulario setando urlencode
app.use(express.urlencoded({extended:false}))
//especificamos que trabajamos con json
app.use(express.json())

//invocamos a dovenv
const dotenv = require('dotenv')
//las variables de entorno estaran en .env
dotenv.config({path:'./env/.env'})

//carpeta public
app.use('/resources', express.static('public'))
app.use('/resources', express.static(__dirname + '/public'))

//establecer motor de plantillas ejs
app.set('view engine', 'ejs')

//encriptado con bcrypts
const bcrypts = require('bcryptjs')

//variables de sesion
const session = require('express-session')
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true 
}))

//invocamos conexion de la base de datos
const connection = require('./database/db')

//establecemos rutas
app.get('/', (req, res)=>{
    res.render('index', {msg:'este es un mensaje desde node'})
})

//establecemos rutas
app.get('/login', (req, res)=>{
    res.render('login')
})

app.get('/register', (req, res)=>{
    res.render('register')
})

//hacer registro de usuarios
app.post('/register', async (req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    let passwordHash = await bcrypts.hash(password, 8); //contraseña encriptada
    connection.query('INSERT INTO people SET ?', {user_name:name, name:name, email_address:email, password:passwordHash}, async(error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.send("alta exitosa")
        }
    })
})

//COMIENZA EL CRUD DE ADMIN
// POST

//ejecutamos nuestro servidor con el puerto 3000
app.listen(3000, (req, res)=>{
    console.log('Servidor conrriendo en http://localhost:3000 ')
})

