const reportLeaveSummaryService = require("../../services/reports/reportLeaveSummaryService");
const {
	generatePDF,
	generateCSV,
	generateExcel,
} = require("../../utils/reportUtils");
const asyncHandler = require("express-async-handler");

exports.getLeaveSummaryReport = asyncHandler(async (req, res) => {
	const reportData = await reportLeaveSummaryService.getLeaveSummaryData();
	const format = req.query.format || "json";

	if (format === "pdf") {
		const pdfBuffer = await generatePDF(reportData, "Leave Summary Report");
		res.setHeader("Content-Type", "application/pdf");
		res.send(pdfBuffer);
	} else if (format === "csv") {
		const csvData = await generateCSV(reportData);
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Leave_Summary_Report.csv"
		);
		res.setHeader("Content-Type", "text/csv");
		res.send(csvData);
	} else if (format === "excel") {
		const excelBuffer = await generateExcel(reportData, "Leave Summary Report");
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Leave_Summary_Report.xlsx"
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
