const Onboarding = require("../models/onboardingModel");

exports.createOnboardingRecord = async (onboardingData) => {
	const onboarding = new Onboarding(onboardingData);
	return await onboarding.save();
};

exports.getOnboardingByEmployee = async (employeeId) => {
	return await Onboarding.findOne({ employee: employeeId }).populate(
		"employee",
		"name"
	);
};

exports.updateOnboardingTaskStatus = async (
	onboardingId,
	taskId,
	isCompleted
) => {
	return await Onboarding.findOneAndUpdate(
		{ _id: onboardingId, "tasks._id": taskId },
		{ $set: { "tasks.$.isCompleted": isCompleted } },
		{ new: true }
	);
};
