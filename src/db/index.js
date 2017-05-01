let mysql = require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'red_ventures'
});

connection.connect();

module.exports = connection;
