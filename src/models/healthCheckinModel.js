const mongoose = require("mongoose");

const healthCheckinSchema = new mongoose.Schema({
	employee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	date: { type: Date, default: Date.now },
	temperature: { type: Number }, // Temperature in Celsius or Fahrenheit
	symptoms: [String], // List of symptoms
	comments: { type: String },
});

module.exports = mongoose.model("HealthCheckin", healthCheckinSchema);
