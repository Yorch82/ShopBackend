require('dotenv').config();

module.exports = {
"development": {
    "username": process.env.DB_DEVELOPMENT_USERNAME,
    "password": process.env.DB_DEVELOPMENT_PASSWORD,
    "database": process.env.DB_DEVELOPMENT_NAME,
    "host": process.env.DB_DEVELOPMENT_HOST,
    "dialect": "mysql"
},
"test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
"production": {
    "username": process.env.DB_PRODUCTION_USERNAME,
    "password": process.env.DB_PRODUCTION_PASSWORD,
    "database": process.env.DB_PRODUCTION_NAME,
    "host": process.env.DB_PRODUCTION_HOST,
    "dialect": "mysql"
}
};