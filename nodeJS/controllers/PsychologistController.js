//importamos el modelo
import PsychologistModel from "../models/PsychologistModel.js"

//metodos para el crud
//mostrar registros
export const getAllPsychologist = async (req, res) =>{
    try {
        const Psychologist = await PsychologistModel.findAll()
        res.json(Psychologist)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//mostrar un registro en particular
export const getPsychologist = async (req, res) =>{
    try {
        const Psychologist = await PsychologistModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(Psychologist[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//crear un registro
export const createPsychologist = async (req, res) =>{
    try {
       await PsychologistModel.create(req.body)
       res.json({
           "message":"registro creado correctamente"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//actualizar un registro
export const updatePsychologist = async (req, res) =>{
    try {
        await PsychologistModel.update(req.body, {
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
export const deletePsychologist = async (req, res) =>{
    try {
        PsychologistModel.destroy({
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