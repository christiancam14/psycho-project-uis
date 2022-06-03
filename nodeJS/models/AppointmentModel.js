// importamos conecion base de datos
import db from "../database/db.js"
/* import students from '../models/StudentModel.js' */
/* import Consultatiton from "../models/ConsultationModel.js" */
// importamos sequelize
import { DataTypes } from "sequelize"

const AppointmentModel = db.define('appointment', {
    date_medical_appointment: { type: DataTypes.DATE },
    description: { type: DataTypes.STRING },
    code_student: { type: DataTypes.STRING },
    id_student: {type: DataTypes.INTEGER}
},  { timestamps: false })

//relacion students
/* AppointmentModel.hasMany(students, {foreignKey: 'id' }) */
/* AppointmentModel.hasOne(Consultatiton, {foreignKey: 'id' }) */

export default AppointmentModel