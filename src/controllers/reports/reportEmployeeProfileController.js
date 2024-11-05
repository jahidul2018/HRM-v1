const reportEmployeeProfileService = require("../../services/reports/reportEmployeeProfileService");
const {
	generatePDF,
	generateCSV,
	generateExcel,
} = require("../../utils/reportUtils");
const asyncHandler = require("express-async-handler");

exports.getEmployeeProfileReport = asyncHandler(async (req, res) => {
	const { employeeId } = req.params;
	const reportData = await reportEmployeeProfileService.getEmployeeProfileData(
		employeeId
	);
	const format = req.query.format || "json";

	if (format === "pdf") {
		const pdfBuffer = await generatePDF([reportData], "Employee Profile");
		res.setHeader("Content-Type", "application/pdf");
		res.send(pdfBuffer);
	} else if (format === "csv") {
		const csvData = await generateCSV([reportData]);
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Employee_Profile_Report.csv"
		);
		res.setHeader("Content-Type", "text/csv");
		res.send(csvData);
	} else if (format === "excel") {
		const excelBuffer = await generateExcel([reportData], "Employee Profile");
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Employee_Profile_Report.xlsx"
		);
		res.setHeader(
			"Content-Type",
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
		);
		res.send(excelBuffer);
	} else {
		res.status(200).json({ success: true, data: reportData });
	}
});
