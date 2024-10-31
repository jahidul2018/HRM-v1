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

// new //
const PerformanceReview = require("../models/performanceReviewModel");

exports.createPerformanceReview = async (reviewData) => {
	const review = new PerformanceReview(reviewData);
	return await review.save();
};

exports.getReviewsByEmployee = async (employeeId) => {
	return await PerformanceReview.find({ employee: employeeId }).populate(
		"reviewer",
		"name"
	);
};

exports.getAllReviews = async () => {
	return await PerformanceReview.find()
		.populate("employee", "name")
		.populate("reviewer", "name");
};
