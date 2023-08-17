const db = require('../../dbs/init.mySQL')

const User = (user) => {
    this.id = user.id;
    this.name = user.name;
    this.phone = user.phone;
    this.address = user.address
}

User.getUsers = (result) => {
    db.query("SELECT * FROM user ", (err, user) => {
        err ? result(err) : result(user)
    });
}

module.exports = User