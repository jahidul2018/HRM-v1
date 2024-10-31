const express = require("express");
const router = express.Router();
const objectiveController = require("../controllers/objectiveController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	objectiveController.createObjective
); // Create objective
router.get(
	"/",
	protect,
	authorize(["hr", "admin", "manager"]),
	objectiveController.getObjectives
); // Get all objectives
router.patch(
	"/:objectiveId/keyResult/:keyResultIndex",
	protect,
	authorize(["hr", "manager"]),
	objectiveController.updateKeyResult
); // Update key result progress

module.exports = router;
