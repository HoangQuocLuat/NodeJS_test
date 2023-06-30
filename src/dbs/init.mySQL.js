const mysql = require('mysql')
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


// class Database {
    
//     constructor() {
//         this.connect()
//     }

//     //connect
//     connect(type = 'mysql') {
//         // if (1 === 1) {
//         //     mongoose.set('debug', true)
//         //     mongoose.set('debug', { color: true})
//         // }

//         connectString.connect(connectString).then( _ => console.log(`Connected Mysql Success`))
//         .catch( err => console.log(`Error Connect!`))
//     }

//     static getInstance() {
//         if(!Database.instnace) {
//             Database.instnace = new Database()
//         }

//         return Database.instnace
//     }
// }

// const instnaceMysql = Database.getInstance()
