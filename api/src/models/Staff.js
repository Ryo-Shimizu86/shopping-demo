const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../config/Database");

const Staff = sequelize.define("Staff", {
  // attributes
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      isAlpha: true,
      max: 50,
      min: 2,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      isAlpha: true,
      max: 50,
      min: 2,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      // TODO unique check
      notNull: true,
      notEmpty: true,
      max: 255,
      isEmail: true,
    },
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      max: 50,
      min: 2,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      max: 255,
      min: 8,
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: DataTypes.DATE,
});
module.exports = Staff;
