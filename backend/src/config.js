require('dotenv').config()


module.exports = {
   secret: 'my_secret',
   db_port: process.env.PORT || 3000,
   db_user: process.env.DB_USER || 'postgres',
   db_pass: process.env.DB_PASSWORD || 'Hellen2012', 
   db_database: process.env.DB_DATABASE || 'sushi_store',
   db_host: process.env.DB_HOST || 'localhost',
   db_endpoint: process.env.ENDPOINT_ID
}