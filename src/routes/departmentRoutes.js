const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/departmentController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["admin"]),
	departmentController.createDepartment
);
router.get("/", protect, departmentController.getDepartments);

module.exports = router;
