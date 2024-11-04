// postController.js
const postService = require("../services/postService");
const asyncHandler = require("express-async-handler");
exports.createPost = asyncHandler(async (req, res) => {
	const post = await postService.createPost({
		...req.body,
		author: req.user._id,
	});
	res.status(201).json(post);
});
exports.getPosts = asyncHandler(async (req, res) => {
	const posts = await postService.getPosts();
	res.status(200).json(posts);
});
