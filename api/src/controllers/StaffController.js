const StaffModel = require("./../models/Staff");
const bcrypt = require("bcrypt");

exports.getStaffList = function (req, res) {
  StaffModel.findAll()
    .then((result) => {
      console.log(result);
      return res.json(result);
    })
    .catch((error) => {
      console.log("error:", error);
      return res.json({
        message: "Unable to fetch the record!", // TODO check how to show message at react
      });
    });
};

exports.addNewStaff = function (req, res) {
  const { firstName, lastName, email, userName, password } = req.body.formData;
  const hashedPassword = bcrypt.hashSync(password, 5);

  StaffModel.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    username: userName,
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
    .then((result) => {
      return res.json({
        message: "Record created successfully!",
      });
    })
    .catch((error) => {
      console.log("error:", error);
      return res.json({
        message: "Unable to create a record",
      });
    });
};
