const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
	employee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	certificationName: { type: String, required: true },
	issueDate: { type: Date, required: true },
	expiryDate: { type: Date },
	verified: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Certification", certificationSchema);
