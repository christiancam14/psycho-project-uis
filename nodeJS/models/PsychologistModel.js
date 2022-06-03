// importamos conecion base de datos
import db from "../database/db.js"
/* import people from '../models/PeopleModel.js' */
// importamos sequelize
import { DataTypes } from "sequelize"

const PsychologistModel = db.define('psychologists', {
    name_psychologist: { type: DataTypes.STRING },
    document: {type: DataTypes.STRING},
    email: { type: DataTypes.STRING },
    password_psychologist: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING }
},  { timestamps: false })

//relacion con people
/* PsychologistModel.hasMany(people, {foreignKey: 'id' }) */

export default PsychologistModel