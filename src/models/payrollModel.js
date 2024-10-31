const mongoose = require("mongoose");

const payrollSchema = new mongoose.Schema({
	employee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	baseSalary: {
		type: Number,
		required: true,
	},
	month: {
		type: String,
		required: true,
	},
	year: {
		type: Number,
		required: true,
	},
	overtimeHours: {
		type: Number,
		default: 0,
	},
	extraDays: {
		type: Number,
		default: 0,
	},
	overtimeRatePerHour: {
		type: Number,
		required: true,
	},
	extraDayRate: {
		type: Number,
		required: true,
	},
	finalSalary: {
		type: Number,
		required: true,
	},
	status: {
		type: String,
		enum: ["Pending", "Paid"],
		default: "Pending",
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Payroll", payrollSchema);
