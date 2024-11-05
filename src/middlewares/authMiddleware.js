const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const roles = require("../config/roles");

exports.protect = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = await User.findById(decoded.id);
		next();
	} catch (error) {
		res.status(401).json({ message: "Not authorized" });
	}
};

// // Authorization middleware based on permissions
exports.authorize = (requiredPermissions) => (req, res, next) => {
	const { role } = req.user;
	const userPermissions = roles[role]?.can || [];

	// // Check if any of the required permissions match the user's permissions
	const hasPermission = requiredPermissions.some((permission) =>
		userPermissions.includes(permission)
	);

	if (!hasPermission) {
		return res.status(403).json({
			message: "Forbidden: You don't have permission to perform this action",
		});
	}

	next();
};

exports.authorizeWithRole = (allowedRoles) => {
	return (req, res, next) => {
		if (!allowedRoles.includes(req.user.role)) {
			return res.status(403).json({ message: "Access denied" });
		}
		if (
			req.user.permissions &&
			!req.user.permissions.some((p) => allowedRoles.includes(p))
		) {
			return res.status(403).json({ message: "Insufficient permissions" });
		}
		next();
	};
};

exports.authorize = (allowedRoles) => {
	return (req, res, next) => {
		if (!allowedRoles.includes(req.user.role)) {
			return res.status(403).json({ message: "Access denied" });
		}
		if (
			req.user.permissions &&
			!req.user.permissions.some((p) => allowedRoles.includes(p))
		) {
			return res.status(403).json({ message: "Insufficient permissions" });
		}
		next();
	};
};
