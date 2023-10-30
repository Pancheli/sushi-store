const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool({
    user: config.db_user,
    password: config.db_pass,
    database: config.db_database,
    host: config.db_host,
    options: 'project=ep-long-poetry-07376076',
    port: config.db_port,
    max: 20,
    idleTimeoutMillis: 30000,
    ssl: true,
});

exports.runQuery = async (statement, params = []) => {
    // const client = await pool.connect();

    try {
        return await pool.query(statement, params);
    }
    catch (error) {
        console.log('Error in runQuery', error.message);
        throw error.message
    }
    // finally {
    //     client.release();
    // }
}