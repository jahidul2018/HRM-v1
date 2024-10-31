const certificationService = require("../services/certificationService");
const asyncHandler = require("express-async-handler");

exports.addCertification = asyncHandler(async (req, res) => {
	const certification = await certificationService.addCertification(req.body);
	res.status(201).json(certification);
});

exports.getCertificationsByEmployee = asyncHandler(async (req, res) => {
	const certifications = await certificationService.getCertificationsByEmployee(
		req.params.employeeId
	);
	res.status(200).json(certifications);
});

exports.verifyCertification = asyncHandler(async (req, res) => {
	const verifiedCertification = await certificationService.verifyCertification(
		req.params.certificationId
	);
	res.status(200).json(verifiedCertification);
});

exports.deleteCertification = asyncHandler(async (req, res) => {
	await certificationService.deleteCertification(req.params.certificationId);
	res.status(200).json({ message: "Certification deleted successfully" });
});
