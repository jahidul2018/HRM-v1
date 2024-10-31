const DocumentVersion = require("../models/documentVersionModel");

exports.archiveCurrentVersion = async (article) => {
	const versionData = {
		article: article._id,
		versionNumber: article.version,
		content: article.content,
	};
	const archivedVersion = new DocumentVersion(versionData);
	return await archivedVersion.save();
};

exports.getDocumentVersions = async (articleId) => {
	return await DocumentVersion.find({ article: articleId }).sort({
		versionNumber: -1,
	});
};
