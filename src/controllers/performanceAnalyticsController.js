const performanceAnalyticsService = require("../services/performanceAnalyticsService");
const asyncHandler = require("express-async-handler");

exports.getDepartmentPerformanceAnalytics = asyncHandler(async (req, res) => {
	const analytics =
		await performanceAnalyticsService.getDepartmentPerformanceAnalytics(
			req.params.departmentId
		);
	res.status(200).json(analytics);
});

exports.getCompanyPerformanceSummary = asyncHandler(async (req, res) => {
	const summary =
		await performanceAnalyticsService.getCompanyPerformanceSummary();
	res.status(200).json(summary);
});
