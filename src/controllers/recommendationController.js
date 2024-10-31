const recommendationService = require("../services/recommendationService");
const asyncHandler = require("express-async-handler");

exports.getRecommendationsForEmployee = asyncHandler(async (req, res) => {
	const recommendations = await recommendationService.generateRecommendations(
		req.params.employeeId
	);
	res.status(200).json(recommendations);
});
