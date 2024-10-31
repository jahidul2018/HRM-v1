const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post("/", protect, authorize(["hr"]), jobController.createJob); // Create job
router.get(
	"/",
	protect,
	authorize(["hr", "manager", "employee"]),
	jobController.getAllJobs
); // Get all jobs
router.get(
	"/:jobId",
	protect,
	authorize(["hr", "manager", "employee"]),
	jobController.getJobById
); // Get job by ID
router.put("/:jobId", protect, authorize(["hr"]), jobController.updateJob); // Update job
router.delete("/:jobId", protect, authorize(["hr"]), jobController.deleteJob); // Delete job

module.exports = router;
