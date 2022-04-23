const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/list", function (req, res, next) {
  const sql = "SELECT * FROM staff";
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.send(data);
    console.log(data);
  });
});

module.exports = router;
