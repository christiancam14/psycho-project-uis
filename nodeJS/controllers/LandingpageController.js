//importamos el modelo
import LandingpageModel from "../models/LandingpageModel.js"

//metodos para el crud
//mostrar registros
export const getAllLandingpage = async (req, res) =>{
    try {
        const Landingpage = await LandingpageModel.findAll()
        res.json(Landingpage)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//mostrar un registro en particular
export const getLandingpage = async (req, res) =>{
    try {
        const Landingpage = await LandingpageModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(Landingpage[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//crear un registro
export const createLandingpage = async (req, res) =>{
    try {
       await LandingpageModel.create(req.body)
       res.json({
           "message":"registro creado correctamente"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//actualizar un registro
export const updateLandingpage = async (req, res) =>{
    try {
        await LandingpageModel.update(req.body, {
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
export const deleteLandingpage = async (req, res) =>{
    try {
        LandingpageModel.destroy({
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