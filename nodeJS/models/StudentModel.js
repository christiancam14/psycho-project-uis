// importamos conecion base de datos
import db from "../database/db.js"
// importamos sequelize
import { DataTypes } from "sequelize"

const StudentModel = db.define('students', {
    student_code  : { type: DataTypes.INTEGER },
    image  : { type: DataTypes.BLOB }
})

export default StudentModel