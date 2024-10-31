const express = require("express");
const router = express.Router();
const trainingController = require("../controllers/trainingController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "manager"]),
	trainingController.createTraining
); // Create training module
router.get(
	"/",
	protect,
	authorize(["hr", "manager", "employee"]),
	trainingController.getAllTrainings
); // Get all trainings
router.get(
	"/:trainingId",
	protect,
	authorize(["hr", "manager", "employee"]),
	trainingController.getTrainingById
); // Get training by ID
router.put(
	"/:trainingId",
	protect,
	authorize(["hr", "manager"]),
	trainingController.updateTraining
); // Update training
router.delete(
	"/:trainingId",
	protect,
	authorize(["hr", "manager"]),
	trainingController.deleteTraining
); // Delete training

// new

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	trainingController.createTrainingProgram
); // Create training program
router.get(
	"/category/:category",
	protect,
	authorize(["employee", "manager", "hr", "admin"]),
	trainingController.getTrainingProgramsByCategory
); // Get training by category
router.get(
	"/",
	protect,
	authorize(["employee", "manager", "hr", "admin"]),
	trainingController.getAllTrainingPrograms
); // Get all training programs

module.exports = router;
