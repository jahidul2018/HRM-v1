const mongoose = require("mongoose");

const leaveRequestSchema = new mongoose.Schema({
	employee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	leaveType: {
		type: String,
		enum: ["Sick", "Vacation", "Personal", "Other"],
		required: true,
	},
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	status: {
		type: String,
		enum: ["Pending", "Approved", "Rejected"],
		default: "Pending",
	},
	reason: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("LeaveRequest", leaveRequestSchema);
