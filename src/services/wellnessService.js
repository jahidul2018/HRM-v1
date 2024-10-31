const WellnessProgram = require("../models/wellnessProgramModel");
const calendarIntegration = require("../integrations/calendarIntegration");

exports.createWellnessProgram = async (programData) => {
	const program = new WellnessProgram(programData);
	return await program.save();
};

exports.getAllWellnessPrograms = async () => {
	return await WellnessProgram.find().populate("participants", "name");
};

exports.registerParticipant = async (programId, employeeId) => {
	const program = await WellnessProgram.findById(programId);
	if (!program.participants.includes(employeeId)) {
		program.participants.push(employeeId);
		return await program.save();
	}
	return program;
};

exports.scheduleWellnessProgram = async (programData) => {
	const eventDetails = {
		summary: programData.name,
		description: programData.description,
		start: { dateTime: programData.startDate },
		end: { dateTime: programData.endDate },
	};
	await calendarIntegration.createCalendarEvent(eventDetails);
};
