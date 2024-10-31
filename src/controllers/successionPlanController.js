const successionPlanService = require("../services/successionPlanService");
const asyncHandler = require("express-async-handler");

exports.createSuccessionPlan = asyncHandler(async (req, res) => {
	const successionPlan = await successionPlanService.createSuccessionPlan(
		req.body
	);
	res.status(201).json(successionPlan);
});

exports.getSuccessionPlans = asyncHandler(async (req, res) => {
	const successionPlans = await successionPlanService.getSuccessionPlans();
	res.status(200).json(successionPlans);
});

exports.getSuccessionPlanByPosition = asyncHandler(async (req, res) => {
	const successionPlan =
		await successionPlanService.getSuccessionPlanByPosition(
			req.params.position
		);
	res.status(200).json(successionPlan);
});

exports.updateSuccessorReadiness = asyncHandler(async (req, res) => {
	const { successionPlanId, successorId } = req.params;
	const { readinessLevel } = req.body;
	const updatedPlan = await successionPlanService.updateSuccessorReadiness(
		successionPlanId,
		successorId,
		readinessLevel
	);
	res.status(200).json(updatedPlan);
});
