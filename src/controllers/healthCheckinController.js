const healthCheckinService = require("../services/healthCheckinService");
const asyncHandler = require("express-async-handler");

exports.submitHealthCheckin = asyncHandler(async (req, res) => {
	const checkinData = { ...req.body, employee: req.user._id };
	const checkin = await healthCheckinService.submitHealthCheckin(checkinData);
	res.status(201).json(checkin);
});

exports.getHealthCheckinsByEmployee = asyncHandler(async (req, res) => {
	const checkins = await healthCheckinService.getHealthCheckinsByEmployee(
		req.user._id
	);
	res.status(200).json(checkins);
});
