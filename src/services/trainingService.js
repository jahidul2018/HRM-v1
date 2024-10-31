const Training = require("../models/trainingModel");

exports.createTraining = async (trainingData) => {
	const training = new Training(trainingData);
	return await training.save();
};

exports.getAllTrainings = async () => {
	return await Training.find().populate("assignedTo", "name");
};

exports.getTrainingById = async (trainingId) => {
	return await Training.findById(trainingId).populate("assignedTo", "name");
};

exports.updateTraining = async (trainingId, updateData) => {
	return await Training.findByIdAndUpdate(trainingId, updateData, {
		new: true,
	});
};

exports.deleteTraining = async (trainingId) => {
	return await Training.findByIdAndDelete(trainingId);
};

// new //

const TrainingProgram = require("../models/trainingProgramModel");

exports.createTrainingProgram = async (programData) => {
	const program = new TrainingProgram(programData);
	return await program.save();
};

exports.getTrainingProgramsByCategory = async (category) => {
	return await TrainingProgram.find({ category });
};

exports.getAllTrainingPrograms = async () => {
	return await TrainingProgram.find();
};
