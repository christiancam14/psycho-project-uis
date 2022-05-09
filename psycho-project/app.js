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

//ejecutamos nuestro servidor con el puerto 3000
app.listen(3000, (req, res)=>{
    console.log('Servidor conrriendo en http://localhost:3000 ')
})

/* Metodos Get and Post */
//people
app.post('/', async (req, res)=>{
    const id_person = req.body.id_person
    const name = req.body.name
    const user_name = req.body.user_name
    const phone_number = req.body.phone_number
    const date_of_birth = req.body.date_of_birth
    const pass = req.body.pass
    let passwordHash = await bcrypts.hash(pass, 8) //contraseña encriptada
    connection.query('INSERT INTO users SET ?', {id_person:id_person, name:name, user_name:user_name, 
        phone_number:phone_number,date_of_birth:date_of_birth, pass:passwordHash}, async(error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.send("alta exitosa")
        }
    })
})
//students
app.post('/', async (req, res)=>{
    const id_student = req.body.id_student
    const student_code = req.body.student_code
    const image = req.body.image
    connection.query('INSERT INTO users SET ?', {id_student:id_student, student_code:student_code, image:image,}, async(error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.send("alta exitosa")
        }
    })
})