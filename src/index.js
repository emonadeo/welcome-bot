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

bot.on('guildMemberAdd', function(member) {
	var server = records.get(member.guild.id);
	if(server.msg != undefined && server.channel != undefined) {
		var msg = server.msg.replace('{user}', '<@' + member.id + '>');
		member.guild.channels.find("name", server.channel).send(msg);
	}
	if(server.role != undefined) {
		member.addRole(member.guild.roles.find("name", server.role));
	}
});

bot.login('MzEwODc0MzMwMzI4MjAzMjY1.C_ETyg.LKTPz-GG1s3sStXJbwDagAE27nc');
