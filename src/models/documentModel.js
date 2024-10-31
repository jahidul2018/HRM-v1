const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    fileUrl: { type: String, required: true }, // Link to the document file
    accessLevel: { 
        type: String, 
        enum: ["employee", "manager", "hr", "admin"], 
        default: "employee" 
    }, // Controls who can view this document
    tags: [String], // Tags to categorize the document
    createdAt: { type: Date, default: Date.now },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

module.exports = mongoose.model("Document", documentSchema);

