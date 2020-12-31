const { Client, MessageEmbed } = require('discord.js');
const fs = require('fs');
const { BOT_TOKEN, prefix, channelId } = require('./config');

const client = new Client();

client.once('ready', () => {
    console.log(`${client.user.username} is finally!`);
});

client.on('message', async(message) => {
    if(!message.guild || message.author.bot) return undefined;
    if(!message.content.startsWith(prefix)) return undefined;

    let args = message.content.slice(prefix.length).split(' ');
    if(args[0].toLocaleLowerCase() === "event") {
        if(!args[1]) return message.reply({
            embed: {
                title: "Please Specifiy a time!",
                color: "RED"
            }
        });

        if(args[1].toLocaleLowerCase().endsWith('s') || args[1].toLocaleLowerCase().endsWith('m') || args[1].toLocaleLowerCase().endsWith('h')) {
            
            if(!args [2]) return message.reply({
                embed: {
                    title: "Please specify the event!",
                    color: "RED"
                }
            });

            let event = args.slice(2).join(' ');

            const embed1 = new MessageEmbed()
                
                .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setTitle("New Event has been hosted")
                .addField("Event Information", [
                    `**Time**: ${args[1]}`,
                    `**Event**: ${event}`
                ])

            let channel = message.guild.channels.cache.get(channelId);

            channel.send(embed1)

        } else {
            return message.reply({
                embed: {
                    title: "Please specifiy a initiative",
                    description: "example: !event 10m Monster Event"
                }
            })
        }
    }
});

client.login("Nzk0MzIxOTQwOTk5MTc2MjA0.X-5H9A.wSftT3wkp_JkVRMntLm0vBTEqEo");
