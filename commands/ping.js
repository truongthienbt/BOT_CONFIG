module.exports = {
    name: 'ping',
    description: "ping and uptime bot",
    execute(client, message, args, Discord) {
            message.channel.send(`Ping: ${client.ws.ping}`)

    }
}