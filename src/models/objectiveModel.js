const mongoose = require("mongoose");

const objectiveSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String },
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	keyResults: [
		{
			keyResult: { type: String, required: true },
			target: { type: Number, required: true },
			achieved: { type: Number, default: 0 },
		},
	],
	owner: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // Owner of the objective
	status: {
		type: String,
		enum: ["Not Started", "In Progress", "Completed"],
		default: "Not Started",
	},
});

module.exports = mongoose.model("Objective", objectiveSchema);
