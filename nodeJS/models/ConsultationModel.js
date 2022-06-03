// importamos conecion base de datos
import db from "../database/db.js"
import appointment from '../models/AppointmentModel.js'
import psychologist  from '../models/PsychologistModel.js'
// importamos sequelize
import { DataTypes } from "sequelize"

const ConsultationModel = db.define('consultations', {
    date_medical_consultation: { type: DataTypes.DATE },
    date_medical_appointmet: { type: DataTypes.DATE },
    code_student: { type: DataTypes.STRING },
    description : { type: DataTypes.STRING },
    id_psychologist: {type: DataTypes.INTEGER},
    id_medical_appointment: {type: DataTypes.INTEGER}
},  { timestamps: false })

//relacion con appointment
ConsultationModel.hasOne(appointment, {foreignKey: 'id' })
//relacion con psychologist
ConsultationModel.hasOne(psychologist, {foreignKey: 'id' })

export default ConsultationModel