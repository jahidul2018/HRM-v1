const express = require("express");
const router = express.Router();
const certificationController = require("../controllers/certificationController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["employee", "hr"]),
	certificationController.addCertification
); // Add certification
router.get(
	"/employee/:employeeId",
	protect,
	authorize(["employee", "hr"]),
	certificationController.getCertificationsByEmployee
); // Get certifications by employee
router.patch(
	"/:certificationId/verify",
	protect,
	authorize(["hr"]),
	certificationController.verifyCertification
); // Verify certification
router.delete(
	"/:certificationId",
	protect,
	authorize(["hr"]),
	certificationController.deleteCertification
); // Delete certification

module.exports = router;
