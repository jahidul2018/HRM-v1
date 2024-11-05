const reportOnboardingOffboardingService = require("../../services/reports/reportOnboardingOffboardingService");
const {
	generatePDF,
	generateCSV,
	generateExcel,
} = require("../../utils/reportUtils");
const asyncHandler = require("express-async-handler");

exports.getOnboardingOffboardingReport = asyncHandler(async (req, res) => {
	const { status } = req.query;
	const reportData =
		await reportOnboardingOffboardingService.getOnboardingOffboardingData(
			status
		);
	const format = req.query.format || "json";

	if (format === "pdf") {
		const pdfBuffer = await generatePDF(
			reportData,
			"Onboarding/Offboarding Report"
		);
		res.setHeader("Content-Type", "application/pdf");
		res.send(pdfBuffer);
	} else if (format === "csv") {
		const csvData = await generateCSV(reportData);
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Onboarding_Offboarding_Report.csv"
		);
		res.setHeader("Content-Type", "text/csv");
		res.send(csvData);
	} else if (format === "excel") {
		const excelBuffer = await generateExcel(
			reportData,
			"Onboarding/Offboarding Report"
		);
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=Onboarding_Offboarding_Report.xlsx"
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
