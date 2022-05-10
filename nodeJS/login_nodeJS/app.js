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
//get
app.get("/", (res) => {
        var query = "select * FROM people ORDER BY id DESC";
        connection.query(query, function (error, data) {

            if (error) {
                throw error;
            }
            else {
                res.render('people', { title: 'psycho-project database', action: 'list', people:data });
            }
        });
    })
//post
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
//get
app.get("/", (res) => {
    var query = "select * FROM students ORDER BY id DESC";
    connection.query(query, function (error, data) {

        if (error) {
            throw error;
        }
        else {
            res.render('students', { title: 'psycho-project database', action: 'list', students:data });
        }
    });
})
//post
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
//get
app.get("/", (res) => {
    var query = "select * FROM psychologists ORDER BY id DESC";
    connection.query(query, function (error, data) {

        if (error) {
            throw error;
        }
        else {
            res.render('psychologists', { title: 'psycho-project database', action: 'list', psychologists:data });
        }
    });
})
//post
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

// administrators
//get
app.get("/", (res) => {
    var query = "select * FROM administrators ORDER BY id DESC";
    connection.query(query, function (error, data) {

        if (error) {
            throw error;
        }
        else {
            res.render('administrators', { title: 'psycho-project database', action: 'list', administrators:data });
        }
    });
})
//post
// appointments

//get
app.get("/", (res) => {
    var query = "select * FROM appointments ORDER BY id DESC";
    connection.query(query, function (error, data) {

        if (error) {
            throw error;
        }
        else {
            res.render('appointments', { title: 'psycho-project database', action: 'list', appointments:data });
        }
    });
})
//post
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

//get
app.get("/", (res) => {
    var query = "select * FROM consultations ORDER BY id DESC";
    connection.query(query, function (error, data) {

        if (error) {
            throw error;
        }
        else {
            res.render('consultations', { title: 'psycho-project database', action: 'list', consultations:data });
        }
    });
})
//post
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

//get
app.get("/", (res) => {
    var query = "select * FROM landingpages ORDER BY id DESC";
    connection.query(query, function (error, data) {

        if (error) {
            throw error;
        }
        else {
            res.render('landingpages', { title: 'psycho-project database', action: 'list', landingpages:data });
        }
    });
})
//post
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

//get
app.get("/", (res) => {
    var query = "select * FROM tests ORDER BY id DESC";
    connection.query(query, function (error, data) {

        if (error) {
            throw error;
        }
        else {
            res.render('tests', { title: 'psycho-project database', action: 'list', tests:data });
        }
    });
})
//post
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

//get
app.get("/", (res) => {
    var query = "select * FROM locations ORDER BY id DESC";
    connection.query(query, function (error, data) {

        if (error) {
            throw error;
        }
        else {
            res.render('locations', { title: 'psycho-project database', action: 'list', locations:data });
        }
    });
})
//post
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