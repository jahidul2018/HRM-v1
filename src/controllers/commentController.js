// commentController.js
const commentService = require("../services/commentService");
exports.createComment = asyncHandler(async (req, res) => {
	const comment = await commentService.createComment({
		...req.body,
		author: req.user._id,
		postId: req.params.postId,
	});
	res.status(201).json(comment);
});
exports.getComments = asyncHandler(async (req, res) => {
	const comments = await commentService.getCommentsByPost(req.params.postId);
	res.status(200).json(comments);
});
