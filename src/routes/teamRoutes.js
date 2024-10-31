const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["admin", "manager"]),
	teamController.createTeam
);
router.get("/:departmentId", protect, teamController.getTeamsByDepartment);

module.exports = router;
