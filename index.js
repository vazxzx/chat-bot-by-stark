const Discord = require("discord.js");
const client = new Discord.Client();
const chat = require("./chat");
let rup = [];

client.on("ready", () => {
  console.log("Moon Walker Is Ready");
});

client.on("message", message => {
  let channel = "736515762944213012";
  if (!message.author.bot && message.channel.id == channel) {
    let ree = message.content || "Hi";
    message.channel.startTyping();
    chat(ree, rup).then(reply => {
      message.channel.send(`${reply}`);
      message.channel.stopTyping();

      rup.push(ree);
      rup.push(reply);
    });
  }
});
client.login("NzAwNjk0MzI0NjY4NzkyODQ0.XpmqcQ.Lc9PNG_liAgbTNJ462UO0q3Sppo");
