import * as controllers from '../controllers'
import express from 'express'
import {isAdmin} from '../middleware/verify_roles'
import verifyToken from '../middleware/verify_token'
import uploadCloud from '../middleware/uploader'

const router = express.Router()

// router.get('/', controllers.createNewProduct)

// router.use(verifyToken)
// router.use(isAdmin)
// router.post('/', uploadCloud.single('image'), controllers.createNewBook)
router.post('/', uploadCloud.single('image'), controllers.createNewProduct)

module.exports = router