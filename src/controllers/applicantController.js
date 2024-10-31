const applicantService = require("../services/applicantService");
const asyncHandler = require("express-async-handler");

exports.createApplicant = asyncHandler(async (req, res) => {
	const applicant = await applicantService.createApplicant(req.body);
	res.status(201).json(applicant);
});

exports.getApplicantsByJob = asyncHandler(async (req, res) => {
	const applicants = await applicantService.getApplicantsByJob(
		req.params.jobId
	);
	res.status(200).json(applicants);
});

exports.updateApplicantStatus = asyncHandler(async (req, res) => {
	const updatedApplicant = await applicantService.updateApplicantStatus(
		req.params.applicantId,
		req.body.status
	);
	res.status(200).json(updatedApplicant);
});

exports.deleteApplicant = asyncHandler(async (req, res) => {
	await applicantService.deleteApplicant(req.params.applicantId);
	res.status(200).json({ message: "Applicant deleted successfully" });
});
