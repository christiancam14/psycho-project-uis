import { Sequelize } from 'sequelize'

const db = new Sequelize('proyecto_grado_v2', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})


export default db