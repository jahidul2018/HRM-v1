const notificationService = require("../services/notificationService");
const asyncHandler = require("express-async-handler");

exports.createNotification = asyncHandler(async (req, res) => {
	const notification = await notificationService.createNotification(req.body);
	res.status(201).json(notification);
});

exports.getUserNotifications = asyncHandler(async (req, res) => {
	const notifications = await notificationService.getNotificationsByUser(
		req.user._id
	);
	res.status(200).json(notifications);
});

exports.markAsRead = asyncHandler(async (req, res) => {
	const updatedNotification = await notificationService.markNotificationAsRead(
		req.params.notificationId
	);
	res.status(200).json(updatedNotification);
});
