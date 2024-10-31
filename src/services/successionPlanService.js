const SuccessionPlan = require("../models/successionPlanModel");

exports.createSuccessionPlan = async (successionPlanData) => {
	const successionPlan = new SuccessionPlan(successionPlanData);
	return await successionPlan.save();
};

exports.getSuccessionPlans = async () => {
	return await SuccessionPlan.find().populate("successors.employee", "name");
};

exports.getSuccessionPlanByPosition = async (position) => {
	return await SuccessionPlan.findOne({ position }).populate(
		"successors.employee",
		"name"
	);
};

exports.updateSuccessorReadiness = async (
	successionPlanId,
	successorId,
	readinessLevel
) => {
	return await SuccessionPlan.findOneAndUpdate(
		{ _id: successionPlanId, "successors._id": successorId },
		{ $set: { "successors.$.readinessLevel": readinessLevel } },
		{ new: true }
	);
};
