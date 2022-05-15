// importamos conecion base de datos
import db from "../database/db.js"
// importamos sequelize
import { DataTypes } from "sequelize"

const ConsultationModel = db.define('consultations', {
    appointment_date: { type: DataTypes.DATE },
    description : { type: DataTypes.STRING },
    clasification : { type: DataTypes.STRING }
})

export default ConsultationModel