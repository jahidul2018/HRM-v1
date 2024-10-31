const axios = require("axios");
const payrollApiBase = process.env.PAYROLL_API_BASE;
const payrollApiKey = process.env.PAYROLL_API_KEY;

exports.processPayroll = async (employeeId, payrollData) => {
	try {
		const response = await axios.post(`${payrollApiBase}/payroll`, {
			employeeId,
			...payrollData,
			apiKey: payrollApiKey,
		});
		return response.data;
	} catch (error) {
		console.error("Error processing payroll:", error);
	}
};
