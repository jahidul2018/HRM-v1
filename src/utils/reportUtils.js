const PDFDocument = require("pdfkit");
const { parse } = require("json2csv");
const ExcelJS = require("exceljs");

exports.generatePDF = async (data, title) => {
	const doc = new PDFDocument();
	const buffers = [];

	doc.on("data", buffers.push.bind(buffers));
	doc.on("end", () => buffers);

	doc.fontSize(20).text(title, { align: "center" });
	doc.moveDown();

	data.forEach((item) => {
		doc.fontSize(12).text(JSON.stringify(item), { align: "left" });
		doc.moveDown();
	});

	doc.end();
	return Buffer.concat(buffers);
};

exports.generateCSV = async (data) => {
	return parse(data);
};

exports.generateExcel = async (data, sheetName) => {
	const workbook = new ExcelJS.Workbook();
	const sheet = workbook.addWorksheet(sheetName);

	if (data.length > 0) {
		sheet.columns = Object.keys(data[0]).map((key) => ({ header: key, key }));
		data.forEach((item) => sheet.addRow(item));
	}

	const buffer = await workbook.xlsx.writeBuffer();
	return buffer;
};
