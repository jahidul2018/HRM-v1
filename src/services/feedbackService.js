const Feedback = require("../models/feedbackModel");

exports.createFeedback = async (feedbackData) => {
	const feedback = new Feedback(feedbackData);
	return await feedback.save();
};

exports.getFeedbackByEmployee = async (employeeId) => {
	return await Feedback.find({ employee: employeeId });
};
