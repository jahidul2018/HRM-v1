const mongoose = require("mongoose");

const successionPlanSchema = new mongoose.Schema({
	position: { type: String, required: true }, // Key position being planned for
	successors: [
		{
			employee: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Employee",
				required: true,
			},
			readinessLevel: {
				type: String,
				enum: ["Ready Now", "1-2 Years", "3+ Years"],
				required: true,
			},
			developmentNeeds: [String], // Areas for further training or development
			notes: { type: String },
		},
	],
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SuccessionPlan", successionPlanSchema);
