const localizationConfig = require("../config/localization");
const localizationService = require("../services/localizationService");

module.exports = (req, res, next) => {
	const requestedLanguage =
		req.headers["accept-language"] || localizationConfig.defaultLanguage;

	if (!localizationConfig.supportedLanguages.includes(requestedLanguage)) {
		req.language = localizationConfig.defaultLanguage;
	} else {
		req.language = requestedLanguage;
	}

	req.t = localizationService.getTranslations(req.language);
	next();
};
