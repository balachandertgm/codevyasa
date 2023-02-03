'use strict'
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'codevyasa_assessment_db',
    password: 'bala',
    port: 5432,
})


const runQuery = (query, params, callback) => {
    pool.query(query, params, callback)
}

module.exports = {
    runQuery
}