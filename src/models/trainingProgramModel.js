const mongoose = require("mongoose");

const trainingProgramSchema = new mongoose.Schema({
	title: { type: String, required: true },
	category: { type: String, required: true }, // e.g., "Leadership", "Technical Skills"
	description: { type: String },
	skillsCovered: [String], // Skills taught in this training
	difficultyLevel: {
		type: String,
		enum: ["Beginner", "Intermediate", "Advanced"],
		required: true,
	},
	duration: { type: Number, required: true }, // Duration in hours
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TrainingProgram", trainingProgramSchema);
