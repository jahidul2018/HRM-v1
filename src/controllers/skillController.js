const skillService = require("../services/skillService");
const asyncHandler = require("express-async-handler");

exports.addSkill = asyncHandler(async (req, res) => {
	const skillData = { ...req.body, employee: req.params.employeeId };
	const skill = await skillService.addSkill(skillData);
	res
		.status(201)
		.json({ data: skill, success: true, message: "Skill added successfully" });
});

exports.getSkillsByEmployee = asyncHandler(async (req, res) => {
	const skills = await skillService.getSkillsByEmployee(req.params.employeeId);
	res.status(200).json(skills);
});

exports.updateSkill = asyncHandler(async (req, res) => {
	const updatedSkill = await skillService.updateSkill(
		req.params.skillId,
		req.body
	);
	res.status(200).json(updatedSkill);
});

exports.deleteSkill = asyncHandler(async (req, res) => {
	await skillService.deleteSkill(req.params.skillId);
	res.status(200).json({ message: "Skill deleted successfully" });
});

exports.addEndorsement = asyncHandler(async (req, res) => {
	const endorsedSkill = await skillService.addEndorsement(
		req.params.skillId,
		req.user._id
	);
	res.status(200).json(endorsedSkill);
});
