const mongoose = require("mongoose");

const wellnessProgramSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("WellnessProgram", wellnessProgramSchema);
