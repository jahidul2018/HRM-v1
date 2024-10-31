const mongoose = require("mongoose");

const pulseSurveySchema = new mongoose.Schema({
	question: { type: String, required: true },
	options: [String], // Multiple-choice options
	responses: [
		{
			employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
			selectedOption: { type: String },
		},
	],
	createdAt: { type: Date, default: Date.now },
	expirationDate: { type: Date, required: true },
});

module.exports = mongoose.model("PulseSurvey", pulseSurveySchema);
