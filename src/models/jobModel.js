const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
	title: { type: String, required: true },
	department: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Department",
		required: true,
	},
	description: { type: String, required: true },
	requirements: [String],
	location: { type: String },
	employmentType: {
		type: String,
		enum: ["Full-time", "Part-time", "Contract"],
		required: true,
	},
	status: { type: String, enum: ["Open", "Closed"], default: "Open" },
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", jobSchema);
