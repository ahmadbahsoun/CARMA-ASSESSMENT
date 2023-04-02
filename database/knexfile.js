require('dotenv').config({
    path: '../.env',
});

  global.Promise = require('bluebird'); // bluebird is a popular library for working with Promises in Node.js 
  //   and provides additional features and performance improvements compared to the built-in Promise object.

  // knexfile.js
    module.exports = {
        development: {
            client: 'pg',
            connection: {
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                database: process.env.DB_NAME,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
            },
            migrations: {
                directory: './migrations',
            },
            seeders: {
                directory: './seeds',
            },
        },
    };