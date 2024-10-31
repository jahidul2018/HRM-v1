const Goal = require("../models/goalModel");

exports.createGoal = async (goalData) => {
	const goal = new Goal(goalData);
	return await goal.save();
};

exports.getGoalsByEmployee = async (employeeId) => {
	return await Goal.find({ employee: employeeId }).sort({ createdAt: -1 });
};

exports.updateGoalStatus = async (goalId, status) => {
	return await Goal.findByIdAndUpdate(goalId, { status }, { new: true });
};

exports.deleteGoal = async (goalId) => {
	return await Goal.findByIdAndDelete(goalId);
};

// new //

// const Goal = require("../models/goalModel");

exports.createGoal = async (goalData) => {
	const goal = new Goal(goalData);
	return await goal.save();
};

exports.getGoalsByEmployee = async (employeeId) => {
	return await Goal.find({ employee: employeeId });
};

exports.updateGoalProgress = async (goalId, progress) => {
	return await Goal.findByIdAndUpdate(
		goalId,
		{ progress, status: progress === 100 ? "Completed" : "In Progress" },
		{ new: true }
	);
};
