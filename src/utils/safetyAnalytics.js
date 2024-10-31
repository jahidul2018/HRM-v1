exports.calculateIncidentSeverityDistribution = (incidents) => {
	const distribution = { Low: 0, Medium: 0, High: 0 };
	incidents.forEach((incident) => {
		distribution[incident.severity] += 1;
	});
	return distribution;
};

exports.getMostCommonIncidentTypes = (incidents) => {
	const typeCounts = {};
	incidents.forEach((incident) => {
		typeCounts[incident.incidentType] =
			(typeCounts[incident.incidentType] || 0) + 1;
	});
	return Object.entries(typeCounts).sort((a, b) => b[1] - a[1]);
};
