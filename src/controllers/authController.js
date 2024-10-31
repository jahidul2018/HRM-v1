// authController.js
const authService = require("../services/authService");
const asyncHandler = require("express-async-handler");

exports.register = asyncHandler(async (req, res) => {
	const user = await authService.register(req.body);
	res.status(201).json({ user });
});

exports.login = asyncHandler(async (req, res) => {
	const { user, token } = await authService.login(req.body);
	res.status(200).json({ user, token });
});
