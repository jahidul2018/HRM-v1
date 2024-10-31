const safetyService = require("../services/safetyService");
const asyncHandler = require("express-async-handler");

exports.recordSafetyTraining = asyncHandler(async (req, res) => {
	const training = await safetyService.recordSafetyTraining(req.body);
	res.status(201).json(training);
});

exports.getEmployeeTrainingHistory = asyncHandler(async (req, res) => {
	const trainingHistory = await safetyService.getEmployeeTrainingHistory(
		req.params.employeeId
	);
	res.status(200).json(trainingHistory);
});

exports.getExpiringTrainings = asyncHandler(async (req, res) => {
	const thresholdDate = new Date(req.query.date);
	const expiringTrainings = await safetyService.getExpiringTrainings(
		thresholdDate
	);
	res.status(200).json(expiringTrainings);
});
