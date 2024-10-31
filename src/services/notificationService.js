const Notification = require("../models/notificationModel");
const slackIntegration = require("../integrations/slackIntegration");

exports.createNotification = async (notificationData) => {
	const notification = new Notification(notificationData);
	return await notification.save();
};

exports.getNotificationsByUser = async (userId) => {
	return await Notification.find({ recipient: userId }).sort({ createdAt: -1 });
};

exports.markNotificationAsRead = async (notificationId) => {
	return await Notification.findByIdAndUpdate(
		notificationId,
		{ status: "read" },
		{ new: true }
	);
};

exports.notifyHRSurvey = async (surveyTitle) => {
	const hrChannelId = process.env.HR_SLACK_CHANNEL_ID;
	const message = `New Survey Created: ${surveyTitle}`;
	await slackIntegration.sendSlackMessage(hrChannelId, message);
};
