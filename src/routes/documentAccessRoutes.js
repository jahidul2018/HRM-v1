const express = require("express");
const router = express.Router();
const documentAccessController = require("../controllers/documentAccessController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.get(
	"/",
	protect,
	authorize(["employee"]),
	documentAccessController.getDocuments
); // Get documents for employee

module.exports = router;
