const Discord = require('discord.js');
const client = new Discord.Client();
const { token, prefix } = require("./config.json");
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (message.content === prefix + "activity") {
        message.channel.send('**Activities:** youtube, poker, betrayal, fishing, chess');
    };
    if (message.content === prefix + "activity youtube") {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === prefix + "activity poker") {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === prefix + "activity betrayal") {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === prefix + "activity fishing") {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === prefix + "activity chess") {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'chess').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
});

client.login(token);