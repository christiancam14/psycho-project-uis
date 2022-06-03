// importamos conecion base de datos
import db from "../database/db.js"
/* import consultation from '../models/ConsultationModel.js' */
// importamos sequelize
import { DataTypes } from "sequelize"

const PsychologistModel = db.define('psychologists', {
    name_psychologist: { type: DataTypes.STRING },
    document: {type: DataTypes.STRING},
    email: { type: DataTypes.STRING },
    password_psychologist: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING }
},  { timestamps: false })

//relacion con consultation
/* PsychologistModel.belongsToMany(consultation, {foreignKey: 'id' }) */

export default PsychologistModel