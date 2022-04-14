const mysql = require('mysql2')

const connection = mysql.createConnection({
  host     : 'node_db',
  user     : 'root',
  password : 'root',
  database : 'db'
})

connection.query("CREATE TABLE IF NOT EXISTS app_config (name VARCHAR(255))", function (error, results, fields) {
  console.log(results)
});
connection.query("DELETE FROM app_config;", function (error, results, fields) {
  console.log(results)
});
connection.query("INSERT INTO app_config (name) VALUES ('nodejs');", function (error, results, fields) {
  console.log(results)
});

module.exports = connection;