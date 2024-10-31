const express = require("express");
const router = express.Router();
const wellnessController = require("../controllers/wellnessController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	wellnessController.createWellnessProgram
); // Create wellness program
router.get(
	"/",
	protect,
	authorize(["employee", "manager", "hr", "admin"]),
	wellnessController.getAllWellnessPrograms
); // View wellness programs
router.patch(
	"/:programId/register",
	protect,
	authorize(["employee"]),
	wellnessController.registerParticipant
); // Register for a wellness program

module.exports = router;
