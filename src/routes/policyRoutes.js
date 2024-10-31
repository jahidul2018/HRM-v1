const express = require("express");
const router = express.Router();
const policyController = require("../controllers/policyController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	policyController.createPolicy
); // Create policy
router.put(
	"/:policyId",
	protect,
	authorize(["hr", "admin"]),
	policyController.updatePolicy
); // Update policy
router.patch(
	"/:policyId/acknowledge",
	protect,
	authorize(["employee", "manager", "hr"]),
	policyController.acknowledgePolicy
); // Acknowledge policy

module.exports = router;
