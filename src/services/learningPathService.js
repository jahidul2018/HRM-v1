const LearningPath = require("../models/learningPathModel");

exports.createLearningPath = async (pathData) => {
	const learningPath = new LearningPath(pathData);
	return await learningPath.save();
};

exports.getAllLearningPaths = async () => {
	return await LearningPath.find().populate("modules.trainingModule", "title");
};

exports.getLearningPathById = async (pathId) => {
	return await LearningPath.findById(pathId).populate(
		"modules.trainingModule",
		"title"
	);
};

exports.updateLearningPath = async (pathId, updateData) => {
	return await LearningPath.findByIdAndUpdate(pathId, updateData, {
		new: true,
	});
};

exports.deleteLearningPath = async (pathId) => {
	return await LearningPath.findByIdAndDelete(pathId);
};
