const express = require("express");
const router = express.Router();
const badgeController = require("../controllers/badgeController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	badgeController.createBadge
); // Create badge
router.get(
	"/",
	protect,
	authorize(["employee", "manager", "hr", "admin"]),
	badgeController.getAllBadges
); // View badges

module.exports = router;
