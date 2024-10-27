import express, {Request, Response} from 'express'

const server = express()

// Routing
server.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

export default server