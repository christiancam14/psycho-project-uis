// importamos conecion base de datos
import db from "../database/db.js"
import people from '../models/PeopleModel.js'
// importamos sequelize
import { DataTypes } from "sequelize"

const PsychologistModel = db.define('psychologists', {
    image  : { type: DataTypes.BLOB },
    id_person: {type: DataTypes.INTEGER}
},  { timestamps: false })

//relacion con people
PsychologistModel.hasMany(people, {foreignKey: 'id' })

export default PsychologistModel