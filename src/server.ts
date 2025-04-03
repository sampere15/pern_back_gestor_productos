import express from 'express'
import productRouter from './routes/productRouter'

const server = express()

// Configure routes
server.get('/status', (req, res) => {
    res.send('alive!')
})

server.use('/products', productRouter)

export default server