const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skillController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/employee/:employeeId",
	protect,
	authorize(["employee", "manager", "hr"]),
	skillController.addSkill
); // Add skill to employee
router.get(
	"/employee/:employeeId",
	protect,
	authorize(["employee", "manager", "hr"]),
	skillController.getSkillsByEmployee
); // Get skills for an employee
router.patch(
	"/:skillId",
	protect,
	authorize(["employee", "manager"]),
	skillController.updateSkill
); // Update skill details
router.delete(
	"/:skillId",
	protect,
	authorize(["employee", "manager"]),
	skillController.deleteSkill
); // Delete skill
router.post(
	"/:skillId/endorse",
	protect,
	authorize(["employee", "manager"]),
	skillController.addEndorsement
); // Endorse a skill

module.exports = router;
