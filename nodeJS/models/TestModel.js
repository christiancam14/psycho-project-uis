// importamos conecion base de datos
import db from "../database/db.js"
/* import consultation from "./ConsultationModel.js" */
// importamos sequelize
import { DataTypes, Sequelize } from "sequelize"

const TestModel = db.define('tests', {
    report   : { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
})

//llaves foraneas
const test = Sequelize.define('tests', {id_test : DataTypes.INTEGER})
const consultation = Sequelize.define('consultations', {id_consultation:DataTypes.INTEGER})
test.belongsToMany(consultation, { through: 'TestConsultation' })
consultation.belongsToMany(test, { through: 'TestConsultation' })

export default TestModel