// pool code needs to go in a seperate file as it is going to be shared by multiple files
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'estore',
    port: 3306,
    multipleStatements: true // allows to have multiple query statements
})

module.exports = pool;