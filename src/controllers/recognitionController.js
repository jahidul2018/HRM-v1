const recognitionService = require("../services/recognitionService");
const asyncHandler = require("express-async-handler");

exports.createRecognition = asyncHandler(async (req, res) => {
	const recognition = await recognitionService.createRecognition(req.body);
	res.status(201).json(recognition);
});

exports.getRecognitionsByEmployee = asyncHandler(async (req, res) => {
	const recognitions = await recognitionService.getRecognitionsByEmployee(
		req.params.employeeId
	);
	res.status(200).json(recognitions);
});
