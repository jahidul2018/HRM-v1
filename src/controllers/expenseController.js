const expenseService = require("../services/expenseService");
const asyncHandler = require("express-async-handler");

exports.submitExpense = asyncHandler(async (req, res) => {
	const expenseData = { ...req.body, employee: req.user._id };
	const expense = await expenseService.submitExpense(expenseData);
	res.status(201).json(expense);
});

exports.getExpensesByEmployee = asyncHandler(async (req, res) => {
	const expenses = await expenseService.getExpensesByEmployee(req.user._id);
	res.status(200).json(expenses);
});

exports.updateExpenseStatus = asyncHandler(async (req, res) => {
	const updatedExpense = await expenseService.updateExpenseStatus(
		req.params.expenseId,
		req.body.status
	);
	res.status(200).json(updatedExpense);
});
