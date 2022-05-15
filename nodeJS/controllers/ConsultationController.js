//importamos el modelo
import ConsultationModel from "../models/ConsultationModel.js"

//metodos para el crud
//mostrar registros
export const getAllConsultation = async (req, res) =>{
    try {
        const Consultation = await ConsultationModel.findAll()
        res.json(Consultation)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//mostrar un registro en particular
export const getConsultation = async (req, res) =>{
    try {
        const Consultation = await ConsultationModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(Consultation[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//crear un registro
export const createConsultation = async (req, res) =>{
    try {
       await ConsultationModel.create(req.body)
       res.json({
           "message":"registro creado correctamente"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//actualizar un registro
export const updateConsultation = async (req, res) =>{
    try {
        await ConsultationModel.update(req.body, {
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
export const deleteConsultation = async (req, res) =>{
    try {
        ConsultationModel.destroy({
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