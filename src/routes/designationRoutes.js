const express = require("express");
const router = express.Router();
const designationController = require("../controllers/designationController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["manage_salary"]),
	designationController.createDesignation
);
router.get(
	"/",
	protect,
	authorize(["manage_salary"]),
	designationController.getDesignations
);
router.put(
	"/:designationId",
	protect,
	authorize(["manage_salary"]),
	designationController.updateDesignation
);
router.delete(
	"/:designationId",
	protect,
	authorize(["manage_salary"]),
	designationController.deleteDesignation
);

module.exports = router;
