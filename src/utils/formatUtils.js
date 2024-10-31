exports.formatDate = (date, locale = "en-US") => {
	return new Intl.DateTimeFormat(locale).format(new Date(date));
};

exports.formatCurrency = (amount, locale = "en-US", currency = "USD") => {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency,
	}).format(amount);
};
