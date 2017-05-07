const http = require('http');
const records = require('./util/records')
const discord = require('discord.js');

const bot = new discord.Client();
const dir = 'servers.json';

http.createServer(function(req, res) {
	//Live Action
}).listen(process.env.PORT || 3000);

//Setup
bot.on('guildCreate', function(guild) {
	records.add(guild.id);
});

bot.on('guildDelete', function(guild) {
	records.remove(guild.id);
});

bot.login('MzEwODc0MzMwMzI4MjAzMjY1.C_ETyg.LKTPz-GG1s3sStXJbwDagAE27nc');
