const careerPathService = require("../services/careerPathService");
const asyncHandler = require("express-async-handler");

exports.createCareerPath = asyncHandler(async (req, res) => {
	const careerPath = await careerPathService.createCareerPath(req.body);
	res.status(201).json(careerPath);
});

exports.getCareerPaths = asyncHandler(async (req, res) => {
	const careerPaths = await careerPathService.getCareerPaths();
	res.status(200).json(careerPaths);
});

exports.getCareerPathByRole = asyncHandler(async (req, res) => {
	const careerPath = await careerPathService.getCareerPathByRole(
		req.params.role
	);
	res.status(200).json(careerPath);
});

exports.updateCareerPath = asyncHandler(async (req, res) => {
	const updatedCareerPath = await careerPathService.updateCareerPath(
		req.params.careerPathId,
		req.body
	);
	res.status(200).json(updatedCareerPath);
});
