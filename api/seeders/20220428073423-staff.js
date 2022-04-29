"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Staffs",
      [
        {
          firstName: "Ryo Shimizu",
          lastName: "Shimizu",
          email: "r.shimizu1986@gmail.com",
          username: "ryo1234",
          password: bcrypt.hashSync("password", 5),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Staffs", null, {});
  },
};
