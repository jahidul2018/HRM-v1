const jobService = require("../services/jobService");
const asyncHandler = require("express-async-handler");

exports.createJob = asyncHandler(async (req, res) => {
	const job = await jobService.createJob(req.body);
	res.status(201).json(job);
});

exports.getAllJobs = asyncHandler(async (req, res) => {
	const jobs = await jobService.getAllJobs();
	res.status(200).json(jobs);
});

exports.getJobById = asyncHandler(async (req, res) => {
	const job = await jobService.getJobById(req.params.jobId);
	res.status(200).json(job);
});

exports.updateJob = asyncHandler(async (req, res) => {
	const updatedJob = await jobService.updateJob(req.params.jobId, req.body);
	res.status(200).json(updatedJob);
});

exports.deleteJob = asyncHandler(async (req, res) => {
	await jobService.deleteJob(req.params.jobId);
	res.status(200).json({ message: "Job deleted successfully" });
});
