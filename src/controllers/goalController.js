const goalService = require("../services/goalService");
const asyncHandler = require("express-async-handler");

exports.createGoal = asyncHandler(async (req, res) => {
	const goalData = { ...req.body, employee: req.params.employeeId };
	const goal = await goalService.createGoal(goalData);
	res.status(201).json(goal);
});

exports.getGoalsByEmployee = asyncHandler(async (req, res) => {
	const goals = await goalService.getGoalsByEmployee(req.params.employeeId);
	res.status(200).json(goals);
});

exports.updateGoalStatus = asyncHandler(async (req, res) => {
	const updatedGoal = await goalService.updateGoalStatus(
		req.params.goalId,
		req.body.status
	);
	res.status(200).json(updatedGoal);
});

exports.deleteGoal = asyncHandler(async (req, res) => {
	await goalService.deleteGoal(req.params.goalId);
	res.status(200).json({ message: "Goal deleted successfully" });
});

// new

// const goalService = require("../services/goalService");
// const asyncHandler = require("express-async-handler");

exports.createGoal = asyncHandler(async (req, res) => {
	const goal = await goalService.createGoal(req.body);
	res.status(201).json(goal);
});

exports.getGoalsByEmployee = asyncHandler(async (req, res) => {
	const goals = await goalService.getGoalsByEmployee(req.params.employeeId);
	res.status(200).json(goals);
});

exports.updateGoalProgress = asyncHandler(async (req, res) => {
	const { goalId } = req.params;
	const { progress } = req.body;
	const updatedGoal = await goalService.updateGoalProgress(goalId, progress);
	res.status(200).json(updatedGoal);
});
