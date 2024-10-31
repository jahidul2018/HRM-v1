const PulseSurvey = require("../models/pulseSurveyModel");

exports.createSurvey = async (surveyData) => {
    const survey = new PulseSurvey(surveyData);
    return await survey.save();
};

exports.submitResponse = async (surveyId, employeeId, selectedOption) => {
    return await PulseSurvey.findByIdAndUpdate(
        surveyId,
        { $push: { responses: { employee: employeeId, selectedOption } } },
        { new: true }
    );
};

exports.getActiveSurveys = async () => {
    const currentDate = new Date();
    return await PulseSurvey.find({ expirationDate: { $gt: currentDate } });
};
