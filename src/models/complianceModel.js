const mongoose = require("mongoose");

const complianceSchema = new mongoose.Schema({
	employee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	type: { type: String, enum: ["policy", "incident", "audit"], required: true },
	description: { type: String, required: true },
	date: { type: Date, default: Date.now },
	acknowledged: { type: Boolean, default: false }, // For policy acknowledgment
	incidentDetails: {
		incidentType: String,
		severity: { type: String, enum: ["low", "medium", "high"] },
		resolved: { type: Boolean, default: false },
	},
	auditDetails: {
		action: String,
		details: String,
	},
});

module.exports = mongoose.model("Compliance", complianceSchema);
