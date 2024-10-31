const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	position: { type: String, required: true },
	// salary: { type: Number, required: true },
	role: {
		type: String,
		enum: ["admin", "hr", "manager", "employee"],
		required: true,
	},
	designation: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Designation",
		required: true,
	},
	department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
	team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
	joinDate: { type: Date, required: true },
	leaveBalance: { type: Number, default: 0 },
	documents: [{ name: String, url: String }],
	familyInfo: [
		{
			name: String,
			relationship: String,
			contact: String,
		},
	],
	emergencyContact: {
		name: String,
		relation: String,
		phone: String,
		address: String,
	},
	safetyProtocols: [{ type: String }], // List of company safety protocols
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Employee", employeeSchema);
