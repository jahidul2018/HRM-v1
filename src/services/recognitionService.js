const Recognition = require("../models/recognitionModel");

exports.createRecognition = async (recognitionData) => {
    const recognition = new Recognition(recognitionData);
    return await recognition.save();
};

exports.getRecognitionsByEmployee = async (employeeId) => {
    return await Recognition.find({ receiver: employeeId }).populate("giver", "name").populate("badge");
};
