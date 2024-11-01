import express, {Request, Response} from 'express'
import router from './router'
import db from './config/db'

// Conexión a la base de datos
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()   // Sincroniza el schema de la DB con el modelo
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Error al conectarse a la DB:', error)
    }
}
connectDB()

const server = express()

// Routing
server.use('/products', router)

export default server