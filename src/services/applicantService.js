const Applicant = require("../models/applicantModel");

exports.createApplicant = async (applicantData) => {
	const applicant = new Applicant(applicantData);
	return await applicant.save();
};

exports.getApplicantsByJob = async (jobId) => {
	return await Applicant.find({ job: jobId });
};

exports.updateApplicantStatus = async (applicantId, status) => {
	return await Applicant.findByIdAndUpdate(
		applicantId,
		{ status },
		{ new: true }
	);
};

exports.deleteApplicant = async (applicantId) => {
	return await Applicant.findByIdAndDelete(applicantId);
};
