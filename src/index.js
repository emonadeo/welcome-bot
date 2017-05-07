const http = require('http');
const fs = require('fs');
const discord = require('discord.js');

const bot = new discord.Client();
const dir = 'servers.json';

http.createServer(function(req, res) {
	//Live Action
}).listen(process.env.PORT || 3000);

//Setup
bot.on('guildCreate', function(guild) {
	var servers;
	//Create File if it doesn't exist
	fs.open(dir, 'w', function(err, file) {
		if (err) throw err;
	});

	fs.readFile(dir, 'utf-8', function(err, file) {
		if (err) throw err;
		if(file != '') {
			servers = JSON.parse(file);
		} else {
			servers = [];
		}
		//Add guild to JSON
		servers.push({
			id: guild.id,
			msg: 'Welcome {user}',
			role: undefined
		});
		//Save JSON to file
		fs.writeFile(dir, JSON.stringify(servers), function(err) {
			if (err) throw err;
		});
	});
});

bot.on('guildDelete', function(guild) {
	var servers;
	fs.readFile(dir, 'utf-8', function(err, file) {
		if (err) throw err;
		if(file != '') {
			servers = JSON.parse(file);
		} else {
			servers = [];
		}
		//Remove guild from JSON
		for(i = 0; i < servers.length; i++) {
			if(servers[i].id == guild.id) {
				servers.splice(i, 1);
			}
		}
		//Save JSON to file
		fs.writeFile(dir, JSON.stringify(servers), function(err) {
			if (err) throw err;
		});
	});
});

bot.login('MzEwODc0MzMwMzI4MjAzMjY1.C_ETyg.LKTPz-GG1s3sStXJbwDagAE27nc');
