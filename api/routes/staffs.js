const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/list", function (req, res, next) {
  const sql = "SELECT * FROM staff";
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.send(data);
  });
});

router.post("/register", (req, res, next) => {
  console.log(req.body);
  const sql =
    "INSERT INTO staff (first_name, last_name, email, username, password, last_update) VALUES (?, 'Shimizu', 'k.shimizu@gmail.com', 'kaede1234', '1234', '2022-04-25 21:15')";
  db.query(sql, req.body.formData.name, (err, data, fields) => {
    if (err) throw err;
    res.send(data);
    console.log(data);
  });
});

module.exports = router;
