const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
	survey: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Survey",
		required: true,
	},
	respondent: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	}, // Only filled if survey is not anonymous
	answers: [
		{
			questionId: { type: mongoose.Schema.Types.ObjectId, required: true },
			answerText: String, // For text answers
			selectedOption: String, // For multiple-choice answers
			rating: Number, // For rating answers
		},
	],
	submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Response", responseSchema);
