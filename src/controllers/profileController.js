const profileService = require("../services/profileService");
const asyncHandler = require("express-async-handler");

exports.getProfile = asyncHandler(async (req, res) => {
	const profile = await profileService.getEmployeeProfile(req.user._id);
	res.status(200).json(profile);
});

// with localization 
exports.getProfile = asyncHandler(async (req, res) => {
    const profileData = await profileService.getProfile(req.user._id);
    res.status(200).json({
        message: req.t.welcome_message,
        profile: profileData,
        lastLogin: formatUtils.formatDate(profileData.lastLogin, req.language),
    });
});


exports.updateProfile = asyncHandler(async (req, res) => {
	const updatedProfile = await profileService.updateEmployeeProfile(
		req.user._id,
		req.body
	);
	res.status(200).json(updatedProfile);
});
