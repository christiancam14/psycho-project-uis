//importamos el modelo
import AppointmentModel from "../models/AppointmentModel.js"

//metodos para el crud
//mostrar registros
export const getAllAppointment = async (req, res) =>{
    try {
        const Appointment = await AppointmentModel.findAll()
        res.json(Appointment)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//mostrar un registro en particular
export const getAppointment = async (req, res) =>{
    try {
        const Appointment = await AppointmentModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(Appointment[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//crear un registro
export const createAppointment = async (req, res) =>{
    try {
       await AppointmentModel.create(req.body)
       res.json({
           "message":"registro creado correctamente"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//actualizar un registro
export const updateAppointment = async (req, res) =>{
    try {
        await AppointmentModel.update(req.body, {
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
export const deleteAppointment = async (req, res) =>{
    try {
        AppointmentModel.destroy({
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