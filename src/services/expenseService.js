const Expense = require("../models/expenseModel");

exports.submitExpense = async (expenseData) => {
	const expense = new Expense(expenseData);
	return await expense.save();
};

exports.getExpensesByEmployee = async (employeeId) => {
	return await Expense.find({ employee: employeeId });
};

exports.updateExpenseStatus = async (expenseId, status) => {
	return await Expense.findByIdAndUpdate(expenseId, { status }, { new: true });
};
