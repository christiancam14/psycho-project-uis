// importamos conecion base de datos
import db from "../database/db.js"
// importamos sequelize
import { DataTypes } from "sequelize"

const LandingpageModel = db.define('landingpages', {
    email  : { type: DataTypes.STRING },
    text : { type: DataTypes.STRING }
},  { timestamps: false })

export default LandingpageModel