const reportPayrollSummaryService = require("../../services/reports/reportPayrollSummaryService");
const {
	generatePDF,
	generateCSV,
	generateExcel,
} = require("../../utils/reportUtils");
const asyncHandler = require("express-async-handler");

exports.getPayrollSummaryReport = asyncHandler(async (req, res) => {
	const { month, year } = req.query;
	const reportData = await reportPayrollSummaryService.getPayrollSummaryData(
		month,
		year
	);
	const format = req.query.format || "json";

	if (format === "pdf") {
		const pdfBuffer = await generatePDF(reportData, "Payroll Summary Report");
		res.setHeader("Content-Type", "application/pdf");
		res.send(pdfBuffer);
	} else if (format === "csv") {
		const csvData = await generateCSV(reportData);
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Payroll_Summary_Report.csv"
		);
		res.setHeader("Content-Type", "text/csv");
		res.send(csvData);
	} else if (format === "excel") {
		const excelBuffer = await generateExcel(
			reportData,
			"Payroll Summary Report"
		);
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Payroll_Summary_Report.xlsx"
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
