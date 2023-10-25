const { Pool } = require('pg')
const config = require('../config')

const pool = new Pool ({
    user: config.db_user,
    password: config.db_pass,
    database: config.db_database,
    host: config.db_host,
    // endpoint: config.db_endpoint,
    allowExitOnIdle: true
})

exports.runQuery = async (statement, params = []) => {
    try {
        return await pool.query(statement, params);
    } catch (error) {
        console.log('Error in runQuery', error.message);
        throw error.message
    }
}