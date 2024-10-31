const noticeService = require("../services/noticeService");
const asyncHandler = require("express-async-handler");

exports.createNotice = asyncHandler(async (req, res) => {
	const noticeData = {
		...req.body,
		author: req.user._id,
	};
	const notice = await noticeService.createNotice(noticeData);
	res.status(201).json(notice);
});

exports.getNotices = asyncHandler(async (req, res) => {
	const notices = await noticeService.getActiveNotices();
	res.status(200).json(notices);
});

exports.deleteNotice = asyncHandler(async (req, res) => {
	await noticeService.deleteNotice(req.params.noticeId);
	res.status(200).json({ message: "Notice deleted successfully" });
});
