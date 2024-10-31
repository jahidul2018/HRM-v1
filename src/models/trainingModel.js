const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String },
	resources: [{ name: String, url: String }],
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Training", trainingSchema);
