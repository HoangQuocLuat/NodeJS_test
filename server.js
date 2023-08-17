require('dotenv').config();
const app = require("./src/app.js");

const PORT = process.env.PORT || 3056;

const server = app.listen (PORT, () => {
    console.log(`WSV eCommerce with ${PORT}`)
})

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit Server Express`))
    //notify.send(ping....)
})