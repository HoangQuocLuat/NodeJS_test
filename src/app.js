const compression = require('compression')
const express = require('express')
const {default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()

// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// init db
require('./dbs/init.mySQL')

// init router
app.get('/', (req, res, next) => {
    const strCompression = 'Hello Factipjs'
    return res.status(200).json({
        message: 'WELCOME',
        metadata: strCompression.repeat(10000)
    })
})

// handling error
module.exports = app