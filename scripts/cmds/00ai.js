const axios = require('axios');

const Prefixes = [
  '$zemlya',
  'bot',
  'Zemlya',
  '$ai',
  'zen',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("🎯 𝑆𝑎𝑙𝑢𝑡 , 𝑚𝑜𝑖 𝑐' 𝑒𝑠𝑡 𝒁𝒆𝒎𝒍𝒚𝒂  𝑚𝑎𝑖𝑠 𝑎𝑝𝑝𝑒𝑙𝑙𝑒 𝑚𝑜𝑖 𝐙𝐞𝐧 😘 𝑞𝑢𝑒𝑙 𝑒𝑠𝑡 𝑣𝑜𝑡𝑟𝑒 𝑞𝑢𝑒𝑠𝑡𝑖𝑜𝑛 𝑎𝑢𝑗𝑜𝑢𝑟𝑑'ℎ𝑢𝑖❓");
        return;
      }

await message.reply("⌛|𝒗𝒆𝒊𝒍𝒍𝒆𝒛 𝑷𝒂𝒕𝒊𝒆𝒏𝒕𝒆𝒛 𝒔'𝒊𝒍-𝒗𝒐𝒖𝒔-𝒑𝒍𝒂𝒊𝒕...☺️");

      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply(answer);

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
