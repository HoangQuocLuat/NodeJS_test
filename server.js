const app = require("./src/app.js");
const PORT = 9898
const server = app.listen (PORT, () => {
    console.log(`WSV eCommerce with ${PORT}`)
})

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit Server Express`))
    //notify.send(ping....)
})