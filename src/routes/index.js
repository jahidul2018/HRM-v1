const express = require("express");
const router = express.Router();
const localizationMiddleware = require("../middlewares/localizationMiddleware");

router.use(localizationMiddleware); // Apply localization middleware

// Import and apply other routes here
// e.g., router.use("/profile", profileRoutes);

module.exports = router;
