const express = require('express');
const router = express.Router();
import * as controllers from '../controllers'
import { isAdmin } from '../middleware/verify_roles';
import verifyToken from '../middleware/verify_token';

router.use(verifyToken)
router.use(isAdmin)
router.post('/', controllers.checkRole);

module.exports = router;