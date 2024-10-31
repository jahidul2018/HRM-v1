const mongoose = require("mongoose");

const careerPathSchema = new mongoose.Schema({
	role: { type: String, required: true },
	levels: [
		{
			title: { type: String, required: true },
			requiredSkills: [String], // Skills required for promotion to this level
			qualifications: [String], // Specific qualifications needed
			minExperience: { type: Number, required: true }, // Minimum years of experience
			description: { type: String },
		},
	],
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CareerPath", careerPathSchema);
