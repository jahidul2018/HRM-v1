const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/employee/:employeeId",
	protect,
	authorize(["manager", "hr"]),
	goalController.createGoal
); // Create goal for an employee
router.get(
	"/employee/:employeeId",
	protect,
	authorize(["manager", "hr", "employee"]),
	goalController.getGoalsByEmployee
); // Get goals for an employee
router.patch(
	"/:goalId/status",
	protect,
	authorize(["manager", "hr"]),
	goalController.updateGoalStatus
); // Update goal status
router.delete(
	"/:goalId",
	protect,
	authorize(["manager", "hr"]),
	goalController.deleteGoal
); // Delete goal

module.exports = router;

// new

// const express = require("express");
// const router = express.Router();
// const goalController = require("../controllers/goalController");
// const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["employee", "manager", "hr"]),
	goalController.createGoal
); // Create goal
router.get(
	"/employee/:employeeId",
	protect,
	authorize(["employee", "manager", "hr"]),
	goalController.getGoalsByEmployee
); // Get goals by employee
router.patch(
	"/:goalId/progress",
	protect,
	authorize(["employee", "manager"]),
	goalController.updateGoalProgress
); // Update goal progress

module.exports = router;
