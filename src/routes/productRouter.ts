import { Router } from 'express'

const productRouter = Router()

// Routing
productRouter.get('/', (req, res) => {
    res.send('products!')
})

export default productRouter