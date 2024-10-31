const auditLogService = require("../services/auditLogService");
const asyncHandler = require("express-async-handler");

exports.getAuditLogs = asyncHandler(async (req, res) => {
	const logs = await auditLogService.getAuditLogs();
	res.status(200).json(logs);
});
