const trainingService = require("../services/trainingService");
const asyncHandler = require("express-async-handler");

exports.createTraining = asyncHandler(async (req, res) => {
	const training = await trainingService.createTraining(req.body);
	res.status(201).json(training);
});

exports.getAllTrainings = asyncHandler(async (req, res) => {
	const trainings = await trainingService.getAllTrainings();
	res.status(200).json(trainings);
});

exports.getTrainingById = asyncHandler(async (req, res) => {
	const training = await trainingService.getTrainingById(req.params.trainingId);
	res.status(200).json(training);
});

exports.updateTraining = asyncHandler(async (req, res) => {
	const updatedTraining = await trainingService.updateTraining(
		req.params.trainingId,
		req.body
	);
	res.status(200).json(updatedTraining);
});

exports.deleteTraining = asyncHandler(async (req, res) => {
	await trainingService.deleteTraining(req.params.trainingId);
	res.status(200).json({ message: "Training deleted successfully" });
});

// new //

const trainingService = require("../services/trainingService");
const asyncHandler = require("express-async-handler");

exports.createTrainingProgram = asyncHandler(async (req, res) => {
	const program = await trainingService.createTrainingProgram(req.body);
	res.status(201).json(program);
});

exports.getTrainingProgramsByCategory = asyncHandler(async (req, res) => {
	const programs = await trainingService.getTrainingProgramsByCategory(
		req.params.category
	);
	res.status(200).json(programs);
});

exports.getAllTrainingPrograms = asyncHandler(async (req, res) => {
	const programs = await trainingService.getAllTrainingPrograms();
	res.status(200).json(programs);
});
