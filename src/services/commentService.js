const Comment = require("../models/commentModel");

exports.createComment = async (commentData) => {
	const comment = new Comment(commentData);
	return await comment.save();
};

exports.getCommentsByPost = async (postId) => {
	const comments = await Comment.find({ postId }).populate(
		"author",
		"username"
	);

	const nestComments = (comments, parentId = null) =>
		comments
			.filter((comment) => String(comment.parentId) === String(parentId))
			.map((comment) => ({
				...comment.toObject(),
				replies: nestComments(comments, comment._id),
			}));

	return nestComments(comments);
};
