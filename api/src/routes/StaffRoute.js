const express = require("express");
const router = express.Router();
const staffController = require("../controllers/StaffController");

router.get("/list", staffController.getStaffList);
router.post("/register", staffController.addNewStaff);

module.exports = router;
