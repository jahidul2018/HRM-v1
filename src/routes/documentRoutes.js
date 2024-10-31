const express = require("express");
const router = express.Router();
const documentController = require("../controllers/documentController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	documentController.createDocument
); // Upload new document
router.get(
	"/",
	protect,
	authorize(["employee", "manager", "hr", "admin"]),
	documentController.getAllDocuments
); // View accessible documents
router.get(
	"/:documentId",
	protect,
	authorize(["employee", "manager", "hr", "admin"]),
	documentController.getDocumentById
); // View a specific document by ID
router.put(
	"/:documentId",
	protect,
	authorize(["hr", "admin"]),
	documentController.updateDocument
); // Update document details
router.delete(
	"/:documentId",
	protect,
	authorize(["admin"]),
	documentController.deleteDocument
); // Delete document

module.exports = router;
