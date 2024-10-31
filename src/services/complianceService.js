const Compliance = require("../models/complianceModel");

exports.createComplianceRecord = async (complianceData) => {
	const record = new Compliance(complianceData);
	return await record.save();
};

exports.getComplianceRecordsByEmployee = async (employeeId) => {
	return await Compliance.find({ employee: employeeId }).sort({ date: -1 });
};

exports.acknowledgePolicy = async (complianceId) => {
	return await Compliance.findByIdAndUpdate(
		complianceId,
		{ acknowledged: true },
		{ new: true }
	);
};

exports.resolveIncident = async (complianceId) => {
	return await Compliance.findByIdAndUpdate(
		complianceId,
		{ "incidentDetails.resolved": true },
		{ new: true }
	);
};
