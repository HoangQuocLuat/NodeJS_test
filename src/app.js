const express = require('express')
const app = express()

//init db
require('./dbs/init.mySQL')

//init router

app.use('/', require('./routers'))

//handling error

module.exports = app