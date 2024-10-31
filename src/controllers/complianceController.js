const complianceService = require("../services/complianceService");
const asyncHandler = require("express-async-handler");

exports.createComplianceRecord = asyncHandler(async (req, res) => {
	const record = await complianceService.createComplianceRecord(req.body);
	res.status(201).json(record);
});

exports.getEmployeeComplianceRecords = asyncHandler(async (req, res) => {
	const records = await complianceService.getComplianceRecordsByEmployee(
		req.params.employeeId
	);
	res.status(200).json(records);
});

exports.acknowledgePolicy = asyncHandler(async (req, res) => {
	const updatedRecord = await complianceService.acknowledgePolicy(
		req.params.complianceId
	);
	res.status(200).json(updatedRecord);
});

exports.resolveIncident = asyncHandler(async (req, res) => {
	const resolvedRecord = await complianceService.resolveIncident(
		req.params.complianceId
	);
	res.status(200).json(resolvedRecord);
});
