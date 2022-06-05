// importamos conecion base de datos
import db from "../database/db.js"
import Consultatiton from "../models/ConsultationModel.js"
// importamos sequelize
import { DataTypes } from "sequelize"

const AppointmentModel = db.define('medical_appointments', {
    date_medical_appointment: { type: DataTypes.DATE },
    description: { type: DataTypes.STRING },
    code_student: { type: DataTypes.STRING },
    id_student: {type: DataTypes.INTEGER}
},  { timestamps: false })

//relacion students
AppointmentModel.belongsTo(Consultatiton, {foreignKey: 'id' })

export default AppointmentModel