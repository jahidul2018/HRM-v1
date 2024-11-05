const reportDailyAttendanceService = require("../../services/reports/reportDailyAttendanceService");
const {
	generatePDF,
	generateCSV,
	generateExcel,
} = require("../../utils/reportUtils");
const asyncHandler = require("express-async-handler");

exports.getDailyAttendanceReport = asyncHandler(async (req, res) => {
	const { date } = req.query;
	const reportData = await reportDailyAttendanceService.getDailyAttendanceData(
		date
	);
	const format = req.query.format || "json";

	if (format === "pdf") {
		const pdfBuffer = await generatePDF(reportData, "Daily Attendance Report");
		res.setHeader("Content-Type", "application/pdf");
		res.send(pdfBuffer);
	} else if (format === "csv") {
		const csvData = await generateCSV(reportData);
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Daily_Attendance_Report.csv"
		);
		res.setHeader("Content-Type", "text/csv");
		res.send(csvData);
	} else if (format === "excel") {
		const excelBuffer = await generateExcel(
			reportData,
			"Daily Attendance Report"
		);
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Daily_Attendance_Report.xlsx"
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
