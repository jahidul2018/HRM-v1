const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	type: {
		type: String,
		enum: ["Event", "Holiday", "General"],
		default: "General",
	},
	url: { type: String },
	expiryDate: { type: Date },
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Notice", noticeSchema);
