const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	version: { type: Number, default: 1 },
	acknowledgments: [
		{
			employee: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Employee",
				required: true,
			},
			dateAcknowledged: { type: Date, default: Date.now },
		},
	],
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Policy", policySchema);
