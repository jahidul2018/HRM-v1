const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["manager", "admin"]),
	projectController.createProject
); // Create project
router.get(
	"/",
	protect,
	authorize(["manager", "hr", "admin"]),
	projectController.getAllProjects
); // Get all projects
router.get(
	"/:projectId",
	protect,
	authorize(["manager", "hr", "admin"]),
	projectController.getProjectById
); // Get project by ID
router.put(
	"/:projectId",
	protect,
	authorize(["manager", "admin"]),
	projectController.updateProject
); // Update project
router.delete(
	"/:projectId",
	protect,
	authorize(["admin"]),
	projectController.deleteProject
); // Delete project

module.exports = router;
