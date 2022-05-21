import express  from "express"
import cors from "cors"
//importar conexión a la base de datos
import db from "./database/db.js"

//importar enrutador
import proyectoRoutes from './routes/routes.js'

const app = express()

app.use( cors() )
app.use( express.json() )
app.use('/proyecto', proyectoRoutes)

try {
    await db.authenticate()
    console.log("conexion exitosa a la base de datos")
} catch (error) {
    console.log('El error de conexion es: '+ error)
}

app.get('/', (req,res)=>{
    res.send("hola mundo")
})

app.listen(8000, ()=>{
    console.log("servidor corriendo en http://localhost:8000/")
})