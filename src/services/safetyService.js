const SafetyTraining = require("../models/safetyTrainingModel");

exports.recordSafetyTraining = async (trainingData) => {
	const training = new SafetyTraining(trainingData);
	return await training.save();
};

exports.getEmployeeTrainingHistory = async (employeeId) => {
	return await SafetyTraining.find({ employee: employeeId });
};

exports.getExpiringTrainings = async (thresholdDate) => {
	return await SafetyTraining.find({ expirationDate: { $lt: thresholdDate } });
};
