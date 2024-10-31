const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String },
	questions: [
		{
			questionText: { type: String, required: true },
			questionType: {
				type: String,
				enum: ["multiple-choice", "text", "rating"],
				required: true,
			},
			options: [String], // Only used for multiple-choice questions
		},
	],
	isAnonymous: { type: Boolean, default: false }, // Allows anonymous responses
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	createdAt: { type: Date, default: Date.now },
	expirationDate: { type: Date }, // Optional expiration date for the survey
});

module.exports = mongoose.model("Survey", surveySchema);
