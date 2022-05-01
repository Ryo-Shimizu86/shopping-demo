const StaffModel = require("./../models/Staff");
const bcrypt = require("bcrypt");

exports.getStaffList = function (req, res) {
  StaffModel.findAll()
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      console.log("error:", error);
      return res.json({
        message: "Unable to fetch the record!", // TODO check how to show message at react
      });
    });
};

exports.addNewStaff = async function (req, res) {
  console.log(req.body);

  const { firstName, lastName, email, username, password } = req.body.data;

  const staff = await StaffModel.findOne({
    where: { email: "r.shimizu1986@gmail.com" },
  });
  if (staff === null) {
    const hashedPassword = bcrypt.hashSync(password, 5);
    StaffModel.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
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
  } else {
    return res.json({
      message: "Email is invalid or already taken",
    });
  }
};
