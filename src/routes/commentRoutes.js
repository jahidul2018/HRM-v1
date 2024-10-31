// commentRoutes.js
const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/:postId", protect, commentController.createComment);
router.get("/:postId", commentController.getComments);

module.exports = router;
