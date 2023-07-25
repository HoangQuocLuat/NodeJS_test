const jwt = require('jsonwebtoken') 
UserLogin = require('../../models/account/user.model')

exports.userLogin = (req, res) => {
    const data = req.body
    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'})
    res.json({accessToken})
}