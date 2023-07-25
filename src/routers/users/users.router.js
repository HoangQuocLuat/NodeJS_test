const express = require('express')
const users = require('../../controllers/users/user.controller')
const router = express.Router()

router.get('/user/getUsers',users.getUsers)

module.exports = router