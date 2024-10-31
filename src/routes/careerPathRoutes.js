const express = require("express");
const router = express.Router();
const careerPathController = require("../controllers/careerPathController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	careerPathController.createCareerPath
); // Create career path
router.get(
	"/",
	protect,
	authorize(["hr", "admin"]),
	careerPathController.getCareerPaths
); // Get all career paths
router.get(
	"/role/:role",
	protect,
	authorize(["hr", "manager", "admin"]),
	careerPathController.getCareerPathByRole
); // Get career path by role
router.put(
	"/:careerPathId",
	protect,
	authorize(["hr", "admin"]),
	careerPathController.updateCareerPath
); // Update career path

module.exports = router;
