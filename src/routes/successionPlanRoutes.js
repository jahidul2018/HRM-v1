const express = require("express");
const router = express.Router();
const successionPlanController = require("../controllers/successionPlanController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	successionPlanController.createSuccessionPlan
); // Create succession plan
router.get(
	"/",
	protect,
	authorize(["hr", "admin"]),
	successionPlanController.getSuccessionPlans
); // Get all succession plans
router.get(
	"/position/:position",
	protect,
	authorize(["hr", "admin"]),
	successionPlanController.getSuccessionPlanByPosition
); // Get succession plan by position
router.patch(
	"/:successionPlanId/successor/:successorId",
	protect,
	authorize(["hr", "admin"]),
	successionPlanController.updateSuccessorReadiness
); // Update successor readiness

module.exports = router;
