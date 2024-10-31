// npm install @slack/web-api // Setup Slack Integration

const { WebClient } = require("@slack/web-api");
const slackToken = process.env.SLACK_TOKEN; // Store your Slack Bot Token in environment variables
const slackClient = new WebClient(slackToken);

exports.sendSlackMessage = async (channelId, message) => {
	try {
		await slackClient.chat.postMessage({
			channel: channelId,
			text: message,
		});
	} catch (error) {
		console.error("Error sending Slack message:", error);
	}
};

exports.sendNotification = async (channel, message) => {
	try {
		await slackClient.chat.postMessage({ channel, text: message });
	} catch (error) {
		console.error("Slack notification error:", error);
	}
};
