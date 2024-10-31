const incidentService = require("../services/incidentService");
const safetyAnalytics = require("../utils/safetyAnalytics");
const asyncHandler = require("express-async-handler");

exports.createIncident = asyncHandler(async (req, res) => {
	const incident = await incidentService.createIncident(req.body);
	res.status(201).json(incident);
});

exports.updateIncidentStatus = asyncHandler(async (req, res) => {
	const updatedIncident = await incidentService.updateIncidentStatus(
		req.params.incidentId,
		req.body
	);
	res.status(200).json(updatedIncident);
});

exports.getIncidentAnalytics = asyncHandler(async (req, res) => {
	const incidents = await incidentService.getAllIncidents();
	const severityDistribution =
		safetyAnalytics.calculateIncidentSeverityDistribution(incidents);
	const commonTypes = safetyAnalytics.getMostCommonIncidentTypes(incidents);
	res.status(200).json({ severityDistribution, commonTypes });
});
