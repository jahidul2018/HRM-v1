const express = require("express");
const router = express.Router();
const performanceReviewController = require("../controllers/performanceReviewController");
const { protect, authorize } = require("../middlewares/authMiddleware");

// new

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

router.post(
	"/review",
	protect,
	authorize(["manager", "hr"]),
	performanceReviewController.createReview
); // Create review
router.get(
	"/employee/:employeeId",
	protect,
	authorize(["manager", "hr"]),
	performanceReviewController.getReviewsByEmployee
); // Get reviews for an employee
router.get(
	"/:reviewId",
	protect,
	authorize(["manager", "hr"]),
	performanceReviewController.getReviewById
); // Get a single review by ID
router.put(
	"/:reviewId",
	protect,
	authorize(["manager", "hr"]),
	performanceReviewController.updateReview
); // Update a review
router.delete(
	"/:reviewId",
	protect,
	authorize(["manager", "hr"]),
	performanceReviewController.deleteReview
); // Delete a review

module.exports = router;
