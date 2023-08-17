const express = require('express')
const router = express.Router()

router.use('/v1/api', require('./account'))
router.use('/v1/api',require('./users/users.router'))


module.exports = router