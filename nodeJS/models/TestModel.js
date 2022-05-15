// importamos conecion base de datos
import db from "../database/db.js"
// importamos sequelize
import { DataTypes } from "sequelize"

const TestModel = db.define('tests', {
    report   : { type: DataTypes.STRING }
})

export default TestModel