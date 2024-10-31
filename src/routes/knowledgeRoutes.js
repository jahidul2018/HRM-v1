const express = require("express");
const router = express.Router();
const knowledgeController = require("../controllers/knowledgeController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	knowledgeController.createArticle
); // Create a knowledge article
router.put(
	"/:articleId",
	protect,
	authorize(["hr", "admin"]),
	knowledgeController.updateArticle
); // Update an article
router.get(
	"/category/:category",
	protect,
	authorize(["employee", "manager", "hr", "admin"]),
	knowledgeController.getArticlesByCategory
); // Get articles by category
router.get(
	"/search",
	protect,
	authorize(["employee", "manager", "hr", "admin"]),
	knowledgeController.searchArticles
); // Search articles

module.exports = router;
