const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
	employee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	reason: {
		type: String,
		required: true,
	},
	startDate: {
		type: Date,
		required: true,
	},
	endDate: {
		type: Date,
		required: true,
	},
	leaveType: {
		type: String,
		enum: [
			"Sick Leave",
			"Vacation",
			"Unpaid Leave",
			"Maternity Leave",
			"Paternity Leave",
		],
		required: true,
	},
	status: {
		type: String,
		enum: ["Pending", "Approved", "Rejected"],
		default: "Pending",
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Leave", leaveSchema);
