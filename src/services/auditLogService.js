const AuditLog = require("../models/auditLogModel");

exports.logAction = async (action, details, performedBy = null) => {
	const logData = { action, details, performedBy };
	const log = new AuditLog(logData);
	return await log.save();
};

exports.getAuditLogs = async (filter = {}) => {
	return await AuditLog.find(filter).sort({ datePerformed: -1 });
};
