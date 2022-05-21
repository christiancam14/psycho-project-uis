// importamos conecion base de datos
import db from "../database/db.js"
import students from '../models/StudentModel.js'
// importamos sequelize
import { DataTypes } from "sequelize"

const AppointmentModel = db.define('appointment', {
    registration_date: { type: DataTypes.STRING },
    postal_code: { type: DataTypes.STRING },
    id_student: {type: DataTypes.INTEGER}
},  { timestamps: false })

//relacion students
AppointmentModel.hasMany(students, {foreignKey: 'id' })

export default AppointmentModel