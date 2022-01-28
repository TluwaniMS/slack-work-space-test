const sendMessageToChannel = async (client, channelId, text) => {
  const result = await client.chat.postMessage({
    text: text,
    channel: channelId
  });

  console.log(`Successfully send message ${result.ts} in conversation ${conversationId}`);
};

module.exports = { sendMessageToChannel };
