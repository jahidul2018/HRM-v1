const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
	reportedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	incidentType: { type: String, required: true }, // e.g., "Injury", "Property Damage"
	description: { type: String, required: true },
	severity: { type: String, enum: ["Low", "Medium", "High"], required: true },
	status: {
		type: String,
		enum: ["Reported", "In Progress", "Resolved"],
		default: "Reported",
	},
	resolutionDetails: { type: String },
	dateReported: { type: Date, default: Date.now },
	dateResolved: { type: Date },
});

module.exports = mongoose.model("Incident", incidentSchema);
