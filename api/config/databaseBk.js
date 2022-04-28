const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "shopping_user",
  password: "qB!4z/#B",
  database: "shopping",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
});

module.exports = conn;
