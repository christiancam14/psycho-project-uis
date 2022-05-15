//importamos el modelo
import LocationModel from "../models/LocationModel.js"

//metodos para el crud
//mostrar registros
export const getAllLocation = async (req, res) =>{
    try {
        const location = await LocationModel.findAll()
        res.json(location)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//mostrar un registro en particular
export const getLocation = async (req, res) =>{
    try {
        const location = await LocationModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(location[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//crear un registro
export const createLocation = async (req, res) =>{
    try {
       await LocationModel.create(req.body)
       res.json({
           "message":"registro creado correctamente"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//actualizar un registro
export const updateLocation = async (req, res) =>{
    try {
        await LocationModel.update(req.body, {
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
export const deleteLocation = async (req, res) =>{
    try {
        LocationModel.destroy({
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