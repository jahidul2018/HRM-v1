const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String },
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Department", departmentSchema);
