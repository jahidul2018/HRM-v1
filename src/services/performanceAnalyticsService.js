const PerformanceReview = require("../models/performanceReviewModel");

exports.getDepartmentPerformanceAnalytics = async (departmentId) => {
	const reviews = await PerformanceReview.aggregate([
		{
			$lookup: {
				from: "employees",
				localField: "employee",
				foreignField: "_id",
				as: "employeeInfo",
			},
		},
		{ $unwind: "$employeeInfo" },
		{ $match: { "employeeInfo.department": departmentId } },
		{
			$group: {
				_id: "$employeeInfo.department",
				averageProductivity: { $avg: "$scores.productivity" },
				averageTeamwork: { $avg: "$scores.teamwork" },
				averageCommunication: { $avg: "$scores.communication" },
				averageProblemSolving: { $avg: "$scores.problemSolving" },
				averageLeadership: { $avg: "$scores.leadership" },
				averageOverallRating: { $avg: "$overallRating" },
			},
		},
	]);
	return reviews;
};

exports.getCompanyPerformanceSummary = async () => {
	const summary = await PerformanceReview.aggregate([
		{
			$group: {
				_id: null,
				averageProductivity: { $avg: "$scores.productivity" },
				averageTeamwork: { $avg: "$scores.teamwork" },
				averageCommunication: { $avg: "$scores.communication" },
				averageProblemSolving: { $avg: "$scores.problemSolving" },
				averageLeadership: { $avg: "$scores.leadership" },
				averageOverallRating: { $avg: "$overallRating" },
			},
		},
	]);
	return summary;
};
