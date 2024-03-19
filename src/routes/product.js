import * as controllers from '../controllers'
import express from 'express'
import {isAdmin} from '../middleware/verify_roles'
import verifyToken from '../middleware/verify_token'
import uploadCloud from '../middleware/uploader'

const router = express.Router()

router.get('/', controllers.getProducts)

// router.use(verifyToken)
// router.use(isAdmin)
router.post('/', uploadCloud.single('image'), controllers.createNewProduct)
router.put('/', uploadCloud.single('image'), controllers.updateProduct)
router.delete('/', controllers.deleteProduct)
// router.post('/', controllers.createNewBook)

module.exports = router