const mongoose = require("mongoose");

const badgeSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	icon: { type: String }, // URL or path to badge icon
	points: { type: Number, default: 10 }, // Points awarded with this badge
});

module.exports = mongoose.model("Badge", badgeSchema);
