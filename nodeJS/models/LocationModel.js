// importamos conecion base de datos
import db from "../database/db.js"
// importamos sequelize
import { DataTypes } from "sequelize"

const LocationModel = db.define('locations', {
    id_location: { type: DataTypes.INTEGER },
    street: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    postal_code: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING }
})

export default LocationModel