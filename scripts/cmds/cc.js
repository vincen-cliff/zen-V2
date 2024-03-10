module.exports = {
    config: {
        name: "cc",
        version: "1.0",
        author: "TK joel",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        if (event.body && event.body.toLowerCase() == "cc") return message.reply("🤩 𝑪𝒐𝒎𝒎𝒆𝒏𝒕 𝒄̧𝒂 𝒗𝒂 ? 😶‍🌫️ 𝒕𝒂𝒑𝒆 $𝒛𝒆𝒏𝒈𝒄 𝒑𝒐𝒖𝒓 𝒓𝒆𝒋𝒐𝒊𝒏𝒅𝒓𝒆 𝒍𝒆 𝒈𝒓𝒐𝒖𝒑𝒆 (⁠◕⁠ᴗ⁠◕⁠✿⁠)");
    }
};
