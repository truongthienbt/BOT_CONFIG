const config = require("./config.json")
const { Client, Collection } = require("discord.js")

const client = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]})

const prefix = config.prefix

client.commands = new Collection()
client.events = new Collection()

require("./handler/command_handler")(client)
require("./handler/event_handler")(client)

client.login(config.token)