const timesheetService = require("../services/timesheetService");
const asyncHandler = require("express-async-handler");

exports.logWorkHours = asyncHandler(async (req, res) => {
	const timesheetData = { ...req.body, employee: req.user._id };
	const timesheet = await timesheetService.logWorkHours(timesheetData);
	res.status(201).json(timesheet);
});

exports.getTimesheetsByProject = asyncHandler(async (req, res) => {
	const timesheets = await timesheetService.getTimesheetsByProject(
		req.params.projectId
	);
	res.status(200).json(timesheets);
});

exports.getTimesheetsByEmployee = asyncHandler(async (req, res) => {
	const timesheets = await timesheetService.getTimesheetsByEmployee(
		req.user._id
	);
	res.status(200).json(timesheets);
});
