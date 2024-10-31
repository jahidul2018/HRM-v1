const Team = require("../models/teamModel");

exports.createTeam = async (teamData) => {
	const team = new Team(teamData);
	return await team.save();
};

exports.getTeamsByDepartment = async (departmentId) => {
	return await Team.find({ department: departmentId }).populate("members");
};
