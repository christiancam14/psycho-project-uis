// importamos conecion base de datos
import db from "../database/db.js"
import consultations from '../models/ConsultationModel.js'
import psychologists from '../models/PsychologistModel.js'
/* import consultation from "./ConsultationModel.js" */
// importamos sequelize
import { DataTypes, Sequelize } from "sequelize"

const TestModel = db.define('tests', {
    report   : { type: DataTypes.STRING },
    id_psychologist: {type: DataTypes.INTEGER},
    id_consultation: {type: DataTypes.INTEGER}
}, { timestamps: false })

//relacion con psychologist
TestModel.hasOne(psychologists, {foreignKey: 'id' })
//relacion con consultations
TestModel.hasOne(consultations, {foreignKey: 'id' })

export default TestModel