const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'nodejs'
})
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
      }
    console.log('Connected to MySQL successfully!');
})
module.exports = connection