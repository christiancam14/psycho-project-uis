// importamos conecion base de datos
import db from "../database/db.js"
import students from '../models/StudentModel.js'
import psychologist  from '../models/PsychologistModel.js'
// importamos sequelize
import { DataTypes } from "sequelize"

const ConsultationModel = db.define('consultations', {
    appointment_date: { type: DataTypes.DATE },
    description : { type: DataTypes.STRING },
    clasification : { type: DataTypes.STRING },
    id_student: {type: DataTypes.INTEGER},
    id_psychologist: {type: DataTypes.INTEGER}
},  { timestamps: false })

//relacion con students
ConsultationModel.hasOne(students, {foreignKey: 'id' })
//relacion con psychologist
ConsultationModel.hasOne(psychologist, {foreignKey: 'id' })

export default ConsultationModel