const badgeService = require("../services/badgeService");
const asyncHandler = require("express-async-handler");

exports.createBadge = asyncHandler(async (req, res) => {
	const badge = await badgeService.createBadge(req.body);
	res.status(201).json(badge);
});

exports.getAllBadges = asyncHandler(async (req, res) => {
	const badges = await badgeService.getAllBadges();
	res.status(200).json(badges);
});
