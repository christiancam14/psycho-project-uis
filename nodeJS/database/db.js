import { Sequelize } from 'sequelize'

const db = new Sequelize('proyecto_grado', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})


export default db