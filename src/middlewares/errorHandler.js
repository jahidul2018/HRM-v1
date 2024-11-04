const logger = require("../utils/logger");

const errorHandler = (err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	logger.error(err.message);
	res.status(statusCode).json({ message: err.message });
};

module.exports = errorHandler;
