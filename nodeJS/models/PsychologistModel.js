// importamos conecion base de datos
import db from "../database/db.js"
// importamos sequelize
import { DataTypes } from "sequelize"

const PsychologistModel = db.define('psychologists', {
    image  : { type: DataTypes.BLOB },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
})

export default PsychologistModel