// importamos conecion base de datos
import db from "../database/db.js"
// importamos sequelize
import { DataTypes } from "sequelize"

const PeopleModel = db.define('people', {
    name  : { type: DataTypes.STRING },
    user_name : { type: DataTypes.STRING },
    phone_number : { type: DataTypes.STRING },
    email_address : { type: DataTypes.STRING },
    password  : { type: DataTypes.STRING },
    date_of_birth  : { type: DataTypes.DATE },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
})

export default PeopleModel