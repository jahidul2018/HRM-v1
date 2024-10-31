const documentService = require("../services/documentService");
const asyncHandler = require("express-async-handler");

exports.createDocument = asyncHandler(async (req, res) => {
	const documentData = { ...req.body, uploadedBy: req.user._id };
	const document = await documentService.createDocument(documentData);
	res.status(201).json(document);
});

exports.getAllDocuments = asyncHandler(async (req, res) => {
	const documents = await documentService.getAllDocuments(req.user.role);
	res.status(200).json(documents);
});

exports.getDocumentById = asyncHandler(async (req, res) => {
	try {
		const document = await documentService.getDocumentById(
			req.params.documentId,
			req.user.role
		);
		res.status(200).json(document);
	} catch (error) {
		res.status(403).json({ message: error.message });
	}
});

exports.updateDocument = asyncHandler(async (req, res) => {
	const updatedDocument = await documentService.updateDocument(
		req.params.documentId,
		req.body
	);
	res.status(200).json(updatedDocument);
});

exports.deleteDocument = asyncHandler(async (req, res) => {
	await documentService.deleteDocument(req.params.documentId);
	res.status(200).json({ message: "Document deleted successfully" });
});
