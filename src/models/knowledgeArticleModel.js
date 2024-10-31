const mongoose = require("mongoose");

const knowledgeArticleSchema = new mongoose.Schema({
	title: { type: String, required: true },
	category: { type: String, required: true }, // e.g., "Policy", "Guide", "FAQ"
	tags: [String], // Tags for searchability
	content: { type: String, required: true },
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	version: { type: Number, default: 1 },
	isActive: { type: Boolean, default: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("KnowledgeArticle", knowledgeArticleSchema);
