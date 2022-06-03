// importamos conecion base de datos
import db from "../database/db.js"
import appointment from '../models/AppointmentModel.js'
// importamos sequelize
import { DataTypes } from "sequelize"

const StudentModel = db.define('students', {
    user_student: { type: DataTypes.STRING },
    name_student: { type: DataTypes.STRING },
    password_student: {type: DataTypes.STRING},
    code_student : {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
}, { timestamps: false })

//relacion con appointment
StudentModel.hasMany(appointment, {foreignKey: 'id' })

export default StudentModel