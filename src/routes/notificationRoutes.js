const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	notificationController.createNotification
); // Create notification
router.get(
	"/",
	protect,
	authorize(["employee", "manager", "hr", "admin"]),
	notificationController.getUserNotifications
); // Get notifications for user
router.patch(
	"/:notificationId/read",
	protect,
	authorize(["employee", "manager", "hr", "admin"]),
	notificationController.markAsRead
); // Mark notification as read

module.exports = router;
