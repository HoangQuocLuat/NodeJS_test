var User = require('../../models/users/user.model')
exports.getUsers = (req, res) => {
    User.getUsers((data) => {
        res.send({users: data})
    })  
}