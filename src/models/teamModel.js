const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	department: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Department",
		required: true,
	},
	members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Team", teamSchema);
