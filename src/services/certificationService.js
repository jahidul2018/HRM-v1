const Certification = require("../models/certificationModel");

exports.addCertification = async (certificationData) => {
	const certification = new Certification(certificationData);
	return await certification.save();
};

exports.getCertificationsByEmployee = async (employeeId) => {
	return await Certification.find({ employee: employeeId });
};

exports.verifyCertification = async (certificationId) => {
	return await Certification.findByIdAndUpdate(
		certificationId,
		{ verified: true },
		{ new: true }
	);
};

exports.deleteCertification = async (certificationId) => {
	return await Certification.findByIdAndDelete(certificationId);
};
