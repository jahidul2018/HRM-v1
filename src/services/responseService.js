const Response = require("../models/responseModel");

exports.submitResponse = async (responseData) => {
	const response = new Response(responseData);
	return await response.save();
};

exports.getResponsesBySurvey = async (surveyId) => {
	return await Response.find({ survey: surveyId }).populate(
		"respondent",
		"name"
	);
};
