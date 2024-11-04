const PerformanceReview = require("../models/performanceReviewModel");

exports.createPerformanceReview = async (reviewData) => {
	const review = new PerformanceReview(reviewData);
	return await review.save();
};

exports.getPerformanceReviewsByEmployee = async (employeeId) => {
	return await PerformanceReview.find({ employee: employeeId }).populate(
		"reviewer",
		"name role"
	);
};

exports.getPerformanceReviewById = async (reviewId) => {
	return await PerformanceReview.findById(reviewId)
		.populate("employee", "name")
		.populate("reviewer", "name role");
};

exports.updatePerformanceReview = async (reviewId, updateData) => {
	return await PerformanceReview.findByIdAndUpdate(reviewId, updateData, {
		new: true,
	});
};

exports.deletePerformanceReview = async (reviewId) => {
	return await PerformanceReview.findByIdAndDelete(reviewId);
};

const scheduleReviewReminder = async (managerId) => {
	await notificationService.createNotification({
		recipient: managerId,
		message: "Reminder: Upcoming performance review for your team members.",
		type: "review",
	});
};

// new
const performanceReviewService = require("../services/performanceReviewService");
const asyncHandler = require("express-async-handler");

exports.createPerformanceReview = asyncHandler(async (req, res) => {
	const review = await performanceReviewService.createPerformanceReview(
		req.body
	);
	res.status(201).json(review);
});

exports.getReviewsByEmployee = asyncHandler(async (req, res) => {
	const reviews = await performanceReviewService.getReviewsByEmployee(
		req.params.employeeId
	);
	res.status(200).json(reviews);
});

exports.getAllReviews = asyncHandler(async (req, res) => {
	const reviews = await performanceReviewService.getAllReviews();
	res.status(200).json(reviews);
});

// const performanceReviewService = require("../services/performanceReviewService");
// const asyncHandler = require("express-async-handler");

exports.createReview = asyncHandler(async (req, res) => {
	const reviewData = {
		...req.body,
		reviewer: req.user._id,
	};
	const review = await performanceReviewService.createPerformanceReview(
		reviewData
	);
	res.status(201).json(review);
});

exports.getReviewsByEmployee = asyncHandler(async (req, res) => {
	const reviews =
		await performanceReviewService.getPerformanceReviewsByEmployee(
			req.params.employeeId
		);
	res.status(200).json(reviews);
});

exports.getReviewById = asyncHandler(async (req, res) => {
	const review = await performanceReviewService.getPerformanceReviewById(
		req.params.reviewId
	);
	res.status(200).json(review);
});

exports.updateReview = asyncHandler(async (req, res) => {
	const updatedReview = await performanceReviewService.updatePerformanceReview(
		req.params.reviewId,
		req.body
	);
	res.status(200).json(updatedReview);
});

exports.deleteReview = asyncHandler(async (req, res) => {
	await performanceReviewService.deletePerformanceReview(req.params.reviewId);
	res.status(200).json({ message: "Performance review deleted successfully" });
});
