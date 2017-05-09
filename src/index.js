const http = require('http');
const fs = require('fs');
const express = require('express');
const records = require('./util/records');
const cmd = require('./util/executor');
const discord = require('discord.js');

const bot = new discord.Client();
const dir = 'servers.json';

var app = express();

app.get('/', function(req, res) {
	fs.readFile(__dirname + '/../docs/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});
app.listen(process.env.PORT || 3000);
app.use(express.static('docs'));

//Setup
bot.on('guildCreate', function(guild) {
	records.add(guild.id);
});

bot.on('guildDelete', function(guild) {
	records.remove(guild.id);
});

bot.on('guildMemberAdd', function(member) {
	var server = records.get(member.guild.id);
	if(server.join != undefined && server.channel != undefined) {
		var msg = server.join.replace('{user}', '<@' + member.id + '>');
		member.guild.channels.find("name", server.channel).send(msg);
	}
	if(server.role != undefined) {
		var role = member.guild.roles.find("name", server.role);
		if(role != undefined) {
			member.addRole();
		}
	}
});

bot.on('message', msg => {cmd.on(msg);});

bot.login('MzEwODc0MzMwMzI4MjAzMjY1.C_ETyg.LKTPz-GG1s3sStXJbwDagAE27nc');
