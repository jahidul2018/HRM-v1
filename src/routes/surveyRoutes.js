const express = require("express");
const router = express.Router();
const surveyController = require("../controllers/surveyController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	surveyController.createSurvey
); // Create survey
router.get(
	"/",
	protect,
	authorize(["employee", "manager", "hr", "admin"]),
	surveyController.getAllSurveys
); // View all surveys
router.get(
	"/:surveyId",
	protect,
	authorize(["employee", "manager", "hr", "admin"]),
	surveyController.getSurveyById
); // View survey details

module.exports = router;
