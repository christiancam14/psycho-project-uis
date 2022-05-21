// importamos conecion base de datos
import db from "../database/db.js"
import landings from '../models/LandingpageModel.js'
import people from '../models/PeopleModel.js'
// importamos sequelize
import { DataTypes } from "sequelize"

const StudentModel = db.define('students', {
    student_code  : { type: DataTypes.INTEGER },
    image  : { type: DataTypes.BLOB },
    id_landing: {type: DataTypes.INTEGER},
    id_person: {type: DataTypes.INTEGER}
}, { timestamps: false })

//relacion con people
StudentModel.hasMany(people, {foreignKey: 'id' })
//relacion con landing
StudentModel.hasOne(landings, {foreignKey: 'id' })

export default StudentModel