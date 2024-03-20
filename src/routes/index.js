import user from './user'
import auth from './auth'
import insert from './insert'
import { notFound } from '../middleware/handle_errors'
import product from './product'
import order from './order'
import checkRole from './checkRole'

const initRoutes = (app) => {

    app.use('/api/v1/user', user)
    app.use('/api/v1/auth', auth)
    app.use('/api/v1/insert', insert)
    app.use('/api/v1/product', product)
    app.use('/api/v1/order', order)
    app.use('/api/v1/checkRole', checkRole)
    
    app.use(notFound)
}

module.exports = initRoutes