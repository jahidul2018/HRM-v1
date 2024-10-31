const express = require("express");
const router = express.Router();
const auditLogController = require("../controllers/auditLogController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.get(
	"/",
	protect,
	authorize(["hr", "admin"]),
	auditLogController.getAuditLogs
); // View audit logs

module.exports = router;
