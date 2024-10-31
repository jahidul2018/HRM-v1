const express = require("express");
const router = express.Router();
const noticeController = require("../controllers/noticeController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["admin", "hr"]),
	noticeController.createNotice
); // Create notice
router.get("/", protect, noticeController.getNotices); // View notices
router.delete(
	"/:noticeId",
	protect,
	authorize(["admin", "hr"]),
	noticeController.deleteNotice
); // Delete notice

module.exports = router;
