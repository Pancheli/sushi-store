require('dotenv').config()


module.exports = {
   secret: 'my_secret',
   db_port: process.env.PORT,
   db_user: process.env.DB_USER,
   db_pass: process.env.DB_PASSWORD,
   db_database: process.env.DB_DATABASE,
   db_host: process.env.DB_HOST,
   db_endpoint: process.env.ENDPOINT_ID
}