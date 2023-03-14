const Pool = require('pg').Pool;

const pool = new Pool({
    user: "guinote_owner",
    host: "localhost",
    database: "dbguinote",
    password:"0000E",
    port: 5432,
})

module.exports = pool;