const wellnessService = require("../services/wellnessService");
const asyncHandler = require("express-async-handler");

exports.createWellnessProgram = asyncHandler(async (req, res) => {
	const program = await wellnessService.createWellnessProgram(req.body);
	res.status(201).json(program);
});

exports.getAllWellnessPrograms = asyncHandler(async (req, res) => {
	const programs = await wellnessService.getAllWellnessPrograms();
	res.status(200).json(programs);
});

exports.registerParticipant = asyncHandler(async (req, res) => {
	const program = await wellnessService.registerParticipant(
		req.params.programId,
		req.user._id
	);
	res.status(200).json(program);
});
