//importamos el modelo
import StudentModel from "../models/StudentModel.js"

//metodos para el crud
//mostrar registros
export const getAllStudent = async (req, res) =>{
    try {
        const Student = await StudentModel.findAll()
        res.json(Student)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//mostrar un registro en particular
export const getStudent = async (req, res) =>{
    try {
        const Student = await StudentModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(Student[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//crear un registro
export const createStudent = async (req, res) =>{
    try {
       await StudentModel.create(req.body)
       res.json({
           "message":"registro creado correctamente"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//actualizar un registro
export const updateStudent = async (req, res) =>{
    try {
        await StudentModel.update(req.body, {
            where:{
                id:req.params.id
            }
        })
        res.json({
            "message":"registro creado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//eliminar un registro
export const deleteStudent = async (req, res) =>{
    try {
        StudentModel.destroy({
            where:{
                id:req.params.id
            }
        })
        res.json({
            "message":"registro eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    } 
}