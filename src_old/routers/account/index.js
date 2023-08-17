const express = require('express')
const userSignup = require('../../controllers/account/account.controler')
const router = express.Router()

//signup
router.post('/user/signup',userSignup.signUp)

module.exports = router