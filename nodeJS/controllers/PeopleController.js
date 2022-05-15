//importamos el modelo
import PeopleModel from "../models/PeopleModel.js"

//metodos para el crud
//mostrar registros
export const getAllPeople = async (req, res) =>{
    try {
        const People = await PeopleModel.findAll()
        res.json(People)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//mostrar un registro en particular
export const getPeople = async (req, res) =>{
    try {
        const People = await PeopleModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(People[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//crear un registro
export const createPeople = async (req, res) =>{
    try {
       await PeopleModel.create(req.body)
       res.json({
           "message":"registro creado correctamente"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//actualizar un registro
export const updatePeople = async (req, res) =>{
    try {
        await PeopleModel.update(req.body, {
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
export const deletePeople = async (req, res) =>{
    try {
        PeopleModel.destroy({
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