const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    "host" : "localhost",  // localhost atau 127.0.0.1
    "port" : "8889", // sesuaikan port, default 3306
    "user" : "root", // user
    "password" : "root",    // xampp itu password nya "" (string kosong)
    "database" : "mmb_arif",  // nama database
    "waitForConnections" : true,
    "connectionLimit" : 10,
    "queueLimit" : 0
})

// di export sesuai kebutuhan 
module.exports = pool