const retrieveChannelMembers = async (client) => {
  const result = await client.users.list();
  console.log(result);
};

module.exports = { retrieveChannelMembers };
