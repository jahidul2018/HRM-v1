const Offboarding = require("../models/offboardingModel");

exports.createOffboardingRecord = async (offboardingData) => {
	const offboarding = new Offboarding(offboardingData);
	return await offboarding.save();
};

exports.getOffboardingByEmployee = async (employeeId) => {
	return await Offboarding.findOne({ employee: employeeId }).populate(
		"employee",
		"name"
	);
};

exports.updateOffboardingTaskStatus = async (
	offboardingId,
	taskId,
	isCompleted
) => {
	return await Offboarding.findOneAndUpdate(
		{ _id: offboardingId, "tasks._id": taskId },
		{ $set: { "tasks.$.isCompleted": isCompleted } },
		{ new: true }
	);
};
