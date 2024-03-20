import * as controllers from '../controllers'
import express from 'express'
import {isAdmin} from '../middleware/verify_roles'
import verifyToken from '../middleware/verify_token'
import uploadCloud from '../middleware/uploader'

const router = express.Router()

router.get('/', controllers.getOrders)

// router.use(verifyToken)
// router.use(isAdmin)
router.post('/', controllers.createNewOrder)
router.put('/', controllers.updateOrder)
router.delete('/', controllers.deleteOrder)
// router.post('/', controllers.createNewBook)

module.exports = router