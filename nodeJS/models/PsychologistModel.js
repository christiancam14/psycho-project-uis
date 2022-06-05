// importamos conecion base de datos
import db from "../database/db.js"
// importamos sequelize
import { DataTypes } from "sequelize"

const PsychologistModel = db.define('psychologists', {
    name_psychologist: { type: DataTypes.STRING },
    document: {type: DataTypes.STRING},
    email: { type: DataTypes.STRING },
    password_psychologist: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING }
},  { timestamps: false })

export default PsychologistModel