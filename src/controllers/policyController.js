const policyService = require("../services/policyService");
const asyncHandler = require("express-async-handler");

exports.createPolicy = asyncHandler(async (req, res) => {
	const policy = await policyService.createPolicy(req.body);
	res.status(201).json(policy);
});

exports.updatePolicy = asyncHandler(async (req, res) => {
	const updatedPolicy = await policyService.updatePolicy(
		req.params.policyId,
		req.body
	);
	res.status(200).json(updatedPolicy);
});

exports.acknowledgePolicy = asyncHandler(async (req, res) => {
	const acknowledgedPolicy = await policyService.acknowledgePolicy(
		req.params.policyId,
		req.user._id
	);
	res.status(200).json(acknowledgedPolicy);
});
