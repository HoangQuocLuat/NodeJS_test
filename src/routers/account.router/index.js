const express = require('express')
const router = express.Router()
const userSignup = require('../../controllers/account.controllers/account.controller')

//signup 
router.post('/user/signup', userSignup.signUp)

module.exports = router