const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
	employee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	skillName: {
		type: String,
		required: true,
	},
	proficiency: {
		type: String,
		enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
		required: true,
	},
	endorsements: [
		{
			endorser: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Skill", skillSchema);
