const mongoose = require("mongoose");

const safetyTrainingSchema = new mongoose.Schema({
	employee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	trainingName: { type: String, required: true }, // e.g., "Fire Safety", "Emergency Evacuation"
	dateCompleted: { type: Date, required: true },
	expirationDate: { type: Date }, // Optional, for certifications that require renewal
});

module.exports = mongoose.model("SafetyTraining", safetyTrainingSchema);
