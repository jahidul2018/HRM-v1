const surveyService = require("../services/surveyService");
const asyncHandler = require("express-async-handler");

exports.createSurvey = asyncHandler(async (req, res) => {
	const surveyData = { ...req.body, createdBy: req.user._id };
	const survey = await surveyService.createSurvey(surveyData);
	res.status(201).json(survey);
});

exports.getAllSurveys = asyncHandler(async (req, res) => {
	const surveys = await surveyService.getAllSurveys();
	res.status(200).json(surveys);
});

exports.getSurveyById = asyncHandler(async (req, res) => {
	const survey = await surveyService.getSurveyById(req.params.surveyId);
	res.status(200).json(survey);
});
