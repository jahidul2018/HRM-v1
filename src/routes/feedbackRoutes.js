const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["employee"]),
	feedbackController.createFeedback
); // Submit feedback
router.get(
	"/",
	protect,
	authorize(["employee"]),
	feedbackController.getFeedbackByEmployee
); // View submitted feedback

module.exports = router;
