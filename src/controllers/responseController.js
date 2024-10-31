const responseService = require("../services/responseService");
const asyncHandler = require("express-async-handler");

exports.submitResponse = asyncHandler(async (req, res) => {
	const responseData = { ...req.body, respondent: req.user._id || null };
	const response = await responseService.submitResponse(responseData);
	res.status(201).json(response);
});

exports.getResponsesBySurvey = asyncHandler(async (req, res) => {
	const responses = await responseService.getResponsesBySurvey(
		req.params.surveyId
	);
	res.status(200).json(responses);
});
