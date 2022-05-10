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

/* Metodos Get and Post */
//people
app.post('/', async (req, res)=>{
    const name = req.body.name
    const user_name = req.body.user_name
    const phone_number = req.body.phone_number
    const date_of_birth = req.body.date_of_birth
    const pass = req.body.pass
    let passwordHash = await bcrypts.hash(pass, 8) //contraseña encriptada
    connection.query('INSERT INTO people SET ?', { name:name, user_name:user_name, 
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
    const student_code = req.body.student_code
    const image = req.body.image
    connection.query('INSERT INTO students SET ?', { student_code:student_code, image:image,}, async(error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.send("alta exitosa")
        }
    })
})

//psychologists

app.post('/', async (req, res)=>{
    const image = req.body.image
    connection.query('INSERT INTO psychologists SET ?', {image:image}, async(error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.send("alta exitosa")
        }
    })
})

// appointments

app.post('/', async (req, res)=>{
    const registration_date = req.body.registration_date
    connection.query('INSERT INTO appointments SET ?', {registration_date:registration_date}, async(error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.send("alta exitosa")
        }
    })
})

// consultations

app.post('/', async (req, res)=>{
    const description = req.body.description
    const clasification = req.body.clasification
    connection.query('INSERT INTO consultations SET ?', {description:description, clasification:clasification}, async(error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.send("alta exitosa")
        }
    })
})

// landingpages

app.post('/', async (req, res)=>{
    const email = req.body.email
    const text = req.body.text
    connection.query('INSERT INTO landingpages SET ?', {email:email, text:text}, async(error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.send("alta exitosa")
        }
    })
})

// tests

app.post('/', async (req, res)=>{
    const report = req.body.report
    connection.query('INSERT INTO tests SET ?', {report:report},
     async(error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.send("alta exitosa")
        }
    })
})

// locations

app.post('/', async (req, res)=>{
    const street = req.body.street
    const city = req.body.city
    const state = req.body.state
    const postal_code = req.body.postal_code
    const country = req.body.country
    connection.query('INSERT INTO locations SET ?', { street:street, city:city, 
        state:state, postal_code:postal_code, country:country}, async(error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.send("alta exitosa")
        }
    })
})