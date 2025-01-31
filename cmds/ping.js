module.exports = {
    name: "ping",
    description: "測試機器人回應速度",
    async execute(message, args) {
        await message.reply(`🏓 Pong! 延遲：${Date.now() - message.createdTimestamp}ms`);
    },
};