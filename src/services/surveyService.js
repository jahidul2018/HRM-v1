const Survey = require("../models/surveyModel");

exports.createSurvey = async (surveyData) => {
	const survey = new Survey(surveyData);
	return await survey.save();
};

exports.getAllSurveys = async () => {
	return await Survey.find();
};

exports.getSurveyById = async (surveyId) => {
	return await Survey.findById(surveyId);
};
