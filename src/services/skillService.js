const Skill = require("../models/skillModel");

exports.addSkill = async (skillData) => {
	const skill = new Skill(skillData);
	return await skill.save();
};

exports.getSkillsByEmployee = async (employeeId) => {
	return await Skill.find({ employee: employeeId });
};

exports.updateSkill = async (skillId, updateData) => {
	return await Skill.findByIdAndUpdate(skillId, updateData, { new: true });
};

exports.deleteSkill = async (skillId) => {
	return await Skill.findByIdAndDelete(skillId);
};

exports.addEndorsement = async (skillId, endorserId) => {
	const skill = await Skill.findById(skillId);
	if (!skill) throw new Error("Skill not found");

	skill.endorsements.push({ endorser: endorserId });
	return await skill.save();
};
