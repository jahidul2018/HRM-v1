const versioningService = require("../services/versioningService");
const asyncHandler = require("express-async-handler");

exports.getDocumentVersions = asyncHandler(async (req, res) => {
    const versions = await versioningService.getDocumentVersions(req.params.articleId);
    res.status(200).json(versions);
});
