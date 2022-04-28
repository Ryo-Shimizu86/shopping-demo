const Sequelize = require("sequelize");

const sequelize = new Sequelize("shopping", "shopping_user", "qB!4z/#B", {
  host: "127.0.0.1",
  dialect: "mysql",
});
module.exports = sequelize;
