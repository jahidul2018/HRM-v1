// postRoutes.js
const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/", protect, postController.createPost);
router.get("/", postController.getPosts);

module.exports = router;
