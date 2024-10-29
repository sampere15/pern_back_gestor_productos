import express, {Request, Response} from 'express'
import router from './router'

const server = express()

// Routing
server.use('/products', router)

export default server