const express = require("express");
const router = express.Router();
const incidentController = require("../controllers/incidentController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["employee", "hr", "admin"]),
	incidentController.createIncident
); // Report incident
router.patch(
	"/:incidentId",
	protect,
	authorize(["hr", "admin"]),
	incidentController.updateIncidentStatus
); // Update incident status
router.get(
	"/analytics",
	protect,
	authorize(["hr", "admin"]),
	incidentController.getIncidentAnalytics
); // Get incident analytics

module.exports = router;
