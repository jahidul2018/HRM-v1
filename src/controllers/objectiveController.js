const objectiveService = require("../services/objectiveService");
const asyncHandler = require("express-async-handler");

exports.createObjective = asyncHandler(async (req, res) => {
	const objective = await objectiveService.createObjective(req.body);
	res.status(201).json(objective);
});

exports.getObjectives = asyncHandler(async (req, res) => {
	const objectives = await objectiveService.getObjectives();
	res.status(200).json(objectives);
});

exports.updateKeyResult = asyncHandler(async (req, res) => {
	const { objectiveId, keyResultIndex } = req.params;
	const { achieved } = req.body;
	const updatedObjective = await objectiveService.updateKeyResult(
		objectiveId,
		keyResultIndex,
		achieved
	);
	res.status(200).json(updatedObjective);
});
