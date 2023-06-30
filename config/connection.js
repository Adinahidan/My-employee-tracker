//dependencies
const mysql = require("mysql2");
require("dotenv").config();

//this creates the connection to the db and tells it what login details to look for
const connection = mysql.createConnection({
host: '127.0.0.1', //localhost
port: 3306,

  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

module.exports = connection;