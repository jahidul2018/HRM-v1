// npm install googleapis

const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(
	process.env.GOOGLE_CLIENT_ID,
	process.env.GOOGLE_CLIENT_SECRET,
	process.env.GOOGLE_REDIRECT_URL
);
oAuth2Client.setCredentials({
	refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

exports.createCalendarEvent = async (eventDetails) => {
	const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
	try {
		await calendar.events.insert({
			calendarId: "primary",
			resource: eventDetails,
		});
	} catch (error) {
		console.error("Error creating calendar event:", error);
	}
};
