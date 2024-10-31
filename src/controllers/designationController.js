const designationService = require("../services/designationService");
const asyncHandler = require("express-async-handler");

exports.createDesignation = asyncHandler(async (req, res) => {
	const designation = await designationService.createDesignation(req.body);
	res.status(201).json(designation);
});

exports.getDesignations = asyncHandler(async (req, res) => {
	const designations = await designationService.getDesignations();
	res.status(200).json(designations);
});

exports.updateDesignation = asyncHandler(async (req, res) => {
	const designation = await designationService.updateDesignation(
		req.params.designationId,
		req.body
	);
	res.status(200).json(designation);
});

exports.deleteDesignation = asyncHandler(async (req, res) => {
	await designationService.deleteDesignation(req.params.designationId);
	res.status(200).json({ message: "Designation deleted" });
});
