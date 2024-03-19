import user from './user'
import auth from './auth'
import insert from './insert'
import { notFound } from '../middleware/handle_errors'
import product from './product'

const initRoutes = (app) => {

    app.use('/api/v1/user', user)
    app.use('/api/v1/auth', auth)
    app.use('/api/v1/insert', insert)
    app.use('/api/v1/product', product)
    
    app.use(notFound)
}

module.exports = initRoutes