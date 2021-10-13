const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const { token, prefix } = require("./config.json");
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (message.content === prefix + "activity") {
        message.channel.send('**Activities:** youtube, youtubedev, poker, betrayal, fishing, chess, chessdev, lettertile, wordsnack, doodle crew');
    };
    if (message.content === prefix + "activity youtube") {
        if (message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === prefix + "activity youtubedev") {
        if (message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtubeDev').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === prefix + "activity poker") {
        if (message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === prefix + "activity betrayal") {
        if (message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === prefix + "activity fishing") {
        if (message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === prefix + "activity chess") {
        if (message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'chess').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === prefix + "activity chessdev") {
        if (message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'chessDev').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === prefix + "activity lettertile") {
        if (message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'lettertile').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === prefix + "activity wordsnack") {
        if (message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'wordsnack').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === prefix + "activity doodlecrew") {
        if (message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'doodlecrew').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
});

client.login(token);