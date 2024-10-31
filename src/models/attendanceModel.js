const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
	employee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	date: {
		type: Date,
		required: true,
		default: Date.now,
	},
	checkInTime: {
		type: Date,
		required: true,
	},
	checkOutTime: {
		type: Date,
	},
	status: {
		type: String,
		enum: ["Present", "Absent", "Half Day"],
		default: "Present",
	},
	workingHours: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Attendance", attendanceSchema);
