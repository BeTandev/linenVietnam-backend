import * as controllers from '../controllers'
import express from 'express'

const router = express.Router()

router.get('/', controllers.getEmailUser)
router.post('/', controllers.createEmailUser)
router.delete('/', controllers.deleteEmailUser)

module.exports = router