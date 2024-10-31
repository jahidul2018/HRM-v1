const HealthCheckin = require("../models/healthCheckinModel");

exports.submitHealthCheckin = async (checkinData) => {
	const checkin = new HealthCheckin(checkinData);
	return await checkin.save();
};

exports.getHealthCheckinsByEmployee = async (employeeId) => {
	return await HealthCheckin.find({ employee: employeeId }).sort({ date: -1 });
};
