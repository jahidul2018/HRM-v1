const mongoose = require("mongoose");

const learningPathSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String },
	modules: [
		{
			trainingModule: { type: mongoose.Schema.Types.ObjectId, ref: "Training" },
			order: { type: Number, required: true },
		},
	],
	assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("LearningPath", learningPathSchema);
