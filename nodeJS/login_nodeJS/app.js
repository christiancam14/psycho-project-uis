//llamamos a express
const express = require("express");
// creamos la variable para usar los metodos de express
const app = express();

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
    const user = req.body.user
    const name = req.body.name
    const rol = req.body.rol
    const pass = req.body.pass
    let passwordHash = await bcrypts.hash(pass, 8) //contraseña encriptada
    connection.query('INSERT INTO users SET ?', {user:user, name:name, rol:rol, pass:passwordHash}, async(error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.send("alta exitosa")
        }
    })
})

//ejecutamos nuestro servidor con el puerto 3000
app.listen(3000, (req, res)=>{
    console.log('Servidor conrriendo en http://localhost:3000 ')
})

