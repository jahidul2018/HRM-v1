const reportMonthlyAttendanceService = require("../../services/reports/reportMonthlyAttendanceService");
const {
	generatePDF,
	generateCSV,
	generateExcel,
} = require("../../utils/reportUtils");
const asyncHandler = require("express-async-handler");

exports.getMonthlyAttendanceSummaryReport = asyncHandler(async (req, res) => {
	const { month, year } = req.query;
	const reportData =
		await reportMonthlyAttendanceService.getMonthlyAttendanceSummary(
			month,
			year
		);
	const format = req.query.format || "json";

	if (format === "pdf") {
		const pdfBuffer = await generatePDF(
			reportData,
			"Monthly Attendance Summary Report"
		);
		res.setHeader("Content-Type", "application/pdf");
		res.send(pdfBuffer);
	} else if (format === "csv") {
		const csvData = await generateCSV(reportData);
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Monthly_Attendance_Summary_Report.csv"
		);
		res.setHeader("Content-Type", "text/csv");
		res.send(csvData);
	} else if (format === "excel") {
		const excelBuffer = await generateExcel(
			reportData,
			"Monthly Attendance Summary Report"
		);
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Monthly_Attendance_Summary_Report.xlsx"
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
