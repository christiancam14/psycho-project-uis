// importamos conecion base de datos
import db from "../database/db.js"
import locations from '../models/LocationModel.js'
// importamos sequelize
import { DataTypes } from "sequelize"

const PeopleModel = db.define('people', {
    name  : { type: DataTypes.STRING },
    user_name : { type: DataTypes.STRING },
    phone_number : { type: DataTypes.STRING },
    email_address : { type: DataTypes.STRING },
    password  : { type: DataTypes.STRING },
    date_of_birth  : { type: DataTypes.DATE },
    id_location: {type: DataTypes.INTEGER}
}, { timestamps: false })

//Relacion locations
PeopleModel.hasOne(locations, {foreignKey: 'id' })

export default PeopleModel