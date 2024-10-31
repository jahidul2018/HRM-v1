const express = require("express");
const router = express.Router();
const pulseSurveyController = require("../controllers/pulseSurveyController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	pulseSurveyController.createSurvey
); // Create pulse survey
router.post(
	"/:surveyId/respond",
	protect,
	authorize(["employee", "manager"]),
	pulseSurveyController.submitResponse
); // Submit survey response
router.get(
	"/active",
	protect,
	authorize(["employee", "manager", "hr", "admin"]),
	pulseSurveyController.getActiveSurveys
); // Get active surveys

module.exports = router;
