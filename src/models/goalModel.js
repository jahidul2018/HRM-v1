// const mongoose = require("mongoose");

// const goalSchema = new mongoose.Schema({
// 	employee: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: "Employee",
// 		required: true,
// 	},
// 	title: {
// 		type: String,
// 		required: true,
// 	},
// 	description: {
// 		type: String,
// 	},
// 	startDate: {
// 		type: Date,
// 		required: true,
// 	},
// 	endDate: {
// 		type: Date,
// 		required: true,
// 	},
// 	status: {
// 		type: String,
// 		enum: ["Not Started", "In Progress", "Completed"],
// 		default: "Not Started",
// 	},
// 	createdAt: {
// 		type: Date,
// 		default: Date.now,
// 	},
// });

// module.exports = mongoose.model("Goal", goalSchema);

const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
	employee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	description: { type: String, required: true },
	startDate: { type: Date, default: Date.now },
	targetDate: { type: Date, required: true },
	status: {
		type: String,
		enum: ["Not Started", "In Progress", "Completed"],
		default: "Not Started",
	},
	progress: { type: Number, min: 0, max: 100, default: 0 }, // Progress as a percentage
});

module.exports = mongoose.model("Goal", goalSchema);
