const express = require("express");
const router = express.Router();
const responseController = require("../controllers/responseController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["employee", "manager", "hr", "admin"]),
	responseController.submitResponse
); // Submit survey response
router.get(
	"/survey/:surveyId",
	protect,
	authorize(["hr", "admin"]),
	responseController.getResponsesBySurvey
); // View survey responses

module.exports = router;
