const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema({
	action: { type: String, required: true }, // e.g., "Policy Update", "Role Change"
	details: { type: String },
	performedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
	datePerformed: { type: Date, default: Date.now },
});

module.exports = mongoose.model("AuditLog", auditLogSchema);
