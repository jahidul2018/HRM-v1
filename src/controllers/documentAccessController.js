const documentAccessService = require("../services/documentAccessService");
const asyncHandler = require("express-async-handler");

exports.getDocuments = asyncHandler(async (req, res) => {
    const documents = await documentAccessService.getEmployeeDocuments(req.user._id);
    res.status(200).json(documents);
});
