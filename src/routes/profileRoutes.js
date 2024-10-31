const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.get(
	"/",
	protect,
	authorize(["employee", "manager", "hr"]),
	profileController.getProfile
); // View profile
router.put(
	"/",
	protect,
	authorize(["employee"]),
	profileController.updateProfile
); // Update profile

module.exports = router;
