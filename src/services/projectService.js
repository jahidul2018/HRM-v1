const Project = require("../models/projectModel");

exports.createProject = async (projectData) => {
	const project = new Project(projectData);
	return await project.save();
};

exports.getAllProjects = async () => {
	return await Project.find().populate("assignedEmployees", "name");
};

exports.getProjectById = async (projectId) => {
	return await Project.findById(projectId).populate(
		"assignedEmployees",
		"name"
	);
};

exports.updateProject = async (projectId, updateData) => {
	return await Project.findByIdAndUpdate(projectId, updateData, { new: true });
};

exports.deleteProject = async (projectId) => {
	return await Project.findByIdAndDelete(projectId);
};
