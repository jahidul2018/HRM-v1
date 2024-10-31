const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["employee"]),
	expenseController.submitExpense
); // Submit expense
router.get(
	"/",
	protect,
	authorize(["employee", "manager", "hr"]),
	expenseController.getExpensesByEmployee
); // Get employee expenses
router.patch(
	"/:expenseId/status",
	protect,
	authorize(["manager", "hr"]),
	expenseController.updateExpenseStatus
); // Approve or reject expense

module.exports = router;
