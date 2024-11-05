const reportAbsenteeismService = require("../../services/reports/reportAbsenteeismService");
const {
	generatePDF,
	generateCSV,
	generateExcel,
} = require("../../utils/reportUtils");
const asyncHandler = require("express-async-handler");

exports.getAbsenteeismReport = asyncHandler(async (req, res) => {
	const { startDate, endDate } = req.query;
	const reportData = await reportAbsenteeismService.getAbsenteeismData(
		startDate,
		endDate
	);
	const format = req.query.format || "json";

	if (format === "pdf") {
		const pdfBuffer = await generatePDF(reportData, "Absenteeism Report");
		res.setHeader("Content-Type", "application/pdf");
		res.send(pdfBuffer);
	} else if (format === "csv") {
		const csvData = await generateCSV(reportData);
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Absenteeism_Report.csv"
		);
		res.setHeader("Content-Type", "text/csv");
		res.send(csvData);
	} else if (format === "excel") {
		const excelBuffer = await generateExcel(reportData, "Absenteeism Report");
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Absenteeism_Report.xlsx"
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
