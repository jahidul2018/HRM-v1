const feedbackService = require("../services/feedbackService");
const asyncHandler = require("express-async-handler");

exports.createFeedback = asyncHandler(async (req, res) => {
	const feedbackData = { ...req.body, employee: req.user._id };
	const feedback = await feedbackService.createFeedback(feedbackData);
	res.status(201).json(feedback);
});

exports.getFeedbackByEmployee = asyncHandler(async (req, res) => {
	const feedbacks = await feedbackService.getFeedbackByEmployee(req.user._id);
	res.status(200).json(feedbacks);
});
