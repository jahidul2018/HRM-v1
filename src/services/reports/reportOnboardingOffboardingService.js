const Onboarding = require("../../models/onboardingModel");
const Offboarding = require("../../models/offboardingModel");

exports.getOnboardingOffboardingData = async (status) => {
	const onboardingData = await Onboarding.find({ status: status || "Pending" })
		.populate("employee", "name department designation")
		.select("employee startDate endDate status tasks");

	const offboardingData = await Offboarding.find({
		status: status || "Pending",
	})
		.populate("employee", "name department designation")
		.select("employee startDate endDate status tasks");

	return { onboardingData, offboardingData };
};
