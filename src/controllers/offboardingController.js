const offboardingService = require("../services/offboardingService");
const asyncHandler = require("express-async-handler");

exports.createOffboardingRecord = asyncHandler(async (req, res) => {
	const offboarding = await offboardingService.createOffboardingRecord(
		req.body
	);
	res.status(201).json(offboarding);
});

exports.getOffboardingByEmployee = asyncHandler(async (req, res) => {
	const offboarding = await offboardingService.getOffboardingByEmployee(
		req.params.employeeId
	);
	res.status(200).json(offboarding);
});

exports.updateOffboardingTaskStatus = asyncHandler(async (req, res) => {
	const { offboardingId, taskId } = req.params;
	const { isCompleted } = req.body;
	const updatedOffboarding =
		await offboardingService.updateOffboardingTaskStatus(
			offboardingId,
			taskId,
			isCompleted
		);
	res.status(200).json(updatedOffboarding);
});
