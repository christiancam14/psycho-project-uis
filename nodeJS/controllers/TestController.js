//importamos el modelo
import TestModel from "../models/TestModel.js"

//metodos para el crud
//mostrar registros
export const getAllTest = async (req, res) =>{
    try {
        const Test = await TestModel.findAll()
        res.json(Test)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//mostrar un registro en particular
export const getTest = async (req, res) =>{
    try {
        const Test = await TestModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(Test[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//crear un registro
export const createTest = async (req, res) =>{
    try {
       await TestModel.create(req.body)
       res.json({
           "message":"registro creado correctamente"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//actualizar un registro
export const updateTest = async (req, res) =>{
    try {
        await TestModel.update(req.body, {
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
export const deleteTest = async (req, res) =>{
    try {
        TestModel.destroy({
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