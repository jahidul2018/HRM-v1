const mongoose = require("mongoose");

const designationSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	baseSalary: { type: Number, required: true },
	providentFundRate: { type: Number, default: 0 }, // Percentage of base salary
	bonusRate: { type: Number, default: 0 }, // Percentage of base salary
	overtimeRatePerHour: { type: Number, default: 0 }, // Rate per overtime hour
	festiveBonus: { type: Number, default: 0 }, // Additional bonus (fixed amount)
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Designation", designationSchema);
