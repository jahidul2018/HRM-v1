const knowledgeService = require("../services/knowledgeService");
const asyncHandler = require("express-async-handler");

exports.createArticle = asyncHandler(async (req, res) => {
	const article = await knowledgeService.createArticle(req.body);
	res.status(201).json(article);
});

exports.updateArticle = asyncHandler(async (req, res) => {
	const updatedArticle = await knowledgeService.updateArticle(
		req.params.articleId,
		req.body
	);
	res.status(200).json(updatedArticle);
});

exports.getArticlesByCategory = asyncHandler(async (req, res) => {
	const articles = await knowledgeService.getArticlesByCategory(
		req.params.category
	);
	res.status(200).json(articles);
});

exports.searchArticles = asyncHandler(async (req, res) => {
	const results = await knowledgeService.searchArticles(req.query.q);
	res.status(200).json(results);
});
