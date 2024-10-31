const fs = require("fs");
const path = require("path");

const loadTranslations = (language) => {
	const languageFilePath = path.resolve(
		__dirname,
		`../locales/${language}.json`
	);
	if (fs.existsSync(languageFilePath)) {
		return JSON.parse(fs.readFileSync(languageFilePath, "utf8"));
	} else {
		throw new Error(`Language file not found for language: ${language}`);
	}
};

exports.getTranslations = (language) => {
	try {
		return loadTranslations(language);
	} catch (error) {
		console.error(error);
		return loadTranslations("en"); // Fallback to English
	}
};
