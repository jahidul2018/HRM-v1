const mongoose = require("mongoose");

const onboardingSchema = new mongoose.Schema({
	employee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	tasks: [
		{
			name: { type: String, required: true },
			description: { type: String },
			isCompleted: { type: Boolean, default: false },
		},
	],
	startDate: { type: Date, required: true },
	endDate: { type: Date },
	status: {
		type: String,
		enum: ["In Progress", "Completed"],
		default: "In Progress",
	},
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Onboarding", onboardingSchema);
