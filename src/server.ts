import express from 'express'
import db from './config/db'
import productRouter from './routes/productRouter'
import colors from 'colors'

const server = express()

// DB connection
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.bgGreen.white('Database connected successfully'))
    } catch (error) {
        console.log(colors.bgRed.white('Unable to connect to the database'))
        console.error(error)
    }
}

connectDB()

// Configure routes
server.get('/status', (req, res) => {
    res.send('alive!')
})

server.use('/products', productRouter)

export default server