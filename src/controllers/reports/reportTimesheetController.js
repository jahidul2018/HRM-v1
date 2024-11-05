const reportTimesheetService = require("../../services/reports/reportTimesheetService");
const {
	generatePDF,
	generateCSV,
	generateExcel,
} = require("../../utils/reportUtils");
const asyncHandler = require("express-async-handler");

exports.getTimesheetReport = asyncHandler(async (req, res) => {
	const { employeeId, startDate, endDate } = req.query;
	const reportData = await reportTimesheetService.getTimesheetData(
		employeeId,
		startDate,
		endDate
	);
	const format = req.query.format || "json";

	if (format === "pdf") {
		const pdfBuffer = await generatePDF(reportData, "Timesheet Report");
		res.setHeader("Content-Type", "application/pdf");
		res.send(pdfBuffer);
	} else if (format === "csv") {
		const csvData = await generateCSV(reportData);
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Timesheet_Report.csv"
		);
		res.setHeader("Content-Type", "text/csv");
		res.send(csvData);
	} else if (format === "excel") {
		const excelBuffer = await generateExcel(reportData, "Timesheet Report");
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Timesheet_Report.xlsx"
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
