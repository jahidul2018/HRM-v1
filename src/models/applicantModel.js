const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    resume: { type: String }, // URL to resume file
    status: {
        type: String,
        enum: ["Applied", "Screened", "Interviewed", "Offered", "Hired", "Rejected"],
        default: "Applied",
    },
    interviewDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Applicant", applicantSchema);
