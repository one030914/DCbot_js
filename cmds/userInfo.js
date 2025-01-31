module.exports = {
    name: "userinfo",
    description: "顯示你的用戶資訊",
    async execute(message, args) {
        const user = message.author; // Prefix 指令使用 `message.author`
        await message.reply(`👤 你的名稱：${user.username}\n🆔 你的ID：${user.id}`);
    },
};
