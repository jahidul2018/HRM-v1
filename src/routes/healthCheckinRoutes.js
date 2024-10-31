const express = require("express");
const router = express.Router();
const healthCheckinController = require("../controllers/healthCheckinController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["employee"]),
	healthCheckinController.submitHealthCheckin
); // Submit health check-in
router.get(
	"/employee",
	protect,
	authorize(["employee"]),
	healthCheckinController.getHealthCheckinsByEmployee
); // View health check-ins

module.exports = router;
