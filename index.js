const { WebClient } = require("@slack/web-api");
const dotenv = require("dotenv");

dotenv.config();

const token = process.env.SLACK_BOT_TOKEN;

const conversationId = process.env.CONVERSATION_ID;

const web = new WebClient(token);

(async () => {
  const result = await web.chat.postMessage({
    text: "Hello world!",
    channel: conversationId
  });

  console.log(`Successfully send message ${result.ts} in conversation ${conversationId}`);
})();
