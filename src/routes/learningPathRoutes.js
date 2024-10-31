const express = require("express");
const router = express.Router();
const learningPathController = require("../controllers/learningPathController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "manager"]),
	learningPathController.createLearningPath
); // Create learning path
router.get(
	"/",
	protect,
	authorize(["hr", "manager", "employee"]),
	learningPathController.getAllLearningPaths
); // Get all paths
router.get(
	"/:pathId",
	protect,
	authorize(["hr", "manager", "employee"]),
	learningPathController.getLearningPathById
); // Get path by ID
router.put(
	"/:pathId",
	protect,
	authorize(["hr", "manager"]),
	learningPathController.updateLearningPath
); // Update path
router.delete(
	"/:pathId",
	protect,
	authorize(["hr", "manager"]),
	learningPathController.deleteLearningPath
); // Delete path

module.exports = router;
