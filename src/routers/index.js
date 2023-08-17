const express = require('express')
const router = express.Router()

router.use('v1/api', require('./account.router'))

module.exports = router