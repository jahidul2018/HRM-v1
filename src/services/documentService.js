const Document = require("../models/documentModel");

exports.createDocument = async (documentData) => {
	const document = new Document(documentData);
	return await document.save();
};

exports.getAllDocuments = async (userRole) => {
	return await Document.find({ accessLevel: { $lte: userRole } });
};

exports.getDocumentById = async (documentId, userRole) => {
	const document = await Document.findById(documentId);
	if (document && document.accessLevel <= userRole) {
		return document;
	}
	throw new Error("Unauthorized access to document");
};

exports.updateDocument = async (documentId, updateData) => {
	return await Document.findByIdAndUpdate(documentId, updateData, {
		new: true,
	});
};

exports.deleteDocument = async (documentId) => {
	return await Document.findByIdAndDelete(documentId);
};
