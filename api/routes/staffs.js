const dayjs = require("dayjs");
const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/list", function (req, res, next) {
  const sql = "SELECT * FROM Staffs";
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.send(data);
  });
});

router.post("/register", (req, res, next) => {
  console.log(req.body);

  const { firstName, lastName, email, userName, password } = req.body.formData;
  console.log(firstName, lastName, email, userName, password);

  const staff = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    username: userName,
    password: password,
    last_update: dayjs().format("YYYY-MM-DD h:mm:ss"), // TODO move format variable to common file
  };

  const sql = "INSERT INTO Staffs SET ?";
  db.query(sql, staff, (err, data, fields) => {
    if (err) throw err;
    res.send(data);
    console.log(data);
  });
});

module.exports = router;
