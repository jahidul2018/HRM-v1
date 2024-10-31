const express = require("express");
const router = express.Router();
const performanceReviewController = require("../controllers/performanceReviewController");
const { protect, authorize } = require("../middlewares/authMiddleware");

// POST /api/performance-reviews
router.post(
	"/",
	protect,
	authorize(["manager", "hr"]),
	performanceReviewController.createReview
);
// Create review
// GET /api/performance-reviews/employee/:employeeId
router.get(
	"/employee/:employeeId",
	protect,
	authorize(["manager", "hr"]),
	performanceReviewController.getReviewsByEmployee
);

// Get reviews for an employee // GET /api/performance-reviews/:reviewId
router.get(
	"/:reviewId",
	protect,
	authorize(["manager", "hr"]),
	performanceReviewController.getReviewById
);

// Get a single review by ID // PUT /api/performance-reviews/:reviewId
router.put(
	"/:reviewId",
	protect,
	authorize(["manager", "hr"]),
	performanceReviewController.updateReview
);

// Update a review // DELETE /api/performance-reviews/:reviewId
router.delete(
	"/:reviewId",
	protect,
	authorize(["manager", "hr"]),
	performanceReviewController.deleteReview
);

// Delete a review
module.exports = router;

// new

// const express = require("express");
// const router = express.Router();
const performanceReviewController = require("../controllers/performanceReviewController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["manager", "hr"]),
	performanceReviewController.createPerformanceReview
); // Create review
router.get(
	"/employee/:employeeId",
	protect,
	authorize(["manager", "hr", "employee"]),
	performanceReviewController.getReviewsByEmployee
); // Get reviews by employee
router.get(
	"/",
	protect,
	authorize(["hr", "admin"]),
	performanceReviewController.getAllReviews
); // Get all reviews

module.exports = router;
