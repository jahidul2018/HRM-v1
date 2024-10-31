const express = require("express");
const router = express.Router();
const versioningController = require("../controllers/versioningController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.get(
	"/:articleId",
	protect,
	authorize(["hr", "admin"]),
	versioningController.getDocumentVersions
); // Get document versions

module.exports = router;
