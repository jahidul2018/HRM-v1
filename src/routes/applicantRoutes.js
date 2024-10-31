const express = require("express");
const router = express.Router();
const applicantController = require("../controllers/applicantController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr"]),
	applicantController.createApplicant
); // Create applicant
router.get(
	"/job/:jobId",
	protect,
	authorize(["hr", "manager"]),
	applicantController.getApplicantsByJob
); // Get applicants for a job
router.patch(
	"/:applicantId/status",
	protect,
	authorize(["hr"]),
	applicantController.updateApplicantStatus
); // Update applicant status
router.delete(
	"/:applicantId",
	protect,
	authorize(["hr"]),
	applicantController.deleteApplicant
); // Delete applicant

module.exports = router;
