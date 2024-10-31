const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const speakeasy = require("speakeasy");
const qrcode = require("qrcode");

exports.register = async (userData) => {
	const user = new User(userData);
	return await user.save();
};

exports.login = async ({ username, password }) => {
	const user = await User.findOne({ username });
	if (!user || !(await bcrypt.compare(password, user.password))) {
		throw new Error("Invalid username or password");
	}
	const token = jwt.sign(
		{ id: user._id, role: user.role },
		process.env.JWT_SECRET,
		{ expiresIn: "1h" }
	);
	return { user, token };
};

// npm install speakeasy qrcode

exports.generate2FASecret = async () => {
	const secret = speakeasy.generateSecret({ name: "HRMSystem" });
	const qrCodeUrl = await qrcode.toDataURL(secret.otpauth_url);
	return { secret: secret.base32, qrCodeUrl };
};

exports.verify2FA = (token, userSecret) => {
	return speakeasy.totp.verify({
		secret: userSecret,
		encoding: "base32",
		token,
	});
};

exports.loginWith2FA = asyncHandler(async (req, res) => {
	const { username, password, token } = req.body;
	const user = await User.findOne({ username });

	if (user && (await bcrypt.compare(password, user.password))) {
		const isTokenValid = authService.verify2FA(token, user.twoFASecret);
		if (isTokenValid) {
			res.status(200).json({ message: "Login successful with 2FA" });
		} else {
			res.status(401).json({ message: "Invalid 2FA token" });
		}
	} else {
		res.status(401).json({ message: "Invalid username or password" });
	}
});
