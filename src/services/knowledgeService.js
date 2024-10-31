const KnowledgeArticle = require("../models/knowledgeArticleModel");
const versioningService = require("./versioningService");

exports.createArticle = async (articleData) => {
	const article = new KnowledgeArticle(articleData);
	return await article.save();
};

exports.updateArticle = async (articleId, updateData) => {
	const article = await KnowledgeArticle.findById(articleId);
	if (!article) throw new Error("Article not found");

	// Archive the current version before updating
	await versioningService.archiveCurrentVersion(article);

	// Update article with new data and increment version
	article.set(updateData);
	article.version += 1;
	article.updatedAt = Date.now();
	return await article.save();
};

exports.getArticlesByCategory = async (category) => {
	return await KnowledgeArticle.find({ category, isActive: true });
};

exports.searchArticles = async (searchQuery) => {
	return await KnowledgeArticle.find({ $text: { $search: searchQuery } });
};
