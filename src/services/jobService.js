const Job = require("../models/jobModel");

exports.createJob = async (jobData) => {
	const job = new Job(jobData);
	return await job.save();
};

exports.getAllJobs = async () => {
	return await Job.find().populate("department", "name");
};

exports.getJobById = async (jobId) => {
	return await Job.findById(jobId).populate("department", "name");
};

exports.updateJob = async (jobId, updateData) => {
	return await Job.findByIdAndUpdate(jobId, updateData, { new: true });
};

exports.deleteJob = async (jobId) => {
	return await Job.findByIdAndDelete(jobId);
};
