const pulseSurveyService = require("../services/pulseSurveyService");
const asyncHandler = require("express-async-handler");

exports.createSurvey = asyncHandler(async (req, res) => {
	const survey = await pulseSurveyService.createSurvey(req.body);
	res.status(201).json(survey);
});

exports.submitResponse = asyncHandler(async (req, res) => {
	const { surveyId } = req.params;
	const { selectedOption } = req.body;
	const response = await pulseSurveyService.submitResponse(
		surveyId,
		req.user._id,
		selectedOption
	);
	res.status(200).json(response);
});

exports.getActiveSurveys = asyncHandler(async (req, res) => {
	const surveys = await pulseSurveyService.getActiveSurveys();
	res.status(200).json(surveys);
});
