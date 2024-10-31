const express = require("express");
const router = express.Router();
const recommendationController = require("../controllers/recommendationController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.get(
	"/employee/:employeeId",
	protect,
	authorize(["employee", "manager", "hr"]),
	recommendationController.getRecommendationsForEmployee
); // Get recommendations

module.exports = router;
