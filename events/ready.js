module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log(`✅ 登入成功！機器人名稱：${client.user.tag}`);
    },
};
