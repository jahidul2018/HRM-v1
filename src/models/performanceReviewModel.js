// const mongoose = require("mongoose");

// const performanceReviewSchema = new mongoose.Schema({
// 	employee: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: "Employee",
// 		required: true,
// 	},
// 	reviewer: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: "User",
// 		required: true,
// 	},
// 	reviewDate: {
// 		type: Date,
// 		default: Date.now,
// 	},
// 	rating: {
// 		type: Number,
// 		required: true,
// 		min: 1,
// 		max: 5,
// 	},
// 	feedback: {
// 		type: String,
// 		required: true,
// 	},
// 	goals: [
// 		{
// 			goal: { type: String },
// 			progress: {
// 				type: String,
// 				enum: ["Not Started", "In Progress", "Completed"],
// 				default: "Not Started",
// 			},
// 		},
// 	],
// });

// module.exports = mongoose.model("PerformanceReview", performanceReviewSchema);

const mongoose = require("mongoose");

const performanceReviewSchema = new mongoose.Schema({
	employee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	reviewer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	reviewDate: { type: Date, default: Date.now },
	scores: {
		productivity: { type: Number, min: 1, max: 5, required: true },
		teamwork: { type: Number, min: 1, max: 5, required: true },
		communication: { type: Number, min: 1, max: 5, required: true },
		problemSolving: { type: Number, min: 1, max: 5, required: true },
		leadership: { type: Number, min: 1, max: 5 },
	},
	comments: { type: String },
	overallRating: { type: Number, min: 1, max: 5, required: true },
});

module.exports = mongoose.model("PerformanceReview", performanceReviewSchema);
