module.exports = {
    config: {
        name: "hi",
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
    if (event.body && event.body.toLowerCase() == "hi") return message.reply("👋𝒉𝒆𝒍𝒍𝒐 𝑩𝒓𝒐, 𝒉𝒐𝒘 𝒄𝒂𝒏 𝒊 𝒉𝒆𝒍𝒑 𝒚𝒐𝒖? 𝑻𝒚𝒑𝒆 $𝒛𝒆𝒏𝒈𝒄 🤩 𝒕𝒐 𝒋𝒐𝒊𝒏 𝒎𝒚 𝒔𝒖𝒑𝒑𝒐𝒓𝒕𝒈𝒄 🥰");
}
};
