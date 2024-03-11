module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("🎯 𝑆𝑎𝑙𝑢𝑡 , 𝑚𝑜𝑖 𝑐' 𝑒𝑠𝑡 𝒁𝒆𝒎𝒍𝒚𝒂  𝑚𝑎𝑖𝑠 𝑎𝑝𝑝𝑒𝑙𝑙𝑒 𝑚𝑜𝑖 𝐙𝐞𝐧 😘 𝒖𝒕𝒊𝒍𝒊𝒔𝒆 𝒍𝒂 𝒄𝒎𝒅: $𝒛𝒆𝒏𝒈𝒄 𝒑𝒐𝒖𝒓 𝒆̂𝒕𝒓𝒆 𝒕𝒆́𝒍𝒆́𝒑𝒐𝒓𝒕𝒆𝒓 𝒅𝒂𝒏𝒔 𝒖𝒏 𝑵𝒆𝒘 𝒖𝒏𝒊𝒗𝒆𝒓𝒔(⁠✷⁠‿⁠✷⁠) ");
}
};
