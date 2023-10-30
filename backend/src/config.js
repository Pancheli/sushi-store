require('dotenv').config()

module.exports = {
   secret: 'my_secret',
   db_port: process.env.PORT || 3000,
   db_user: process.env.PGUSER || 'postgres',
   db_pass: process.env.PGPASSWORD || 'Hellen2012', 
   db_database: process.env.PGDATABASE || 'sushi_store',
   db_host: process.env.PGHOST || 'localhost',
   db_endpoint: process.env.ENDPOINT_ID
}