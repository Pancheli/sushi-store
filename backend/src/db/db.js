const { Pool } = require('pg')
const config = require('../config')

const pool = new Pool({
    user: config.db_user,
    password: config.db_pass,
    database: config.db_database,
    host: config.db_host,
    // connectionString: `project=${config.db_endpoint}`,
    // allowExitOnIdle: true,
    max: 20,
    idleTimeoutMillis: 30000
});

exports.runQuery = async (statement, params = []) => {
    const client = await pool.connect();

    try {
        return await client.query(statement, params);
    }
    catch (error) {
        console.log('Error in runQuery', error.message);
        throw error.message
    }
    finally {
        client.release();
    }
}