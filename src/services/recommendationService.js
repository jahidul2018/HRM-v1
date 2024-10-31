const TrainingProgram = require("../models/trainingProgramModel");
const EmployeeTrainingProfile = require("../models/employeeTrainingProfileModel");

exports.generateRecommendations = async (employeeId) => {
	const profile = await EmployeeTrainingProfile.findOne({
		employee: employeeId,
	}).populate("completedTrainings.program");
	const existingSkills = new Set(profile.skills);

	// Exclude completed programs from recommendations
	const completedProgramIds = profile.completedTrainings.map(
		(training) => training.program._id
	);

	// Select training programs that cover skills the employee lacks
	const recommendedPrograms = await TrainingProgram.find({
		_id: { $nin: completedProgramIds },
		skillsCovered: { $nin: Array.from(existingSkills) },
	});

	// Update the employee's profile with new recommendations
	profile.trainingRecommendations = recommendedPrograms.map((program) => ({
		program: program._id,
		recommendedOn: new Date(),
	}));
	await profile.save();

	return recommendedPrograms;
};
