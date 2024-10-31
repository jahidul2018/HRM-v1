const mongoose = require("mongoose");

const employeeTrainingProfileSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    completedTrainings: [
        {
            program: { type: mongoose.Schema.Types.ObjectId, ref: "TrainingProgram", required: true },
            completionDate: { type: Date, default: Date.now },
        },
    ],
    skills: [String], // Skills acquired through training or assessment
    trainingRecommendations: [
        {
            program: { type: mongoose.Schema.Types.ObjectId, ref: "TrainingProgram" },
            recommendedOn: { type: Date, default: Date.now },
        },
    ],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("EmployeeTrainingProfile", employeeTrainingProfileSchema);
