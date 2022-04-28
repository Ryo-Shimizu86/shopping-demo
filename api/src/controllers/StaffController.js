const dayjs = require("dayjs");
const db = require("../../config/databaseBk");
const StaffModel = require("./../models/Staff");

exports.getStaffList = function (req, res) {
  StaffModel.findAll()
    .then((result) => {
      console.log(result);
      return res.json(result);
    })
    .catch((error) => {
      console.log("error:", error);
      return res.json({
        message: "Unable to fetch the record!",
      });
    });

  // const sql = "SELECT * FROM Staffs";
  // db.query(sql, function (err, data, fields) {
  //   if (err) throw err;
  //   res.send(data);
  // });
};
// exports.getStaffList = function (req, res) {
//   const sql = "SELECT * FROM Staffs";
//   db.query(sql, function (err, data, fields) {
//     if (err) throw err;
//     res.send(data);
//   });
// };

exports.addNewStaff = function (req, res) {
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
};
