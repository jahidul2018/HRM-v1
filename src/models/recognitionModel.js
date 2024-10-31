const mongoose = require("mongoose");

const recognitionSchema = new mongoose.Schema({
    giver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    message: { type: String, required: true },
    badge: { type: mongoose.Schema.Types.ObjectId, ref: "Badge" },
    dateGiven: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Recognition", recognitionSchema);

