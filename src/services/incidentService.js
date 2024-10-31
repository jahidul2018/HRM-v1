const Incident = require("../models/incidentModel");

exports.createIncident = async (incidentData) => {
	const incident = new Incident(incidentData);
	return await incident.save();
};

exports.updateIncidentStatus = async (incidentId, updateData) => {
	return await Incident.findByIdAndUpdate(incidentId, updateData, {
		new: true,
	});
};

exports.getIncidentsBySeverity = async (severity) => {
	return await Incident.find({ severity }).sort({ dateReported: -1 });
};

exports.getAllIncidents = async () => {
	return await Incident.find().sort({ dateReported: -1 });
};
