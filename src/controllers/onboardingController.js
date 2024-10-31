const onboardingService = require("../services/onboardingService");
const asyncHandler = require("express-async-handler");

exports.createOnboardingRecord = asyncHandler(async (req, res) => {
	const onboarding = await onboardingService.createOnboardingRecord(req.body);
	res.status(201).json(onboarding);
});

exports.getOnboardingByEmployee = asyncHandler(async (req, res) => {
	const onboarding = await onboardingService.getOnboardingByEmployee(
		req.params.employeeId
	);
	res.status(200).json(onboarding);
});

exports.updateOnboardingTaskStatus = asyncHandler(async (req, res) => {
	const { onboardingId, taskId } = req.params;
	const { isCompleted } = req.body;
	const updatedOnboarding = await onboardingService.updateOnboardingTaskStatus(
		onboardingId,
		taskId,
		isCompleted
	);
	res.status(200).json(updatedOnboarding);
});
