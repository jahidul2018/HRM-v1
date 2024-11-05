const reportEmployeeDirectoryService = require("../../services/reports/reportEmployeeDirectoryService");
const {
	generatePDF,
	generateCSV,
	generateExcel,
} = require("../../utils/reportUtils");
const asyncHandler = require("express-async-handler");

exports.getEmployeeDirectoryReport = asyncHandler(async (req, res) => {
	const reportData =
		await reportEmployeeDirectoryService.getEmployeeDirectoryData();
	const format = req.query.format || "json"; // Default to JSON if no format is specified

	if (format === "pdf") {
		const pdfBuffer = await generatePDF(reportData, "Employee Directory");
		res.setHeader("Content-Type", "application/pdf");
		res.send(pdfBuffer);
	} else if (format === "csv") {
		const csvData = await generateCSV(reportData);
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Employee_Directory_Report.csv"
		);
		res.setHeader("Content-Type", "text/csv");
		res.send(csvData);
	} else if (format === "excel") {
		const excelBuffer = await generateExcel(reportData, "Employee Directory");
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Employee_Directory_Report.xlsx"
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
