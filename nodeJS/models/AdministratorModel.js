// importamos conecion base de datos
import db from "../database/db.js"
import People from '../models/PeopleModel.js'
// importamos sequelize
import { DataTypes } from "sequelize"

const AdministratorsModel = db.define('appointment', {
    id_person: {type: DataTypes.INTEGER}
},  { timestamps: false })

//relacion people
AdministratorsModel.hasMany(People, {foreignKey: 'id' })


export default AdministratorsModel