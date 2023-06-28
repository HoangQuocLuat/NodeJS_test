const express = require('express');
const app = express();

require('./Routes/User.route')(app);

app.use((err, req, res, next) => {
    res.json({
        status: err.status || 500,
        message: err.message
    })
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`sever running on ${PORT}`);
})