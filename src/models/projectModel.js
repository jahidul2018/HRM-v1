const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	budget: { type: Number },
	status: {
		type: String,
		enum: ["Active", "Completed", "On Hold"],
		default: "Active",
	},
	assignedEmployees: [
		{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
	],
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Project", projectSchema);
