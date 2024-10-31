const projectService = require("../services/projectService");
const asyncHandler = require("express-async-handler");

exports.createProject = asyncHandler(async (req, res) => {
	const project = await projectService.createProject(req.body);
	res.status(201).json(project);
});

exports.getAllProjects = asyncHandler(async (req, res) => {
	const projects = await projectService.getAllProjects();
	res.status(200).json(projects);
});

exports.getProjectById = asyncHandler(async (req, res) => {
	const project = await projectService.getProjectById(req.params.projectId);
	res.status(200).json(project);
});

exports.updateProject = asyncHandler(async (req, res) => {
	const updatedProject = await projectService.updateProject(
		req.params.projectId,
		req.body
	);
	res.status(200).json(updatedProject);
});

exports.deleteProject = asyncHandler(async (req, res) => {
	await projectService.deleteProject(req.params.projectId);
	res.status(200).json({ message: "Project deleted successfully" });
});
