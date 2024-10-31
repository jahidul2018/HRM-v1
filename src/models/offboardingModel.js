const mongoose = require("mongoose");

const offboardingSchema = new mongoose.Schema({
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
	exitDate: { type: Date, required: true },
	status: {
		type: String,
		enum: ["In Progress", "Completed"],
		default: "In Progress",
	},
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Offboarding", offboardingSchema);
