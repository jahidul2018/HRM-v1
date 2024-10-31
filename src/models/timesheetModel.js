const mongoose = require("mongoose");

const timesheetSchema = new mongoose.Schema({
	employee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	project: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Project",
		required: true,
	},
	date: { type: Date, default: Date.now },
	hoursWorked: { type: Number, required: true }, // Hours worked on this day
	description: { type: String },
});

module.exports = mongoose.model("Timesheet", timesheetSchema);
