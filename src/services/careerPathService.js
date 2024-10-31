const CareerPath = require("../models/careerPathModel");

exports.createCareerPath = async (careerPathData) => {
	const careerPath = new CareerPath(careerPathData);
	return await careerPath.save();
};

exports.getCareerPaths = async () => {
	return await CareerPath.find();
};

exports.getCareerPathByRole = async (role) => {
	return await CareerPath.findOne({ role });
};

exports.updateCareerPath = async (careerPathId, updateData) => {
	return await CareerPath.findByIdAndUpdate(careerPathId, updateData, {
		new: true,
	});
};
