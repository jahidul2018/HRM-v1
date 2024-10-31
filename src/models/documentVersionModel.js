const mongoose = require("mongoose");

const documentVersionSchema = new mongoose.Schema({
	article: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "KnowledgeArticle",
		required: true,
	},
	versionNumber: { type: Number, required: true },
	content: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("DocumentVersion", documentVersionSchema);
