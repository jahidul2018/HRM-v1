const teamService = require("../services/teamService");
const asyncHandler = require("express-async-handler");

exports.createTeam = asyncHandler(async (req, res) => {
	const team = await teamService.createTeam(req.body);
	res.status(201).json(team);
});

exports.getTeamsByDepartment = asyncHandler(async (req, res) => {
	const teams = await teamService.getTeamsByDepartment(req.params.departmentId);
	res.status(200).json(teams);
});
