const { WebClient, LogLevel } = require("@slack/web-api");
const dotenv = require("dotenv");
const { HelloWorldMessage } = require("./operational-support/messaging-support");
const { retrieveChannelMembers } = require("./services/channel-users-retrieval");
const { sendMessageToChannel } = require("./services/message-distribution-service");

dotenv.config();

const token = process.env.SLACK_BOT_TOKEN;
const conversationId = process.env.CONVERSATION_ID;
const userId = process.env.PERSONAL_ID;

const client = new WebClient(token, {
  logLevel: LogLevel.DEBUG
});

(async () => {
  // await sendMessageToChannel(client, conversationId, HelloWorldMessage);|
  // await sendMessageToChannel(client, userId, HelloWorldMessage);
  // await retrieveChannelMembers(client);
})();
