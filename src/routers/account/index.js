const express = require('express')
const userLogin = require('../../controllers/account/account.controler')
const router = express.Router()

//signup
router.post('/user/login',userLogin.userLogin)


module.exports = router