const learningPathService = require("../services/learningPathService");
const asyncHandler = require("express-async-handler");

exports.createLearningPath = asyncHandler(async (req, res) => {
	const learningPath = await learningPathService.createLearningPath(req.body);
	res.status(201).json(learningPath);
});

exports.getAllLearningPaths = asyncHandler(async (req, res) => {
	const paths = await learningPathService.getAllLearningPaths();
	res.status(200).json(paths);
});

exports.getLearningPathById = asyncHandler(async (req, res) => {
	const path = await learningPathService.getLearningPathById(req.params.pathId);
	res.status(200).json(path);
});

exports.updateLearningPath = asyncHandler(async (req, res) => {
	const updatedPath = await learningPathService.updateLearningPath(
		req.params.pathId,
		req.body
	);
	res.status(200).json(updatedPath);
});

exports.deleteLearningPath = asyncHandler(async (req, res) => {
	await learningPathService.deleteLearningPath(req.params.pathId);
	res.status(200).json({ message: "Learning path deleted successfully" });
});
